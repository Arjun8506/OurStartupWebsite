import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import Contact from "./contact.model.js"
import path from "path"

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected To DataBase");
    } catch (error) {
        console.log(error.message);
        console.log(error);
        return
    }
}

const __dirname = path.resolve()

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Hello From Backend!!!!!")
})

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body
        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "All fields are required"
            })
        }
        const newContact = new Contact({
            name: name,
            email: email,
            message: message
        })
        await newContact.save()
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Message Sended Successfully"
        })
    } catch (error) {
        res.status(error.statusCode).json({
            success: false,
            statusCode: error.statusCode,
            message: error.message
        })
    }
})

app.get("/api/allmessages", async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 })
        res.status(200).json({
            success: true,
            statusCode: 200,
            messages: messages
        })
    } catch (error) {
        res.status(error.statusCode).json({
            success: false,
            statusCode: error.statusCode,
            message: error.message
        }) 
    }
})

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

app.listen(port, () => {
    connectToDB()
    console.log(`Server is running on port ${port}`);
})