// External Jquery
$('#red-btn').click(function() {
    let buttonText = $(this).text();
    (buttonText === 'HIDE') ? $(this).text('SHOW') : $(this).text('HIDE') ;
    $('#red-card').slideToggle(500);
});