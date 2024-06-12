import express from 'express';
import { deleteUser, getAllUser, userLogin, userRegister } from '../controllers/userController.js';

const userRouter = express.Router();

//getAllUser list role admin access
userRouter.get('/', getAllUser);

//register adding user to database post req
userRouter.post('/register', userRegister); 

//login
userRouter.post('/login', userLogin);

//if logged in as admin then only give access to delete users
userRouter.delete('/:id' , deleteUser);


export default userRouter;