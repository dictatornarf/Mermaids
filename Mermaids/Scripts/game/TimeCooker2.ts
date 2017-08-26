class TimeCooker {
    _amount: number;
    _nextAmountFlag: number;
    _nextAmount: number;
    _startTime: Date;

    public AmountIncrease: number;
    public CookTime: number;

    constructor(public pCookTime: number, public pAmount: number, public pAmountIncrease: number) {
        this._amount = pAmount;
        this._nextAmountFlag = -999999;
        this._nextAmount = this._nextAmountFlag;
        this._startTime = new Date(1970, 1, 1);

        this.CookTime = pCookTime;
        this.AmountIncrease = pAmountIncrease;
    }

    GetAmount() {
        if (!this.IsCooking() && this._nextAmount !== this._nextAmountFlag) {
            this._amount = this._nextAmount;
            this._nextAmount = this._nextAmountFlag;
        }

        return this._amount;
    }

    GetPercentage() {
        var toReturn = 1.0;
        if (this.IsCooking()) {
            let now = new Date();
            var diff = now.valueOf() - this._startTime.valueOf();
            toReturn = diff / this.CookTime;
        }

        return toReturn;
    };

    IsCooking() {
        var t = new Date();
        t.setMilliseconds(t.getMilliseconds() - this.CookTime);
        return this._startTime >= t;
    };

    Cook() {
        if (!this.IsCooking()) {
            this._startTime = new Date();
            this._nextAmount = this._amount + this.AmountIncrease;
        }
    };
}