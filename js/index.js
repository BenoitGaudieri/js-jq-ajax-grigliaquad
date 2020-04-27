$(document).ready(function () {
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
                console.log("error", "si è verificato un errore che orrore ");
            },
        });
    });

    //
}); // end Doc ready
