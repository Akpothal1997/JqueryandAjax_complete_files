// Hide + Show
$('#blue-card-header-1').click(function() {
    let h3Tag = $('#blue-card-header-1 h3');
    let theText = h3Tag.text();
    if(theText === 'HIDE'){
        $('#blue-card-body-1').hide(500);
        h3Tag.text('SHOW')
    }
    else{
        $('#blue-card-body-1').show(500);
        h3Tag.text('HIDE')
    }
});

// Toggle()
$('#blue-card-header-2').click(function() {
    let h3Tag = $('#blue-card-header-2 h3');
    let theText = h3Tag.text();
    $('#blue-card-body-2').slideToggle(500);
    if(theText === 'HIDE'){
        h3Tag.text('SHOW')
    }
    else{
        h3Tag.text('HIDE')
    }
});


