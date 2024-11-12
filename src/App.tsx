import RestartImage from './assets/restart.png';
import PauseImage from './assets/pause.png';
import SettingsImage from './assets/settings.png';
import ControlsImage from './assets/controls.png';
import { ShapeRegistry } from './Shape';
import { Cube1 } from './shapes/Cube1';
import { ShapeOfDeath } from './shapes/ShapeOfDeath';
import { SmallT } from './shapes/SmallT';
import { SuneLeft } from './shapes/SuneLeft';
import { SuneRight } from './shapes/SuneRight';
import { ThickLine } from './shapes/ThickLine';
import { TShape } from './shapes/TShape';
import { TwinTowers } from './shapes/TwinTowers';
import { TwinTowersThick } from './shapes/TwinTowersThick';
import { RightL } from './shapes/RightL';
import { Rect32 } from './shapes/Rect32';
import { Rect12 } from './shapes/Rect12';
import { Line7 } from './shapes/Line7';
import { Line5 } from './shapes/Line5';
import { Line4 } from './shapes/Line4';
import { Line10 } from './shapes/Line10';
import { LeftL } from './shapes/LeftL';
import { Cube3 } from './shapes/Cube3';
import { Cube2 } from './shapes/Cube2';
import { KeyboardHandler } from './KeyboardHandler';
import { Game } from './Game';
import { State } from './State';
import { ShapeRotation } from './renderer/ShapeRenderer';
import { useState } from 'react';
import { MiguelShape } from './shapes/MiguelShape';
import { MartinShape } from './shapes/MartinShape';
import { GameStorage } from './Storage';
import { SettingsSelector } from './SettingsComponent';
import { Controls } from './Controls';

export enum Screens {
    GAME,
    CONTROLS,
    SETTINGS
}

function App() {
    var state = GameStorage.load();

    State.init(state);
    console.log(State.arenaState);

    ShapeRegistry.register(new Cube1());
    ShapeRegistry.register(new Cube2());
    ShapeRegistry.register(new Cube3());
    ShapeRegistry.register(new LeftL());
    ShapeRegistry.register(new Line10());
    ShapeRegistry.register(new Line4());
    ShapeRegistry.register(new Line5());
    ShapeRegistry.register(new Line7());
    ShapeRegistry.register(new Rect12());
    ShapeRegistry.register(new Rect32());
    ShapeRegistry.register(new RightL());
    ShapeRegistry.register(new ShapeOfDeath());
    ShapeRegistry.register(new SmallT());
    ShapeRegistry.register(new SuneLeft());
    ShapeRegistry.register(new SuneRight());
    ShapeRegistry.register(new ThickLine());
    ShapeRegistry.register(new TShape());
    ShapeRegistry.register(new TwinTowers());
    ShapeRegistry.register(new TwinTowersThick());
    ShapeRegistry.register(new MiguelShape());
    ShapeRegistry.register(new MartinShape());

    State.putShape(new SmallT(), 4, 21, ShapeRotation.CW_180);
    State.putShape(new TwinTowers(), 2, 10, ShapeRotation.CW_90);

    ShapeRegistry.closeRegistry();

    KeyboardHandler.init();

    window.requestAnimationFrame((d) => Game.render(d, document.getElementById("canvas") as HTMLCanvasElement))

    let [screen, setScreen] = useState(Screens.GAME);

    return (
        <main>
            <button id="restart">
                <img src={RestartImage} alt="Restart" />
            </button>
            <button id="controls" onClick={() => setScreen(Screens.CONTROLS)}>
                <img src={ControlsImage} alt="controls" />
            </button>
            <button id="pause">
                <img src={PauseImage} alt="pause" />
            </button>
            <button id="settings" onClick={() => setScreen(Screens.SETTINGS)}>
                <img src={SettingsImage} alt="settings" />
            </button>
            <button id="back" hidden={screen == Screens.GAME} onClick={() => setScreen(Screens.GAME)}>&times;</button>

            <div id="gameScreen" style={{display: screen != Screens.GAME ? 'none' : 'block'}}>
                <canvas id="canvas" width="675" height="1215"></canvas>
            </div>

            <div id="controlsScreen" className="controls" style={{display: screen == Screens.CONTROLS ? 'flex' : "none"}}>
                <Controls />
            </div>

            <div id="settingsScreen" className="controls" style={{display: screen == Screens.SETTINGS ? 'flex' : "none"}}>
                <SettingsSelector />
            </div>
        </main>
    );
}

export default App;
