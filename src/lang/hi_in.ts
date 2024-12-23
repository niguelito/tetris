import { LangLocalization } from "../state/Settings";

export default class hi_in implements LangLocalization {
    name: string = 'हिंदी';
    localization = 'hi_in';
    translations: Record<string, string> = {
        'highScore': "उच्च स्कोर: {0}",
        'currentDifficulty': "कठिनाई: {0}",

        'difficulty.0': "आसान",
        'difficulty.1': "सामान्य",
        'difficulty.2': "मध्यम",
        'difficulty.3': "कठिन",
        'difficulty.4': "असंभव",

        'rarity.1': "दुर्लभ",
        'rarity.2': "असामान्य",
        'rarity.3': "सामान्य",
        'rarity.5': "बहुत सामान्य",

        'controls': "नियंत्रण",
        'controls.rotate': "घुमाएँ",
        'controls.leftright': "बाएँ/दाएँ",
        'controls.down': "नीचे गिराएँ",
        'controls.drop': "कठिन गिरावट",
        'controls.pauseplay': "खेल रोकें/फिर से शुरू करें",

        'settings': "सेटिंग्स",
        'settings.language': "भाषा",
        'settings.difficulty': "कठिनाई",
        'settings.reset': 'सेटिंग्स रीसेट करें',
        'settings.download': 'डाउनलोड',
        'settings.download.save': 'सहेजें',
        'settings.download.load': 'लोड करें',
        'settings.download.reset': 'रीसेट करें',
        'settings.download.error': 'सेव फ़ाइल लोड करने में त्रुटि',

        'blocks': "आकृतियाँ",
        'blocks.description': 'खेलते समय दिखाई देने वाली आकृतियाँ।',
        'blocks.credit': 'श्रेय: {0}',
        'blocks.diff': 'न्यूनतम कठिनाई: {0}',
        'blocks.rarity': 'दुर्लभता: {0}',
    }
}