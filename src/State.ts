import { Game } from "./Game";
import { Shape } from "./Shape";
import { ShapeRotation } from "./renderer/ShapeRenderer";

export interface SavedState {
    score: number;
    highScore: number;
    arenaState: (number | null)[][];
}

export class State {
    public static drop = 2;
    public static hardDrop = 8;
    public static landing = 20;
    public static lineClear = 200;

    public static score = 0;
    public static highScore = 0;
    
    public static arenaState: (number | null)[][] = [];

    public static init() {
        this.arenaState = [];

        for (let i = 0; i < Game.deathHeight; i++) {
            var r = [];
            for (let j = 0; j < Game.arenaWidth; j++) {
                r.push(null);
            }
            this.arenaState.push(r);
        }
    }

    public static putShape(shape: Shape, x: number, y: number, rot: ShapeRotation) {
        var shapeDefinition;
        switch (rot) {
            case ShapeRotation.NORMAL: shapeDefinition = shape.shape; break;
            case ShapeRotation.CW_90: shapeDefinition = shape.rotateCW90(); break;
            case ShapeRotation.CW_180: shapeDefinition = shape.rotate180(); break;
            case ShapeRotation.CCW_90: shapeDefinition = shape.rotateCCW90(); break;
        }

        for (var row = 0; row < shapeDefinition.length; row++) {
            for (var col = 0; col < shapeDefinition[0].length; col++) {
                if (shapeDefinition[row][col] > 0) {
                    this.arenaState[x + col][y + row] = shape.color.getHexNumber();
                }
            }
        }

        console.log(this.arenaState);
    }
}