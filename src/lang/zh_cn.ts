import { LangLocalization } from "../state/Settings";

export default class zh_cn implements LangLocalization {
    name: string = '简体中文';
    localization = 'zh_cn';
    translations: Record<string, string> = {
        'highScore': "最高分: {0}",
        'currentDifficulty': "难度: {0}",

        'difficulty.0': "简单",
        'difficulty.1': "普通",
        'difficulty.2': "中等",
        'difficulty.3': "困难",
        'difficulty.4': "不可能",

        'rarity.1': "稀有",
        'rarity.2': "非常稀有",
        'rarity.3': "普通",
        'rarity.5': "非常普通",

        'controls': "控制",
        'controls.rotate': "旋转",
        'controls.leftright': "左/右",
        'controls.down': "下落",
        'controls.drop': "快速下落",
        'controls.pauseplay': "暂停/继续",

        'settings': "设置",
        'settings.language': "语言",
        'settings.difficulty': "难度",
        'settings.reset': '重置设置',
        'settings.download': '下载',
        'settings.download.save': '保存',
        'settings.download.load': '加载',
        'settings.download.reset': '重置',
        'settings.download.error': '加载存档文件时出错',

        'blocks': "形状",
        'blocks.description': '游戏中可能出现的形状。',
        'blocks.credit': '制作者: {0}',
        'blocks.diff': '最低难度: {0}',
        'blocks.rarity': '稀有度: {0}',
    }
}