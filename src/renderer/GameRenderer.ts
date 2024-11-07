import { Game } from "../Game";
import { State } from "../State";
import { Color } from "./Color";
import { GuiGraphics } from "./GuiGraphics";
import { ShapeRenderer } from "./ShapeRenderer";

export class GameRenderer {
    public static deathLineColor = Color.RED;
    public static deathLineSize = 8 / 45;

    public static render(graphics: GuiGraphics) {
        graphics.drawRect(Color.BLACK, 0, 0, Game.screenWidth, Game.screenHeight, false);
        
        ShapeRenderer.renderArena(graphics);

        this.renderDeathLine(graphics);
        this.renderScore(graphics);
    }

    static renderDeathLine(graphics: GuiGraphics) {
        var translatedY = Game.arenaHeight - Game.deathHeight;

        graphics.drawRect(this.deathLineColor, 0, translatedY, Game.arenaWidth, this.deathLineSize);
    }

    static renderScore(graphics: GuiGraphics) {
        graphics.drawStringCentered(`${State.score}`, Color.WHITE, 100, Game.arenaWidth / 2, 2.5);
        graphics.drawStringCentered(`High Score: ${State.highScore}`, Color.WHITE, 40, Game.arenaWidth / 2, 4.5);
    }
}