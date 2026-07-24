# Политика local-first, AI и приватности

## Source of truth

Папка проекта владеет заметками, медиа, descriptors, relations и session history. `.osnova/` содержит удаляемые индексы, checkpoints, runtime state и подробные логи. Удаление `.osnova/` не должно уничтожать пользовательский результат.

## AI опционален

Без model provider работают Files, Notes, Graph, sessions, ручные Operations и расширения, не требующие модели. Local и cloud providers реализуют один контракт.

## Отправка данных

- Context Provider объявляет sensitivity и `allowedRecipients`.
- Перед cloud-вызовом пользователь видит модель, получателя, источники и объём.
- `context:none` никогда не раскрывает payload.
- Sensitivity применяется и к compact catalog: наличие `sensitive` source
  запрещает отправку всего snapshot облачному planner, а не только expanded payload.
- Неизвестный MIME даёт модели только безопасные метаданные.
- Prompt injection внутри материала остаётся данными и не предоставляет permission на Operation.

## Секреты

API keys хранятся в macOS Keychain или Windows DPAPI/Credential boundary. Они не записываются в `osnova.json`, sessions или extension package.

## Индексация

По умолчанию индексируется только открытый проект. Индексация компьютера — будущий отдельный connector с явным scope, permissions и возможностью полного удаления индекса.
