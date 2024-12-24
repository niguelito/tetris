import { LangLocalization } from "../state/Settings";

export default class ja_jp implements LangLocalization {
    name: string = '日本語';
    localization = 'ja_jp';
    translations = {
        'highScore': "ハイスコア: {0}",
        'currentDifficulty': "難易度: {0}",

        'difficulty.0': "簡単",
        'difficulty.1': "普通",
        'difficulty.2': "中級",
        'difficulty.3': "難しい",
        'difficulty.4': "不可能",

        'rarity.1': "レア",
        'rarity.2': "アンコモン",
        'rarity.3': "コモン",
        'rarity.5': "非常に一般的",

        'controls': "コントロール",
        'controls.rotate': "回転",
        'controls.leftright': "左/右",
        'controls.down': "下に移動",
        'controls.drop': "即落下",
        'controls.pauseplay': "一時停止/再開",

        'settings': "設定",
        'settings.language': "言語",
        'settings.difficulty': "難易度",
        'settings.reset': '設定をリセット',
        'settings.download': 'ダウンロード',
        'settings.download.save': '保存',
        'settings.download.load': '読み込み',
        'settings.download.reset': 'リセット',
        'settings.download.error': 'セーブファイルの読み込みエラー',

        'blocks': "形",
        'blocks.description': 'プレイ中に表示される形。',
        'blocks.credit': 'クレジット: {0}',
        'blocks.diff': '最低難易度: {0}',
        'blocks.rarity': 'レアリティ: {0}',
    };
}