function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
$(".bef").fadeTo(2500, 0);

setTimeout(() => {
    $(".bef").css("display","none");
}, 1000);

setTimeout(() => {
    $(".start").fadeTo(2500,1);
}, 1500);

