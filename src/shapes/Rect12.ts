import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class Rect12 extends Shape {
  shape = [
    [1, 1],
    [0, 0],
  ];

  weight = ShapeWeights.VERY_COMMON;

  color = Color.hex(0x701170);
}
