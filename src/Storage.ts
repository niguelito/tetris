import { instanceToPlain } from "class-transformer";
import { Difficulty, SavedSettings } from "./Settings";
import { SavedState, State } from "./State";
import crypto from 'crypto-js';
import { ShapeRegistry } from "./Shape";
import { ShapeRotation } from "./renderer/ShapeRenderer";

export class GameStorage {
    public static SECRET_KEY = "bmlndWVsaXRvIGlzIGJhZCBhdCBjYWxjdWx1cw==";
    public static dataKey = "data6ff3f944";
    public static settingsKey = "settings6ff3f944";

    static isSettings(s: SavedState | SavedSettings): s is SavedSettings {
        return 'lang' in s;
    }

    public static createNewSave(): SavedState {
        return {
            score: 0,
            highScores: [0, 0, 0, 0, 0],
            arenaState: State.emptyArena(),
            currentPiece: {
                piece: ShapeRegistry.selectShape(),
                x: 0,
                y: 0,
                rot: ShapeRotation.NORMAL
            }
        }
    }

    public static createNewSettings(): SavedSettings {
        return {
            lang: "en",
            difficulty: Difficulty.NORMAL
        };
    }

    private static encrypt(d: string): string {
        const e = crypto.AES.encrypt(d, this.SECRET_KEY);
        return (btoa(e.toString()));
    }

    private static decrypt(d: string): string {
        const bytes = crypto.AES.decrypt(atob((d)), this.SECRET_KEY);
        console.log('Decrypted data!');
        return bytes.toString(crypto.enc.Utf8);
    }

    private static resolveOrZero(a: number | undefined): number {
        return a ? a : 0;
    }

    public static parseSave(s: string, willHandleError?: boolean): SavedState {
        try {
            const r = this.decrypt(s);
            console.log(r);
            const a = JSON.parse(r);

            return {
                score: this.resolveOrZero(a.score),
                highScores: a.highScores ? a.highScores : [0, 0, 0, 0, 0],
                arenaState: a.arenaState,
                currentPiece: {
                    piece: this.resolveOrZero(a.currentPiece.piece),
                    x: this.resolveOrZero(a.currentPiece.x),
                    y: this.resolveOrZero(a.currentPiece.y),
                    rot: this.resolveOrZero(a.currentPiece.rot)
                }
            };
        } catch (err) {
            console.error(err);
            if (willHandleError) throw new Error("Could not parse save!")
            return this.createNewSave();
        }
    }

    public static parseSettings(s: string, willHandleError?: boolean): SavedSettings {
        try {
            const r = (s);
            console.log(r);
            const a = JSON.parse(r);

            return {
                lang: a.lang ? a.lang : "en",
                difficulty: a.difficulty ? a.difficulty : Difficulty.NORMAL
            };
        } catch (err) {
            console.error(err);
            if (willHandleError) throw new Error("Could not parse save!")
            return this.createNewSettings();
        }
    }

    public static export(state: SavedState | SavedSettings): string {
        const r = instanceToPlain(state)
        const json = JSON.stringify(r);

        return this.isSettings(state) ? (json) : this.encrypt(json);
    }

    public static save(state: SavedState | SavedSettings): void {
        const f = this.export(state);
        const encodedValue = (f);

        localStorage.setItem(!this.isSettings(state) ? this.dataKey : this.settingsKey, encodedValue);
    }

    public static load(): SavedState {
        try {
            const save = localStorage.getItem(this.dataKey);

            if (save) {
                const r = (save);

                const p = this.parseSave(r);

                return p;
            } else {
                const p = this.createNewSave();

                return p;
            }
        } catch (err) {
            console.error(err);
            return this.createNewSave();
        }
    }

    public static loadSettings(): SavedSettings {
        try {
            const save = localStorage.getItem(this.settingsKey);

            if (save) {
                const r = (save);

                const p = this.parseSettings(r);

                return p;
            } else {
                const p = this.createNewSettings();

                return p;
            }
        } catch (err) {
            console.error(err);
            return this.createNewSettings();
        }
    }
}