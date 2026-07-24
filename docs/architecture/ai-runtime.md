# Osnova Runtime

`osnova-runtime` является локальным control plane для project services,
расширений, jobs, контекста и моделей. Сам процесс runtime является частью
backend, а AI-поддержка внутри него остается опциональной.

Runtime отвечает за:

- Operation Registry и Job Manager;
- Runtime Supervisor;
- Artifact Ingestor и Session Store;
- Context Broker и project-scoped index;
- model providers и model dependencies;
- bounded agent orchestration.

Desktop взаимодействует с runtime через versioned local RPC. Файлы проекта,
artifact descriptors и sessions остаются долговечным состоянием. Индексы,
очереди восстановления и кеши являются производными данными.
