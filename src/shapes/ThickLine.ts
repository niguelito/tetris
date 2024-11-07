import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class ThickLine extends Shape {
  shape = [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
  ];

  weight = ShapeWeights.RARE;

  color = Color.hex(0xe66787);
}
