import GuiGraphics from "./GuiGraphics";
import { Shape } from "../shape/Shape";
import { State } from "../state/State";
import Color from "./Color";

export class ShapeRotation {
    public static NORMAL = 0;
    public static CW_90 = 1;
    public static CW_180 = 2;
    public static CCW_90 = 3;
}

export class ShapeRenderer {
    public static renderShape(graphics: GuiGraphics, shape: Shape, x: number, y: number, rotation = ShapeRotation.NORMAL, color = shape.color) {
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
                            color,
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
        State.arenaState.forEach((row, y) => {
            row.forEach((cell, x) => {
                if (cell != null) {
                    graphics.drawRect(
                        Color.hex(cell),
                        x,
                        y,
                        1,
                        1
                    );
                }
            });
        });
    }
}