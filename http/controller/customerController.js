const controller=require('./controller');
const {validationResult}=require('express-validator/check');
const Customer=require('./../../models/customer');
class customerController extends controller{
        index(req,res){
            res.render('addcustomer',{title:'ثبت مشتری',errors:req.flash('errors')});
        }

        async addCustomerProcess(req,res) {
            let result = await this.getVlidateData(req, res);
            if (!result) {
                const newCustomer = new Customer({
                    name: req.body.name,
                    lastName: req.body.lastname,
                    phoneNumber: req.body.phonenumber,
                    className: req.body.className,
                    companyName: req.body.companyname,
                    balanced: req.body.balanced,
                    training: req.body.training

                })
                //

                let customer = await Customer.findOne({$and: [{name: req.body.name}, {lastName: req.body.lastname}]});
                if (customer) {
                  res.json({message:'چنین کاربری از قبل در این سیستم ثبت نام کرده است.'});
                }
                else {
                    await newCustomer.save();
                    res.json({message:'ثبت نام با موفقیت انجام شد.'});
                }

            }
        }
        async getVlidateData(req){
            const result=validationResult(req);
            if(!result.isEmpty()){
                const errors=result.array();
                let message=[];
                errors.filter(err=>message.push(err.msg));
                req.flash('errors',message);
            }
        }
}

module.exports=new customerController();