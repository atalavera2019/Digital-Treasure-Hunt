$("#hiddenPic").hide();
$(".yay").hide();

$("button").click(function(){
    $("#Message").append("Double click here");
});

$("#Message").dblclick(function(){
    $("#hiddenPic").show();
    $("#Message");

});
$("#hiddenPic").hover(function(){
    $("#Message").text("Now click on the bag");
});
$("#money").click(function(){
    $("body").css("background", "#25E18F");
});
$("h1").click(function(){
    $("p").hide();
    $("img").hide();
    $("button").hide();
    $(".yay").show();
});