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
                //name
                var name=req.body.name;
                const is_name=name.trim();
                //lastname
                var lastname=req.body.lastname;
                const is_lastname=lastname.trim();
                //companyname
                var company=req.body.companyname;
                var is_company=company.trim();

                const newCustomer = new Customer({
                    name: is_name,
                    lastName: is_lastname,
                    phoneNumber: req.body.phonenumber,
                    className: req.body.className,
                    companyName: is_company ,
                    balanced: req.body.balanced,
                    training: req.body.training

                })
                //

                let customer = await Customer.findOne({$and: [{name: is_name}, {lastName: is_lastname}]});
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
