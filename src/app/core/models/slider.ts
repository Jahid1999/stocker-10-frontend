export class Slider{

    public trading_code!: string;
    public trade!: number;
    public price!: number;
    public percentage!: number;

    constructor(){
        this.trading_code = '';
        this.trade = 0;
        this.price = 0;
        this.percentage = 0;
    }
}
