// SMS App
$('#text-area').keyup(function() {
    $('#span-1').text(100 - $(this).val().length);
});

// Likes App
let likesCount = 0;
let dislikesCount = 0;
let total = 0;
$('#likes-btn').click(function() {
    likesCount++;
    total++;
    $('#likes').text(likesCount);
    $('#total').text(total);
});
$('#dislikes-btn').click(function() {
    dislikesCount++;
    total++;
    $('#dislikes').text(dislikesCount);
    $('#total').text(total);
});

// Hobbies Selection App
$('#eating-check').change(function() {
    let card = $('#eating-card');
    (card.hasClass('d-none')) ? card.removeClass('d-none') : card.addClass('d-none');
});

$('#coding-check').change(function() {
    let card = $('#coding-card');
    (card.hasClass('d-none')) ? card.removeClass('d-none') : card.addClass('d-none');
});

$('#sleeping-check').change(function() {
    let card = $('#sleeping-card');
    (card.hasClass('d-none')) ? card.removeClass('d-none') : card.addClass('d-none');
});