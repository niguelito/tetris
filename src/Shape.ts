import { Color } from "./renderer/Color";

export type ShapeDefinition = number[][];

export abstract class Shape {
    abstract shape: ShapeDefinition;

    abstract weight: number;

    abstract color: Color;

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
    public static SUPER_RARE = 1;
    public static RARE = 5;
    public static UNCOMMON = 8;
    public static COMMON = 10;
    public static VERY_COMMON = 15;
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

    public static selectRandom(): Shape {
        const i = Math.floor(Math.random() * this.weighted.length);

        return this.weighted[i];
    }
}
