const express = require("express")
const app= express()
const mongoose =require("mongoose")
const firstRouter= require("./src/router/index")


app.listen("3000",()=>{
console.log("app is on 3000")
})
mongoose.connect("mongodb://localhost:27017",()=>{
console.log("db connected succesfully")
})


// mongoose.set
app.use(express.json())
app.use(firstRouter)



