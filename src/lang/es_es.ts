import { LangLocalization } from "../Settings";

export class es_es implements LangLocalization {
    name: string = "Español";
    localization: string = "es";
    translations: Record<string, string> = {
        'highScore': "High Score: {0}",

        'controls': "Controls",
        'controls.rotate': "Rotate",
        'controls.leftright': "Left/Right",
        'controls.down': "Drop Down",
        'controls.drop': "Hard Drop",
        'controls.pause': "Pause Game",

        'difficulty.1': "Easy",
        'difficulty.2': "Normal",
        'difficulty.3': "Medium",
        'difficulty.4': "Hard",
        'difficulty.5': "Impossible",
    }
}