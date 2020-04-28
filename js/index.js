$(document).ready(function () {
    // Random int api grid
    var apiUrl = "https://flynn.boolean.careers/exercises/api/random/int";
    for (let i = 0; i < 36; i++) {
        $(".grid").append('<div class="box"></div>');
    }
    var boxes = $(".box");

    boxes.click(function () {
        // Store in var because this in ajax returns the ajax object
        var self = $(this);

        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function (data) {
                var num = data.response;
                // use the reference to the box
                self.text(num);
                self.removeClass("yellow red");

                if (num <= 5) {
                    self.addClass("yellow");
                    self.text(num);
                } else {
                    self.addClass("red");
                    self.text(num);
                }

                // // Controllo valore casella
                // if (self.text() === "0") {
                //     // use the reference to the box
                //     self.text(num);
                // }
            },
            error: function (err) {
                console.log("Error: ", err);
            },
        });
    });

    // Joke
    let jokeUrl = "https://icanhazdadjoke.com/";

    const jokeBtn = $(".make-joke");

    jokeBtn.click(function () {
        $.ajax({
            url: jokeUrl,
            method: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Accept", "application/json");
            },
            success: function (data) {
                var joke = data.joke;
                $(".joke").text(joke);
            },
            error: function (err) {
                console.log("Error: ", err);
            },
        });
    });

    // CSS TRICKS
    const wpUrl = "https://css-tricks.com/wp-json/wp/v2/posts";

    // Init handlebars
    var source = $("#css-tricks-template").html();
    var template = Handlebars.compile(source);
    var moustache = {};

    $.ajax({
        url: wpUrl,
        method: "GET",
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                for (const key in data[i]) {
                    // console.log(data[i][key]);
                    if (key === "link") {
                        var link = data[i][key];
                        // console.log(link);
                        // $(".css-tricks").append(data[i][key]);
                        moustache.link = link;
                        // console.log(moustache.link);
                    }
                    if (key === "title") {
                        var title = data[i][key]["rendered"];
                        // console.log(data[i][key]["rendered"]);
                        // $(".css-tricks").append(data[i][key]["rendered"]);
                        moustache.title = title;

                        // handlebars output
                        var html = template(moustache);
                        $(".css-tricks--div").append(html);
                    }
                }
            }
        },
        error: function (err) {
            console.log("Error: ", err);
        },
    });

    // async function doAjax(){
    //     let result;
    //     try {
    //         result = await $.ajax({
    //             url: wpUrl,
    //             method: "GET",
    //             function (data) {
    //                 for (let i = 0; i < data.length; i++) {
    //                     for (const key in data[i]) {
    //                         if (key === "link") {
    //                             var link = data[i][key];
    //                             moustache.link = link;
    //                         }
    //                         if (key === "title") {
    //                             var title = data[i][key]["rendered"];
    //                             moustache.title = title;

    //                             // handlebars output
    //                             var html = template(moustache);
    //                             $(".css-tricks--div").append(html);
    //                         }
    //                     }
    //                 }
    //             },

    //         });
    //     }
    // }

    //
}); // end Doc ready
