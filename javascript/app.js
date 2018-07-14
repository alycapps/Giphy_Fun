var topics = ["Doctor Who", "Battlestar Galactica", "Star Wars", "Torchwood", "Lord of the Rings", "Game of Thrones", "Sherlock", "Warehouse 13", "Star Trek"];
var key = "TB7eTP6O2J0VXAlUwCLj7T96z55fYByl";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[3] + "&api_key=" + key + "&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
        console.log(response);
        makeButtons();
        console.log("url: " + response.data[3].images.fixed_height_small.url);
        
        

        // Add for each to displaygifs
        $(".tvbttn").on("click", function() {
            console.log("you clicked a tv show");
            var show = $(".tvbttn").val();
            var gifURL = response.data[3].images.fixed_height_small.url;
            var p = $("<p>")
            $(p).attr("src", gifURL);
            $("#gifsloc").prepend(p); 
            
        });

        // $(".tvbttn").on("click", function() {
        //     for (s=0; s<10; s++) {
        //         var choice = $(".tvbttn").val();
        //         var static = response.data[s].images.fixed_height_small.url;
        //         $("#gifsloc").append(static);
        //     };
        // });
        
});

//create buttons from topics array
function makeButtons() {

    $("#showbuttonloc").empty();

    for (m=0; m<topics.length; m++) {
        var bttnhtml = $("<button>");
        bttnhtml.addClass("tvbttn");
        bttnhtml.text(topics[m]);
        $("#showbuttonloc").append(bttnhtml);
    };
}


//display gif and info required
//trying this above without
function displaygif() {
    console.log("displaygif function ran");
    var show = $(".tvbttn").val();

    $("#gifsloc").append();
}

//push entry to array
$("#searchbutton").on("click", function() {
    event.preventDefault();
    // console.log("click function ran");
    var enteredshow = $("#gifsearch").val()
    topics.push(enteredshow);
    // console.log(topics);

    //clear form after entry has been added to array
    $("#gifsearch").val("");
    makeButtons();
});

