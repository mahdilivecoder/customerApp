const express = require('express');
const router = express.Router();

//home router controller
const home=require('./../http/controller/homeController');
router.get('/',home.showData);
//search route
router.get('/search?:search',home.processSearch);


//add customer validator and routes file
const addCustomer=require('./../http/controller/customerController');
const addCustomerValidator=require('./../http/validator/addCustomerValidator');
//addCustomer router controller
router.get('/addcustomer',addCustomer.index);
router.post('/addcustomer',addCustomerValidator.handle(),addCustomer.addCustomerProcess);



//edit customer validator and routes file
const editCustomer=require('./../http/controller/editCustomerController');
//edit customer
router.get('/editcustomer/:id',editCustomer.showEditForm);
router.post('/editcustomer/edit/:id',editCustomer.processEditForm);
//DELETE customer
router.get('/deletecustomer/:id',editCustomer.deleteCustomer);

module.exports=router;