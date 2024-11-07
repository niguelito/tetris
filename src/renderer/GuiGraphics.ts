import { Game } from '../Game';
import { Color } from './Color';

export class GuiGraphics {
    public static FONT = 'Arial, Helvetica, sans-serif';
    private context: CanvasRenderingContext2D;
    private delta: number;
    
    public constructor(context: CanvasRenderingContext2D, delta: number) {
        this.context = context;
        this.delta = delta;
    }

    public getDelta() {
        return this.delta;
    }

    public resizePix(p: number): number {
        return p * Game.scale;
    }

    public drawRect(color: Color, x: number, y: number, width: number, height: number, sized = true) {
        this.context.fillStyle = color.toString();

        var rx = sized? this.resizePix(x) : x;
        var ry = sized? this.resizePix(y) : y;
        var rw = sized? this.resizePix(width) : width;
        var rh = sized? this.resizePix(height) : height;
        this.context.fillRect(rx, ry, rw, rh);
    }

    public drawString(text: string, color: Color, fontSize: number, x: number, y: number, sized = true) {
        var rx = sized? this.resizePix(x) : x;
        var ry = sized? this.resizePix(y) : y;
        
        this.context.font = `${fontSize}px ${GuiGraphics.FONT}`;
        this.context.fillStyle = color.toString();
        this.context.fillText(text, rx, ry);
    }

    public drawStringCentered(text: string, color: Color, fontSize: number, x: number, y: number, sized = true) {
        var rx = sized? this.resizePix(x) : x;
        var ry = sized? this.resizePix(y) : y;
        
        this.context.font = `${fontSize}px ${GuiGraphics.FONT}`;
        this.context.fillStyle = color.toString();
        this.context.textAlign = "center";
        this.context.fillText(text, rx, ry);
    }
}
