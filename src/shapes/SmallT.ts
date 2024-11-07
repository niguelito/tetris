import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class SmallT extends Shape {
  shape = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ];

  weight = ShapeWeights.COMMON;

  color = Color.hex(0xFF0D72);
}
