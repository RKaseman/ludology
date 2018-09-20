
// var altRoutes = "http://www.mapquestapi.com/directions/v2/alternateroutes?key=" + apiKey + "&from=" + from + "&to=" + to + "&maxRoutes=2&timeOverage=100";
// console.log("altRoutes : " + altRoutes);

$("#find-game").on("click", function (event) {

    event.preventDefault();
    var game = {
        game: $("#game-name").val()
    }

    $.post('/api/games', game).then(function (data) {
        for (var i = 0; i < data.body.length; i++){
        console.log(data);
            // for (var j = 0; j < data.body.length; j++)
            // console.log(data.body[j].url);
            //     for (var k = 0; k < data.body.length; k++)
            //         console.log(data.body[k].rating);
            $("#fucked").append(data.url);
        }
    });
});

$("#find-game2").on("click", function (event) {

    event.preventDefault();
    var character = {
        character: $("#game-name2").val()
    }

    $.post("/api/characters", character).then(function (data) {
        $("#gameData").append(data)
    });

});