import KeyboardHandler from "./KeyboardHandler";
import registerShapes from "./shape/RegisterShapes";
import GuiGraphics from "./renderer/GuiGraphics";
import { ShapeRenderer } from "./renderer/ShapeRenderer";
import { ShapeRegistry } from "./shape/ShapeRegistry";
import GameStorage from "./state/Storage";
import Settings from "./state/Settings";
import State from "./state/State";
import Game from "./Game";
import Language from "./state/Language";

(async function() {
    var canvas = document.getElementById('canvas');

    var state = GameStorage.load();
    var settings = GameStorage.loadSettings();
    await Settings.init(settings);
    State.init(state);
    Settings.loadBackground();

    registerShapes();

    ShapeRegistry.closeRegistry();

    KeyboardHandler.init();

    if (!ShapeRegistry.exists(State.currentPiece)) State.currentPiece = ShapeRegistry.selectShape();

    for (let i = 0; i < State.pieceQueue.length; i++) {
        if (!ShapeRegistry.exists(State.pieceQueue[i])) State.pieceQueue[i] = ShapeRegistry.selectShape();
    }

    window.requestAnimationFrame((d) => {
        Game.render(d, canvas as HTMLCanvasElement);

        function renderQueueShape(c: HTMLCanvasElement, delta: number) {
            try {
                var shape = ShapeRegistry.getShape(State.pieceQueue[parseInt(c.getAttribute("data-i") as string)]);
    
                var ctx = c.getContext("2d") as CanvasRenderingContext2D;
                var graphics = new GuiGraphics(ctx, delta);
                ctx.clearRect(0, 0, c.width, c.height);
                        
                var scale = c.width / shape.shape.length;
                graphics.pushScale(Math.min(scale - scale % 2, 45));
        
                ShapeRenderer.renderShape(graphics, shape, 0, 0);
            } catch (e) {}
    
            window.requestAnimationFrame((d) => renderQueueShape(c, d));
        }
    
        document.querySelectorAll("canvas.queueRenderer").forEach((c) => {
            window.requestAnimationFrame(delta => renderQueueShape(c as HTMLCanvasElement, delta));
            console.log(c);
        });

        function renderStashShape(c: HTMLCanvasElement, delta: number) {
            window.requestAnimationFrame((d) => renderStashShape(c, d));
            
            try {
                if (State.stashedPiece == null) return;

                var shape = ShapeRegistry.getShape(State.stashedPiece);
    
                var ctx = c.getContext("2d") as CanvasRenderingContext2D;
                var graphics = new GuiGraphics(ctx, delta);
                ctx.clearRect(0, 0, c.width, c.height);
                        
                var scale = c.width / shape.shape.length;
                graphics.pushScale(Math.min(scale - scale % 2, 45));
        
                ShapeRenderer.renderShape(graphics, shape, 0, 0);
            } catch (e) {}
        }

        var s = document.getElementById("stashRenderer");
        window.requestAnimationFrame((d) => renderStashShape(s as HTMLCanvasElement, d));
    });

    if (State.gameOver()) {
        State.restart();
    }

    Game.tick();
    Game.move();
    Game.dropI();
    Game.save();

    (document.getElementById("score") as HTMLParagraphElement).innerText = `${State.score}`;
    (document.getElementById("highScore") as HTMLParagraphElement).innerText = `${State.highScore}`;
    (document.getElementById("difficulty") as HTMLParagraphElement).innerText = Language.translate("difficulty." + Settings.currentDifficulty);

    State.setScoreListener(() => {
        (document.getElementById("score") as HTMLParagraphElement).innerText = `${State.score}`;
        (document.getElementById("highScore") as HTMLParagraphElement).innerText = `${State.highScore}`;
    });

    var rotate = ['w', 'ArrowUp'];
    var left = ['a', 'ArrowLeft'];
    var drop = ['s', 'ArrowDown'];
    var right = ['d', 'ArrowRight'];
    var hardDrop = [' ', 'x'];
    var stash = ['Shift', 'e', 'i']
    var pause = ['p', 'Escape', 'Tab'];

    KeyboardHandler.bind(rotate, Game.rotate);
    KeyboardHandler.bind(left, Game.left);
    KeyboardHandler.bind(drop, Game.drop);
    KeyboardHandler.bind(right, Game.right);
    KeyboardHandler.bind(hardDrop, Game.hardDrop);
    KeyboardHandler.bind(pause, Game.pause);
    KeyboardHandler.bind(stash, Game.stash);

    document.getElementById("pauseplay")?.addEventListener('click', () => Game.pause(true));
    document.getElementById("restart")?.addEventListener('click', () => { State.restart(); window.location.reload(); });
    document.getElementById("download")?.addEventListener('click', () => Game.download());

    // save when page closes
    window.addEventListener('beforeunload', () => Game.save());

    Language.updateTexts();
})();
