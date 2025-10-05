# Notix Games Trial

Монорепозиторий для демонстрационного приложения Notix Games, построенный с использованием современного стека технологий.

## 🏗️ Архитектура

Проект представляет собой монорепозиторий, организованный с помощью **Turborepo** и состоящий из:

### Приложения (Apps)
- **`apps/server`** - Backend API на NestJS
- **`apps/web`** - Frontend приложение на React + Vite

### Пакеты (Packages)
- **`packages/api`** - API клиент с автогенерированными типами и хуками
- **`packages/ui`** - Переиспользуемые UI компоненты
- **`packages/utils`** - Утилиты и хелперы
- **`packages/icons`** - SVG иконки
- **`packages/eslint-config`** - Конфигурация ESLint
- **`packages/typescript-config`** - Конфигурация TypeScript

## 🚀 Технологический стек

### Frontend
- **React 19** - UI библиотека
- **Vite** - Сборщик и dev сервер
- **TypeScript** - Типизация
- **Tailwind CSS** - Стилизация
- **TanStack Query** - Управление состоянием сервера
- **React Query** - Кэширование и синхронизация данных

### Backend
- **NestJS** - Node.js фреймворк
- **TypeScript** - Типизация
- **Express** - HTTP сервер

### Инфраструктура
- **Turborepo** - Монорепозиторий менеджер
- **ESLint** - Линтинг кода
- **Prettier** - Форматирование кода

## 📦 Установка и запуск

### Предварительные требования
- Node.js >= 18
- npm 10.9.2

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
# Запуск всех приложений
npm run dev

# Или запуск отдельных приложений
npm run dev --filter=server
npm run dev --filter=web
```

### Сборка проекта
```bash
npm run build
```

### Линтинг и форматирование
```bash
# Проверка линтера
npm run lint

# Автоисправление
npm run lint:fix

# Форматирование кода
npm run format
```

## 🎮 Функциональность

### Backend API (`apps/server`)
- **GET /api/games** - Получение списка игр с пагинацией и поиском
- Параметры запроса:
  - `page` - номер страницы (по умолчанию: 1)
  - `limit` - количество записей на странице (по умолчанию: 10, максимум: 100)
  - `query` - поисковый запрос по названию и описанию игры
- Искусственная задержка 1 секунда для демонстрации загрузки
- Моковые данные из JSON файла

### Frontend (`apps/web`)
- Интерфейс для просмотра списка игр
- Поиск по названию и описанию с debounce (500ms)
- Пагинация с навигацией по страницам
- Счетчик найденных игр с правильным склонением
- Skeleton loading состояния
- Адаптивный дизайн

## 🏛️ Структура проекта

```
notix.games-trial/
├── apps/
│   ├── server/          # NestJS API сервер
│   └── web/             # React приложение
├── packages/
│   ├── api/             # API клиент и типы
│   ├── ui/              # UI компоненты
│   ├── utils/           # Утилиты
│   ├── icons/           # SVG иконки
│   ├── eslint-config/  # ESLint конфигурация
│   └── typescript-config/ # TypeScript конфигурация
├── package.json         # Корневой package.json
├── turbo.json          # Конфигурация Turborepo
└── README.md           # Документация
```

## 🔧 Разработка

### Добавление новых пакетов
```bash
# Создание нового пакета
turbo gen react-component --name=my-component
```

### Запуск тестов
```bash
npm run test
```

### Проверка типов
```bash
npm run check-types
```

## 📝 Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск всех приложений в режиме разработки |
| `npm run build` | Сборка всех пакетов и приложений |
| `npm run lint` | Проверка кода линтером |
| `npm run lint:fix` | Автоисправление ошибок линтера |
| `npm run format` | Форматирование кода с помощью Prettier |
| `npm run check-types` | Проверка типов TypeScript |
| `npm run test` | Запуск тестов |

## 🌐 Порты

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080

## 📄 Лицензия

Проект является приватным и не имеет публичной лицензии.
