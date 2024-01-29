const express= require("express");
const mongoose = require("mongoose")

const routes= require("./routes/ToDoRoute")
const cors = require("cors")

require("dotenv").config()

const app = express()
const Port = process.env.Port || 5000;


app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected to mongodb"))
.catch(()=>console.log("not connected to mongodb"))

app.use(routes)


app.listen(Port,()=>{
    console.log(`Port is running at ${Port}`);
})