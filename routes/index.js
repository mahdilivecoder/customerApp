const express=require('express');
const router=express.Router();

//Home Router
const homeRouter=require('./home');
router.use('/',homeRouter);


module.exports=router;