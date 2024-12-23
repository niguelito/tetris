import { LangLocalization } from "../state/Settings";

export default class ar_sa implements LangLocalization {
    name: string = 'اللغة العربية';
    localization = 'ar_sa';
    translations: Record<string, string> = {
        'highScore': "أعلى نتيجة: {0}",
        'currentDifficulty': "الصعوبة: {0}",

        'difficulty.0': "سهل",
        'difficulty.1': "عادي",
        'difficulty.2': "متوسط",
        'difficulty.3': "صعب",
        'difficulty.4': "مستحيل",

        'rarity.1': "نادر",
        'rarity.2': "غير شائع",
        'rarity.3': "شائع",
        'rarity.5': "شائع جدًا",

        'controls': "التحكم",
        'controls.rotate': "تدوير",
        'controls.leftright': "يسار/يمين",
        'controls.down': "إنزال",
        'controls.drop': "إسقاط سريع",
        'controls.pauseplay': "إيقاف/استئناف اللعبة",

        'settings': "الإعدادات",
        'settings.language': "اللغة",
        'settings.difficulty': "الصعوبة",
        'settings.reset': 'إعادة تعيين الإعدادات',
        'settings.download': 'تحميل',
        'settings.download.save': 'حفظ',
        'settings.download.load': 'تحميل',
        'settings.download.reset': 'إعادة تعيين',
        'settings.download.error': 'خطأ في تحميل ملف الحفظ',

        'blocks': "الأشكال",
        'blocks.description': 'الأشكال التي قد تظهر أثناء اللعب.',
        'blocks.credit': 'الائتمان: {0}',
        'blocks.diff': 'الحد الأدنى للصعوبة: {0}',
        'blocks.rarity': 'الندرة: {0}',
    }
}