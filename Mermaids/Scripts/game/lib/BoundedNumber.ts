class BoundedNumber {
    constructor(public Start: number, public Finish: number, private _value: number) { }

    get Value(): number {
        return this._value;
    }

    set Value(value: number) {
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
    }

    get Percentage(): number {
        if (this.Start < this.Finish)
            return (this.Value - this.Start) / this.BoundDistance;
        else
            return (this.Start - this.Value) / this.BoundDistance;
    }

    set Percentage(value: number) {
        if (this.Start < this.Finish)
            this.Value = this.Start + this.BoundDistance * value;
        else
            this.Value = this.Start - this.BoundDistance * value;
    }

    get BoundDistance(): number {
        return Math.max(this.Finish, this.Start) - Math.min(this.Finish, this.Start);
    }
}