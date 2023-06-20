const mongoose = require("mongoose")
const User = require('../modules/index')
const Link=require('../modules/index')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })



exports.login = async (req, res) => {
try {
const email = req.body.email
const userData = await User.findOne(email)
if (userData) {
if (userData.password !== req.body.password) {
res.send("please enter correct password")
}
else if (userData.role === "admin") {
res.send("you are not admin,please send request to admin for admin role ")
}
res.send("login succesfully")
}
res.send("please enter correct mail id")
}
catch { e => e }

}
exports.userList = async (req, res) => {
try {

const userData = await User.find({ role: "user" })
data = []
for (let i in userData) {
if (i.status == "pending") {
data.push(i)
}
}
return data, 200
}
catch { e => e }

}

exports.StatusSchane = async (req, res) => {
try {
const email = req.body.email
const status = req.body.status
const updateUser = await User.findOneAndUpdate({ email: email }, { "$set": { "status": status, "role": "admin" } })
if (updateUser) {
res.send("user upgraded as admin")
}

} catch { e => e }


}


exports.SocialMediaLink=async(req,res)=>{
try{

const link=Link.find()
if(link){
res.send(link)
}

}catch{e=>e}

}

exports.UpdateSocialMediaLink=async(req,res)=>{
try{
const email = req.body.email
const userData = await User.findOne(email)
if (userData) {
if (userData.password !== req.body.password) {
res.send("please enter correct password")
}
else if (userData.role === "admin") {
res.send("you are not admin,please send request to admin for admin role ")
}
const link=Link.findOneAndUpdate()
if(link){
res.send(link)
}

}

}catch{e=>e}

}


exports.UploadFile=async(req,res)=>{
try{
const email = req.body.email
const userData = await User.findOne(email)
if (userData) {
if (userData.password !== req.body.password) {
res.send("please enter correct password")
}
else if (userData.role === "admin") {
res.send("you are not admin,please send request to admin for admin role ")
}


}

}

catch{e=>e}
}


exports.UserDataSubmit=async (req,res,next)=>{
try{

const userData=req.data
const data= await User.create({userData})
if(data){
res.send("data submitted succesfully")
}
req.data=data
next()
}catch{e=>e}
}

exports.mail=(req,res)=>{
data=req.data

var transporter = nodemailer.createTransport({
host: 'smtp.gmail.com',
port:465,
auth: {
user: 'royrahulrk8@gmail.com',
pass: 'yourpassword'
}
});

var mailOptions = {
from: 'royrahulrk8@gmail.com',
to: data.email,
subject: 'Connecting!',
text: 'Thank You, visiting'
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
console.log(error);
} else {
console.log('Email sent: ' + info.response);
}
});
}


exports.downloadPdf=async(req,res)=>{
try{
const data=await User.find()
data=[]
if(data){


}
}catch{e=>e}

}