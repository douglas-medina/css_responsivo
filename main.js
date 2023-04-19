$(document).ready(function(){
    $('.product-one').mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace("./images/produto1.png", "./images/produto1_hover.png"));
    }).mouseout(function (e) {
    $(this).attr("src", $(this).attr("src").replace("./images/produto1_hover.png", "./images/produto1.png"));
    });

    $('.product-two').mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace("./images/produto2.png", "./images/produto2_hover.png"));
    }).mouseout(function (e) {
    $(this).attr("src", $(this).attr("src").replace("./images/produto2_hover.png", "./images/produto2.png"));
    });

    $('.product-three').mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace("./images/produto3.png", "./images/produto3_hover.png"));
    }).mouseout(function (e) {
    $(this).attr("src", $(this).attr("src").replace("./images/produto3_hover.png", "./images/produto3.png"));
    });

    $('.product-four').mouseover(function() {
        $(this).attr("src", $(this).attr("src").replace("./images/produto4.png", "./images/produto4_hover.png"));
    }).mouseout(function (e) {
    $(this).attr("src", $(this).attr("src").replace("./images/produto4_hover.png", "./images/produto4.png"));
    });
})