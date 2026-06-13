# Архитектура desktop-клиента

`osnova-desktop` использует Electron, React и TypeScript через `electron-vite`.

## Процессы

- Main: жизненный цикл приложения, native dialogs, project и file services.
- Preload: узкий IPC bridge, доступный renderer.
- Renderer: React-приложение, pages, widgets, features, entities и shared UI.

## Сервисы

- `project-service`: создание, открытие и чтение папок проекта.
- `file-service`: безопасные файловые операции внутри проекта.
- `settings-service`: локальные настройки desktop-клиента.
- `plugin-service`: зарезервированная граница для загрузки плагинов.
- `ai-service`: зарезервированная граница для интеграции локального AI runtime.
