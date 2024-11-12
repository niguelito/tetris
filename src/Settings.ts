import 'string-format-ts';
import { en_us } from "./lang/en_us";
import { es_es } from './lang/es_es';

export class Difficulty {
    public static EASY = 1;
    public static NORMAL = 2;
    public static MEDIUM = 3;
    public static HARD = 4;
    public static IMPOSSIBLE = 5;
}

export interface SavedSettings {
    lang: string;
    difficulty: number;
}

export class Settings {
    static currentDifficulty = Difficulty.NORMAL;

    public static update(settings: SavedSettings) {
        Language.update(settings.lang);
        this.currentDifficulty = settings.difficulty;
    }

    public static weightedDifficulty(...nums: number[]) {
        return nums[this.currentDifficulty];
    }
}

export interface LangLocalization {
    name: string;
    localization: string;
    translations: Record<string, string>;
}

export class Language {
    public static allLanguages: LangLocalization[] = [
        new en_us(),
        new es_es()
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
}