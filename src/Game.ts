import { GameRenderer } from "./renderer/GameRenderer";
import { GuiGraphics } from "./renderer/GuiGraphics";

export class Game {
    public static arenaWidth = 15;
    public static arenaHeight = 27;
    public static deathHeight = 24;
    public static screenWidth = 675;
    public static screenHeight = 1215;

    public static scale = this.screenHeight / this.arenaHeight;
    public static dropInterval = 350;
    public static dropKeyInterval = 44;
    public static lockDelay = 450;
    public static horizontalMovementInterval = 76;

    public static async render(delta: number, canvas: HTMLCanvasElement) {
        var graphics = new GuiGraphics(canvas.getContext("2d") as CanvasRenderingContext2D, delta);

        GameRenderer.render(graphics);

        window.requestAnimationFrame((d) => this.render(d, canvas));
    }
}
