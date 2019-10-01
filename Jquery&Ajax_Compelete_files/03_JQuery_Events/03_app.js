// Click Event
$('#red-btn').click(function() {
    $(this).removeClass('btn-danger').addClass('btn-primary').text('Register');
});

// DBL Click
$('#blue-btn').dblclick(function() {
    $(this).removeClass('btn-primary').addClass('btn-danger').text('Login');
});

// Toggle
$('#danger-btn').click(function() {
    let btnText = $(this).text();
    if(btnText === 'login'){
        $(this).removeClass('btn-danger').addClass('btn-primary').text('register');
    }
    else{
        $(this).removeClass('btn-primary').addClass('btn-danger').text('login');
    }
});

// Change Event on Select Box
$('#tech-select').change(function() {
    $('#tech-option').text($(this).val().toUpperCase());
});

// Change Event on Check Box
$('#check-box').change(function() {
    let passwordBox = $('#password-box');
    let theAttribute = passwordBox.attr('type');
    if(theAttribute === 'password'){
        passwordBox.attr('type','text');
    }
    else{
        passwordBox.attr('type','password');
    }
});
