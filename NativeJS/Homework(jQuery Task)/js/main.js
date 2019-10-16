$(document).ready(function() {
    modalToggler();
});

function modalToggler() {
    $(".main_btn").on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }, 300
        );
        $('.modal').animate(
            {
                opacity: "toggle",
                top: 100
            }, 1000
        );
    });
    $(".main_nav li:eq(1)").on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }, 300
        );
        $('.modal').animate(
            {
                opacity: "toggle",
                top: 100
            }, 1000
        );
    });
    $('.close').on('click', function(){
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }, 300
        );
        $('.modal').animate(
            {
                opacity: "toggle",
                top: 0
            }, 1000
        );
    })
}