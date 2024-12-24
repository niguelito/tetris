import { Difficulty, Language, Settings } from "./state/Settings";
import { GameStorage } from "./state/Storage";

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
        var ngame = GameStorage.createNewSave();
        ngame.highScores = game.highScores;
        GameStorage.save(ngame);
    };
}

document.getElementById("reset")?.addEventListener('click', () => {
    GameStorage.save(GameStorage.createNewSettings());
    window.location.reload();
});

document.getElementById("download")?.addEventListener('click', () => {
    let exported = localStorage.getItem(GameStorage.dataKey);
    if (!exported) exported = GameStorage.export(GameStorage.createNewSave());

    const blob = new Blob([exported], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'tetris-save.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
});

document.getElementById("import")?.addEventListener('change', async e => {
    if ((e.target as HTMLInputElement).files == null) return;
    
    const file = ((e.target as HTMLInputElement).files as FileList)[0];

    try {
        const r = await file.text();

        const s = GameStorage.parseSave(r, true);

        GameStorage.save(s);

        document.location.href = './';
    } catch (err) {
        alert(Language.translate("settings.download.error"));
    }
});

document.getElementById("resetG")?.addEventListener('click', () => {
    GameStorage.save(GameStorage.createNewSave());
    document.location.href = './';
    
});