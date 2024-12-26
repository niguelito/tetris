import { Game } from "../Game";
import { Settings } from "./Settings";
import { Shape, ShapeRegistry } from "../shape/Shape";
import { ShapeRotation } from "../renderer/ShapeRenderer";

export type ArenaState = (number | null)[][];

export interface SavedState {
    score: number;
    highScores: number[];
    arenaState: ArenaState;
    currentPiece: CurrentPiece;
}

export interface CurrentPiece {
    piece: number;
    x: number;
    y: number;
    rot: number;
}

export class State {
    public static score = 0;
    public static get highScore() { return this.highScores[Settings.currentDifficulty] || 0; };
    public static set highScore(value: number) { this.highScores[Settings.currentDifficulty] = value; }
    public static highScores: number[] = [];
    
    public static currentPiece: number;
    public static pieceX = 0;
    public static pieceY = 0;
    public static pieceRot = ShapeRotation.NORMAL;
    public static arenaState: ArenaState = [];

    public static isPaused = false;

    public static init(state: SavedState) {
        this.score = state.score;
        this.highScores = state.highScores;
        this.arenaState = state.arenaState;
        
        this.currentPiece = state.currentPiece.piece;
        this.pieceX = state.currentPiece.x;
        this.pieceY = state.currentPiece.y;
        this.pieceRot = state.currentPiece.rot;
    }

    public static awardPoints(amount: number) {
        this.score += amount;
        this.highScore = Math.max(this.score, this.highScore);
    }

    public static emptyArena(): ArenaState {
        var arenaState = [];

        // initialize matrix with nulls
        // Game.arenaWidth is the width of the arena
        // Game.arenaHeight is the height of the arena
        for (let i = 0; i < Game.arenaHeight; i++) {
            arenaState.push(new Array(Game.arenaWidth).fill(null));
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

        shapeDefinition.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell > 0) {
                    try {
                        this.arenaState[y + i][x + j] = shape.color.getHexNumber();
                    } catch (e) {}
                }
            });
        });
    }

    public static getLines(): number[] {
        var nums: number[] = [];

        for (let i = 0; i < Game.arenaHeight; i++) {
            if (this.arenaState[i].every((cell) => cell !== null)) {
                nums.push(i);
            }
        }

        return nums;
    }

    public static gameOver(): boolean {
        var topRows = this.arenaState.slice(0, Game.arenaHeight - Game.deathHeight);
        return topRows.some((row) => row.some((cell) => cell !== null));
    }

    public static collides(dy = 0): boolean {
        var shape = ShapeRegistry.getShape(this.currentPiece);
        var shapeDefinition;
        switch (this.pieceRot) {
            default: shapeDefinition = shape.shape; break;
            case ShapeRotation.CW_90: shapeDefinition = shape.rotateCW90(); break;
            case ShapeRotation.CW_180: shapeDefinition = shape.rotate180(); break;
            case ShapeRotation.CCW_90: shapeDefinition = shape.rotateCCW90(); break;
        }

        var width = shapeDefinition[0].length;
        var height = shapeDefinition.length;

        for (let i = 0; i < height; i++) {
            if (this.pieceY + dy + i < 0) continue;

            for (let j = 0; j < width; j++) {
                if (shapeDefinition[i][j] > 0) {
                    var y = this.pieceY + dy + i + 1;

                    if (y == Game.arenaHeight) {
                        return true;
                    } else {
                        if (this.arenaState[y][this.pieceX + j] != null) {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }

    public static canMove(deltaX: number) {
        var shape = ShapeRegistry.getShape(this.currentPiece);
        var shapeDefinition;
        switch (this.pieceRot) {
            default: shapeDefinition = shape.shape; break;
            case ShapeRotation.CW_90: shapeDefinition = shape.rotateCW90(); break;
            case ShapeRotation.CW_180: shapeDefinition = shape.rotate180(); break;
            case ShapeRotation.CCW_90: shapeDefinition = shape.rotateCCW90(); break;
        }

        var width = shapeDefinition[0].length;
        var height = shapeDefinition.length;

        for (let i = 0; i < height; i++) {
            if (this.pieceY + i < 0) continue;

            for (let j = 0; j < width; j++) {
                if (shapeDefinition[i][j] > 0) {
                    var x = this.pieceX + j + deltaX;

                    if (x < 0 || x >= Game.arenaWidth) {
                        return false;
                    }

                    if (this.pieceY + i >= 0 && this.arenaState[this.pieceY + i][x] != null) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    public static canRotate(rot: number) {
        var shape = ShapeRegistry.getShape(this.currentPiece);
        var shapeDefinition;
        switch (rot) {
            default: shapeDefinition = shape.shape; break;
            case ShapeRotation.CW_90: shapeDefinition = shape.rotateCW90(); break;
            case ShapeRotation.CW_180: shapeDefinition = shape.rotate180(); break;
            case ShapeRotation.CCW_90: shapeDefinition = shape.rotateCCW90(); break;
        }

        // check if any of the cells would be out of bounds
        // or if any of the cells would collide with a cell in the arena
        for (let i = 0; i < shapeDefinition.length; i++) {
            for (let j = 0; j < shapeDefinition[i].length; j++) {
                if (shapeDefinition[i][j] > 0) {
                    if (this.pieceX + j < 0 || this.pieceX + j >= Game.arenaWidth) {
                        return false;
                    }

                    if (this.pieceY + i >= 0 && this.arenaState[this.pieceY + i][this.pieceX + j] != null) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    public static restart() {
        this.score = 0;
        this.arenaState = this.emptyArena();

        this.currentPiece = ShapeRegistry.selectShape();
        this.pieceX = Math.floor(Game.arenaWidth / 2 - ShapeRegistry.width(this.currentPiece) / 2);
        this.pieceY = ShapeRegistry.height(this.currentPiece) * -1;
        this.pieceRot = 0;
    }

    public static export(): SavedState {
        return {
            score: this.score,
            highScores: this.highScores,
            arenaState: this.arenaState,
            currentPiece: {
                piece: this.currentPiece,
                x: this.pieceX,
                y: this.pieceY,
                rot: this.pieceRot
            }
        }
    }
}