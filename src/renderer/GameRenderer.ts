import Game from "../Game";
import { ShapeRegistry } from "../shape/ShapeRegistry";
import Settings from "../state/Settings";
import State from "../state/State";
import Color from "./Color";
import GuiGraphics from "./GuiGraphics";
import { ShapeRenderer } from "./ShapeRenderer";

export default class GameRenderer {
    public static render(graphics: GuiGraphics) {
        ShapeRenderer.renderArena(graphics);

        if (State.currentPiece != undefined && !State.gameOver()) {
            var shape = ShapeRegistry.getShape(State.currentPiece);
            var x = State.pieceX;
            var y = State.pieceY;
            var rot = State.pieceRot;

            if (Settings.showCollisionPath) {
                let dy = 0;
                while (!State.collides(dy)) dy++;
                ShapeRenderer.renderShape(graphics, shape, x, y + dy, rot, Color.hex(0x474747));
            }

            if (!State.collides()) ShapeRenderer.renderShape(graphics, shape, x, y, rot);
            else ShapeRenderer.renderShape(graphics, shape, x, y, rot, shape.color.brighter(-50));
        }

        this.renderDeathLine(graphics);
    }

    static renderDeathLine(graphics: GuiGraphics) {
        var deathLineColor = Color.RED;
        var deathLineSize = 3;

        var translatedY = Game.arenaHeight - Game.deathHeight;

        graphics.drawLine(deathLineColor, deathLineSize, 0, translatedY, Game.arenaWidth, translatedY);

    }
}