// import express from 'express';
// import { addNewPet, deletePetById, getAllPets, searchPets } from '../controllers/petControllers.js';
// import role_access from '../middlewares/role.js';
// // import role_access from '../middlewares/role.js';
// import multer from 'multer';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { petModel } from '../models/petModel.js';


// const petRouter = express.Router();

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'upload/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + '-' + file.originalname);
//     }
//   });
  

//   // Convert import.meta.url to file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Construct the file path
// const filePath = path.join(__dirname, 'upload');

// // Serve static files from the 'upload' directory
// petRouter.use('/upload', express.static(filePath));
// // const upload = multer({ dest: path.join(__dirname, 'uploads') });
// //  // Construct the file path
// // const filePath = path.join(process.cwd(), 'upload');

// // // Serve static files from the 'upload' directory
// // petRouter.use('/upload', express.static(filePath));

//   const upload = multer({ storage : storage });

// //GET ALL Pets
// petRouter.get('/all', getAllPets);

// //searchPets
// petRouter.get('/type', searchPets)

// //ADD New /pets/sdd
// // petRouter.post('/add',upload.single('photo'), addNewPet)

// petRouter.post('/add', upload.single('photos'), async (req, res) => {
//   const newPet = req.body;
//   if (req.file) {
//     newPet.photos = [path.join('upload' ,req.file.filename)];
//   }
//   try {
//     const pet = await petModel.create(newPet);
//     res.status(201).json(pet);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// //Delete pet by id
// petRouter.delete('/delete/:id',deletePetById)


// export default petRouter;





// //edited

// // import { Router } from "express";
// // import { petModel } from "../models/petsSchema.js";
// // import multer from 'multer';


// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //       cb(null, 'uploads/');
// //     },
// //     filename: (req, file, cb) => {
// //       cb(null, Date.now() + '-' + file.originalname);
// //     }
// //   });
  
// //   app.use(express.static(process.cwd(),'/uploads'))

// //   const upload = multer({ storage });

// // export const pet=Router();

// // pet.get('/pets/:id', async (req, res) => {
// //     const { id } = req.params;
// //     const { search, sortBy } = req.query;
  
// //     const query = { _id: id };
  
// //     if (search) {
// //       query.name = { $regex: search, $options: 'i' };
// //     }
  
// //     try {
// //       let pets;
  
// //       if (sortBy) {
// //         pets = await petModel.find(query).sort({ [sortBy]: 1 }).exec();
// //       } else {
// //         pets = await petModel.find(query).exec();
// //       }
  
// //       if (!pets.length) {
// //         return res.status(404).json({ message: 'No pets found' });
// //       }
  
// //       res.json(pets);
// //     } catch (error) {
// //       res.status(500).json({ message: error.message });
// //     }
// //   });
  
  
 
// // pet.post('/pets/add', upload.single('photo'), async (req, res) => {
// //   const newPet = req.body;
// //   if (req.file) {
// //     newPet.photos = [req.file.filename];
// //   }
// //   try {
// //     const pet = await petModel.create(newPet);
// //     res.status(201).json(pet);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // });
  
// //   pet.put('/pets/update/:id', async (req, res) => {
// //     const { id } = req.params;
// //     const updatedPet = req.body;
// //     try {
// //       const pet = await petModel.findByIdAndUpdate(id, updatedPet, { new: true });
// //       if (!pet) {
// //         return res.status(404).json({ message: 'Pet not found' });
// //       }
// //       res.json(pet);
// //     } catch (error) {
// //       res.status(400).json({ message: error.message });
// //     }
// //   });
  
// //   pet.delete('/pets/delete/:id', async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //       const pet = await petModel.findByIdAndDelete(id);
// //       if (!pet) {
// //         return res.status(404).json({ message: 'Pet not found' });
// //       }
// //       res.json({ message: 'Pet deleted successfully' });
// //     } catch (error) {
// //       res.status(500).json({ message: error.message });
// //     }
// //   });


import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { petModel } from '../models/petModel.js';
import { addNewPet, deletePetById, getAllPets, searchPets } from '../controllers/petControllers.js';

const petRouter = express.Router();

// Convert import.meta.url to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct the file path for the upload directory
const uploadDir = path.join(__dirname, '../upload');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve static files from the 'upload' directory
petRouter.use('/upload', express.static(uploadDir));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// GET ALL Pets
petRouter.get('/all', getAllPets);

// Search Pets
petRouter.get('/type', searchPets);

// ADD New Pet
petRouter.post('/add', upload.single('photo'), async (req, res) => {
  const newPet = req.body;
  if (req.file) {
    newPet.photos = [`/upload/${req.file.filename}`];
  }
  try {
    const pet = await petModel.create(newPet);
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete pet by id
petRouter.delete('/delete/:id', deletePetById);

export default petRouter;
