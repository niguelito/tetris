import 'string-format-ts';
import Difficulty from './Difficulty';
import Language from './Language';

export interface SavedSettings {
    lang: string;
    difficulty: number;
    showCollisionPath: boolean;
}

export default class Settings {
    static currentDifficulty = Difficulty.NORMAL;
    static showCollisionPath = true;

    public static async init(settings: SavedSettings) {
        console.log(settings.showCollisionPath)
        this.currentDifficulty = settings.difficulty - 1;
        this.showCollisionPath = settings.showCollisionPath;
        await Language.update(settings.lang);
    }

    public static weightedDifficulty(...nums: number[]) {
        return nums[this.currentDifficulty];
    }

    public static export(): SavedSettings {
        return {
            lang: Language.selectedTranslation.data.localization,
            difficulty: this.currentDifficulty + 1,
            showCollisionPath: this.showCollisionPath
        }
    }
}