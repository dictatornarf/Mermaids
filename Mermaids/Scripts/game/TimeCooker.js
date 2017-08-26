var TimeCooker = (function () {
    function TimeCooker(pCookTime, pAmount, pAmountIncrease) {
        this.pCookTime = pCookTime;
        this.pAmount = pAmount;
        this.pAmountIncrease = pAmountIncrease;
        this._amount = pAmount;
        this._nextAmountFlag = -999999;
        this._nextAmount = this._nextAmountFlag;
        this._startTime = new Date(1970, 1, 1);
        this.CookTime = pCookTime;
        this.AmountIncrease = pAmountIncrease;
    }
    TimeCooker.prototype.GetAmount = function () {
        if (!this.IsCooking() && this._nextAmount !== this._nextAmountFlag) {
            this._amount = this._nextAmount;
            this._nextAmount = this._nextAmountFlag;
        }
        return this._amount;
    };
    TimeCooker.prototype.GetPercentage = function () {
        var toReturn = 1.0;
        if (this.IsCooking()) {
            var now = new Date();
            var diff = now.valueOf() - this._startTime.valueOf();
            toReturn = diff / this.CookTime;
        }
        return toReturn;
    };
    ;
    TimeCooker.prototype.IsCooking = function () {
        var t = new Date();
        t.setMilliseconds(t.getMilliseconds() - this.CookTime);
        return this._startTime >= t;
    };
    ;
    TimeCooker.prototype.Cook = function () {
        if (!this.IsCooking()) {
            this._startTime = new Date();
            this._nextAmount = this._amount + this.AmountIncrease;
        }
    };
    ;
    return TimeCooker;
}());
//# sourceMappingURL=TimeCooker.js.map