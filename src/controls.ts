import Language from "./state/Language";
import Settings from "./state/Settings";
import GameStorage from "./state/Storage";

(async function() {
    var state = GameStorage.loadSettings();
    await Settings.init(state);

    Language.updateTexts();
    Settings.loadBackground()
})();