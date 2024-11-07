import { Shape, ShapeWeights } from '../Shape';
import { Color } from '../renderer/Color';

export class Cube1 extends Shape {
  shape: number[][] = [[1]];
  weight: number = ShapeWeights.VERY_COMMON;
  color: Color = Color.hex(0x55e096);
}
