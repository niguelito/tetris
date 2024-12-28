import registerShapes from './shape/RegisterShapes.ts';
import GuiGraphics from './renderer/GuiGraphics.ts';
import { ShapeRenderer } from './renderer/ShapeRenderer.ts';
import { Language, Settings } from './state/Settings.ts';
import { ShapeRegistry } from './shape/Shape.ts';
import { GameStorage } from "./state/Storage.ts";

(async function() {
var state = GameStorage.loadSettings();
await Settings.init(state);

Language.updateTexts();

registerShapes();

var e = document.getElementById("blocks");
ShapeRegistry.getShapes().forEach((shape) => {
    const div = document.createElement("div");
    div.classList.add("block");

    div.innerHTML = `
    <canvas width="100" height="100"></canvas>
    <div class="metadata">
        <h2>${shape.name}</h2>
        <p>${Language.translation('blocks.credit', shape.credit)}</p>
        <p>${Language.translation('blocks.diff', Language.translate("difficulty." + shape.minDiff))}</p>
        <p>${Language.translation('blocks.rarity', Language.translate("rarity." + shape.weight))}</p>
    </div>
    `;

    e?.appendChild(div);

    const canvas = div.querySelector("canvas") as HTMLCanvasElement;
    
    window.requestAnimationFrame((delta) => {
        var graphics = new GuiGraphics(canvas.getContext("2d") as CanvasRenderingContext2D, delta);
        
        var scale = canvas.width / shape.shape.length;
        graphics.pushScale(Math.max(scale - scale % 2, 45));

        ShapeRenderer.renderShape(graphics, shape, 0, 0);
    });

});

Language.updateTexts();

})();