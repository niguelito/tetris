import Color from "../renderer/Color";
import { Settings } from "../state/Settings";

export type ShapeDefinition = number[][];

export default interface ShapeData {
    shape: ShapeDefinition;

    weight: number;

    color: Color;

    minDiff: number;

    name: string;

    credit: string;
}

export class Shape implements ShapeData {
    public shape: ShapeDefinition;

    public weight: number;

    public color: Color;

    public minDiff: number;

    public name: string;

    public credit: string;

    public constructor(data: ShapeData) {
        this.shape = data.shape;
        this.weight = data.weight;
        this.color = data.color;
        this.minDiff = data.minDiff;
        this.name = data.name;
        this.credit = data.credit;
    }

    private r90deg(s: ShapeDefinition) {
        const n = s.length;
        const m = s[0].length;

        const rotated: ShapeDefinition = Array.from({ length: m }, () => Array(n).fill(0));

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                rotated[j][n - 1 - i] = s[i][j];
            }
        }

        return rotated;
    }

    public rotateCW90(): ShapeDefinition {
        return this.r90deg(this.shape);
    }

    public rotate180(): ShapeDefinition {
        return this.r90deg(this.r90deg(this.shape));
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
    public static UNCOMMON = 2;
    public static COMMON = 3;
    public static VERY_COMMON = 5;
}

export class ShapeRegistry {
    private static registered: Shape[] = [];
    private static weighted: Shape[] = [];

    public static register(shape: ShapeData) {
        this.registered.push(new Shape(shape));
    }

    public static closeRegistry() {
        this.registered.forEach((shape) => {
            if (Settings.currentDifficulty < shape.minDiff) return;
            
            for (let i = 0; i < shape.weight; i++) {
                this.weighted.push(shape);
            }
        });
    }

    public static selectShape(): number {
        return Math.floor(Math.random() * this.weighted.length);
    }

    public static getShapes(): Shape[] {
        return this.registered;
    }

    public static getShape(index: number): Shape {
        return this.weighted[index];
    }

    public static width(shape: number): number {
        return this.getShape(shape).shape[0].length;
    }

    public static height(shape: number): number {
        return this.getShape(shape).shape.length;
    }
}