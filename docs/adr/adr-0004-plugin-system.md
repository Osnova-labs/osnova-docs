# ADR 0004: Система плагинов

## Статус

Заменено ADR 0007 «Extension Contributions».

## Контекст

Osnova должна поддерживать расширения без переноса каждого предметного workflow в desktop-клиент.

## Решение

Историческое решение ограничивало плагины TypeScript/JavaScript-командами. Reborn заменяет его общим Extension Manifest v1, Operations и Runtime Supervisor.

## Последствия

Системе плагинов нужен стабильный SDK и desktop permission model. Начальная реализация должна определить контракт до полноценного plugin marketplace.
