const controller=require('./controller');
const Customer=require('./../../models/customer');
const moment=require('moment-jalali');
class homeController extends controller {
    showData(req, res) {
        Customer.find({}).then(customer=>{
            res.render('index',{customer:customer,errors:req.flash('errors'),date:this.date});
        })

    }

    processSearch(req,res){
        var str=req.query.search;
        const query=str.trim();
        Customer.findOne({$or:[{name:{ $regex: '.*' + query + '.*' }},
                {lastName:{ $regex: '.*' + query + '.*' }}]}).then(customer=>{
                    if(customer){
                        res.render('search',{customer:customer,errors:req.flash('errors'),date:this.date});
                    }else{
                        return this.back(req,res);
                    }
        })

    }
    //moment js date func
    date(time){
        return moment(time);
    }

}
module.exports=new homeController();
