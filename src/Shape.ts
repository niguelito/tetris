import { Color } from "./renderer/Color";

export type ShapeDefinition = number[][];

export abstract class Shape {
    abstract shape: ShapeDefinition;

    abstract weight: number;

    abstract color: Color;

    abstract minDiff: number;

    public rotateCW90(): ShapeDefinition {
        const n = this.shape.length;
        const m = this.shape[0].length;

        const rotated: ShapeDefinition = Array.from({ length: m }, () => Array(n).fill(0));

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                rotated[j][n - 1 - i] = this.shape[i][j];
            }
        }

        return rotated;
    }

    public rotate180(): ShapeDefinition {
        const rotatedShape = this.shape.map(row => row.reverse()).reverse();
        return rotatedShape;
    }

    public rotateCCW90(): ShapeDefinition {
        const n = this.shape.length;
        const m = this.shape[0].length;
        
        const rotated: ShapeDefinition = Array.from({ length: m }, () => Array(n).fill(0));
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                rotated[m - j - 1][i] = this.shape[i][j];
            }
        }

        return rotated;
    }
}

export class ShapeWeights {
    public static RARE = 1;
    public static UNCOMMON = 5;
    public static COMMON = 8;
    public static VERY_COMMON = 12;
}

export class ShapeRegistry {
    private static registered: Shape[] = [];
    private static weighted: Shape[] = [];

    public static register(shape: Shape) {
        this.registered.push(shape);
    }

    public static closeRegistry() {
        this.registered.forEach((shape) => {
            for (let i = 0; i < shape.weight; i++) {
                this.weighted.push(shape);
            }
        });
    }

    public static randomInd(): number {
        return Math.floor(Math.random() * this.weighted.length);
    }

    public static selectRandom(): Shape {
        return this.weighted[this.randomInd()];
    }
}
