import { LangLocalization } from "../state/Settings";

export default class es_es implements LangLocalization {
    name: string = "Español";
    localization: string = "es";
    translations: Record<string, string> = {
        'highScore': "Puntuación más alta: {0}",
        'currentDifficulty': "Dificultad: {0}",

        'controls': "Controles",
        'controls.rotate': "Girar",
        'controls.leftright': "Izquierda/Derecha",
        'controls.down': "Bajar",
        'controls.drop': "Caída rápida",
        'controls.pauseplay': "Pausa/Reanudar juego",

        'settings': "Configuraciones",
        'settings.language': "Idioma",
        'settings.difficulty': "Dificultad",
        'settings.reset': 'Restablecer configuraciones',

        'difficulty.1': "Fácil",
        'difficulty.2': "Normal",
        'difficulty.3': "Medio",
        'difficulty.4': "Difícil",
        'difficulty.5': "Imposible",

        'blocks': "nigger",
        'blocks.description': 'Shapes that may appear while playing.',
        'blocks.credit': 'Credit: {0}',
        'blocks.diff': 'Minimum Difficulty: {0}',
        'blocks.rarity': 'Rarity: {0}',
    }
}