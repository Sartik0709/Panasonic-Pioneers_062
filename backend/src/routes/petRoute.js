import { Router } from "express";
import { petModel } from "../models/petsSchema.js";
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { auth } from "../middlewares/auth.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

export const pet = Router();

pet.get('/pets/all', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const pets = await petModel.find().skip(skip).limit(limit);
    const total = await petModel.countDocuments();

    res.status(200).json({ pets, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


pet.get('/pets/:id', async (req, res) => {
  const { id } = req.params;
  const { search, sortBy } = req.query;

  const query = { _id: id };

  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }

  try {
    let pets;

    if (sortBy) {
      pets = await petModel.find(query).sort({ [sortBy]: 1 }).exec();
    } else {
      pets = await petModel.find(query).exec();
    }

    if (!pets.length) {
      return res.status(404).json({ message: 'No pets found' });
    }

    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





pet.post('/pets/add', upload.single('photos'),auth(['Shelter','Customer','Admin','Adopter']), async (req, res) => {

  const newPet = req.body;
  if (req.file) {
    const filePath = path.posix.join('uploads', req.file.filename);
    newPet.photos = [filePath.replace(/\\/g, '/')];
    newPet.userId = req.user.id;
    console.log(newPet.photos[0]);
  }
  try {
    const pet = await petModel.create(newPet);
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

pet.put('/pets/update/:id', async (req, res) => {
  const { id } = req.params;
  const updatedPet = req.body;
  try {
    const pet = await petModel.findByIdAndUpdate(id, updatedPet, { new: true });
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

pet.delete('/pets/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await petModel.findByIdAndDelete(id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
