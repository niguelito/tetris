import Difficulty from "./state/Difficulty";
import Language from "./state/Language";
import Settings from "./state/Settings";
import GameStorage from "./state/Storage";

(async function() {

var state = GameStorage.loadSettings();
await Settings.init(state);

Settings.loadBackground();

Language.updateTexts();

{
    var lang = document.getElementById("language") as HTMLSelectElement;

    Language.allLanguages.forEach((language) => {
        var option = document.createElement("option");
        option.text = language.name;
        option.value = language.localization;
        lang?.appendChild(option);
    });

    lang.value = Language.selectedTranslation.data.localization;

    lang.onchange = async () => {
        await Language.update(lang.value);
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
    };
}

var collision = document.getElementById("collisionPath") as HTMLSelectElement;
collision.value = Settings.showCollisionPath.toString();
collision.onchange = (e) => {
    Settings.showCollisionPath = (e.target as HTMLSelectElement).value == 'true';
    GameStorage.save(Settings.export());
    console.log(Settings.export());
};

var background = document.getElementById("background") as HTMLSelectElement;
background.value = Settings.backgroundImage;
background.onchange = (e) => {
    Settings.backgroundImage = (e.target as HTMLSelectElement).value;
    GameStorage.save(Settings.export());
    Settings.loadBackground();
};

var texture = document.getElementById("texture") as HTMLSelectElement;
texture.value = Settings.texture;
texture.onchange = (e) => {
    Settings.texture = (e.target as HTMLSelectElement).value;
    GameStorage.save(Settings.export());
    Settings.loadBackground();
};

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

})();