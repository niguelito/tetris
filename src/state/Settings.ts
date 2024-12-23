import 'string-format-ts';
import ar_sa from '../lang/ar_sa.ts';
import de_de from '../lang/de_de.ts';
import en_us from "../lang/en_us.ts";
import es_es from '../lang/es_es.ts';
import fr_fr from '../lang/fr_fr.ts';
import hi_in from '../lang/hi_in.ts';
import it_it from '../lang/it_it.ts';
import ja_jp from '../lang/ja_jp.ts';
import ru_ru from '../lang/ru_ru.ts';
import zh_cn from '../lang/zh_cn.ts';

export class Difficulty {
    public static EASY = 0;
    public static NORMAL = 1;
    public static MEDIUM = 2;
    public static HARD = 3;
    public static IMPOSSIBLE = 4;
}

export interface SavedSettings {
    lang: string;
    difficulty: number;
}

export class Settings {
    static currentDifficulty = Difficulty.NORMAL;

    public static init(settings: SavedSettings) {
        console.log(settings)
        Language.update(settings.lang);
        this.currentDifficulty = settings.difficulty - 1;
    }

    public static weightedDifficulty(...nums: number[]) {
        return nums[this.currentDifficulty];
    }

    public static export(): SavedSettings {
        return {
            lang: Language.selectedTranslation.localization,
            difficulty: this.currentDifficulty + 1
        }
    }
}

export interface LangLocalization {
    name: string;
    localization: string;
    translations: Record<string, string>;
}

export class Language {
    public static allLanguages: LangLocalization[] = [
        new ar_sa(),
        new de_de(),
        new en_us(),
        new es_es(),
        new fr_fr(),
        new hi_in(),
        new it_it(),
        new ja_jp(),
        new ru_ru(),
        new zh_cn()
    ];

    private static defaultTranslation = this.allLanguages[0];
    public static selectedTranslation = this.allLanguages[0];

    public static update(lang: string): void {
        const selected = this.allLanguages.filter((l) => l.localization == lang);

        if (selected.length == 0) {
            this.selectedTranslation = this.defaultTranslation;
            console.warn('Language' + lang + ' not found, defaulting to ' + this.selectedTranslation.localization)
        }
        else {
            this.selectedTranslation = selected[0];
            console.log('Loaded language: ' + this.selectedTranslation.localization)
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
        var texts = document.querySelectorAll("i18n");
        texts.forEach((text) => {
            var key = text.innerHTML;
            if (key) {
                text.innerHTML = this.translate(key);
            }
        });
    }
}