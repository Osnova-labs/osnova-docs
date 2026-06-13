# Обзор архитектуры

Osnova разделена на небольшие репозитории со стабильными зонами ответственности.

Основная модель данных - folder-based проект. Desktop-клиент использует общие TypeScript-пакеты для создания проекта, чтения manifest и валидации. Плагины используют SDK и работают через явные команды и permissions. AI-функции вынесены в runtime-процесс, чтобы desktop-клиент оставался полезным без локальных моделей.

## Слои

- Формат проекта: файлы, папки и схемы.
- Core libraries: project IO, работа с manifest, validation и общие типы.
- Desktop-клиент: Windows application shell, renderer UI и локальные сервисы.
- Plugin SDK: manifest, permissions и command API.
- AI runtime: опциональный локальный процесс для model-backed функций.
