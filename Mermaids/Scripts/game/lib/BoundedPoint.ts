class BoundedPoint {
    private _value: Point = new Point(0, 0);

    constructor(public Start: Point, public Finish: Point) {
        this.Percentage = 0;
    }

    get Value(): Point {
        return this._value;
    }

    set Percentage(value: number) {
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
    }

    get BoundDistanceX(): number {
        return Math.max(this.Finish.X, this.Start.X) - Math.min(this.Finish.X, this.Start.X);
    }

    get BoundDistanceY(): number {
        return Math.max(this.Finish.Y, this.Start.Y) - Math.min(this.Finish.Y, this.Start.Y);
    }

    get Direction(): Direction {
        return (this.Start.X < this.Finish.X) ? Direction.Right : (this.Start.X > this.Finish.X) ? Direction.Left : Direction.None;
    }
}

enum Direction {
    Left,
    Right,
    None
}