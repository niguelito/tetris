import { Settings } from "./Settings";
import { ShapeRegistry } from "./Shape.ts";
import { State } from "./State.ts";
import GameRenderer from "./renderer/GameRenderer.ts";
import GuiGraphics from "./renderer/GuiGraphics.ts";

export class Game {
    public static get arenaWidth() { return Settings.weightedDifficulty(10, 10, 15, 15, 15) };
    public static get arenaHeight() { return Settings.weightedDifficulty(18, 18, 27, 27, 27) };
    public static get deathHeight() { return Settings.weightedDifficulty(15, 15, 24, 24, 24) };
    public static screenWidth = 675;
    public static screenHeight = 1215;

    public static get scale() { return Game.screenHeight / Game.arenaHeight };
    public static dropInterval = 350;
    public static dropKeyInterval = 44;
    public static lockDelay = 450;
    public static movementInterval = 76;

    public static timeout: number;
    public static moveTimeout: number;
    public static dropTimeout: number;

    public static placeDelta: boolean = false;
    public static moveDelta: number = 0;
    public static moveDelta2: boolean = false;
    public static rotateDelta: boolean = false;
    public static dropDelta: boolean = false;

    public static async render(delta: number, canvas: HTMLCanvasElement) {
        var graphics = new GuiGraphics(canvas.getContext("2d") as CanvasRenderingContext2D, delta);

        GameRenderer.render(graphics);

        window.requestAnimationFrame((d) => Game.render(d, canvas));
    }

    public static tick(a = false) {
        if (State.isPaused) return;
        if (Game.dropDelta && !a) return;

        if (State.gameOver()) {
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

        // GameStorage.export(State.export());
        if (State.currentPiece) {
            if (State.collides()) {
                if (Game.placeDelta) {
                    State.putShape(ShapeRegistry.getShape(State.currentPiece), State.pieceX, State.pieceY, State.pieceRot);
                    
                    State.currentPiece = ShapeRegistry.selectShape();
                    State.pieceX = Math.floor(Game.arenaWidth / 2 - ShapeRegistry.width(State.currentPiece) / 2);
                    State.pieceY = ShapeRegistry.height(State.currentPiece) * -1;
                    State.pieceRot = 0;

                    Game.placeDelta = false;
                } else {
                    Game.placeDelta = true;
                }
            } else {
                State.pieceY++;
            }
        } else {
            State.currentPiece = ShapeRegistry.selectShape();
            State.pieceX = Math.floor(Game.arenaWidth / 2 - ShapeRegistry.width(State.currentPiece) / 2);
            State.pieceY = ShapeRegistry.height(State.currentPiece) * -1;
            State.pieceRot = 0;
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
            if (!this.moveDelta2) {
                this.moveDelta2 = true;
            } else if (State.canMove(Game.moveDelta)) {
                State.pieceX += Game.moveDelta;
            }
        }

        else if (Game.rotateDelta) {
            var rot = (State.pieceRot + 1) % 4;
            if (!this.moveDelta2) {
                this.moveDelta2 = true
            } else if (State.canRotate(rot)) {
                State.pieceRot = rot;
            }
        }

        else if (this.moveDelta2) {
            this.moveDelta2 = false;
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
            console.log('drop');
        }

        if (!Game.dropTimeout) {
            Game.dropTimeout = setInterval(Game.dropI, Game.dropKeyInterval);
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
            while (!State.collides()) {
                State.pieceY++;
            }
            Game.tick();
        }
    }

    public static pause(down: boolean) {
        if (down) {
            State.isPaused = !State.isPaused;
        }

        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.dataset.paused = State.isPaused ? 'true' : 'false';
        }
    }
}