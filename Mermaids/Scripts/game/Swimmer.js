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