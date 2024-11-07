import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class Rect32 extends Shape {
  shape = [
    [1, 1, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];

  weight = ShapeWeights.RARE;

  color = Color.hex(0xe69c67);
}
