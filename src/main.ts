import { Game } from "./Game";
import KeyboardHandler from "./KeyboardHandler";
import registerShapes from "./shape/RegisterShapes";
import { Language, Settings } from "./state/Settings";
import { ShapeRegistry } from "./shape/Shape";
import { State } from "./state/State";
import { GameStorage } from "./state/Storage";
import GuiGraphics from "./renderer/GuiGraphics";
import { ShapeRenderer } from "./renderer/ShapeRenderer";
import Color from "./renderer/Color";

(async function() {
    var canvas = document.getElementById('canvas');

    var state = GameStorage.load();
    var settings = GameStorage.loadSettings();
    State.init(state);
    await Settings.init(settings);

    registerShapes();

    ShapeRegistry.closeRegistry();

    KeyboardHandler.init();

    window.requestAnimationFrame((d) => {
        Game.render(d, canvas as HTMLCanvasElement);

        function renderQueueShape(c: HTMLCanvasElement, delta: number) {
            try {
                var shape = ShapeRegistry.getShape(State.pieceQueue[parseInt(c.getAttribute("data-i") as string)]);
    
                var ctx = c.getContext("2d") as CanvasRenderingContext2D;
                var graphics = new GuiGraphics(ctx, delta);
                ctx.clearRect(0, 0, c.width, c.height);
                        
                var scale = c.width / shape.shape.length;
                graphics.pushScale(Math.min(scale - scale % 2, 50));
        
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
                console.log("rendered");

                if (State.stashedPiece == null) return;

                var shape = ShapeRegistry.getShape(State.stashedPiece);
    
                var ctx = c.getContext("2d") as CanvasRenderingContext2D;
                var graphics = new GuiGraphics(ctx, delta);
                ctx.clearRect(0, 0, c.width, c.height);
                        
                var scale = c.width / shape.shape.length;
                graphics.pushScale(Math.min(scale - scale % 2, 50));
        
                ShapeRenderer.renderShape(graphics, shape, 0, 0);
            } catch (e) {}
        }

        var s = document.getElementById("stashRenderer");
        window.requestAnimationFrame((d) => renderStashShape(s as HTMLCanvasElement, d));

        function renderScore(c: HTMLCanvasElement, delta: number) {
            try {
                var ctx = c.getContext("2d") as CanvasRenderingContext2D;
                ctx.clearRect(0, 0, c.width, c.height);
                var graphics = new GuiGraphics(ctx, delta);

                graphics.pushScale(1);

                graphics.drawString(`${State.score}`, Color.WHITE, 20, 0, 0);
                graphics.drawString(Language.translation("highScore", State.highScore), Color.WHITE, 10, 0, 30);
                graphics.drawString(Language.translation("currentDifficulty", Language.translate("difficulty." + Settings.currentDifficulty)), Color.WHITE, 10, 0, 60);
            } catch (e) {}

            window.requestAnimationFrame((d) => renderScore(c, d));
        }

        var score = document.getElementById("scoreRenderer");
        window.requestAnimationFrame((d) => renderScore(score as HTMLCanvasElement, d));
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
    var stash = ['Shift', 'e']
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
