// JavaScript Approach
let inputField = document.querySelector('#input-field-1');
let msgElement = document.querySelector('#msg-1');
inputField.addEventListener('keyup',function() {
    let textEntered = inputField.value;
    msgElement.innerText = textEntered;
});

// JQuery Approach
$('#input-field-2').keyup(function() {
    $('#msg-2').text($(this).val());
});
