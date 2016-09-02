function mainPageOnLoad() {
    getPostsOnPage(1);
}

function getPostsOnPage(page_number) {
   $.ajax({url:page_number,
    async:false,
    data:null,
    success:function(d){
        let json_test_str = '{"data": [{"content": "my fifth post", "date": "2016-08-29T02:51:11.082Z", "title": "my fifth post"}, {"content": "my fourth post", "date": "2016-08-29T02:50:03.440Z", "title": "my fourth post"}, {"content": "my third post", "date": "2016-08-29T02:50:03.310Z", "title": "my third post"}, {"content": "my second post", "date": "2016-08-29T02:50:03.240Z", "title": "my second post"}, {"content": "my first post", "date": "2016-08-29T02:50:03.158Z", "title": "my first post"}]}'
        let r = JSON.parse(d);
        let posts = r.data;
        showPosts(posts);},
    error:function(){console.log("error:failed to get data in getActiveAlarmsData");}
   });
}

function showPosts(posts) {
    for(let post of posts) {
        console.log(post)
    }
}

$(document).ready(mainPageOnLoad);