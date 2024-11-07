import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class TwinTowers extends Shape {
  shape = [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ];

  weight = ShapeWeights.SUPER_RARE;

  color = Color.hex(0xe3cf5d);
}
