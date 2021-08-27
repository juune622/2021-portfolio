$("header .bars").click(function(){
    $(".popup").toggleClass("open")
})
$(".popup-wrapper .home").click(function(){
    $(".popup").toggleClass("open")
})
$(".more").click(function(){
    $(".sidebar").css("left","50%")
    $(".bgCover").show("slow")
})