export type KeyBindingCallback = (down: boolean, e: KeyboardEvent) => void;

export interface KeyBinding {
    keys: string[];
    callback: KeyBindingCallback;
}

export default class KeyboardHandler {
    static bindings: KeyBinding[] = [];

    public static init() {
        window.document.addEventListener('keyup', this.keyUp.bind(this));
        window.document.addEventListener('keydown', this.keyDown.bind(this));
    }

    public static bind(keys: string[], callback: KeyBindingCallback) {
        this.bindings.push({ keys, callback })
    }

    static keyUp(e: KeyboardEvent) {
        if (e.repeat) return;
        e.preventDefault();
        var k = e.key;

        this.bindings.forEach(b => {
            if (b.keys.includes(k)) {
                b.callback(false, e);
            }
        });
    }

    static keyDown(e: KeyboardEvent) {
        if (e.repeat) return;
        e.preventDefault();
        var k = e.key;

        this.bindings.forEach(b => {
            if (b.keys.includes(k)) {
                b.callback(true, e);
            }
        });
    }
}