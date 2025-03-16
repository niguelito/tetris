import GameRenderer from "./renderer/GameRenderer.ts";
import GuiGraphics from "./renderer/GuiGraphics.ts";
import { ShapeRegistry } from "./shape/ShapeRegistry.ts";
import Settings from "./state/Settings.ts";
import State from "./state/State.ts";
import GameStorage from "./state/Storage.ts";

export default class Game {
    public static get arenaWidth() { return Settings.weightedDifficulty(10, 10, 12, 15, 15) };
    public static get arenaHeight() { return Settings.weightedDifficulty(18, 18, 22, 27, 27) };
    public static get deathHeight() { return Settings.weightedDifficulty(15, 15, 20, 24, 24) };
    public static screenWidth = 675;
    public static screenHeight = 1215;

    public static get dropScore() { return Settings.weightedDifficulty(1, 3, 5, 8, 10) }
    public static get hardDropScore() { return Settings.weightedDifficulty(3, 5, 8, 10, 15) };
    public static get landing() { return Settings.weightedDifficulty(10, 20, 50, 80, 100) };
    public static get lineClear() { return Settings.weightedDifficulty(75, 200, 450, 800, 1500) };

    public static get scale() { return Game.screenHeight / Game.arenaHeight };
    public static dropInterval = 430;
    public static dropKeyInterval = 44;
    public static lockDelay = 450;
    public static movementInterval = 76;
    public static saveInterval = 2000;

    public static timeout: number;
    public static moveTimeout: number;
    public static dropTimeout: number;
    public static saveTimeout: number;

    public static placeDelta: boolean = false;
    public static moveDelta: number = 0;
    public static moveDelta2: boolean[] = [false, false];
    public static rotateDelta: boolean = false;
    public static dropDelta: boolean = false;

    public static async render(delta: number, canvas: HTMLCanvasElement, texture: HTMLImageElement | null) {
        var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        var graphics = new GuiGraphics(ctx, delta);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        GameRenderer.render(graphics, texture);

        window.requestAnimationFrame((d) => Game.render(d, canvas, texture));
    }

    public static tick(a = false) {
        if (State.isPaused) return;
        if (Game.dropDelta && !a) return;

        if (State.gameOver()) {
            clearInterval(Game.timeout);

            // highlight pieces that ended the run
            var topRows = State.arenaState.slice(0, Game.arenaHeight - Game.deathHeight);
            for (let i = 0; i < topRows.length; i++) {
                for (let j = 0; j < topRows[i].length; j++) {
                    if (topRows[i][j] != null) {
                        State.arenaState[i][j] = 0xFF0000;
                    }
                }
            }

            return;
        }

        if (State.currentPiece != undefined) {
            if (State.collides()) {
                if (Game.placeDelta) {
                    State.putShape(ShapeRegistry.getShape(State.currentPiece), State.pieceX, State.pieceY, State.pieceRot);
                    State.awardPoints(Game.landing);

                    console.log("b");

                    Game.placeDelta = false;

                    var lines = State.getLines();
                    if (lines.length > 0) {
                        State.awardPoints(Math.ceil(Game.lineClear * Math.pow(4, lines.length - 1)));

                        lines.forEach(line => {
                            State.arenaState.splice(line, 1);
                            State.arenaState.unshift(new Array(Game.arenaWidth).fill(null));
                        });
                    }

                    State.nextPiece();
                } else {
                    Game.placeDelta = true;
                }
            } else {
                State.pieceY++;
            }
        } else {
            console.log('a')
            State.nextPiece();
        }
        

        if (!Game.timeout) {
            Game.timeout = setInterval(Game.tick, Game.dropInterval);
        }
    }

    public static move() {
        if (State.isPaused) return;

        if (State.gameOver()) {
            clearInterval(Game.moveTimeout);

            return;
        }

        if (Game.moveDelta != 0) {
            if (!Game.moveDelta2[0]) {
                Game.moveDelta2[0] = true;
            } else if (State.canMove(Game.moveDelta)) {
                State.pieceX += Game.moveDelta;
            }
        }

        else if (Game.rotateDelta) {
            var rot = (State.pieceRot + 1) % 4;
            if (!Game.moveDelta2[0]) {
                Game.moveDelta2[0] = true
            } else if (!Game.moveDelta2[1]) {
                Game.moveDelta2[1] = true;
            } else if (State.canRotate(rot)) {
                State.pieceRot = rot;
            }
        }

        else if (Game.moveDelta2[0]) {
            Game.moveDelta2[0] = false;
            Game.moveDelta2[1] = false;
        }

        if (!Game.moveTimeout) {
            Game.moveTimeout = setInterval(Game.move, Game.movementInterval);
        }
    }

    public static dropI() {
        if (State.isPaused) return;

        if (State.gameOver()) {
            clearInterval(Game.dropTimeout);

            return;
        }

        if (Game.dropDelta) {
            Game.tick(true);
            State.awardPoints(Game.dropScore);
        }

        if (!Game.dropTimeout) {
            Game.dropTimeout = setInterval(Game.dropI, Game.dropKeyInterval);
        }
    }

    public static save() {
        if (State.isPaused) return;

        GameStorage.save(State.export());

        if (!Game.saveTimeout) {
            Game.saveTimeout = setInterval(Game.save, Game.saveInterval);
        }
    }

    public static rotate(down: boolean) {
        if (State.isPaused) return;

        if (down) {
            Game.rotateDelta = true;

            var rot = (State.pieceRot + 1) % 4;
            if (State.canRotate(rot)) {
                State.pieceRot = rot;
            }
        } else {
            Game.rotateDelta = false;
        }
    }

    public static left(down: boolean) {
        if (State.isPaused) return;
        
        if (down) {
            Game.moveDelta = -1;

            if (State.canMove(-1)) {
                State.pieceX--;
            }
        } else {
            Game.moveDelta = 0;
        }
    }

    public static drop(down: boolean) {
        if (State.isPaused) return;

        if (down) {
            Game.dropDelta = true;
        } else {
            Game.dropDelta = false;
        }
    }

    public static right(down: boolean) {
        if (State.isPaused) return;
        
        if (down) {
            Game.moveDelta = 1;

            if (State.canMove(1)) {
                State.pieceX ++;
            }
        } else {
            Game.moveDelta = 0;
        }
    }

    public static hardDrop(down: boolean) {
        if (State.isPaused) return;
        if (down) {
            let dy = 0;
            while (!State.collides()) {
                State.pieceY++;
                dy++;
            }
            Game.placeDelta = true;
            Game.tick();
            State.awardPoints(Math.ceil(Game.hardDropScore * (dy / 3)));
        }
    }

    public static pause(down: boolean) {
        if (down) {
            State.isPaused = !State.isPaused;
        }

        const mainElement = document.getElementById('buttons');
        if (mainElement) {
            mainElement.dataset.paused = State.isPaused ? 'true' : 'false';
        }
    }

    public static stash(down: boolean) {
        if (down && !State.hasStashed) {
            if (State.stashedPiece == null) {
                State.stashedPiece = State.currentPiece;
                State.nextPiece();
            } else {
                let temp = State.stashedPiece;
                State.stashedPiece = State.currentPiece;
                State.hasStashed = true;
                State.nextPiece(temp);
            }
        }
    }

    public static download() {
        var canvas = document.getElementById('canvas') as HTMLCanvasElement;
        var link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'tetris.png';
        link.click();
    }
}