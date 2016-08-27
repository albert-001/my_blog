var nIntervId;
var currentSlideIndex;
var nSlideCount = 4

function init_chart() {
    currentSlideIndex = 1
    $(".slider_tile").eq(0).css("background-color", "black")
    $("#slider_tiles_group a").on("click", function(event){
        event.preventDefault();
        let slide_index = $(event.target).data("slide-index");
        show_chart(slide_index);
    })
    $("#slider_container").on("mouseover", slide_end);
    $("#slider_container").on("mouseout", slide_start);
    $("#prev").on("click", reverse_slide);
    $("#next").on("click", slide);
    slide_start();
}

function show_chart(id) {
    $("#slider_item_group").animate({"left": "-"+(id-1)*800+"px"}, "slow")
    for (let i = 1; i <= nSlideCount; i++) {
        if(i==id){
            $(".slider_tile").eq(i-1).css("background-color", "black")
        } else {
            $(".slider_tile").eq(i-1).css("background-color", "grey")
        }
    }
    currentSlideIndex = id;
}

function slide() {
    if(currentSlideIndex==(nSlideCount-1)) {
        show_chart(nSlideCount)
    } else {
        show_chart((currentSlideIndex+1)%nSlideCount)
    }
}

function reverse_slide() {
    if(currentSlideIndex==1) {
        show_chart(nSlideCount)
    } else {
        show_chart((currentSlideIndex-1)%nSlideCount)
    }
}

function slide_start() {
    $("#prev").css('opacity', 0);
    $("#next").css('opacity', 0);
    nIntervId = setInterval(slide, 3000);
}

function slide_end() {
    $("#prev").css('opacity', 1);
    $("#next").css('opacity', 1);
    clearInterval(nIntervId);
}

$(document).ready(init_chart);