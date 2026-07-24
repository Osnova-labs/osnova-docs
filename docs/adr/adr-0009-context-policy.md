# ADR 0009: Контекст проекта

## Статус

Принято.

## Решение

Контекст разрешается на уровне artifact type через `none`, `automatic`,
`declarative` или `custom`. Provider обязан поддерживать compact и expanded
levels с budget и source attribution.

По умолчанию доступен только текущий проект. Workspace-wide и computer-wide
источники являются будущими opt-in connectors.
