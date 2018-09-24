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
            Customer.update(query,{$set: { name: req.body.name,
                    lastName: req.body.lastname,
                    phoneNumber:req.body.phonenumber,
                    className:req.body.className,
                    companyName:req.body.companyname,
                    balanced:req.body.balanced,
                    training:req.body.training,
                }}).then(result=>{
                if(result){
                    return console.log('result is ok!');
                }
                return console.log('result is not ok!');

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
