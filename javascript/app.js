var topics = ["Doctor Who", "Battlestar Galactica", "Star Wars", "Lord of the Rings", "Game of Thrones", "Sherlock", "Star Trek"];

//create buttons from topics array
function makeButtons() {

    $("#showbuttonloc").empty();

    for (m=0; m<topics.length; m++) {
        var bttnhtml = $("<button>");
        bttnhtml.addClass("tvbttn");
        bttnhtml.attr("data-name", topics[m]);
        bttnhtml.text(topics[m]);
        $("#showbuttonloc").append(bttnhtml);
    };
}
makeButtons();

    $(document).on("click", ".tvbttn", function() {
        console.log("you clicked a tv show");
        //variable to hold name of show button clicked
        var showchoice = $(this).attr("data-name");
        console.log("showchoice: " + showchoice)

        var key = "TB7eTP6O2J0VXAlUwCLj7T96z55fYByl";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + showchoice + "&api_key=" + key + "&limit=10";
        console.log("queryurl: " + queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
                console.log(response);
               
                for (j=0; j<10; j++) {
                    var gifURL = response.data[j].images.fixed_height_still.url;
                    var img = $("<img>")
                    $(img).attr("src", gifURL);
                    $(img).attr("data-still", response.data[j].images.fixed_height_still.url);
                    $(img).attr("data-animate", response.data[j].images.fixed_height.url);
                    $(img).attr("data-state", "still");
                    $(img).attr("src", $(this).attr("data-animate"))
                    var p = $("<p>").text("Rating: " + response.data[j].rating);
                    $("#gifsloc").prepend(p); 
                    $("#gifsloc").prepend(img); 
                };

                    // click handler for animating gifs and returning to still state
                $("img").on("click", function() {
                    var state = $(this).attr("data-state");
                    console.log(this);
                    if (state === "still") {
                        console.log($(this).attr("data-animate"));
                      $(this).attr("src", $(this).attr("data-animate"));
                      $(this).attr("data-state", "animate");
                    } 
                    else {
                      $(this).attr("src", $(this).attr("data-still"));
                      $(this).attr("data-state", "still");
                    }
                  });

            });
    });


//push entry to array
$("#searchbutton").on("click", function() {
    event.preventDefault();
    var enteredshow = $("#gifsearch").val()
    topics.push(enteredshow);

    //clear form after entry has been added to array
    $("#gifsearch").val("");
    makeButtons();
});

