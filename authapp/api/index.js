import express, { application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Rolerouter from './routes/role.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

dotenv.config();
 

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:4200/',
    //credentials: true
}));
app.use("/api/role", Rolerouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// Middelware is a functions that has access to the requests and responses 
// Responeses Handler Middleware 

app.use((obj, req, res, next) => {
    const statusCode = obj.status || 500;
    const message = obj.message || "Something Went Wrong";

    return res.status(statusCode).json({
        success: [200,201,204].some(a=> a===obj.status) ? true : false ,
        status: statusCode,
        message: message,
        data : obj.data
        
    });
}) 
 






// Database Connection
const connectMongoDB = async ()=> {
    try {
        await mongoose.connect(process.env.M0NGO_URL);
        console.log("Database connection is sucessful");
    }
    catch (error){
        throw error;
    }
}



app.listen(8800, ()=>{
    connectMongoDB();
    console.log("Connected to Backend");
})




/*
app.use('/api/login' , (req, res) =>{

	return res.send("Successfully logged In.......");
})

app.use('/api/register' , (req, res) =>{

	return res.send("Registration is successful!!!");
})

app.use('/' , (req, res) =>{

	return res.send("Authentication Application");
})

*/
