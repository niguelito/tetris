import Settings from "../state/Settings";
import Shape from "./Shape";
import ShapeData from "./ShapeData";

export class ShapeRegistry {
    private static registered: Shape[] = [];
    private static weighted: Shape[] = [];

    public static register(shape: ShapeData) {
        this.registered.push(new Shape(shape));
    }

    public static closeRegistry() {
        this.registered.forEach((shape) => {
            if (Settings.currentDifficulty < shape.minDiff) return;
            
            for (let i = 0; i < shape.weight; i++) {
                this.weighted.push(shape);
            }
        });
    }

    public static selectShape(): number {
        return Math.floor(Math.random() * this.weighted.length);
    }

    public static getShapes(): Shape[] {
        return this.registered;
    }

    public static getShape(index: number): Shape {
        return this.weighted[index];
    }

    public static width(shape: number): number {
        return this.getShape(shape).shape[0].length;
    }

    public static height(shape: number): number {
        return this.getShape(shape).shape.length;
    }

    public static exists(shape: number): boolean {
        return shape >= 0 && shape < this.weighted.length;
    }
}