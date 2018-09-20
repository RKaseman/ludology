$("#find-game").on("click", function (event) {
    console.log("test");

    event.preventDefault();
    // var game = $("#game-name").val();
    var game = {
        game: $("#game-name").val()
    }

    console.log(game);
    $.post('/api/games', game).then(function (data) {
        $("#test").empty();

        for (var i = 0; i < data.body.length; i++) {
            console.log(data.body[i]);
            // console.log(data.body[i].url);
            var url = data.body[i].url;

            $("#test").append("<div  id='" + i + "'>");
            $("#" + i).append("<p>" + "<b style='font-size: x-large'>Game Title: </b>" + data.body[i].name + "</p>");

            $("#" + i).append("<p>" + "<b style='font-size: x-large'>Summary: </b>" + data.body[i].summary + "</p>");
            $("#" + i).append("<p>" + "<b style='font-size: x-large'>Release Date: </b>" + data.body[i].release_dates[0].human + "</p>")
            // $("#"+i).append("<p>" + data.body[i].genres + "</p>")
            $("#" + i).append("<p> <b style='font-size: x-large'>Screenshots: </b> <img src='" + data.body[i].screenshots[0].url + "'></p><br><br><br>")


        }
        // var summary = data.body[i].summary;
        // console.log(summary);
        // console.log(data.body[i].name);
        // console.log(d);
        // console.log()
        // console.log(data.body[i].screenshots);

    });
    // $('<h3>').append(data.body[i].summary)
});
// function returnData(game) {
//   var item = $("#gameData");
//   $(item).append(game)
// }

$("#find-game2").on("click", function (event) {
    console.log("test");

    event.preventDefault();
    // var game = $("#game-name").val();
    var character = {
        character: $("#game-name2").val()
    }

    console.log(character);
    $.post('/api/characters', character).then(function (data) {
        $('#gameData').append(data)
        console.log(data);
    });

});