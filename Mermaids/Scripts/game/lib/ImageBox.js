var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ImageBox = (function (_super) {
    __extends(ImageBox, _super);
    function ImageBox(Img, X, Y) {
        var _this = _super.call(this, X, Y, Img.width, Img.height) || this;
        _this.Img = Img;
        return _this;
    }
    return ImageBox;
}(Box));
//# sourceMappingURL=ImageBox.js.map