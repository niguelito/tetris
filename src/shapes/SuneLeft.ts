import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class SuneLeft extends Shape {
  shape = [
    [1, 1, 0],
    [0, 1, 1],
  ];

  weight = ShapeWeights.COMMON;

  color = Color.hex(0x3877FF);
}
