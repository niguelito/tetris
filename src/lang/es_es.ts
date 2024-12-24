import { LangLocalization } from "../state/Settings";

export default class es_es implements LangLocalization {
    name: string = "Español";
    localization: string = "es";
    translations: Record<string, string> = {
        'highScore': "Puntuación más alta: {0}",
        'currentDifficulty': "Dificultad: {0}",

        'difficulty.0': "Fácil",
        'difficulty.1': "Normal",
        'difficulty.2': "Media",
        'difficulty.3': "Difícil",
        'difficulty.4': "Imposible",

        'rarity.1': "Raro",
        'rarity.2': "Poco común",
        'rarity.3': "Común",
        'rarity.5': "Muy común",

        'controls': "Controles",
        'controls.rotate': "Rotar",
        'controls.leftright': "Izquierda/Derecha",
        'controls.down': "Bajar",
        'controls.drop': "Caída rápida",
        'controls.pauseplay': "Pausar/Reanudar juego",

        'settings': "Configuraciones",
        'settings.language': "Idioma",
        'settings.difficulty': "Dificultad",
        'settings.reset': 'Restablecer configuraciones',
        'settings.download': 'Descargar',
        'settings.download.save': 'Guardar',
        'settings.download.load': 'Cargar',
        'settings.download.reset': 'Restablecer',
        'settings.download.error': 'Error al cargar el archivo de guardado',

        'blocks': "Formas",
        'blocks.description': 'Formas que pueden aparecer mientras juegas.',
        'blocks.credit': 'Crédito: {0}',
        'blocks.diff': 'Dificultad mínima: {0}',
        'blocks.rarity': 'Rareza: {0}',
    }
}