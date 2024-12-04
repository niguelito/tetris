import { instanceToPlain } from "class-transformer";
import { Difficulty } from "./Settings";
import { SavedState, State } from "./State";
import crypto from 'crypto-js';
import { ShapeRegistry } from "./Shape";
import { ShapeRotation } from "./renderer/ShapeRenderer";

export class GameStorage {
    public static SECRET_KEY = "bmlndWVsaXRvIGlzIGJhZCBhdCBjYWxjdWx1cw==";
    public static dataKey = "data6ff3f944";

    public static createNewSave(): SavedState {
        return {
            score: 0,
            highScore: 0,
            arenaState: State.emptyArena(),
            settings: {
                lang: "en",
                difficulty: Difficulty.NORMAL
            },
            currentPiece: {
                piece: ShapeRegistry.selectShape(),
                x: 0,
                y: 0,
                rot: ShapeRotation.NORMAL
            }
        }
    }

    private static encrypt(d: string): string {
        const e = crypto.AES.encrypt(d, this.SECRET_KEY);
        return btoa(e.toString());
    }

    private static decrypt(d: string): string {
        const bytes = crypto.AES.decrypt(atob(d), this.SECRET_KEY);
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
                highScore: this.resolveOrZero(a.highScore),
                arenaState: a.arenaState,
                settings: {
                    lang: a.lang ? a.lang : "en",
                    difficulty: a.difficulty ? a.difficulty : Difficulty.NORMAL
                },
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

    public static export(state: SavedState): string {
        const r = instanceToPlain(state)
        const json = JSON.stringify(r);
        return this.encrypt(json);
    }

    public static save(state: SavedState) {
        const f = this.export(state);
        const encodedValue = encodeURIComponent(f);

        localStorage.setItem(this.dataKey, encodedValue);
    }

    public static load(): SavedState {
        try {
            const save = localStorage.getItem(this.dataKey);

            if (save) {
                const r = decodeURIComponent(save);

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
}