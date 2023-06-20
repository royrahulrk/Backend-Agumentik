const mongoose= require("mongoose")

const userSchema=mongoose.Schema({
email:{
type:email,
required:true
},
userName:{
type:String,
required:true
},
name:{
type:String,
required:true
},
Phone:{
type:String,
required:true
},
role:{
type:String,
default:"user"
},
status:{
type:String,
default:"pending"
}

})


const LinkSchema=mongoose.Schema({
faceBookLink:{
type:String
},
instaLink:{
type:string
},
LinkidinLink:{
type:String
}
})

module.exports = new mongoose.model('User',userSchema)
module.exports = new mongoose.model('Link',LinkSchema)