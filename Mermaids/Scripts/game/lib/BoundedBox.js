var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BoundedBox = (function (_super) {
    __extends(BoundedBox, _super);
    function BoundedBox(X, Y, width, height, minPercent) {
        var _this = _super.call(this, X, Y) || this;
        _this._width = new BoundedNumber(width * minPercent, width, width);
        _this._height = new BoundedNumber(height * minPercent, height, height);
        return _this;
    }
    BoundedBox.WithAspectRatio = function (X, Y, width, height, maxSize, minPercent) {
        var scaledWidth;
        var scaledHeight;
        if (height > width) {
            var pWidth = width / height;
            scaledWidth = maxSize * pWidth;
            scaledHeight = maxSize;
        }
        else {
            var pHeight = height / width;
            scaledWidth = maxSize;
            scaledHeight = maxSize * pHeight;
        }
        return new BoundedBox(X, Y, scaledWidth, scaledHeight, minPercent);
    };
    Object.defineProperty(BoundedBox.prototype, "Width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundedBox.prototype, "Height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoundedBox.prototype, "Percentage", {
        get: function () {
            return this.Width.Percentage;
        },
        set: function (value) {
            this.Width.Percentage = value;
            this.Height.Percentage = value;
        },
        enumerable: true,
        configurable: true
    });
    return BoundedBox;
}(Point));
//# sourceMappingURL=BoundedBox.js.map