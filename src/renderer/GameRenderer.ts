import { Game } from "../Game";
import { Language, Settings } from "../state/Settings";
import { ShapeRegistry } from "../shape/Shape";
import { State } from "../state/State";
import Color from "./Color";
import GuiGraphics from "./GuiGraphics";
import { ShapeRenderer } from "./ShapeRenderer";

export default class GameRenderer {
    public static deathLineColor = Color.RED;
    public static deathLineSize = 2 / 45;

    public static render(graphics: GuiGraphics) {
        graphics.drawRect(Color.BLACK, 0, 0, Game.screenWidth, Game.screenHeight, false);
        
        ShapeRenderer.renderArena(graphics);

        if (State.currentPiece && !State.gameOver()) {
            var shape = ShapeRegistry.getShape(State.currentPiece);
            var x = State.pieceX;
            var y = State.pieceY;
            var rot = State.pieceRot;

            if (!State.collides()) ShapeRenderer.renderShape(graphics, shape, x, y, rot);
            else ShapeRenderer.renderShape(graphics, shape, x, y, rot, shape.color.brighter(-50));
        }

        this.renderDeathLine(graphics);
        this.renderScore(graphics);
    }

    static renderDeathLine(graphics: GuiGraphics) {
        var translatedY = Game.arenaHeight - Game.deathHeight;

        graphics.drawRect(this.deathLineColor, 0, translatedY, Game.arenaWidth, this.deathLineSize);
    }

    static renderScore(graphics: GuiGraphics) {
        var line = Game.arenaHeight - Game.deathHeight + 1;

        graphics.drawStringCentered(`${State.score}`, Color.WHITE, 100, Game.arenaWidth / 2, line - 1.5);
        graphics.drawStringCentered(Language.translation("highScore", State.highScore), Color.WHITE, 30, Game.arenaWidth / 2, line);
        graphics.drawStringCentered(Language.translation("currentDifficulty", Language.translate("difficulty." + Settings.currentDifficulty)), Color.WHITE, 30, Game.arenaWidth / 2, line + 0.8);
    }
}