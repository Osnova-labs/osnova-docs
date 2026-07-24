# ADR 0010: Агент и risk policy

## Статус

Принято.

## Решение

Агент строит видимый bounded plan и может вызвать только зарегистрированную
operation. Invocation проходит manifest permissions, project grants и risk
policy. Network egress, external side effects и privileged operations требуют
approval либо scoped saved rule.

## Последствия

Plugin permission не означает безусловную автономность. Сессия сохраняет план,
approvals, calls и результаты, но не скрытые рассуждения модели.
