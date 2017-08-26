class BoundedBox extends Point {
    private _width: BoundedNumber;
    private _height: BoundedNumber;

    constructor(X: number, Y: number, width: number, height: number, minPercent: number) {
        super(X, Y);

        this._width = new BoundedNumber(width * minPercent, width, width);
        this._height = new BoundedNumber(height * minPercent, height, height);
    }

    static WithAspectRatio(X: number, Y: number, width: number, height: number, maxSize: number, minPercent: number): BoundedBox {
        let scaledWidth;
        let scaledHeight;

        if (height > width) {
            let pWidth = width / height;
            scaledWidth = maxSize * pWidth;
            scaledHeight = maxSize;
        }
        else {
            let pHeight = height / width;
            scaledWidth = maxSize;
            scaledHeight = maxSize * pHeight;
        }

        return new BoundedBox(X, Y, scaledWidth, scaledHeight, minPercent);
    }

    get Width(): BoundedNumber {
        return this._width;
    }

    get Height(): BoundedNumber {
        return this._height;
    }

    set Percentage(value: number) {
        this.Width.Percentage = value;
        this.Height.Percentage = value;
    }

    get Percentage(): number {
        return this.Width.Percentage;
    }
}