import { LangLocalization } from "../state/Settings";

export default class fr_fr implements LangLocalization {
    name: string = 'Français';
    localization = 'fr_fr';
    translations: Record<string, string> = {
        'highScore': "Meilleur score : {0}",
        'currentDifficulty': "Difficulté : {0}",

        'difficulty.0': "Facile",
        'difficulty.1': "Normal",
        'difficulty.2': "Moyen",
        'difficulty.3': "Difficile",
        'difficulty.4': "Impossible",

        'rarity.1': "Rare",
        'rarity.2': "Peu commun",
        'rarity.3': "Commun",
        'rarity.5': "Très commun",

        'controls': "Contrôles",
        'controls.rotate': "Tourner",
        'controls.leftright': "Gauche/Droite",
        'controls.down': "Descendre",
        'controls.drop': "Chute rapide",
        'controls.pauseplay': "Pause/Reprendre le jeu",

        'settings': "Paramètres",
        'settings.language': "Langue",
        'settings.difficulty': "Difficulté",
        'settings.reset': 'Réinitialiser les paramètres',
        'settings.download': 'Télécharger',
        'settings.download.save': 'Sauvegarder',
        'settings.download.load': 'Charger',
        'settings.download.reset': 'Réinitialiser',
        'settings.download.error': 'Erreur lors du chargement du fichier de sauvegarde',

        'blocks': "Formes",
        'blocks.description': 'Formes qui peuvent apparaître pendant le jeu.',
        'blocks.credit': 'Crédit : {0}',
        'blocks.diff': 'Difficulté minimale : {0}',
        'blocks.rarity': 'Rareté : {0}',
    }
}