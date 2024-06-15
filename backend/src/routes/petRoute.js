import { Router } from "express";
import { petModel } from "../models/petsSchema.js";
import multer from 'multer';
import express from 'express';
import path from 'path'


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
const upload = multer({ storage });

export const pet=Router();

// pet.use(express.static(process.cwd(),'/upload'))

pet.use('/uploads', express.static('uploads'));

//--------------------------------------------------------//

//get all pets
pet.get('/pets/all', async(req, res) => {
  try {
    const pets = await petModel.find();
    res.status(200).json({pets:pets});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//get pet by id
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
  
  
 //add new pet
pet.post('/pets/add', upload.single('photos'), async (req, res) => {
  const {type,userId,name,breed,age,gender,description,healthStatus,ownerName,ownerContact,ownerCity,photos} = req.body;
  const id = req.user;
  if (req.file) {
    const filePath = path.posix.join('uploads', req.file.filename);
    newPet.photos = [filePath.replace(/\\/g, '/')];
    console.log(newPet.photos[0]);
  }
  try {
    const pet = await petModel.create({type,userId:id,name,breed,age,gender,description,healthStatus,ownerName,ownerContact,ownerCity,photos});
    res.status(201).json({pet:pet});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
  
//pet update by id
  pet.patch('/pets/update/:id', async (req, res) => {
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
  

  //delete
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

  //search pet
  // pet.get('/query',async (req, res) => {
  //   const {type, breed, age, size, gender } = req.query;
  
  //   let query = {};
  //   if(type) query.type = type;
  //   if (breed) query.breed = breed;
  //   if (age) query.age = age;
  //   if (size) query.size = size;
  //   if (gender) query.gender = gender;
  
  //   try{
  //     const pets = await petModel.find(query);
  //     res.status(200).json({pets:pets});
  //   } 
  //   catch(err){
  //     console.error(err.message);
  //     res.status(500).send('Server error');
  //   }
  // });