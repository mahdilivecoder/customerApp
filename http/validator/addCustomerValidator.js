const validate=require('./validate');
const {check}=require('express-validator/check');

class addCustomerValidator extends validate{
    handle(){
        return[
            check('name').isString().withMessage('فیلد نام باید از حروف تشکیل شده باشد.'),
            check('lastname').isString().withMessage('فیلد نام خوانوادگی باید از حروف تشکیل شده باشد.'),
            check('balanced').not().isEmpty().withMessage('لطفاٌ وضعیت پرداخت خود را مشخص کنید.'),
            check('training').not().isEmpty().withMessage('لطفاٌ وضعیت دوره کارآموزی را مشخص کنید.!')
        ]
    }

}

module.exports=new addCustomerValidator();