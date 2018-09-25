const controller=require('./controller');
const Customer=require('./../../models/customer');

class editCustomerController extends controller{
        showEditForm(req,res){
            Customer.findById({_id:req.params.id}).then(result=>{
                if(result){
                   res.render('editcustomer',{title:'ویرایش اطلاعات مشتری',result:result,errors:req.flash('errors')});
                }
            })
                .catch(err=>res.redirect('/'));
        }
        processEditForm(req,res){
            const query={_id:req.params.id}

            var name=req.body.name;
            const is_name=name.trim();
            //lastname
            var lastname=req.body.lastname;
            const is_lastname=lastname.trim();
            //companyname
            var company=req.body.companyname;
            var is_company=company.trim();
            Customer.update(query,{$set: {
                    name: is_name,
                    lastName: is_lastname,
                    phoneNumber:req.body.phonenumber,
                    className:req.body.className,
                    companyName:is_company,
                    balanced:req.body.balanced,
                    training:req.body.training,
                }}).then(result=>{
                if(result){
                  return res.json({message:'ویرایش با موفقیت انجام شد.'});
                }
                return res.json({message:'ویرایش انجام نشد.'});

            })
        }

    deleteCustomer(req,res) {
        const query = {_id: req.params.id}
        Customer.remove(query).then(() => {
            return this.back(req,res);
        })
    }

}

module.exports=new editCustomerController();
