export type KeyBindingCallback = (down: boolean, e: KeyboardEvent) => void;

export interface KeyBinding {
    keys: string[];
    callback: KeyBindingCallback;
}

export class KeyboardHandler {
    public static rotate = ['w', 'ArrowUp'];
    public static left = ['a', 'ArrowLeft'];
    public static drop = ['s', 'ArrowDown'];
    public static right = ['d', 'ArrowRight'];
    public static hardDrop = [' ', 'x'];

    static bindings: KeyBinding[] = [];

    public static init() {
        window.document.addEventListener('keyup', this.keyUp.bind(this));

        window.document.addEventListener('keydown', this.keyDown.bind(this));
    }

    public static bind(keys: string[], callback: KeyBindingCallback) {
        this.bindings.push({ keys, callback })
    }

    static keyUp(e: KeyboardEvent) {
        var k = e.key.toLowerCase();

        this.bindings.forEach(b => {
            if (b.keys.includes(k)) {
                b.callback(true, e);
            }
        });
    }

    static keyDown(e: KeyboardEvent) {
        var k = e.key.toLowerCase();

        this.bindings.forEach(b => {
            if (b.keys.includes(k)) {
                b.callback(false, e);
            }
        });
    }
}