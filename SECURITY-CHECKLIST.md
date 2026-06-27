# Security Checklist — Veritas Metal

Referência: FFR Platform v2.0 § 10. Segurança · ffr-security.

## Status por Fase

| Item | Status | Fase |
|------|--------|------|
| Headers HTTP (X-Frame-Options, HSTS, etc.) | ✅ Configurado | 0 |
| `.env` no `.gitignore` | ✅ Configurado | 0 |
| Secrets fora do código | ✅ Verificado | 0 |
| LGPD: política de privacidade | ✅ Página criada | 0 |
| robots.txt sem expor rotas sensíveis | ✅ Configurado | 0 |
| Formulário com validação Zod | ⏳ Pendente | 10 |
| Rate limiting no endpoint de contato | ⏳ Pendente | 10 |
| Consentimento de cookies antes de analytics | ⏳ Pendente | 11 |
| GA4 carregado após consentimento | ⏳ Pendente | 11 |
| Auditoria ffr-security pré-deploy | ⏳ Pendente | 11 |

## Headers HTTP Configurados (next.config.ts)

- [x] `X-Content-Type-Options: nosniff`
- [x] `X-Frame-Options: DENY`
- [x] `Strict-Transport-Security: max-age=63072000; includeSubDomains`
- [x] `Referrer-Policy: strict-origin-when-cross-origin`
- [x] `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- [ ] `Content-Security-Policy` — adicionar na Fase 11 (requer lista de origens)

## Variáveis de Ambiente (sem valores)

| Variável | Uso | Ambiente |
|----------|-----|---------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | prod |
| `NEXT_PUBLIC_SITE_URL` | URL canônica | todos |

## Pré-Deploy Obrigatório

- [ ] `npm run typecheck` — zero erros
- [ ] `npm run lint` — zero warnings críticos
- [ ] `npm run build` — build limpo
- [ ] Lighthouse mobile ≥ 90
- [ ] Testar formulário de contato em produção
- [ ] Verificar LGPD cookie consent
- [ ] Verificar que analytics NÃO carrega antes do consentimento
- [ ] Executar `ffr-security` audit
