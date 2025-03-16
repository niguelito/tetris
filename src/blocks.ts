import registerShapes from './shape/RegisterShapes.ts';
import GuiGraphics from './renderer/GuiGraphics.ts';
import { ShapeRenderer } from './renderer/ShapeRenderer.ts';
import Language from './state/Language.ts';
import GameStorage from './state/Storage.ts';
import Settings from './state/Settings.ts';
import { ShapeRegistry } from './shape/ShapeRegistry.ts';

async function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
    });
}

(async function() {
var state = GameStorage.loadSettings();
await Settings.init(state);

Language.updateTexts();
Settings.loadBackground();
registerShapes();

const texture = state.texture != "none" ? await loadImage("./assets/textures/" + state.texture + ".png") : null;

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
        graphics.pushScale(Math.min(scale - scale % 2, 45));

        ShapeRenderer.renderShape(graphics, shape, texture, 0, 0);
    });

});

Language.updateTexts();

})();