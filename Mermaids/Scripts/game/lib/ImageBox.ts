class ImageBox extends Box {
    constructor(public Img: HTMLImageElement, X: number, Y: number) {
        super(X, Y, Img.width, Img.height);
    }
}