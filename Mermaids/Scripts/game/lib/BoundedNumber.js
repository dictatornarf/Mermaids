var BoundedNumber = (function () {
    function BoundedNumber(Start, Finish, _value) {
        this.Start = Start;
        this.Finish = Finish;
        this._value = _value;
    }
    Object.defineProperty(BoundedNumber.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this.Start < this.Finish) {
                if (value < this.Start)
                    this._value = this.Start;
                else if (value > this.Finish)
                    this._value = this.Finish;
                else
                    this._value = value;
            }
            else {
                if (value > this.Start)
                    this._value = this.Start;
                else if (value < this.Finish)
                    this._value = this.Finish;
                else
                    this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundedNumber.prototype, "Percentage", {
        get: function () {
            if (this.Start < this.Finish)
                return (this.Value - this.Start) / this.BoundDistance;
            else
                return (this.Start - this.Value) / this.BoundDistance;
        },
        set: function (value) {
            if (this.Start < this.Finish)
                this.Value = this.Start + this.BoundDistance * value;
            else
                this.Value = this.Start - this.BoundDistance * value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundedNumber.prototype, "BoundDistance", {
        get: function () {
            return Math.max(this.Finish, this.Start) - Math.min(this.Finish, this.Start);
        },
        enumerable: true,
        configurable: true
    });
    return BoundedNumber;
}());
//# sourceMappingURL=BoundedNumber.js.map