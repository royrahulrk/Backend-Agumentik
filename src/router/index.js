const express= require('express')
const router= express.Router()
const firstController = require("../controller/index")




router.post("/login",firstController.login)
router.get('/userList',firstController.userList)
router.patch('/StatusSchane',firstController.StatusSchane)
router.get('/SocialMediaLink',firstController.SocialMediaLink)
router.patch('/UpdateSocialMediaLink',firstController.UpdateSocialMediaLink)
router.post('/dataUpload',firstController.UserDataSubmit,firstController.mail)



module.exports=router