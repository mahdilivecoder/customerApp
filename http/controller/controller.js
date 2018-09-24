const autoBind=require('auto-bind');

module.exports=class contorller{
    constructor(){
        autoBind(this);
    }

    back(req,res){
        return res.redirect(req.header('Referer') || '/');
    }
}
