var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Box = (function (_super) {
    __extends(Box, _super);
    function Box(X, Y, Width, Height) {
        var _this = _super.call(this, X, Y) || this;
        _this.Width = Width;
        _this.Height = Height;
        return _this;
    }
    return Box;
}(Point));
//# sourceMappingURL=Box.js.map