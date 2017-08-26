$(document).ready(() => {
    let canvas = document.getElementById("cGame");
    let ctx = (<HTMLCanvasElement>canvas).getContext("2d");

    let resources: Array<string> = new Array<string>();
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

    let swimmer: Array<Swimmer> = new Array<Swimmer>();
    for (var i = 0; i < resources.length; i++) {
        let img = new Image();
        img.onload = () => {
            let randomX = Math.random() * canvas.clientWidth;
            let randomY = Math.random() * canvas.clientHeight;
            let box = BoundedBox.WithAspectRatio(randomX, randomY, img.width, img.height, 300, 0.3);
            box.Percentage = Math.random();
            swimmer.push(new Swimmer(img, ctx, box));
        };
        img.src = resources[i];
    }

    let UpdateDisplay : () => void = () => {
        let grd = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);
        grd.addColorStop(0, "#a2c3f9");
        grd.addColorStop(1, "#4286f4");

        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

        let sortRoutine = (a: Swimmer, b: Swimmer) => {
            let diff = a.Layout.Percentage - b.Layout.Percentage;
            if (diff === 0)
                diff = (a.img.id < b.img.id) ? 1 : 0;
            return diff;
        };

        swimmer.sort((a, b) => a.Layout.Percentage - b.Layout.Percentage);
        for (var i = 0; i < swimmer.length; i++) {
            swimmer[i].Swim();
        }

        //ctx.scale(0.1, 0.1);
        //ctx.drawImage(img[0], 10, 10);

        window.setTimeout(() => UpdateDisplay(), 10);
    }

    UpdateDisplay();
});