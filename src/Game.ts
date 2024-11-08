import { Settings } from "./Settings";
import { GameRenderer } from "./renderer/GameRenderer";
import { GuiGraphics } from "./renderer/GuiGraphics";

export class Game {
    public static get arenaWidth() { return Settings.weightedDifficulty(10, 10, 15, 15, 15) };
    public static get arenaHeight() { return Settings.weightedDifficulty(18, 18, 27, 27, 27) };
    public static get deathHeight() { return Settings.weightedDifficulty(15, 15, 24, 24, 24) };
    public static screenWidth = 675;
    public static screenHeight = 1215;

    public static get scale() { return this.screenHeight / this.arenaHeight };
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
