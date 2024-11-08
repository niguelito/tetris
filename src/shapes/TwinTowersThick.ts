import { Difficulty } from '../Settings';
import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class TwinTowersThick extends Shape {
  shape = [
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
  ];

  weight = ShapeWeights.RARE;

  color = Color.hex(0x297f87);

  minDiff: number = Difficulty.HARD;
}
