import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class Line7 extends Shape {
  shape = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
  ];

  weight = ShapeWeights.UNCOMMON;

  color = Color.hex(0x9de055);
}
