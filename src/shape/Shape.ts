import Color from "../renderer/Color";
import ShapeData from "./ShapeData";

export type ShapeDefinition = number[][];

export default class Shape implements ShapeData {
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