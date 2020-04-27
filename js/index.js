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

    //
}); // end Doc ready
