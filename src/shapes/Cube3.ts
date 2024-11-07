import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class Cube3 extends Shape {
  shape = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  weight = ShapeWeights.UNCOMMON;

  color = Color.hex(0xd0e667);
}
