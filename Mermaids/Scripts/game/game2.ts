$(document).ready(() => {
    let engine: Engine = new Engine();

    let canvas = document.getElementById("cGame");
    let ctx = (<HTMLCanvasElement>canvas).getContext("2d");
    //let img: Array<HTMLImageElement> = new Array<HTMLImageElement>();

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

    //img.push(<HTMLImageElement>document.getElementById("img1"));
    //img.push(<HTMLImageElement>document.getElementById("img2"));
    //img.push(<HTMLImageElement>document.getElementById("img3"));
    //img.push(<HTMLImageElement>document.getElementById("img4"));
    //img.push(<HTMLImageElement>document.getElementById("img5"));
    //img.push(<HTMLImageElement>document.getElementById("img6"));
    //img.push(<HTMLImageElement>document.getElementById("img7"));
    //img.push(<HTMLImageElement>document.getElementById("img8"));
    //img.push(<HTMLImageElement>document.getElementById("img9"));
    //img.push(<HTMLImageElement>document.getElementById("img10"));
    //img.push(<HTMLImageElement>document.getElementById("img11"));
    //img.push(<HTMLImageElement>document.getElementById("img12"));
    //img.push(<HTMLImageElement>document.getElementById("img13"));
    //img.push(<HTMLImageElement>document.getElementById("img14"));
    //img.push(<HTMLImageElement>document.getElementById("img15"));

    //let swimmer: Array<Swimmer> = new Array<Swimmer>();
    //for (var i = 0; i < img.length; i++) {
    //    let randomX = Math.random() * canvas.clientWidth;
    //    let randomY = Math.random() * canvas.clientHeight;
    //    let box = BoundedBox.WithAspectRatio(randomX, randomY, img[i].width, img[i].height, 300, 0.3);
    //    box.Percentage = Math.random();
    //    swimmer.push(new Swimmer(img[i], ctx, box));
    //}
    ////let box = new BoundedBox(200, 20, img[0].width, img[0].height, 0.1);
    ////let box1 = BoundedBox.WithAspectRatio(100, 50, img[0].width, img[0].height, 200, 0.1);
    ////let box2 = BoundedBox.WithAspectRatio(300, 150, img[0].width, img[0].height, 200, 0.1);
    ////let swimmer1: Swimmer = new Swimmer(img[0], ctx, box1);
    ////let swimmer2: Swimmer = new Swimmer(img[0], ctx, box2);
    ////box.Percentage = 1;

    let btnWood = $("#btnWood");
    let showWood = $("#showWood");
    btnWood.on("click", () => engine.Wood.Cook());

    let btnRock = $("#btnRock");
    let showRock = $("#showRock");
    btnRock.on("click", () => engine.Rock.Cook());

    let UpdateDisplay : () => void = () => {
        showWood.html(engine.Wood.GetAmount() + " %" + (engine.Wood.GetPercentage() * 100).toFixed(2));
        if (engine.Wood.IsCooking()) {
            btnWood.hide();
        } else {
            btnWood.show();
        }

        showRock.html(engine.Rock.GetAmount() + " %" + (engine.Rock.GetPercentage() * 100).toFixed(2));
        if (engine.Rock.IsCooking()) {
            btnRock.hide();
        } else {
            btnRock.show();
        }

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