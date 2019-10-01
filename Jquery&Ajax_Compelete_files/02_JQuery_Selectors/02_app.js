// Tag Selector / Id Selector / Class Selector
$('.lead').click(function() {
    $(this).css({
        backgroundColor : 'limegreen',
        padding : '10px',
        color : 'white',
        boxShadow: '0 0 10px black',
        border : '5px solid white'
    });
});

// Attribute Selector
let inputFiled = $('input[type="text"]');
inputFiled.focus(function() {
    $(this).css({
        backgroundColor: 'black',
        color: 'white'
    });
});

inputFiled.blur(function() {
    $(this).css({
        backgroundColor: 'white',
        color: 'black'
    });
});