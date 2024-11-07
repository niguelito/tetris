import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class RightL extends Shape {
  shape = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ];

  weight = ShapeWeights.COMMON;

  color = Color.hex(0xF538FF);
}
