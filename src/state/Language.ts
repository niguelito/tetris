export interface LangLocalization {
    data: Localization;
    translations: Record<string, string>;
}

export interface Localization {
    name: string;
    localization: string;
}

export default class Language {
    public static allLanguages: Localization[] = [
        {name: 'اللغة العربية', localization: 'ar_sa'},
        {name: 'Deutsch', localization: 'de_de'},
        {name: "English", localization: "en_us"},
        {name: "Español", localization: "es_es"},
        {name: 'Français', localization: 'fr_fr'},
        {name: 'हिंदी', localization: 'hi_in'},
        {name: "Italiano", localization: "it_it"},
        {name: '日本語', localization: 'ja_jp'},
        {name: 'Русский', localization: 'ru_ru'},
        {name: '简体中文', localization: 'zh_cn'}
    ];

    private static defaultTranslation: LangLocalization;
    public static selectedTranslation: LangLocalization;

    static async load(localiz: Localization): Promise<LangLocalization> {
        var path = `${import.meta.env.BASE_URL}/lang/${localiz.localization}.json`;
        const data = await (await fetch(path)).json();
        console.log(data)
        return {
            data: localiz,
            translations: data
        }
    }

    public static async update(lang: string) {
        this.defaultTranslation = await this.load(this.allLanguages[2])

        const selected = this.allLanguages.filter((l) => l.localization == lang);

        if (selected.length == 0) {
            this.selectedTranslation = this.defaultTranslation;
            console.warn('Language' + lang + ' not found, defaulting to ' + this.selectedTranslation.data.localization)
        }
        else {
            this.selectedTranslation = await this.load(selected[0]);
            console.log('Loaded language: ' + this.selectedTranslation.data.localization)
        };
    }

    public static translate(key: string): string {
        const s = this.selectedTranslation.translations[key];
        if (s) return s;
    
        const d = this.defaultTranslation.translations[key];
        if (d) return d;
    
        return key;
    }
    
    public static translation(key: string, ...args: any[]): string {
        const thing = this.translate(key);
    
        const formatted = thing.format(...args);
    
        return formatted;
    }

    public static updateTexts() {
        var texts = document.querySelectorAll("text, [translate]");
        texts.forEach((text) => {
            var key = text.innerHTML;
            if (key) {
                text.innerHTML = this.translate(key);
            }
        });
    }
}