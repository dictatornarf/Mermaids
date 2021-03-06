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