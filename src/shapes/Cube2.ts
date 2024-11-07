import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class Cube2 extends Shape {
  shape = [
    [1, 1],
    [1, 1],
  ];

  weight = ShapeWeights.COMMON;

  color = Color.hex(0x0DC2FF);
}
