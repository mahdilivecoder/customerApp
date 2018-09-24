$(document).ready(function () {
    $('input[type=submit]').on('click',function (e) {
        //name validate
        var name=$('#name');
        var is_name=$.trim(name.val().replace(/\s+/g,' '));
        if(!is_name){
            e.preventDefault();
           $('small')[1].append('فیلد نام نمی تواند خالی بماند.');

           setTimeout(function () {
               $('.name_error').empty();
           },4000);
        }
        //last name validate
        var lastname=$('#lastname');
        var is_lastname=$.trim(lastname.val().replace(/\s+/g,' '));
        if(!is_lastname){
            e.preventDefault();
            $('small')[2].append('فیلد نام خانوادگی نمی تواند خالی بماند.');
            setTimeout(function () {
                $('.lastname_error').empty();
            },4000);
        }
        //phone number validate whit regx
        var phonenumber_input=$('#phonenumber');
        var phone_re=/09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}/;
        var is_phone_number=phone_re.test(phonenumber_input.val());
        if(!is_phone_number){
            e.preventDefault();
            $('small')[3].append('فیلد شماره تلفن نمی تواند خالی باشد و فرمت شماره تلفن باید صحیح باشد.');
            setTimeout(function () {
                $('.phone_error').empty();
            },4000);
        }
        //company name validate
        var company=$('#companyname');
        var is_company=$.trim(company.val().replace(/\s+/g,' '));
        if(!is_company){
            e.preventDefault();
            $('small')[4].append('فیلد نام شرکت نمیتواند خالی بماند');
            setTimeout(function () {
                $('.compnay_error').empty();
            },4000);
        }

    })

})