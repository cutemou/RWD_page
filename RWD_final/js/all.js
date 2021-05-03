// $(document).ready(function () {
//     $('.menushow').click(function (e) { 
//         e.preventDefault();
//         $(this).parents().siblings('.menu').css('max-height','500px');
//     });
// })

$(document).ready(function () {
    //收合漢堡選單
    $('.menushow').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    //點擊選單以外就關閉選單
    let body = document.querySelector('body');
    let menu = document.querySelector('.menu');
    body.addEventListener('click', function name(e) {
        if((e.target.nodeName !== 'A') && (e.target.nodeName !== 'I')){
            $('body').removeClass('menu-show');
        }
        console.log(e.target.nodeName);
    }, false)
});


