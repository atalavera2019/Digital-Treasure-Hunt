$("#hiddenPic").hide();
$(".yay").hide();

$("button").dblclick(function(){
    $("#Message").append("Now Click Here!");
});
$("#Message").click(function(){
    $("#hiddenPic").show();
    $("#Message").text("Touch the coins");
});
$("#hiddenPic").hover(function(){
    $("#Message").text("Now click on the bag");
});
$("#money").click(function(){
    $("body").css("background", "#25E18F");
});
$("#money").click(function(){
    $("p").hide();
    $("img").hide();
    $("button").hide();
    $(".yay").show();
});