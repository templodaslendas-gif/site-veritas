# Agentes — Veritas Metal

Definição dos agentes do projeto, responsabilidades e protocolo de comunicação.
Referência: FFR Platform v2.1 § 6. Sistema de Agentes · § 18. Controle de Sessões · § 26. Recuperação de Desastre.

## Topologia

```
coordinator ──► researcher ──► architect ──► coder ──► reviewer ──► security-auditor
      ▲                                                                     │
      └─────────────────────── resultado ──────────────────────────────────┘
```

## Agentes

| Agente | Arquivo | Responsabilidade |
|--------|---------|-----------------|
| coordinator | agents/coordinator.md | Orquestra o pipeline, distribui tarefas |
| researcher | agents/researcher.md | Analisa codebase e referências externas |
| architect | agents/architect.md | Decisões de arquitetura e componentes |
| coder | agents/coder.md | Implementação de código |
| reviewer | agents/reviewer.md | Revisão de qualidade e padrões |
| security-auditor | agents/security-auditor.md | Auditoria de segurança e LGPD |

## Protocolo

- Agentes se comunicam via `SendMessage` (nunca polling)
- Cada agente retorna um resumo estruturado ao próximo
- O coordinator aguarda confirmação antes de avançar de fase
- Nenhum agente inicia fase sem plano aprovado

## Quando Acionar

| Tarefa | Agentes envolvidos |
|--------|-------------------|
| Nova seção visual | coordinator → architect → coder → reviewer |
| Bug crítico | coordinator → researcher → coder → reviewer |
| Auditoria de segurança | coordinator → security-auditor |
| Otimização de performance | coordinator → researcher → coder → reviewer |
| Revisão pré-deploy | coordinator → security-auditor → reviewer |

## Retomada e Recuperação de Sessão

O coordinator é responsável por identificar o estado do projeto ao iniciar qualquer sessão.

### Sequência de Retomada (coordinator executa ao iniciar)

```
1. Ler PROJECT-STATE.md            → identificar checkpoint atual
2. Ler CHANGELOG.md                → confirmar histórico
3. Verificar arquivos listados     → confirmar que existem
4. Rodar: npm run typecheck        → validar estado técnico
5. Rodar: npm run build            → confirmar build limpo
6. Apresentar ao usuário           → estado atual + próxima fase
7. Aguardar aprovação              → nunca continuar automaticamente
```

### Recuperação de Desastre

Se houver divergência entre PROJECT-STATE.md e o disco:

```
1. Mapear arquivos reais (glob src/)
2. Comparar com lista em PROJECT-STATE.md
3. Identificar o que está ausente ou diferente
4. Resolver sem sobrescrever — investigar primeiro
5. Documentar o incidente no CHANGELOG.md
```

Fonte de verdade: `PROJECT-STATE.md > arquivos no disco > memória de sessão`.
