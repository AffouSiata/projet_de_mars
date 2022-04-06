const express = require("express");
const router =express.Router();


router.get('/',(req,res)=>{
    res.render('home')
    
});
router.get('/teacher',(req,res)=>{
    res.render('teacher')
    
});
router.get('/connexion',(req,res)=>{
    res.render('connexion')
    
});
router.get('/cours',(req,res)=>{
    res.render('cours')
    
});
router.get('/about',(req,res)=>{
    res.render('about')
    
});


module.exports=router


