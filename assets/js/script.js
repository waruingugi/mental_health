$(function () {
    count = 0;
    wordsArray = ['Depression', 'Anxiety', 'Alcoholism', 'Trauma'];

    setInterval(function () {
        count++;
        $('#word').fadeOut(600, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(600);
        });
    }, 3500);
});