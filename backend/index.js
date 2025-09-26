import userRouter from './routes/userRoutes.js';
import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import { connect } from 'mongoose';
import connectDB from './config/mongodb.js';
import dotenv from "dotenv";
import cors from "cors";
import referralRouter from './routes/referralRoutes.js';
dotenv.config();
// const express = require('express');
const app = express();
const port = 4000;
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// middlewares
app.use(express.json());
app.use(cors());


// api endpoints "user"
app.use('/api/auth',userRouter);

// api endpoints "referral"
app.use('/api/referral',referralRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});