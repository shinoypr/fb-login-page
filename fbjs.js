$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            emailaddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8
            },
            day:{
                required:true,
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:ture
            }

        }
    })
})