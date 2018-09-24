const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const customerSchema=new Schema({
   name:{type:String,required:true},
   lastName:{type:String,required:true},
   className:{type:String,required:true},
   phoneNumber:{type:Number,required:true,index:true},
   companyName:{type:String},
   balanced:{type:Boolean,default:false},
   training:{type:Boolean,default:false},
},{timestamps:true});

module.exports=Customer=mongoose.model('customer',customerSchema);