$.validator.setDefaults( {
    submitHandler: function () {
        $('#success-modal').modal('show');
    }
});

$('#register-form').validate({
    rules : {
        firstName : {
            required : true,
            minlength: 5
        },
        lastName : {
            required : true,
            minlength: 5
        },
        userName : {
            required : true,
            minlength: 5
        },
        email : {
            required : true,
            email: true
        },
        password : {
            required : true,
            minlength: 5
        },
        c_password : {
            required : true,
            minlength: 5,
            equalTo: "#password"
        },
        terms : {
            required : true
        }
    },
    messages : {
        firstName : {
            required : 'Please Enter First Name',
            minlength: 'Please Enter at least 5 letters for First Name'
        },
        lastName : {
            required : 'Please Enter Last Name',
            minlength: 'Please Enter at least 5 letters for Last Name'
        },
        userName : {
            required : 'Please Enter User Name',
            minlength: 'Please Enter at least 5 letters for User Name'
        },
        email : {
            required : 'Please Enter an email',
            email: 'Please enter a Proper Email'
        },
        password : {
            required : 'Please Enter a Password',
            minlength: 'Please Enter at least 5 letters for Password'
        },
        c_password : {
            required : 'Please Enter a Confirm Password',
            minlength: 'Please Enter at least 5 letters for Confirm Password',
            equalTo: "Both the Passwords are not Matched"
        },
        terms : {
            required : 'Please Accept the Terms & Conditions'
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
});