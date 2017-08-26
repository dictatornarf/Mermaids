var Game;
Game = Game || {};
Game.TimeCooker = function (cookTime, amount, amountIncrease) {
    "use strict";
    var _amount = amount;
    var _nextAmountFlag = -999999;
    var _nextAmount = _nextAmountFlag;
    var _startTime = new Date(1970, 1, 1);
    this.amountIncrease = amountIncrease;
    this.cookTime = cookTime;
    this.getAmount = function () {
        if (!this.isCooking() && _nextAmount !== _nextAmountFlag) {
            _amount = _nextAmount;
            _nextAmount = _nextAmountFlag;
        }
        return _amount;
    };
    this.getPercentage = function () {
        var toReturn = 1.0;
        if (this.isCooking()) {
            var now = new Date();
            var diff = now - _startTime;
            toReturn = diff / this.cookTime;
        }
        return toReturn;
    };
    this.isCooking = function () {
        var t = new Date();
        t.setMilliseconds(t.getMilliseconds() - this.cookTime);
        return _startTime >= t;
    };
    this.cook = function () {
        if (!this.isCooking()) {
            _startTime = new Date();
            _nextAmount = _amount + this.amountIncrease;
        }
    };
};
//# sourceMappingURL=TimeCooker.js.map 
//# sourceMappingURL=TimeCooker.js.map 
//# sourceMappingURL=TimeCooker.js.map