import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import users from "./routes/userRoute.js"
import nodemailer from "nodemailer"
import 'dotenv/config'
const app = express()
const PORT = 3000
const mongoDB = process.env.MONGO_URI
app.use(cors({origin: ["http://localhost:5173"]}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS,
    }
})
mongoose
.connect(mongoDB)
.then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
    console.log("Server running");})
})
.catch((error) => console.error(error))
app.use('/api/users',users)