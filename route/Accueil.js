const express = require("express");
const router =express.Router();


router.get('/',(req,res)=>{
    res.render('home')
    
});
router.get('/teacher',(req,res)=>{
    res.render('teacher')
    
});


module.exports=router


