import { Difficulty, Language, Settings } from "./Settings";
import { State } from "./State";
import { GameStorage } from "./Storage";

var state = GameStorage.loadSettings();
Settings.init(state);

Language.updateTexts();

{
    var lang = document.getElementById("language") as HTMLSelectElement;

    Language.allLanguages.forEach((language) => {
        var option = document.createElement("option");
        option.text = language.name;
        option.value = language.localization;
        lang?.appendChild(option);
    });

    lang.value = Language.selectedTranslation.localization;

    lang.onchange = () => {
        Language.update(lang.value);
        GameStorage.save(Settings.export());
        window.location.reload();
    };
}

{
    var difficulty = document.getElementById("difficulty") as HTMLSelectElement;

    Object.values(Difficulty).forEach((diff) => {
        var option = document.createElement("option");
        option.innerHTML = Language.translate("difficulty." + diff);
        option.value = diff;
        difficulty?.appendChild(option);
    });

    difficulty.value = Settings.currentDifficulty.toString();

    difficulty.onchange = () => {
        Settings.currentDifficulty = parseInt(difficulty.value);
        GameStorage.save(Settings.export());

        var game = GameStorage.load();
        game.arenaState = State.emptyArena();
        GameStorage.save(game);
    };
}

