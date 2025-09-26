import express from 'express';
import {registerUser,loginUser,adminLogin} from '../controller/userController.js';


const userRouter = express.Router();

userRouter.post('/signup',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/adminauth',adminLogin);

export default userRouter;