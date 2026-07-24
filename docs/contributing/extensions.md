# Разработка и проверка расширений

## Цикл

```text
osnova extension init my-tool --template tool
osnova extension lint my-tool/extension.json
osnova extension test my-tool/extension.json
osnova extension dev my-tool
osnova extension pack my-tool my-tool.osnova-package.json
```

Доступны templates `theme`, `note-linter`, `tool`, `advanced`, `oci`, `mcp`.

## Требования

- namespaced IDs и SemVer;
- JSON Schema входа и результата каждой Operation;
- точные accepts/produces, risk, permissions, timeout и idempotency;
- context policy для каждого artifact type;
- checksum, размер, архитектура и лицензия model dependency;
- отсутствие project path assumptions: только protocol paths;
- детерминированный smoke test и проверка cancel/timeout;
- OCI image закреплён digest и не требует root/Docker socket.

Package, manifest и runtime проверяются до активации. Marketplace release дополнительно требует подпись, provenance сборки и review permissions.
