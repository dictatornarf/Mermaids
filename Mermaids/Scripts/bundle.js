var Point = (function () {
    function Point(X, Y) {
        this.X = X;
        this.Y = Y;
    }
    return Point;
}());
//# sourceMappingURL=Point.js.map
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
var Swimmer = (function () {
    function Swimmer(img, ctx, Layout) {
        this.img = img;
        this.ctx = ctx;
        this.Layout = Layout;
        this._updateTime = new BoundedNumber(0, 0, 0);
        this._updateZ = new BoundedNumber(0, 0, 0);
        this._rotate = 0;
        this._flip = false;
        this._updatePoint = new BoundedPoint(new Point(this.Layout.X, this.Layout.Y), new Point(this.Layout.X, this.Layout.Y));
    }
    Swimmer.prototype.Swim = function () {
        var now = new Date().valueOf();
        //Create new movement
        if (now > this._updateTime.Finish) {
            this._updateTime.Finish = now + Math.random() * 2000.0 + 2000.0; //2-4 seconds;
            this._updateTime.Start = now;
            this._updateTime.Value = now;
            if (Math.random() < 0.2) {
                this._updatePoint.Start.X = this.Layout.X;
                this._updatePoint.Start.Y = this.Layout.Y;
                var randomX = Math.random();
                var randomY = Math.random();
                randomX = Math.min(Math.max(randomX, 0.07), 0.93);
                randomY = Math.min(Math.max(randomY, 0.07), 0.93);
                this._updatePoint.Finish.X = randomX * this.ctx.canvas.clientWidth;
                this._updatePoint.Finish.Y = randomY * this.ctx.canvas.clientHeight;
                this._updateZ.Start = this.Layout.Percentage;
                this._updateZ.Finish = Math.random();
                this._updateZ.Value = this._updateZ.Start;
                this._rotate = 0.4;
                if (this._updatePoint.Direction === Direction.Right)
                    this._flip = true;
                if (this._updatePoint.Direction === Direction.Left)
                    this._flip = false;
                this._rotate = (this._flip) ? this._rotate : -this._rotate;
            }
            else {
                this._updatePoint.Start.X = this.Layout.X;
                this._updatePoint.Start.Y = this.Layout.Y;
                this._updatePoint.Finish.X = this.Layout.X;
                ;
                this._updatePoint.Finish.Y = this.Layout.Y;
                this._updateZ.Start = this.Layout.Percentage;
                this._updateZ.Finish = this.Layout.Percentage;
                this._updateZ.Value = this._updateZ.Start;
                if (Math.random() < 0.5) {
                    this._flip = !this._flip;
                }
                this._rotate = 0.0;
            }
        }
        //Handle UpdateTime
        this._updateTime.Value = now;
        var movePercent = this._updateTime.Percentage;
        //Handle Z
        this._updateZ.Percentage = movePercent;
        this.Layout.Percentage = this._updateZ.Value;
        //Handle movement
        this._updatePoint.Percentage = movePercent;
        this.Layout.X = this._updatePoint.Value.X;
        this.Layout.Y = this._updatePoint.Value.Y;
        this.Draw();
    };
    Swimmer.prototype.Draw = function () {
        this.ctx.save();
        this.ctx.translate(this.Layout.X - this.Layout.Width.Value / 2, this.Layout.Y - this.Layout.Height.Value / 2);
        this.ctx.translate(this.Layout.Width.Value / 2, this.Layout.Height.Value / 2);
        this.ctx.rotate(this._rotate);
        if (this._flip) {
            this.ctx.scale(-1, 1);
        }
        this.ctx.drawImage(this.img, -(this.Layout.Width.Value / 2), -(this.Layout.Height.Value / 2), this.Layout.Width.Value, this.Layout.Height.Value);
        this.ctx.restore();
    };
    return Swimmer;
}());
//# sourceMappingURL=Swimmer.js.map
$(document).ready(function () {
    var canvas = document.getElementById("cGame");
    var ctx = canvas.getContext("2d");
    var resources = new Array();
    resources.push("resources/BabyMermaid.png");
    resources.push("resources/BabyMermaid2.png");
    resources.push("resources/BabyMermaid3.png");
    resources.push("resources/BabyMermaid4.png");
    resources.push("resources/BoyfriendMermaid.png");
    resources.push("resources/DadMermaid.png");
    resources.push("resources/DadMermaid2.png");
    resources.push("resources/GirlfriendMermaid.png");
    resources.push("resources/GirlMermaid.png");
    resources.push("resources/GirlMermaid2.png");
    resources.push("resources/MomMermaid.png");
    resources.push("resources/MomMermaid2.png");
    resources.push("resources/WorkerMermaid.png");
    resources.push("resources/WorkerMermaid2.png");
    resources.push("resources/WorkerMermaid3.png");
    var swimmer = new Array();
    var _loop_1 = function () {
        var img = new Image();
        img.onload = function () {
            var randomX = Math.random() * canvas.clientWidth;
            var randomY = Math.random() * canvas.clientHeight;
            var box = BoundedBox.WithAspectRatio(randomX, randomY, img.width, img.height, 300, 0.3);
            box.Percentage = Math.random();
            swimmer.push(new Swimmer(img, ctx, box));
        };
        img.src = resources[i];
    };
    for (var i = 0; i < resources.length; i++) {
        _loop_1();
    }
    var UpdateDisplay = function () {
        var grd = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);
        grd.addColorStop(0, "#a2c3f9");
        grd.addColorStop(1, "#4286f4");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        var sortRoutine = function (a, b) {
            var diff = a.Layout.Percentage - b.Layout.Percentage;
            if (diff === 0)
                diff = (a.img.id < b.img.id) ? 1 : 0;
            return diff;
        };
        swimmer.sort(function (a, b) { return a.Layout.Percentage - b.Layout.Percentage; });
        for (var i = 0; i < swimmer.length; i++) {
            swimmer[i].Swim();
        }
        //ctx.scale(0.1, 0.1);
        //ctx.drawImage(img[0], 10, 10);
        window.setTimeout(function () { return UpdateDisplay(); }, 10);
    };
    UpdateDisplay();
});
//# sourceMappingURL=Game.js.map