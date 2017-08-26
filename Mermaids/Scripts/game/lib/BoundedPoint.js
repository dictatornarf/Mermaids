var BoundedPoint = (function () {
    function BoundedPoint(Start, Finish) {
        this.Start = Start;
        this.Finish = Finish;
        this._value = new Point(0, 0);
        this.Percentage = 0;
    }
    Object.defineProperty(BoundedPoint.prototype, "Value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundedPoint.prototype, "Percentage", {
        set: function (value) {
            if (this.Start.X < this.Finish.X) {
                this._value.X = this.Start.X + this.BoundDistanceX * value;
            }
            else {
                this._value.X = this.Start.X - this.BoundDistanceX * value;
            }
            if (this.Start.Y < this.Finish.Y) {
                this._value.Y = this.Start.Y + this.BoundDistanceY * value;
            }
            else {
                this._value.Y = this.Start.Y - this.BoundDistanceY * value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundedPoint.prototype, "BoundDistanceX", {
        get: function () {
            return Math.max(this.Finish.X, this.Start.X) - Math.min(this.Finish.X, this.Start.X);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundedPoint.prototype, "BoundDistanceY", {
        get: function () {
            return Math.max(this.Finish.Y, this.Start.Y) - Math.min(this.Finish.Y, this.Start.Y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundedPoint.prototype, "Direction", {
        get: function () {
            return (this.Start.X < this.Finish.X) ? Direction.Right : (this.Start.X > this.Finish.X) ? Direction.Left : Direction.None;
        },
        enumerable: true,
        configurable: true
    });
    return BoundedPoint;
}());
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["None"] = 2] = "None";
})(Direction || (Direction = {}));
//# sourceMappingURL=BoundedPoint.js.map