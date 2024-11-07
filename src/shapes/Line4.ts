import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class Line4 extends Shape {
  shape = [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ];

  weight = ShapeWeights.COMMON;

  color = Color.hex(0x0DFF72);
}
