# Conformidade LGPD — Veritas Metal

Lei Geral de Proteção de Dados (Lei nº 13.709/2018).

## Dados Coletados

| Dado | Finalidade | Base legal | Retenção |
|------|-----------|-----------|---------|
| Nome | Identificação do contato | Legítimo interesse | 2 anos |
| Telefone / WhatsApp | Retorno comercial | Consentimento | 2 anos |
| E-mail | Comunicação comercial | Consentimento | 2 anos |
| IP + user agent | Analytics (GA4) | Consentimento explícito | 26 meses (Google) |
| Cookies de performance | Análise de tráfego | Consentimento | Conforme COOKIE-POLICY |

## Bases Legais Utilizadas

- **Consentimento (Art. 7º, I):** analytics, cookies de marketing
- **Legítimo interesse (Art. 7º, IX):** dados do formulário de contato comercial
- **Execução de contrato:** dados de clientes em projetos ativos

## Direitos do Titular

O titular pode exercer os seguintes direitos via e-mail ou WhatsApp:
- Confirmar se dados são tratados
- Acessar os dados coletados
- Corrigir dados incompletos ou desatualizados
- Solicitar anonimização, bloqueio ou exclusão
- Solicitar portabilidade dos dados
- Revogar consentimento a qualquer momento

**Contato DPO:** WhatsApp +55 45 92002-2510

## Fluxo de Consentimento (Implementar na Fase 11)

```
1. Usuário acessa o site
2. Banner de cookies aparece (sem analytics ainda)
3. Usuário aceita → analytics carrega
4. Usuário recusa → apenas cookies essenciais
5. Preferência salva em localStorage (chave: vm-cookie-consent)
6. Usuário pode rever preferências via rodapé
```

## Terceiros com Acesso a Dados

| Terceiro | Dado compartilhado | Finalidade | DPA? |
|---------|-------------------|-----------|------|
| Google Analytics | IP anonimizado, comportamento | Analytics | Sim (Google) |
| Vercel | Logs de acesso, IP | Hospedagem | Sim (Vercel) |

## Implementações Técnicas Necessárias

- [ ] Banner de consentimento de cookies (Fase 11)
- [ ] GA4 condicionado ao consentimento (Fase 11)
- [ ] Formulário com opt-in explícito quando necessário
- [ ] Política de privacidade linkada no rodapé e no formulário
- [ ] Mecanismo de exclusão de dados (via WhatsApp por enquanto)
