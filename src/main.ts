import { Game } from "./Game";
import KeyboardHandler from "./KeyboardHandler";
import registerShapes from "./RegisterShapes";
import { Settings } from "./Settings";
import { ShapeRegistry } from "./Shape";
import { State } from "./State";
import { GameStorage } from "./Storage";

var canvas = document.getElementById('canvas');

var state = GameStorage.load();
var settings = GameStorage.loadSettings();
State.init(state);
Settings.init(settings);

registerShapes();

ShapeRegistry.closeRegistry();

KeyboardHandler.init();

window.requestAnimationFrame((d) => Game.render(d, canvas as HTMLCanvasElement));

Game.tick();
Game.move();
Game.dropI();

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