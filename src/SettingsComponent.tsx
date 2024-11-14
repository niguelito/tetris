import { useState } from "react";
import { Language } from "./Settings";
import { GameStorage } from "./Storage";
import { State } from "./State";

export function SettingsSelector(): JSX.Element {
    var [lang, setLang] = useState(Language.selectedTranslation.localization);
    
    return (
        <>
            <div className="row">
                <h1>Settings</h1>
            </div>

            <div className="row">
                <select onChange={(e) => {
                    Language.update(e.target.value);
                    setLang(e.target.value);
                    GameStorage.save(State.export());
                }} value={lang} name="" id="">
                    {Language.allLanguages.map(lang => <option value={lang.localization} key={lang.localization}>{lang.name}</option>)}
                </select>
            </div>
        </>
    )
}