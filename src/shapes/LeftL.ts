import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class LeftL extends Shape {
  shape = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ];

  weight = ShapeWeights.COMMON;

  color = Color.hex(0xFF8E0D);
}
