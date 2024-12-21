(() => {
    "use strict";
    var n = function(n, e) {
            void 0 === e && (e = n.length - 1);
            for (var t = 0; t <= e; t++) {
                var r = Math.floor(Math.random() * t),
                    o = n[t];
                n[t] = n[r], n[r] = o
            }
        },
        e = globalThis.btoa,
        t = globalThis.atob,
        r = function() {
            return window.location.reload()
        },
        o = function(n) {
            return function() {
                return n
            }
        },
        i = function() {
            try {
                return chrome.runtime.getManifest().version
            } catch (n) {
                return "null"
            }
        };
    const a = {
        SHAPES: [
            [
                [1, 1, 1],
                [0, 1, 0],
                [0, 0, 0]
            ],
            [
                [2, 2],
                [2, 2]
            ],
            [
                [0, 0, 3, 0],
                [0, 0, 3, 0],
                [0, 0, 3, 0],
                [0, 0, 3, 0]
            ],
            [
                [0, 4, 0],
                [0, 4, 0],
                [0, 4, 4]
            ],
            [
                [0, 5, 0],
                [0, 5, 0],
                [5, 5, 0]
            ],
            [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0]
            ],
            [
                [7, 7, 0],
                [0, 7, 7],
                [0, 0, 0]
            ],
            [
                [9]
            ],
            [
                [10, 10, 10],
                [10, 10, 10],
                [10, 10, 10]
            ],
            [
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 11, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 12, 0, 0],
                [0, 0, 12, 0, 0],
                [0, 0, 12, 0, 0],
                [0, 0, 12, 0, 0],
                [0, 0, 12, 0, 0],
            ],
            [
                [0, 0, 0, 13, 0, 0, 0],
                [0, 0, 0, 13, 0, 0, 0],
                [0, 0, 0, 13, 0, 0, 0],
                [0, 0, 0, 13, 0, 0, 0],
                [0, 0, 0, 13, 0, 0, 0],
                [0, 0, 0, 13, 0, 0, 0],
                [0, 0, 0, 13, 0, 0, 0],
            ],
            [
                [14, 14],
                [0, 0]
            ],
            [
                [15, 15, 15],
                [15, 15, 15],
                [0, 0, 0]
            ],
            [
                [16, 16, 16],
                [0, 16, 0],
                [0, 16, 0]
            ],
            [
                [0, 17, 17, 0],
                [0, 17, 17, 0],
                [0, 17, 17, 0],
                [0, 17, 17, 0]
            ],
            [
                [18, 0, 0, 18],
                [18, 0, 0, 18],
                [18, 0, 0, 18],
                [18, 0, 0, 18]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [19, 0, 0, 0, 0, 0, 0, 0, 19],
                [0, 19, 19, 0, 0, 0, 19, 19, 0],
                [0, 0, 0, 19, 19, 19, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
                [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [22, 0, 0, 0, 0, 0, 0, 0, 22, 22, 22, 22, 22, 22, 22],
                [0, 22, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 22, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 22, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            [
                [23, 23, 23, 0],
                [0, 23, 0, 0],
                [0, 23, 23, 23],
                [0, 0, 0, 23]
            ]
        ],
        ARENA_WIDTH: 15,
        ARENA_HEIGHT: 27,
        SCALE: 45,
        DROP_INTERVAL: 350,
        DROP_KEY_INTERVAL: 44,
        LOCK_DELAY: 450,
        HORIZONTAL_MOVEMENT_INTERVAL: 76,
        font: {
            FAMILY: "Arial, Helvetica, sans-serif",
            COLOR: "white"
        },
        COLORS: [
            "#FF0D72", 
            "#0DC2FF", 
            "#0DFF72", 
            "#F538FF", 
            "#FF8E0D", 
            "#FFE138", 
            "#3877FF", 
            "#FF0000",
            "#55e096",
            "#d0e667",
            "#5e538c",
            "#0dffcb",
            "#9de055",
            "#701170",
            "#e69c67",
            "#B603FC",
            "#e66787",
            "#e3cf5d",
            "#8f1414",
            "#6e438f",
            "#b2bf9f",
            "#587d36",
            "#FF4500"
        ],
        controls: {
            ROTATE: ["w", "ArrowUp"],
            LEFT: ["a", "ArrowLeft"],
            DROP: ["s", "ArrowDown"],
            RIGHT: ["d", "ArrowRight"],
            HARDDROP: [" "]
        },
        scorePoints: {
            DROP: 1,
            HARDDROP: 3,
            LANDING: 10,
            LINECLEAR: 75
        },
        storageKeys: {
            localStorage: {
                GAMESTATE: "dumbassGameState",
                GA_CLIENT_ID: e("clientIdDumbass"),
                GA_SESSION_DATA: e("sessionDataDumbass")
            },
            chromeStorage: {
                HIGHSCORE: e("highScoreDumbass"),
                ADS: e("stored-ads"),
                INSTALL_VERSION: e("installVersion"),
                GA_USER_ID: e("userId")
            }
        },
        icons: {
            TETRYS: {
                16: "icons/icon_old16.png",
                24: "icons/icon_old24.png",
                32: "icons/icon_old32.png",
                48: "icons/icon_old48.png",
                128: "icons/icon_old128.png",
                256: "icons/icon_old256.png"
            }
        },
        urls: {
            ADS: ["https://k-ext.pages.dev", "https://k-ext-ads.netlify.app"]
        },
        analytics: {
            GA_ENDPOINT: "https://www.google-analytics.com/mp/collect",
            GA_DEBUG_ENDPOINT: "https://www.google-analytics.com/debug/mp/collect",
            GA_MEASUREMENT_ID: "G-PVD4NTS8KT",
            GA_API_SECRET: "glPBJB3ySW-u-VwD3b8ZyA",
            GA_DEFAULT_ENGAGEMENT_TIME_MSEC: 100,
            GA_SESSION_EXPIRATION_IN_MIN: 5
        }
    };
    var c = function(n, e, t, r, o, i) {
            for (var a = 0; a < e.length; a++)
                for (var c = 0; c < e[0].length; c++)
                    if (e[a][c] > 0) {
                        var u = e[a][c];
                        n.fillStyle = i(n, u, c, a, e), n.fillRect((t + c) * o, (r + a) * o, o, o)
                    }
        },
        u = function(n, e, t, r) {
            n.font = "".concat(e, "px ").concat(t), n.fillStyle = r || n.fillStyle
        },
        l = function(n, e, t, r) {
            n.fillText(e, t, r)
        },
        s = 2 * a.SCALE,
        f = {
            ANY: "*",
            keys: {},
            keyDownListeners: {},
            initialize: function() {
                var n = this;
                window.document.addEventListener("keyup", this.keyEvent.bind(this)), window.document.addEventListener("keydown", (function(e) {
                    var t = e.key.toLowerCase();
                    n.emitEvent(t, e), n.emitEvent(f.ANY, e), n.keyEvent(e)
                })), window.addEventListener("blur", (function() {
                    return Object.keys(n.keys).forEach((function(e) {
                        return n.keys[e] = !1
                    }))
                }))
            },
            emitEvent: function(n, e) {
                if (this.keyDownListeners[n])
                    for (var t = this.keyDownListeners[n].map((function(n) {
                            return [n(e), n]
                        })), r = 0, o = t; r < o.length; r++) {
                        var i = o[r],
                            a = i[0],
                            c = i[1];
                        if (a) {
                            var u = this.keyDownListeners[n].indexOf(c);
                            this.keyDownListeners[n].splice(u, 1)
                        }
                    }
            },
            keyEvent: function(n) {
                this.keys[n.key.toLowerCase()] = "keydown" === n.type
            },
            keyDown: function(n) {
                var e = this;
                return n === this.ANY ? Object.keys(this.keys).some((function(n) {
                    return !0 === e.keys[n]
                })) : !!this.keys[n.toLowerCase()]
            },
            keysDown: function() {
                for (var n = this, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return e.some((function(e) {
                    return n.keyDown(e)
                }))
            },
            onKeyDown: function(n, e) {
                var t = this;
                return n = n.toLowerCase(), this.keyDownListeners[n] || (this.keyDownListeners[n] = []), this.keyDownListeners[n].push(e),
                    function() {
                        var r = t.keyDownListeners[n].indexOf(e);
                        t.keyDownListeners[n].splice(r, 1)
                    }
            },
            onKeysDown: function(n, e) {
                var t = this,
                    r = n.map((function(n) {
                        return t.onKeyDown(n, e)
                    }));
                return function() {
                    r.forEach((function(n) {
                        return n()
                    }))
                }
            },
            onKeyStart: function(n, e) {
                var t = this;
                return this.onKeyDown(n, (function(r) {
                    return !t.keyDown(n) && e(r)
                }))
            },
            onFirstPress: function(n, e) {
                this.onKeyDown(n, (function() {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    return e.apply(void 0, n), !0
                }))
            }
        };
    const h = f;
    var p, y = function(n) {
            return n.map((function(n) {
                return n.slice()
            })).slice()
        },
        v = function(n) {
            return n.slice().map(y)
        },
        d = function(n, e) {
            for (var t, r = 0; r < n.length; ++r)
                for (var o = 0; o < r; ++o) t = [n[r][o], n[o][r]], n[o][r] = t[0], n[r][o] = t[1];
            e > 0 ? n.forEach((function(n) {
                return n.reverse()
            })) : n.reverse()
        },
        g = function(e) {
            var t = function(e) {
                return 0 === e.length && (v(a.SHAPES).forEach((function(n) {
                    return e.push(n)
                })), n(e)), e.pop()
            }(e);
            return {
                x: Math.floor(a.ARENA_WIDTH / 2 - t[0].length / 2),
                y: -t.length,
                shape: t
            }
        },
        w = function(n) {
            return !!E(n) && (n.player.y -= 1, !0)
        },
        A = function(n, e) {
            void 0 === e && (e = !0),
                function(n) {
                    for (var e = 0; e < n.player.shape.length; e++)
                        for (var t = 0; t < n.player.shape[e].length; t++)
                            if (0 !== n.player.shape[e][t]) {
                                var r = n.player.y + e,
                                    o = n.player.x + t;
                                void 0 !== n.arena[r] && void 0 !== n.arena[r][o] && (n.arena[r][o] = n.player.shape[e][t])
                            }
                }(n), n.player = g(n.bag), e && (n.score += a.scorePoints.LANDING)
        },
        E = function(n) {
            for (var e = 0; e < n.player.shape.length; e++)
                for (var t = 0; t < n.player.shape[e].length; t++)
                    if (n.player.shape[e][t] > 0) {
                        var r = n.player.y + e,
                            o = n.player.x + t;
                        if (o >= a.ARENA_WIDTH || r >= a.ARENA_HEIGHT || o < 0 || r >= 0 && n.arena[r][o] > 0) return !0
                    } return !1
        },
        S = function() {
            return S = Object.assign || function(n) {
                for (var e, t = 1, r = arguments.length; t < r; t++)
                    for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }, S.apply(this, arguments)
        },
        b = function(n) {
            return n.time - n.lastTime
        },
        m = {
            b64name: !0,
            b64value: !0
        },
        D = function(n, t, r) {
            void 0 === r && (r = {}), Object.assign(m, r);
            var o = r.b64name ? e(n) : n,
                i = function(n, t) {
                    void 0 === t && (t = !0);
                    var r = JSON.stringify(n);
                    return t ? e(r) : r
                }(t, r.b64value);
            window.localStorage.setItem(o, i)
        },
        L = function(n, r) {
            void 0 === r && (r = {}), Object.assign(m, r);
            var o = r.b64name ? e(n) : n,
                i = window.localStorage.getItem(o);
            return null !== i ? function(n, e) {
                void 0 === e && (e = !0);
                var r = e ? t(n) : n;
                return JSON.parse(r)
            }(i, r.b64value) : null
        };
    ! function(n) {
        n.LOCAL = "local", n.SYNC = "sync"
    }(p || (p = {}));
    var T = function(n) {
            return chrome && "storage" in chrome && n in chrome.storage
        },
        O = function(n) {
            return function(e, t) {
                return new Promise((function(r) {
                    var o;
                    T(n) ? chrome.storage[n].set(((o = {})[e] = t, o), r) : (D(e, t), r())
                }))
            }
        },
        _ = function(n) {
            return function(e) {
                return new Promise((function(t, r) {
                    var o = "item with key [".concat(e, "] does not exist");
                    if (T(n)) chrome.storage[n].get(e, (function(n) {
                        return e in n ? t(n[e]) : r(o)
                    }));
                    else {
                        var i = L(e);
                        null !== i ? t(i) : r(o)
                    }
                }))
            }
        },
        I = _(p.LOCAL),
        k = O(p.LOCAL),
        N = _(p.SYNC),
        R = O(p.SYNC),
        C = function(n) {
            D(a.storageKeys.localStorage.GAMESTATE, n)
        },
        x = function(n) {
            return !n.every((function(n) {
                return 0 === n
            }))
        },
        P = function(n) {
            return n.every((function(n) {
                return n > 0
            }))
        },
        G = function() {
            return G = Object.assign || function(n) {
                for (var e, t = 1, r = arguments.length; t < r; t++)
                    for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }, G.apply(this, arguments)
        },
        H = function(n, e, t, r) {
            return new(t || (t = Promise))((function(o, i) {
                function a(n) {
                    try {
                        u(r.next(n))
                    } catch (n) {
                        i(n)
                    }
                }

                function c(n) {
                    try {
                        u(r.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }

                function u(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                        n(e)
                    }))).then(a, c)
                }
                u((r = r.apply(n, e || [])).next())
            }))
        },
        M = function(n, e) {
            var t, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function c(c) {
                return function(u) {
                    return function(c) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                            if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = c[1], c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < o[1]) {
                                        a.label = o[1], o = c;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(c);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            c = e.call(n, a)
                        } catch (n) {
                            c = [6, n], r = 0
                        } finally {
                            t = o = 0
                        }
                        if (5 & c[0]) throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, u])
                }
            }
        },
        F = function(n, e) {
            return void 0 === e && (e = {}), H(void 0, void 0, void 0, (function() {
                var t, r, o, c, u, l, s, f, h, p, y, v;
                return M(this, (function(d) {
                    switch (d.label) {
                        case 0:
                            return A = a.analytics.GA_ENDPOINT, E = a.analytics.GA_MEASUREMENT_ID, S = a.analytics.GA_API_SECRET, t = "".concat(A, "?measurement_id=").concat(E, "&api_secret=").concat(S), r = fetch, o = [t], l = {
                                method: "POST"
                            }, u = (c = JSON).stringify, s = {}, [4, (w = a.storageKeys.localStorage.GA_CLIENT_ID, I(w).catch((function() {
                                var n = self.crypto.randomUUID();
                                return k(w, n), n
                            })))];
                        case 1:
                            return s.client_id = d.sent(), [4, (g = a.storageKeys.chromeStorage.GA_USER_ID, N(g).catch((function() {
                                var n = self.crypto.randomUUID();
                                return R(g, n), n
                            })))];
                        case 2:
                            return s.user_id = d.sent(), f = {
                                name: n
                            }, h = {
                                appVersion: i()
                            }, [4, H(void 0, void 0, void 0, (function() {
                                var n, e, t;
                                return M(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return n = a.analytics.GA_SESSION_EXPIRATION_IN_MIN, [4, I(a.storageKeys.localStorage.GA_SESSION_DATA).catch((function() {
                                                return {
                                                    timeStamp: Date.now(),
                                                    sessionId: Date.now()
                                                }
                                            }))];
                                        case 1:
                                            return e = r.sent(), t = Date.now() - e.timeStamp, n < t / 6e4 && (e.sessionId = Date.now()), e.timeStamp = Date.now(), [4, k(a.storageKeys.localStorage.GA_SESSION_DATA, e)];
                                        case 2:
                                            return r.sent(), [2, e.sessionId]
                                    }
                                }))
                            }))];
                        case 3:
                            return [2, r.apply(void 0, o.concat([(l.body = u.apply(c, [(s.events = [(f.params = G.apply(void 0, [(h.sessionId = d.sent(), h.page_location = null === (p = null === globalThis || void 0 === globalThis ? void 0 : globalThis.location) || void 0 === p ? void 0 : p.href, h.page_host = null === (y = null === globalThis || void 0 === globalThis ? void 0 : globalThis.location) || void 0 === y ? void 0 : y.host, h.page_title = null === (v = null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) || void 0 === v ? void 0 : v.title, h), e]), f)], s)]), l)]))]
                    }
                    var g, w, A, E, S
                }))
            }))
        },
        K = function(n, e) {
            console.error(n);
            var t = function(n) {
                    if (!(n instanceof Error)) return JSON.stringify(n);
                    var e = {};
                    return Object.getOwnPropertyNames(n).forEach((function(t) {
                        e[t] = n[t]
                    }), n), JSON.stringify(e)
                }(n),
                r = JSON.parse(t);
            null != n && null != n.message && (t = "".concat(n.message, " | ").concat(t)), F("error", {
                error: r,
                where: e,
                errorString: t
            })
        },
        Y = function(n, e) {
            return function() {
                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return function(n) {
                    return function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return new Promise((function(t, r) {
                            return o = void 0, i = void 0, c = function() {
                                var o, i, a, c;
                                return function(n, e) {
                                    var t, r, o, i, a = {
                                        label: 0,
                                        sent: function() {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
                                        },
                                        trys: [],
                                        ops: []
                                    };
                                    return i = {
                                        next: c(0),
                                        throw: c(1),
                                        return: c(2)
                                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                        return this
                                    }), i;

                                    function c(c) {
                                        return function(u) {
                                            return function(c) {
                                                if (t) throw new TypeError("Generator is already executing.");
                                                for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                                    if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                                    switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                        case 0:
                                                        case 1:
                                                            o = c;
                                                            break;
                                                        case 4:
                                                            return a.label++, {
                                                                value: c[1],
                                                                done: !1
                                                            };
                                                        case 5:
                                                            a.label++, r = c[1], c = [0];
                                                            continue;
                                                        case 7:
                                                            c = a.ops.pop(), a.trys.pop();
                                                            continue;
                                                        default:
                                                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                                a = 0;
                                                                continue
                                                            }
                                                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                                a.label = c[1];
                                                                break
                                                            }
                                                            if (6 === c[0] && a.label < o[1]) {
                                                                a.label = o[1], o = c;
                                                                break
                                                            }
                                                            if (o && a.label < o[2]) {
                                                                a.label = o[2], a.ops.push(c);
                                                                break
                                                            }
                                                            o[2] && a.ops.pop(), a.trys.pop();
                                                            continue
                                                    }
                                                    c = e.call(n, a)
                                                } catch (n) {
                                                    c = [6, n], r = 0
                                                } finally {
                                                    t = o = 0
                                                }
                                                if (5 & c[0]) throw c[1];
                                                return {
                                                    value: c[0] ? c[1] : void 0,
                                                    done: !0
                                                }
                                            }([c, u])
                                        }
                                    }
                                }(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            o = !1, i = function() {
                                                for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                                                o = !0, r.apply(void 0, n)
                                            }, u.label = 1;
                                        case 1:
                                            return u.trys.push([1, 4, 5, 6]), (a = n.apply(void 0, e)) instanceof Promise ? [4, a.catch((function(n) {
                                                return i(n)
                                            }))] : [3, 3];
                                        case 2:
                                            u.sent(), u.label = 3;
                                        case 3:
                                            return [3, 6];
                                        case 4:
                                            return c = u.sent(), i(c), [3, 6];
                                        case 5:
                                            return o || t(), [7];
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }, new((a = void 0) || (a = Promise))((function(n, e) {
                                function t(n) {
                                    try {
                                        u(c.next(n))
                                    } catch (n) {
                                        e(n)
                                    }
                                }

                                function r(n) {
                                    try {
                                        u(c.throw(n))
                                    } catch (n) {
                                        e(n)
                                    }
                                }

                                function u(e) {
                                    var o;
                                    e.done ? n(e.value) : (o = e.value, o instanceof a ? o : new a((function(n) {
                                        n(o)
                                    }))).then(t, r)
                                }
                                u((c = c.apply(o, i || [])).next())
                            }));
                            var o, i, a, c
                        }))
                    }
                }(n).apply(void 0, t).catch((function(n) {
                    return K(n, e)
                }))
            }
        };
    const V = function(n, e) {
        return a.COLORS[e - 1]
    };
    var j = function(n, e) {
            void 0 === e && (e = !0);
            var t = window.document.querySelector("div.controls");
            ! function(n, e) {
                e ? n.classList.add("animated") : n.classList.remove("animated")
            }(t, e), n ? t.removeAttribute("hidden") : t.setAttribute("hidden", "")
        },
        U = function(n) {
            return void 0 === n && (n = !0), j(!1, n)
        },
        W = function(n) {
            return null === n ? null : window.document.querySelector(n)
        },
        q = function(n, e, t) {
            n.forEach((function(n, r, o) {
                return n.addEventListener(e, t(n, r, o))
            }))
        },
        J = function(n, e) {
            return n.getAttribute(e)
        },
        z = function(n, e) {
            var t, r;
            n.paused = e, r = e ? "play" : "pause", (t = W("button#pause")).querySelector("img").src = "assets/".concat(r, ".png"), t.blur()
        },
        B = Y((function(n, e, t) {
            return o = void 0, i = void 0, p = function() {
                var o, i, f;
                return function(n, e) {
                    var t, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function c(c) {
                        return function(u) {
                            return function(c) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                    if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                    switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                        case 0:
                                        case 1:
                                            o = c;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: c[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = c[1], c = [0];
                                            continue;
                                        case 7:
                                            c = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                a.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && a.label < o[1]) {
                                                a.label = o[1], o = c;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(c);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    c = e.call(n, a)
                                } catch (n) {
                                    c = [6, n], r = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, u])
                        }
                    }
                }(this, (function(p) {
                    var y, v, d;
                    return o = e.player, e.paused || e.lost || (t.dropCounter += b(t), t.horizontalMovementCounter += b(t), t.dropCounter > a.DROP_INTERVAL ? (e.player.y += 1, (i = w(e)) ? t.lockCounter += b(t) : t.dropCounter = 0, i && t.lockCounter > a.LOCK_DELAY && A(e)) : t.lockCounter = 0, t.dropCounter > a.DROP_KEY_INTERVAL && h.keysDown.apply(h, a.controls.DROP) && (t.dropCounter = 0, function(n) {
                            return n.player.y += 1, n.score += a.scorePoints.DROP, !w(n) || (n.score -= a.scorePoints.DROP, !1)
                        }(e) || (e.score += a.scorePoints.LANDING, A(e))), t.horizontalMovementCounter > a.HORIZONTAL_MOVEMENT_INTERVAL && (t.horizontalMovementCounter = 0, f = e.player.x, h.keysDown.apply(h, a.controls.RIGHT) ? e.player.x += 1 : h.keysDown.apply(h, a.controls.LEFT) && (e.player.x -= 1), E(e) && (e.player.x = f)), e.arena.filter(P).forEach((function(n, t) {
                            var r, o;
                            r = e.arena, o = e.arena.indexOf(n), r.splice(o, 1), r.unshift(Array(a.ARENA_WIDTH).fill(0)), e.score += a.scorePoints.LINECLEAR * Math.pow(2, t)
                        }))), e.lost && h.keyDown(h.ANY) && !e.isReloading && (e.isReloading = !0, r()), !e.lost && (v = e.arena, v.slice(0, 3)).some(x) && (e.lost = !0, e.player = o, (y = e.player).shape = y.shape.map((function(n) {
                            return n.map((function(n) {
                                return 0 === n ? n : 8
                            }))
                        }))), e.score > e.highScore && (e.highScore = e.score, d = e.highScore, k(a.storageKeys.chromeStorage.HIGHSCORE, d)), C(e),
                        function(n) {
                            n.fillStyle = "#000000", n.clearRect(0, 0, n.canvas.width, n.canvas.height), n.fillRect(0, 0, n.canvas.width, n.canvas.height)
                        }(n), c(n, e.arena, 0, 0, a.SCALE, V), n.strokeStyle = "#FF0000", n.lineWidth = 2,
                        function(n, e, t, r, o) {
                            n.beginPath(), n.moveTo(0, t), n.lineTo(r, o), n.stroke()
                        }(n, 0, 3 * a.SCALE, a.ARENA_WIDTH * a.SCALE, 3 * a.SCALE), n.globalAlpha = Math.max(1 - t.lockCounter / a.LOCK_DELAY, t.lockCounter / a.LOCK_DELAY), c(n, e.player.shape, e.player.x, e.player.y, a.SCALE, V), n.globalAlpha = 1,
                        function(n, e) {
                            u(n, s, a.font.FAMILY, a.font.COLOR), n.textBaseline = "middle", n.textAlign = "center";
                            for (var t = "".concat(e); n.measureText(t).width > 5.5 * a.SCALE;) u(n, s -= 1, a.font.FAMILY, a.font.COLOR);
                            l(n, t, a.SCALE * (a.ARENA_WIDTH / 2), 1.75 * a.SCALE)
                        }(n, e.score),
                        function(n, e) {
                            u(n, .6 * a.SCALE, a.font.FAMILY, a.font.COLOR), n.textBaseline = "middle", n.textAlign = "center", l(n, "High score: ".concat(e), a.SCALE * (a.ARENA_WIDTH / 2), 4 * a.SCALE)
                        }(n, e.highScore), requestAnimationFrame((function(r) {
                            return B(n, e, function(n, e) {
                                return S(S({}, n), {
                                    time: e,
                                    lastTime: n.time
                                })
                            }(t, r))
                        })), [2]
                }))
            }, new((f = void 0) || (f = Promise))((function(n, e) {
                function t(n) {
                    try {
                        a(p.next(n))
                    } catch (n) {
                        e(n)
                    }
                }

                function r(n) {
                    try {
                        a(p.throw(n))
                    } catch (n) {
                        e(n)
                    }
                }

                function a(e) {
                    var o;
                    e.done ? n(e.value) : (o = e.value, o instanceof f ? o : new f((function(n) {
                        n(o)
                    }))).then(t, r)
                }
                a((p = p.apply(o, i || [])).next())
            }));
            var o, i, f, p
        }), "loop"),
        Z = function(e) {
            var t, r, o, i = v(a.SHAPES);
            return n(i), {
                player: g(i),
                arena: (t = a.ARENA_WIDTH, r = a.ARENA_HEIGHT, void 0 === o && (o = 0), Array(r).fill(null).map((function() {
                    return Array(t).fill(o)
                }))),
                bag: i,
                paused: !1,
                lost: !1,
                isReloading: !1,
                score: 0,
                highScore: e
            }
        },
        X = function(n) {
            return function() {
                var e = W(J(n, "data-close"));
                null == e || e.toggleAttribute("hidden")
            }
        },
        Q = function(n) {
            return function() {
                ga.apply(void 0, function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                    return n.concat(r || Array.prototype.slice.call(e))
                }(["send", "event"], J(n, "data-analytics").split("/"), !1))
            }
        },
        $ = function(n, e) {
            void 0 === e && (e = 0);
            var t = a.urls.ADS[e],
                r = fetch("".concat(t, "/").concat(n));
            return a.urls.ADS.length > e + 1 && r.catch((function() {
                return $(n, e + 1)
            })), r
        },
        nn = function(n) {
            var e = function(n) {
                var e = document.createElement("div");
                return e.innerHTML = n, e.firstChild
            }(n);
            return e ? (q(e.querySelectorAll("[data-close]"), "click", X), q(e.querySelectorAll("[data-analytics]"), "click", Q), e) : document.createElement("div")
        },
        en = function() {
            return en = Object.assign || function(n) {
                for (var e, t = 1, r = arguments.length; t < r; t++)
                    for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }, en.apply(this, arguments)
        },
        tn = function(n, e, t, r) {
            return new(t || (t = Promise))((function(o, i) {
                function a(n) {
                    try {
                        u(r.next(n))
                    } catch (n) {
                        i(n)
                    }
                }

                function c(n) {
                    try {
                        u(r.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }

                function u(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                        n(e)
                    }))).then(a, c)
                }
                u((r = r.apply(n, e || [])).next())
            }))
        },
        rn = function(n, e) {
            var t, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function c(c) {
                return function(u) {
                    return function(c) {
                        if (t) throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                            if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = c[1], c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < o[1]) {
                                        a.label = o[1], o = c;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(c);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            c = e.call(n, a)
                        } catch (n) {
                            c = [6, n], r = 0
                        } finally {
                            t = o = 0
                        }
                        if (5 & c[0]) throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, u])
                }
            }
        },
        on = function(n) {
            return tn(void 0, void 0, void 0, (function() {
                var e;
                return rn(this, (function(t) {
                    return (o = "click", e = function(n, e) {
                        return function(n) {
                            return function(e, t) {
                                return W(e).addEventListener(n, t)
                            }
                        }(o)(n, Y(e, "click{".concat(n, "}")))
                    })("button#restart", (function() {
                        return function(n) {
                            n.lost = !0, C(n), r()
                        }(n)
                    })), e("button#pause", (function() {
                        z(n, !n.paused), h.onFirstPress(h.ANY, (function() {
                            return z(n, !1)
                        }))
                    })), $("tetrys").then((function(n) {
                        return n.text()
                    })).catch((function() {
                        return I(a.storageKeys.chromeStorage.ADS)
                    })).then((function(n) {
                        return k(a.storageKeys.chromeStorage.ADS, n), n
                    })).then(nn).then((function(n) {
                        var e;
                        return null === (e = document.querySelector("#ads")) || void 0 === e ? void 0 : e.appendChild(n)
                    })).then((function() {
                        return F("ad_load", {
                            where: "connectHTML::fetch-ads",
                            description: "ad_load"
                        })
                    })).catch((function(n) {
                        return K(n, "connectHTML::fetch-ads")
                    })), [2];
                    var o
                }))
            }))
        };
    Y((function() {
        return tn(void 0, void 0, void 0, (function() {
            var n, e, t;
            return rn(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return F("page_view"),
                            function() {
                                try {
                                    chrome.runtime.connect({
                                        name: "popup"
                                    }), console.log("Runtime connected")
                                } catch (e) {
                                    n = location.href, ["https://", "http://"].some((function(e) {
                                        return n.indexOf(e) > -1
                                    })) || K(e, "connectBackend")
                                }
                                var n
                            }(), h.initialize(), n = window.document.querySelector("canvas"), e = n.getContext("2d"), [4, tn(void 0, void 0, void 0, (function() {
                                var n, e;
                                return rn(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return n = L(a.storageKeys.localStorage.GAMESTATE), [4, I(a.storageKeys.chromeStorage.HIGHSCORE).catch(o(0))];
                                        case 1:
                                            return e = t.sent(), null === n || n.lost ? [2, Z(e)] : [2, en(en({}, n), {
                                                paused: !1
                                            })]
                                    }
                                }))
                            }))];
                    case 1:
                        return t = r.sent(), on(t), new Promise((function(n) {
                                return e = void 0, t = void 0, i = function() {
                                    var e, t, r;
                                    return function(n, e) {
                                        var t, r, o, i, a = {
                                            label: 0,
                                            sent: function() {
                                                if (1 & o[0]) throw o[1];
                                                return o[1]
                                            },
                                            trys: [],
                                            ops: []
                                        };
                                        return i = {
                                            next: c(0),
                                            throw: c(1),
                                            return: c(2)
                                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                            return this
                                        }), i;

                                        function c(c) {
                                            return function(u) {
                                                return function(c) {
                                                    if (t) throw new TypeError("Generator is already executing.");
                                                    for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                                        if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                                        switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                            case 0:
                                                            case 1:
                                                                o = c;
                                                                break;
                                                            case 4:
                                                                return a.label++, {
                                                                    value: c[1],
                                                                    done: !1
                                                                };
                                                            case 5:
                                                                a.label++, r = c[1], c = [0];
                                                                continue;
                                                            case 7:
                                                                c = a.ops.pop(), a.trys.pop();
                                                                continue;
                                                            default:
                                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                                    a = 0;
                                                                    continue
                                                                }
                                                                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                                    a.label = c[1];
                                                                    break
                                                                }
                                                                if (6 === c[0] && a.label < o[1]) {
                                                                    a.label = o[1], o = c;
                                                                    break
                                                                }
                                                                if (o && a.label < o[2]) {
                                                                    a.label = o[2], a.ops.push(c);
                                                                    break
                                                                }
                                                                o[2] && a.ops.pop(), a.trys.pop();
                                                                continue
                                                        }
                                                        c = e.call(n, a)
                                                    } catch (n) {
                                                        c = [6, n], r = 0
                                                    } finally {
                                                        t = o = 0
                                                    }
                                                    if (5 & c[0]) throw c[1];
                                                    return {
                                                        value: c[0] ? c[1] : void 0,
                                                        done: !0
                                                    }
                                                }([c, u])
                                            }
                                        }
                                    }(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, I(a.storageKeys.chromeStorage.HIGHSCORE).catch(o(0))];
                                            case 1:
                                                return e = i.sent(), [4, I(a.storageKeys.chromeStorage.HIGHSCORE).catch(o(0))];
                                            case 2:
                                                return t = i.sent(), r = Math.max(e, t), R(a.storageKeys.chromeStorage.HIGHSCORE, r), k(a.storageKeys.chromeStorage.HIGHSCORE, r), n(r), [2]
                                        }
                                    }))
                                }, new((r = void 0) || (r = Promise))((function(n, o) {
                                    function a(n) {
                                        try {
                                            u(i.next(n))
                                        } catch (n) {
                                            o(n)
                                        }
                                    }

                                    function c(n) {
                                        try {
                                            u(i.throw(n))
                                        } catch (n) {
                                            o(n)
                                        }
                                    }

                                    function u(e) {
                                        var t;
                                        e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(n) {
                                            n(t)
                                        }))).then(a, c)
                                    }
                                    u((i = i.apply(e, t || [])).next())
                                }));
                                var e, t, r, i
                            })).then((function(n) {
                                return t.highScore = n
                            })).catch((function(n) {
                                return K(n, "sync")
                            })), 0 === t.score && (void 0 === i && (i = !0), j(!0, i), h.onFirstPress(h.ANY, function(n) {
                                for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
                                return function() {
                                    return n.apply(void 0, e)
                                }
                            }(U))),
                            function(n, e) {
                                h.onKeysDown(a.controls.ROTATE, (function() {
                                    return !e.paused && function(n) {
                                        var e = n.player.x,
                                            t = 0;
                                        for (d(n.player.shape, 1); E(n);)
                                            if (n.player.x += t, (t = t > 0 ? -t - 1 : 1 - t) > n.player.shape[0].length) {
                                                d(n.player.shape, -1), n.player.x = e;
                                                break
                                            }
                                    }(e)
                                })), h.onKeyStart(" ", (function() {
                                    return !e.paused && function(n) {
                                        var e = 0;
                                        do {
                                            n.player.y++, e++
                                        } while (!w(n));
                                        --e > 0 && (n.score += e * a.scorePoints.HARDDROP), A(n, !1)
                                    }(e)
                                })), requestAnimationFrame((function() {
                                    return B(n, e, {
                                        time: 0,
                                        lastTime: 0,
                                        dropCounter: 0,
                                        lockCounter: 0,
                                        horizontalMovementCounter: 0
                                    })
                                }))
                            }(e, t), [2]
                }
                var i
            }))
        }))
    }), "main")()
})();
