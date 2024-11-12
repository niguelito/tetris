import { useState } from "react";
import { Language } from "./Settings";

export function SettingsSelector(): JSX.Element {
    var [lang, setLang] = useState(Language.selectedTranslation);
    
    return (
        <>
            <div className="row">
                <h1>Settings</h1>
            </div>

            <div className="row">
                <select value={lang.localization} name="" id="">
                    {Language.allLanguages.map(lang => <option value={lang.localization} key={lang.localization}>{lang.name}</option>)}
                </select>
            </div>
        </>
    )
}