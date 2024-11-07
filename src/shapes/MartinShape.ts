import { Difficulty } from "../Settings";
import { Shape, ShapeDefinition, ShapeWeights } from "../Shape";
import { Color } from "../renderer/Color";

export class MartinShape extends Shape {
    shape: ShapeDefinition = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    weight: number = ShapeWeights.RARE;
    color: Color = Color.hex(0x8f1414);
    minDiff: number = Difficulty.HARD;
}