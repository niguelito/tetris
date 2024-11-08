import { Game } from "./Game";
import { SavedSettings, Settings } from "./Settings";
import { Shape } from "./Shape";
import { ShapeRotation } from "./renderer/ShapeRenderer";

export type ArenaState = (number | null)[][];

export interface SavedState {
    score: number;
    highScore: number;
    arenaState: ArenaState;
    settings: SavedSettings;
    currentPiece: CurrentPiece;
}

export interface CurrentPiece {
    piece: number;
    x: number;
    y: number;
    rot: number;
}

export class State {
    public static get drop() { return Settings.weightedDifficulty(1, 3, 5, 8, 10) }
    public static get hardDrop() { return Settings.weightedDifficulty(3, 5, 8, 10, 15) };
    public static get landing() { return Settings.weightedDifficulty(10, 20, 50, 80, 100) };
    public static get lineClear() { return Settings.weightedDifficulty(75, 200, 450, 800, 1500) };

    public static score = 0;
    public static highScore = 0;
    
    public static currentPiece: Shape;
    public static pieceX = 0;
    public static pieceY = 0;
    public static arenaState: ArenaState = [];

    public static init(state: SavedState) {
        this.score = state.score;
        this.highScore = state.highScore;
        this.arenaState = state.arenaState;
        Settings.update(state.settings);
    }

    public static emptyArena(): ArenaState {
        var arenaState = [];

        for (let i = 0; i < Game.deathHeight; i++) {
            var r = [];
            for (let j = 0; j < Game.arenaWidth; j++) {
                r.push(null);
            }
            arenaState.push(r);
        }

        return arenaState;
    }

    public static putShape(shape: Shape, x: number, y: number, rot: ShapeRotation) {
        var shapeDefinition;
        switch (rot) {
            default: shapeDefinition = shape.shape; break;
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
    }
}