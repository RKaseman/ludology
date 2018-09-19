
$(document).ready(function () {
    var $newItemInput = $("input.new-item");
    var $gameContainer = $(".game-container");
    $(document).on("click", "button.delete", deleteGame);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".game-item", editGame);
    $(document).on("keyup", ".game-item", finishEdit);
    $(document).on("blur", ".game-item", cancelEdit);
    $(document).on("submit", "#game-form", insertGame);

    var games = [];

    getGames();

    function initializeRows() {
        $gameContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < games.length; i++) {
            rowsToAdd.push(createNewRow(games[i]));
        }
        $gameContainer.prepend(rowsToAdd);
    }

    function getGames() {
        $.get("/api/games", function (data) {
            games = data;
            initializeRows();
        });
    }

    function deleteGame(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/games/" + id
        }).then(getGames);
    }

    function editGame() {
        var currentGame = $(this).data("game");
        $(this).children().hide();
        $(this).children("input.edit").val(currentGame.text);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
    }

    function toggleComplete(event) {
        event.stopPropagation();
        var game = $(this).parent().data("game");
        game.complete = !game.complete;
        updateGame(game);
    }

    function finishEdit(event) {
        var updatedGame = $(this).data("game");
        if (event.which === 13) {
            updatedGame.text = $(this).children("input").val().trim();
            $(this).blur();
            updateGame(updatedGame);
        }
    }

    function updateGame(game) {
        $.ajax({
            method: "PUT",
            url: "/api/games",
            data: game
        }).then(getGames);
    }

    function cancelEdit() {
        var currentGame = $(this).data("game");
        if (currentGame) {
            $(this).children().hide();
            $(this).children("input.edit").val(currentGame.text);
            $(this).children("span").show();
            $(this).children("button").show();
        }
    }

    function createNewRow(game) {
        var $newInputRow = $(
            [
                "<li class='list-group-item game-item'>",
                "<button class='delete btn btn-danger'>x</button>",
                "<button class='complete btn btn-primary'>✓</button>",
                "<span>",
                game.text,
                "</span>",
                "<input type='text' class='edit' style='display: none;'>",
                "</li>"
            ].join("")
        );

        $newInputRow.find("button.delete").data("id", game.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("game", game);
        if (game.complete) {
            $newInputRow.find("span").css("text-decoration", "line-through");
        }
        return $newInputRow;
    }

    function insertGame(event) {
        event.preventDefault();
        var game = {
            text: $newItemInput.val().trim(),
            complete: false
        };

        $.post("/api/games", game, getGames);
        $newItemInput.val("");
    }
});
