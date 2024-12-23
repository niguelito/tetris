import { LangLocalization } from "../state/Settings";

export default class ru_ru implements LangLocalization {
    name: string = 'Русский';
    localization = 'ru_ru';
    translations: Record<string, string> = {
        'highScore': "Рекорд: {0}",
        'currentDifficulty': "Сложность: {0}",

        'difficulty.0': "Легко",
        'difficulty.1': "Нормально",
        'difficulty.2': "Средне",
        'difficulty.3': "Трудно",
        'difficulty.4': "Невозможно",

        'rarity.1': "Редко",
        'rarity.2': "Необычно",
        'rarity.3': "Обычно",
        'rarity.5': "Очень обычно",

        'controls': "Управление",
        'controls.rotate': "Поворот",
        'controls.leftright': "Влево/Вправо",
        'controls.down': "Опустить",
        'controls.drop': "Быстрый спуск",
        'controls.pauseplay': "Пауза/Продолжить",

        'settings': "Настройки",
        'settings.language': "Язык",
        'settings.difficulty': "Сложность",
        'settings.reset': 'Сбросить настройки',
        'settings.download': 'Скачать',
        'settings.download.save': 'Сохранить',
        'settings.download.load': 'Загрузить',
        'settings.download.reset': 'Сбросить',
        'settings.download.error': 'Ошибка загрузки файла сохранения',

        'blocks': "Фигуры",
        'blocks.description': 'Фигуры, которые могут появиться во время игры.',
        'blocks.credit': 'Автор: {0}',
        'blocks.diff': 'Минимальная сложность: {0}',
        'blocks.rarity': 'Редкость: {0}',
    };
}