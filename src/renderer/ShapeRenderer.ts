import { GuiGraphics } from "./GuiGraphics";
import { Shape } from "../Shape";
import { State } from "../State";
import { Color } from "./Color";
import { Game } from "../Game";

export class ShapeRotation {
    public static NORMAL = 0;
    public static CW_90 = 1;
    public static CW_180 = 2;
    public static CCW_90 = 3;
}

export class ShapeRenderer {
    public static renderShape(graphics: GuiGraphics, shape: Shape, x: number, y: number, rotation = ShapeRotation.NORMAL) {
        var shapeDefinition;
        switch (rotation) {
            default: shapeDefinition = shape.shape; break;
            case ShapeRotation.CW_90: shapeDefinition = shape.rotateCW90(); break;
            case ShapeRotation.CW_180: shapeDefinition = shape.rotate180(); break;
            case ShapeRotation.CCW_90: shapeDefinition = shape.rotateCCW90(); break;
        }
        
        for (var row = 0; row < shapeDefinition.length; row++) {
            for (var col = 0; col < shapeDefinition[0].length; col++) {
                if (shapeDefinition[row][col] > 0) {
                    var cellValue = shapeDefinition[row][col];

                    if (cellValue != 0) {
                        graphics.drawRect(
                            shape.color,
                            (x + col),
                            (y + row),
                            1,
                            1
                        );
                    }
                }
            }
        }
    }

    static renderArena(graphics: GuiGraphics) {
        for (let i = 0; i < State.arenaState.length; i++) {
            for (let j = 0; j < State.arenaState[i].length; j++) {
                if (State.arenaState[i][j] != null) {
                    var y = Game.arenaHeight - Game.deathHeight;
                    graphics.drawRect(Color.hex(State.arenaState[i][j] as number), i, y + j, 1, 1);
                }
            }
        }
    }
}