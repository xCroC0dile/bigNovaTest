import express from 'express';
import {registerUser,loginUser,adminLogin, getUser} from '../controller/userController.js';
import authUser from '../middlewares/authMiddleware.js';


const userRouter = express.Router();

userRouter.post('/signup',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/adminauth',adminLogin);
userRouter.get('/get',authUser,getUser);

export default userRouter;