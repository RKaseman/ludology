$("#find-game").on("click", function(event) {
    console.log("test");
    
    event.preventDefault();
    // var game = $("#game-name").val();
    var game = {
      game: $("#game-name").val()
    }
  
    console.log(game); 
    $.post('/api/games', game).then(function(data) {
      $('#gameData').append(data)
      console.log(data);
    });
  
  });