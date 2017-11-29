
function isEnter(e) {
    var ev = e || window.event;
    var keycode;
    if (window.event) keycode = ev.keyCode;
    else keycode = ev.which;
    if (keycode == 10 || keycode == 13) return true;
    else return false;
}
$(document).ready(function () {

    //引才项目
    $(".project li a").hover(
        function () {
            $(this).find("img.real").animate({
                "width":"200px",
                "height":"229px",
                "left":"-8px",
                "top":"-9px"
            },150)
        },function () {
            $(this).find("img.real").animate({
                "width":"184px",
                "height":"211px",
                "left":"0px",
                "top":"0px"
            },150)
        }
    );
});