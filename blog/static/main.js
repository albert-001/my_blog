var posts_per_page = 6

function mainPageOnLoad() {
    let page = 1;
    let pages = 2;
    $("#curr_page").text(page+'/'+pages);
    getPostsOnPage(page);
    $("a#prev_page").click(function(event){
        event.preventDefault();
        if(page > 1){
            page = page - 1;
            $("#curr_page").text(page+'/'+pages);
            getPostsOnPage(page);
        }
    });
    $("a#next_page").click(function(event){
        event.preventDefault();
        if(page < pages){
            page = page + 1;
            $("#curr_page").text(page+'/'+pages);
            getPostsOnPage(page);
        }
    });
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
    for(let i=0; i<posts.length; i++) {
        $("#blog"+i).show();
        $(".blog_header").eq(i).text(posts[i].title);
        $(".blog_meta").eq(i).text(posts[i].date);
        $(".blog_content").eq(i).text(posts[i].content);
    }
    for(let i=posts.length; i<posts_per_page; i++) {
        $("#blog"+i).hide();
    }
}

$(document).ready(mainPageOnLoad);