# Артефакты, контекст и агент

## Артефакты

Артефакт состоит из descriptor, одного или нескольких payloads и provenance.
Payload остается обычным файлом. Descriptor связывает результат с проектом,
сессией, inputs, operation, tool, runtime и опциональной моделью.
Для каждого input ref host сохраняет пути и SHA-256 фактически staged payloads;
если пользователь позже отредактирует исходный Markdown, provenance всё равно
описывает байты, на которых выполнялась операция.

## Контекст

Artifact type выбирает `none`, `automatic`, `declarative` или `custom` context.
Provider возвращает `compact` и `expanded` представления в заданном бюджете.
Context envelope содержит источники, freshness, sensitivity, token estimate и
признак truncation.

По умолчанию индексируется только текущий проект. Внешний источник требует
отдельного connector и permission.

## Agent pipeline

```text
goal -> compact snapshot -> plan -> validation -> approvals -> jobs
     -> artifact publication -> visible result
```

Агент вызывает только зарегистрированные operations. Tool выполняет работу сам.
План ограничен количеством шагов, временем, context/resource budget и policy. В
сессию записываются сообщения, planner provider/model, план, вызовы, approvals и
результаты, но не hidden chain of thought. `runId` и фактическая planner model
переходят в provenance созданных агентом артефактов.

`inputArtifacts` передаёт шагу уже существующие артефакты, а
`inputFromSteps` связывает его с результатами предыдущих шагов. Host сам добавляет
такие ссылки в dependency graph, проверяет `accepts` целевой Operation и пишет
input refs в provenance новых артефактов. Поэтому модель не подставляет пути к
файлам и не угадывает будущие artifact ids.

Run имеет host-enforced лимиты `maxSteps` и `maxDurationSeconds`. Истечение
общего времени отменяет текущий Job; опасный или неидемпотентный шаг не
повторяется автоматически.

Версия orchestrator v1 не перепланирует неуспешный run автоматически: это могло
бы незаметно расширить действия и расходы после уже показанного пользователю
плана. Новый план создаётся явно и снова проходит schema/policy/approval цикл.
