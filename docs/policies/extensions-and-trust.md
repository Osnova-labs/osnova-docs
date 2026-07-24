# Политика расширений и доверия

## Три уровня

1. Package объявляет максимальные permissions.
2. Пользователь выдаёт их при подключении к конкретному проекту.
3. Каждый запуск проверяется risk-policy; network, external side effect и privileged требуют подтверждения или project-scoped правила.

## Установка

Каталог поставляет подписанные packages и digest-pinned OCI images. Локальный unsigned package устанавливается только при явном Developer Mode. Версия immutable, версии лежат side-by-side, active pointer меняется атомарно и может быть откатан.

Host вычисляет effective policy сам: remote/network runtime всегда добавляет
`network:use` и риск не ниже `network-egress`, GPU повышает риск до
`privileged`, а native process требует `native:execute` и всегда считается
`privileged`. Автор расширения не может ослабить эти ограничения, назвав
операцию `safe-read`.

Install record содержит SHA-256 каждого файла. Несовпадение при следующей
активации переводит конкретную версию в integrity error, а не исполняет её и не
блокирует открытие всего проекта. Подпись каталога остаётся отдельным слоем
доверия; checksum сам по себе не доказывает издателя.

## Runtime

- builtin доверен и подписан Osnova;
- node-process получает defense-in-depth Node Permission Model, который не считается security boundary;
- native-process требует высокого доверия и не обещает защиту от malicious code;
- OCI запускается без project mount, Docker socket, root, capabilities и сети по умолчанию;
- remote требует HTTPS, кроме loopback, и network permission.

## Публикация результата

Advanced Tool не пишет в проект напрямую. Он получает read-only input, work, outbox и read-only models. Host проверяет пути, symlinks, MIME, размеры, типы и hash, а затем публикует выбранные кандидаты атомарно.

## Лицензии

Разработчик указывает лицензию package, image и model dependency. Архитектурные идеи Sentient OS допустимы как reference; перенос AGPL-кода в proprietary desktop без отдельного решения запрещён.
