class Engine {
    public Wood: TimeCooker;
    public Rock: TimeCooker;

    constructor() {
        this.Wood = new TimeCooker(1000, 0, 1);
        this.Rock = new TimeCooker(7000, 0, 3);
    }
}