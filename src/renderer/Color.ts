export default class Color {
    public static RED = Color.rgb(255, 0, 0);
    public static GREEN = Color.rgb(0, 255, 0);
    public static BLUE = Color.rgb(0, 0, 255);
    public static BLACK = Color.rgb(0, 0, 0);
    public static WHITE = Color.rgb(255, 255, 255);
    public static YELLOW = Color.rgb(255, 255, 0);
    public static ORANGE = Color.rgb(255, 165, 0);
    public static PURPLE = Color.rgb(128, 0, 128);
    public static CYAN = Color.rgb(0, 255, 255);
    public static MAGENTA = Color.rgb(255, 0, 255);
    public static GRAY = Color.rgb(128, 128, 128);
    public static DARK_GRAY = Color.rgb(64, 64, 64);
    public static LIGHT_GRAY = Color.rgb(192, 192, 192);
    public static PINK = Color.rgb(255, 192, 203);
    public static BROWN = Color.rgb(165, 42, 42);
    public static LIGHT_BLUE = Color.rgb(173, 216, 230);
    public static DARK_BLUE = Color.rgb(0, 0, 139);
    public static LIME = Color.rgb(50, 205, 50);
    public static GOLD = Color.rgb(255, 215, 0);
    public static SILVER = Color.rgb(192, 192, 192);
    public static BRONZE = Color.rgb(205, 127, 50);

    public static hex(hexadecimal: number) {
        return this.hexAlpha(hexadecimal, 1.0);
    }

    public static hexAlpha(hexadecimal: number, alpha: number) {
        const red = (hexadecimal >> 16) & 0xFF;
        const green = (hexadecimal >> 8) & 0xFF;
        const blue = hexadecimal & 0xFF;

        return this.rgba(red, green, blue, alpha);
    }

    public static rgb(red: number, green: number, blue: number) {
        return this.rgba(red, green, blue, 1.0);
    }

    public static rgba(red: number, green: number, blue: number, alpha: number) {
        return new Color(red, green, blue, alpha);
    }

    public red: number;
    public green: number;
    public blue: number;
    public alpha: number;

    private constructor(red: number, green: number, blue: number, alpha: number) {
        this.red = red;
        this.blue = blue;
        this.green = green;
        this.alpha = alpha;
    }

    public toString() {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

    public getHexNumber() {
        return (this.red << 16) | (this.green << 8) | this.blue;
    }

    public brighter(amount: number) {
        return new Color(
            Math.min(255, this.red + amount),
            Math.min(255, this.green + amount),
            Math.min(255, this.blue + amount),
            this.alpha
        );
    }

    public translucent(amount: number) {
        return new Color(
            this.red,
            this.green,
            this.blue,
            amount
        );
    }
}