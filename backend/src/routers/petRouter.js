import express from 'express';
import { addNewPet, deletePetById, getAllPets, searchPets } from '../controllers/petControllers.js';
import role_access from '../middlewares/role.js';

// import role_access from '../middlewares/role.js';

const petRouter = express.Router();

//GET ALL Pets
petRouter.get('/all', getAllPets);

//searchPets
petRouter.get('/type', searchPets)

//ADD New /pets/sdd
petRouter.post('/add', addNewPet)

//Delete pet by id
petRouter.delete('/delete/:id',deletePetById)


export default petRouter;