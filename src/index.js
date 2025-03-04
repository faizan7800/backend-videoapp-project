import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is connected at ${PORT}`);
    })
})
.catch((err)=>{
    console.log("Database connection failed !!!", err);
})

