import { Game } from "./Game";
import KeyboardHandler from "./KeyboardHandler";
import registerShapes from "./shape/RegisterShapes";
import { Settings } from "./state/Settings";
import { ShapeRegistry } from "./shape/Shape";
import { State } from "./state/State";
import { GameStorage } from "./state/Storage";

var canvas = document.getElementById('canvas');

var state = GameStorage.load();
var settings = GameStorage.loadSettings();
State.init(state);
Settings.init(settings);

registerShapes();

ShapeRegistry.closeRegistry();

KeyboardHandler.init();

window.requestAnimationFrame((d) => Game.render(d, canvas as HTMLCanvasElement));

if (State.gameOver()) {
    State.restart();
}

Game.tick();
Game.move();
Game.dropI();
Game.save();

var rotate = ['w', 'ArrowUp'];
var left = ['a', 'ArrowLeft'];
var drop = ['s', 'ArrowDown'];
var right = ['d', 'ArrowRight'];
var hardDrop = [' ', 'x'];
var pause = ['p', 'Escape', 'Tab'];

KeyboardHandler.bind(rotate, Game.rotate);
KeyboardHandler.bind(left, Game.left);
KeyboardHandler.bind(drop, Game.drop);
KeyboardHandler.bind(right, Game.right);
KeyboardHandler.bind(hardDrop, Game.hardDrop);
KeyboardHandler.bind(pause, Game.pause);

document.getElementById("pauseplay")?.addEventListener('click', () => Game.pause(true));
document.getElementById("restart")?.addEventListener('click', () => { State.restart(); window.location.reload(); });
document.getElementById("download")?.addEventListener('click', () => Game.download());

// save when page closes
window.addEventListener('beforeunload', () => Game.save());