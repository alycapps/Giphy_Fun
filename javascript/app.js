var topics = ["Doctor Who", "Battlestar Galactica", "Star Wars", "Torchwood", "Lord of the Rings", "Game of Thrones", "Sherlock", "Warehouse 13", "Star Trek"];
var key = "TB7eTP6O2J0VXAlUwCLj7T96z55fYByl";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[3] + "&api_key=" + key + "&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
        console.log(response);
        makeButtons();
        console.log(response.data[0].images.fixed_height_small);
        
        var gifURL = response.data[0].url;
        $("#gifsloc").attr("src", gifURL);
        
});

//create buttons from topics array
function makeButtons() {

    $("#showbuttonloc").empty();

    for (m=0; m<topics.length; m++) {
        var html = "<button>" + topics[m] + "</button>";
        $("#showbuttonloc").append(html);
    };
}

//display gif and info required
function displaygif() {

}

//push entry to array
$("#searchbutton").on("click", function() {
    event.preventDefault();
    console.log("click function ran");
    var enteredshow = $("#gifsearch").val()
    topics.push(enteredshow);
    console.log(topics);
    makeButtons();
});

