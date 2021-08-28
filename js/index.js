$("header .bars").click(function(){
    $(".popup").toggleClass("open")
})
$(".popup-wrapper .home").click(function(){
    $(".popup").toggleClass("open")
})
$(".more").click(function(){
    $(".sidebar").css("left","50%")
    $(".bgCover").show()
    $(".close").css("top","0")
})
$(".close").click(function(){
    $(".sidebar").css("left","100%")
    $(".bgCover").hide()
    $(".close").css("top","-100px")
})
$(".popup .popup-wrapper ul li").eq(0).siblings().click(function(){
    $(".sidebar").css("left","50%")
    $(".bgCover").show()
    $(".close").css("top","0")
    $(".popup").removeClass("open")
})
$(".contents .main .btn-wrapper a.portfolio").click(function(){
    $(".sidebar").css("left","50%")
    $(".bgCover").show()
    $(".close").css("top","0")
})

