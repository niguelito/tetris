import { LangLocalization } from "../state/Settings";

export default class de_de implements LangLocalization {
    name: string = 'Deutsch';
    localization = 'de_de';
    translations: Record<string, string> = {
        'highScore': "Höchste Punktzahl: {0}",
        'currentDifficulty': "Schwierigkeitsgrad: {0}",

        'difficulty.0': "Einfach",
        'difficulty.1': "Normal",
        'difficulty.2': "Mittel",
        'difficulty.3': "Schwer",
        'difficulty.4': "Unmöglich",

        'rarity.1': "Selten",
        'rarity.2': "Ungewöhnlich",
        'rarity.3': "Gewöhnlich",
        'rarity.5': "Sehr Gewöhnlich",

        'controls': "Steuerung",
        'controls.rotate': "Drehen",
        'controls.leftright': "Links/Rechts",
        'controls.down': "Nach unten",
        'controls.drop': "Schnell fallen lassen",
        'controls.pauseplay': "Spiel pausieren/fortsetzen",

        'settings': "Einstellungen",
        'settings.language': "Sprache",
        'settings.difficulty': "Schwierigkeitsgrad",
        'settings.reset': 'Einstellungen zurücksetzen',
        'settings.download': 'Herunterladen',
        'settings.download.save': 'Speichern',
        'settings.download.load': 'Laden',
        'settings.download.reset': 'Zurücksetzen',
        'settings.download.error': 'Fehler beim Laden der Speicherdatei',

        'blocks': "Formen",
        'blocks.description': 'Formen, die während des Spiels erscheinen können.',
        'blocks.credit': 'Gutschrift: {0}',
        'blocks.diff': 'Mindestschwierigkeit: {0}',
        'blocks.rarity': 'Seltenheit: {0}',
    }
} 