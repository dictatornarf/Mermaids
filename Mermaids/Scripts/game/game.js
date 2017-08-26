var Game;
Game = Game || {};
$(document).ready(function () {
    "use strict";
    var engine = new Game.Engine();
    var btnWood = $("#btnWood");
    var showWood = $("#showWood");
    btnWood.on("click", function () {
        engine.wood.cook();
    });
    var btnRock = $("#btnRock");
    var showRock = $("#showRock");
    btnRock.on("click", function () {
        engine.rock.cook();
    });
    function updateDisplay() {
        showWood.html(engine.wood.getAmount() + " %" + (engine.wood.getPercentage() * 100).toFixed(2));
        if (engine.wood.isCooking()) {
            btnWood.hide();
        }
        else {
            btnWood.show();
        }
        showRock.html(engine.rock.getAmount() + " %" + (engine.rock.getPercentage() * 100).toFixed(2));
        if (engine.rock.isCooking()) {
            btnRock.hide();
        }
        else {
            btnRock.show();
        }
    }
    window.setInterval(function () {
        updateDisplay();
    }, 50);
});
//# sourceMappingURL=game.js.map 
//# sourceMappingURL=game.js.map 
//# sourceMappingURL=game.js.map