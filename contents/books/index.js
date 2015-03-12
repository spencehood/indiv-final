var books = {

    searchByUserId: function(id) {

        // search activities by userId (default user, 101193)
        var id = id || '101193'

        //$.get("https://vimeo.com/api/v2/activity/"+ id +"/user_did.json", function(data) {
            $.get("http://api.nytimes.com/svc/books/v3/lists", function(data) {
            //$.get("http://github.com/users/spencehood/nyt.git"), function(data) {

                console.log('now ' + data)
                
                //$.get("/vimeo/activities/list.jade", function(template) {
                $.get("/nytimes/books/list.jade", function(template) {
                
                    var html = jade.render(template, {
                        data: data
                    });
                    console.log(html)
                    $("#list").html(html)
                })
            })
    },

  
    load: function() {

        //$.get("/vimeo/activities/ui.jade", function(template) {
        $.get("/nytimes/books/ui.jade", function(template) {

            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        books.searchByUserId('Girl')

        // nyt.best_sellers.get({'query':'girl'}, console.log);

    }

}