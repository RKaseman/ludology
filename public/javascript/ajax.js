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

  $("#find-game2").on("click", function(event) {
    console.log("test");
    
    event.preventDefault();
    // var game = $("#game-name").val();
  var character = {
    character: $("#game-name2").val()
  }
  
    console.log(character); 
    $.post('/api/characters', character).then(function(data) {
      $('#gameData').append(data)
      console.log(data);
    });
  
  });