import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class TShape extends Shape {
  shape = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ];

  weight = ShapeWeights.UNCOMMON;

  color = Color.hex(0xB603FC);
}
