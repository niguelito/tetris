import { LangLocalization } from "../Settings";

export default class en_us implements LangLocalization {
    name = "English";
    localization = "en";
    translations = {
        'highScore': "High Score: {0}",
        'currentDifficulty': "Difficulty: {0}",

        'difficulty.0': "Easy",
        'difficulty.1': "Normal",
        'difficulty.2': "Medium",
        'difficulty.3': "Hard",
        'difficulty.4': "Impossible",

        'rarity.1': "Rare",
        'rarity.5': "Uncommon",
        'rarity.8': "Common",
        'rarity.12': "Very Common",

        'controls': "Controls",
        'controls.rotate': "Rotate",
        'controls.leftright': "Left/Right",
        'controls.down': "Drop Down",
        'controls.drop': "Hard Drop",
        'controls.pauseplay': "Pause/Resume Game",

        'settings': "Settings",
        'settings.language': "Language",
        'settings.difficulty': "Difficulty",
        'settings.reset': 'Reset Settings',

        'blocks': "Shapes",
        'blocks.description': 'Shapes that may appear while playing.',
        'blocks.credit': 'Credit: {0}',
        'blocks.diff': 'Minimum Difficulty: {0}',
        'blocks.rarity': 'Rarity: {0}',
    };
}