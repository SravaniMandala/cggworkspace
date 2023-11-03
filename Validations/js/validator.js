// alert('test')

function validate(){
    let f=false
    let name=$('.name-field').val()
    // console.log(name)
    if(name==''||name==undefined||name==' '){

        $('.name-field-msg').html('Name is required!!').addClass('text-danger')
    }
    else{
        $('.name-field-msg').html('ok!!').removeClass('text-danger').addClass('text-success')
        f=true
    }

    // email validation

    let email=$('.email-field').val()
    let exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email==''||email==undefined){
        $('.email-field-msg').html('Email is required!!').addClass('text-danger')
        f=false
    }
    else if(exp.test(email)==false){
        $('.email-field-msg').html('invalid Email').addClass('text-danger')
        f=false
    }
    else{
        $('.email-field-msg').html('ok!!').removeClass('text-danger').addClass('text-success')
        f=true
    }

    //password validation
    let password=$('.password-field').val()
    let exp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(password==''||password==undefined){
        $('.password-field-msg').html('Password is required!!').addClass('text-danger')
        f=false
    }
    else if(exp1.test(password)==false){
        $('.password-field-msg').html('Password should contain atleast one uppercase should be upto 6-20char and should contain special character').addClass('text-danger')
        f=false
    }
    else{
        $('.password-field-msg').html('ok!!').removeClass('text-danger').addClass('text-success')
        f=true
    }

    //phone number validation
    let phone=$('.phone-field').val()
    if(phone==''||phone==undefined){
        $('.phone-field-msg').html('Phone Number is required!!').addClass('text-danger')
        f=false
    }
    else if(phone.length!=10){
        $('.phone-field-msg').html('Invalid Number!!').addClass('text-danger')
        f=false
        
    }
    else{
        $('.phone-field-msg').html('ok!!').removeClass('text-danger').addClass('text-success')
        if(f==false){
            f=false
        }
        else{
            f=true
        }
        //f=(f==false)false:true
    }
    console.log(f)
    // f=false
    return f
    
}