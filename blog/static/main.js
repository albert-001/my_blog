var posts_per_page = 6

function mainPageOnLoad() {
    var page = 1;
    var pages = 2;
    $("#curr_page").text(page+'/'+pages);
    $("#prev_page").hide()
    getPostsOnPage(page);
    $("a#prev_page").click(function(event){
        event.preventDefault();
        if(page > 1){
            page = page - 1;
            $("#curr_page").text(page+'/'+pages);
            $("#prev_page").show()
        } 
        if(page == 1) {
            $("#prev_page").hide()
            $("#next_page").show()
        }
        getPostsOnPage(page);
    });
    $("a#next_page").click(function(event){
        event.preventDefault();
        if(page < pages){
            page = page + 1;
            $("#curr_page").text(page+'/'+pages);
            $("#next_page").show()
        } 
        if(page == pages) {
            $("#next_page").hide()
            $("#prev_page").show()
        }
        getPostsOnPage(page);
    });
    $(".toggle_menu").click(function(event){
        event.preventDefault();
        $("nav > ul").slideToggle('slow');
        if($(".toggle_menu").html() == "=") {
            $(".toggle_menu").html("x");
        } else {
            $(".toggle_menu").html("=");
        }
    });
    setMenuHandler();
}

function getPostsOnPage(page_number) {
   $.ajax({url:page_number,
    async:false,
    data:null,
    success:function(d){
        showPosts(d);},
    error:function(){console.log("error:failed to get data in getActiveAlarmsData");}
   });
}

function showPosts(posts) {
    for(var i=0; i<posts.length; i++) {
        $("#blog"+i).show();
        $(".blog_header").eq(i).text(posts[i].title);
        $(".blog_meta").eq(i).text(posts[i].date);
        $(".blog_content").eq(i).text(posts[i].content);
    }
    for(var j=posts.length; j<posts_per_page; j++) {
        $("#blog"+j).hide();
    }
}

function setMenuHandler() {
        $("nav ul li a").click(function(event){
        event.preventDefault();
        var target = $(event.target).attr("href");
        if(target == '#html'){

        }else if(target == '#css'){

        }else if(target == '#javascript'){

        }else if(target == '#frameworks'){

        }else if(target == '#performance'){

        }else if(target == '#courses'){

        }else if(target == '#contact'){

        }
    });
}

$(document).ready(mainPageOnLoad);