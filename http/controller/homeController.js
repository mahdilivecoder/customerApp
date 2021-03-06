const controller=require('./controller');
const Customer=require('./../../models/customer');
const moment=require('moment-jalali');
class homeController extends controller {
    showData(req, res) {
        Customer.find({}).then(customer=>{
            res.render('index',{title:"مشتریان",customer:customer,errors:req.flash('errors'),date:this.date});
        })

    }

    processSearch(req,res){
        var str=req.query.search;
        const query=str.trim();
        Customer.find({$or:[{name:{ $regex: '.*' + query + '.*' }},
                {lastName:{ $regex: '.*' + query + '.*' }}]}).then(customer=>{
                    if(customer.length>0){
                        res.render('search',{title:'جستجوی مشتری',customer:customer,errors:req.flash('errors'),date:this.date});
                    }else{
                       res.json('متاسفیم هیچ نتیجه ای پیدا نشد.');
                    }
        })

    }
    //moment js date func
    date(time){
        return moment(time);
    }

}
module.exports=new homeController();
