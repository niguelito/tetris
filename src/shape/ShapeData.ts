import Color from "../renderer/Color";
import { ShapeDefinition } from "./Shape";

export default interface ShapeData {
    shape: ShapeDefinition;

    weight: number;

    color: Color;

    minDiff: number;

    name: string;

    credit: string;
}