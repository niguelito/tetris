import { LangLocalization } from "../state/Settings";

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
        'rarity.2': "Uncommon",
        'rarity.3': "Common",
        'rarity.5': "Very Common",

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
        'settings.download': 'Download',
        'settings.download.save': 'Save',
        'settings.download.load': 'Load',
        'settings.download.reset': 'Reset',
        'settings.download.error': 'Error loading save file',

        'blocks': "Shapes",
        'blocks.description': 'Shapes that may appear while playing.',
        'blocks.credit': 'Credit: {0}',
        'blocks.diff': 'Minimum Difficulty: {0}',
        'blocks.rarity': 'Rarity: {0}',
    };
}