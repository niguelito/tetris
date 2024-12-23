import { LangLocalization } from "../state/Settings";

export default class it_it implements LangLocalization {
    name = "Italiano";
    localization = "it_it";
    translations = {
        'highScore': "Punteggio Massimo: {0}",
        'currentDifficulty': "Difficoltà: {0}",

        'difficulty.0': "Facile",
        'difficulty.1': "Normale",
        'difficulty.2': "Medio",
        'difficulty.3': "Difficile",
        'difficulty.4': "Impossibile",

        'rarity.1': "Raro",
        'rarity.2': "Non Comune",
        'rarity.3': "Comune",
        'rarity.5': "Molto Comune",

        'controls': "Controlli",
        'controls.rotate': "Ruota",
        'controls.leftright': "Sinistra/Destra",
        'controls.down': "Scendi",
        'controls.drop': "Scendi Velocemente",
        'controls.pauseplay': "Pausa/Riprendi",

        'settings': "Impostazioni",
        'settings.language': "Lingua",
        'settings.difficulty': "Difficoltà",
        'settings.reset': 'Ripristina Impostazioni',
        'settings.download': 'Scarica',
        'settings.download.save': 'Salva',
        'settings.download.load': 'Carica',
        'settings.download.reset': 'Ripristina',
        'settings.download.error': 'Errore nel caricamento del file di salvataggio',

        'blocks': "Forme",
        'blocks.description': 'Forme che possono apparire durante il gioco.',
        'blocks.credit': 'Crediti: {0}',
        'blocks.diff': 'Difficoltà Minima: {0}',
        'blocks.rarity': 'Rarità: {0}',
    };
}