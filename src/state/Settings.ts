import 'string-format-ts';
import Difficulty from './Difficulty';
import Language from './Language';

export interface SavedSettings {
    lang: string;
    difficulty: number;
    showCollisionPath: boolean;
    backgroundImage: string;
    texture: string;
}

export default class Settings {
    static currentDifficulty = Difficulty.NORMAL;
    static showCollisionPath = true;
    static backgroundImage = 'tetris';
    static texture = "gem"

    public static async init(settings: SavedSettings) {
        console.log(settings.showCollisionPath)
        this.currentDifficulty = settings.difficulty - 1;
        this.showCollisionPath = settings.showCollisionPath;
        this.backgroundImage = settings.backgroundImage;
        await Language.update(settings.lang);
    }

    public static weightedDifficulty(...nums: number[]) {
        return nums[this.currentDifficulty];
    }

    public static export(): SavedSettings {
        return {
            lang: Language.selectedTranslation.data.localization,
            difficulty: this.currentDifficulty + 1,
            showCollisionPath: this.showCollisionPath,
            backgroundImage: this.backgroundImage,
            texture: this.texture
        }
    }

    public static loadBackground() {
        var bg = Settings.backgroundImage == 'none' ? 'none' : `url('${import.meta.env.BASE_URL}/assets/background/${Settings.backgroundImage}.webp')`;
        document.body.style.setProperty("--background-image", bg);
    }
}