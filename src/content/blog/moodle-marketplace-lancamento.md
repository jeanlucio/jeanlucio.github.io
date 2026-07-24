---
title: "Moodle Marketplace está no ar: o que mudou de verdade?"
description: "O novo Moodle Marketplace substituiu o antigo Diretório de Plugins. Conheça as mudanças concretas: plugins pagos, busca por linguagem natural, revisão anual e o que administradores precisam verificar agora."
pubDate: 2026-07-23
category: moodle
tags: [Moodle, plugins, Moodle Marketplace, comunidade, atualizações]
---

O **Moodle Marketplace** está oficialmente no ar. Como antecipamos na postagem da semana passada, a transição do Diretório de Plugins aconteceu e o novo ambiente já está disponível para toda a comunidade. Mas o que mudou de fato? O que você encontra agora que não existia antes?

## O que era o Diretório de Plugins?

Durante 15 anos, o Diretório de Plugins foi o repositório oficial da comunidade Moodle. Nele, desenvolvedores de todo o mundo publicavam extensões gratuitas para a plataforma: módulos de atividade, blocos, temas, relatórios e muito mais. O modelo era simples e funcional, mas limitado: tudo era gratuito, a experiência de busca era básica e a padronização das informações variava muito entre os plugins.

## O que mudou com o Moodle Marketplace?

### 1. Plugins pagos agora têm espaço oficial

A mudança mais significativa é a chegada de **plugins comerciais**. O Marketplace foi desenhado para suportar tanto soluções gratuitas quanto pagas, com processamento de pagamento integrado diretamente na plataforma (via Stripe). Antes, quem queria adquirir uma extensão paga para o Moodle precisava procurar fora do ecossistema oficial — em sites de desenvolvedores, marketplaces de terceiros ou por contato direto com o fornecedor. Agora, tudo isso pode acontecer no mesmo lugar.

Modelos de **assinatura anual** são comuns entre os plugins comerciais. Em geral, a assinatura cobre o uso do software, atualizações de compatibilidade e suporte técnico durante o período de vigência.

### 2. Busca por linguagem natural

O sistema de busca foi reformulado. Em vez de precisar saber o nome exato de um plugin, agora é possível descrever **o que você quer fazer** e o Marketplace apresenta as opções relevantes. Por padrão, os resultados priorizam plugins com manutenção ativa e boa reputação na comunidade.

### 3. Informações padronizadas e mais claras

Cada plugin no novo Marketplace apresenta informações estruturadas sobre:

- Versões compatíveis com o Moodle
- Status de manutenção (se está ativo, arquivado ou descontinuado)
- Dados de uso e estatísticas da comunidade
- Informações sobre o desenvolvedor ou provedor

Isso facilita a tomada de decisão, especialmente para administradores que precisam avaliar se um plugin é seguro e bem mantido antes de instalar em ambiente de produção.

### 4. Revisão oficial para plugins pagos

Plugins listados como pagos passam por uma **revisão realizada pelas equipes do Moodle HQ** antes de serem publicados, e por revisões anuais para manter o status ativo no Marketplace. Esse processo não existia no modelo anterior, que era essencialmente autodeclaratório.

### 5. Sustentabilidade para o ecossistema

Ao viabilizar receita para desenvolvedores, o Marketplace cria um incentivo concreto para que bons plugins sejam mantidos a longo prazo. Um dos problemas históricos do diretório era o abandono de plugins populares — sem modelo de negócio, os autores simplesmente paravam de atualizar. A presença de uma via comercial oficial pode mudar essa dinâmica.

---

## ⚠️ Atenção: alguns plugins não foram migrados

A migração foi automática mas não total. Plugins que seus provedores **não publicaram ativamente** no novo Marketplace ficaram de fora. Segundo informações da comunidade, cerca de **105 plugins** — a maioria descontinuados — não foram transferidos para a nova plataforma. Em alguns casos, plugins ativamente mantidos também não migraram porque seus desenvolvedores solicitaram explicitamente que não fossem movidos.

Esses plugins permanecerão acessíveis via API legada apenas até **31 de agosto de 2026**, data em que serão removidos definitivamente do acesso automatizado.

**Onde consultar a lista:** A documentação oficial de transição, disponível na [wiki do Moodle (Plugins Directory has moved to Moodle Marketplace)](https://moodle.atlassian.net/wiki/external/MGM0Y2EyYmJmMThhNDUwZGE3YTE1NmRmMGQ4ZWNmOTU), detalha as mudanças e orienta sobre o que pode ter sido afetado. Se você suspeitar que um plugin específico ficou de fora, a recomendação oficial é abrir um ticket de suporte com a equipe do Marketplace para que investiguem o caso.

**O que fazer:** Se você administra um ambiente Moodle e tem plugins instalados há algum tempo, vale conferir se eles foram migrados para o novo Marketplace. Plugins ausentes na nova plataforma podem indicar que o desenvolvimento foi encerrado — o que é um sinal de alerta para compatibilidade com versões futuras do Moodle.

---

## Como acessar

O novo Moodle Marketplace está disponível em [marketplace.moodle.com](https://marketplace.moodle.com). O antigo Diretório de Plugins em `moodle.org/plugins` permanece acessível em modo de leitura por ora.

Se você ainda não visitou, é um bom momento para explorar o novo ambiente e verificar o status dos plugins que usa no seu Moodle.

---

## Fontes

- [Welcome to Moodle Marketplace](https://moodle.org/news/moodle-marketplace-launch) — Setara Singh, Senior Product Manager, Moodle Marketplace Solutions (moodle.org, 20 jul. 2026)
- [Moodle Marketplace is here](https://moodle.com/news/moodle-marketplace-is-here/) — Niamh McCollum (moodle.com, 20 jul. 2026)
- [Plugins Directory has moved to Moodle Marketplace](https://moodle.atlassian.net/wiki/external/MGM0Y2EyYmJmMThhNDUwZGE3YTE1NmRmMGQ4ZWNmOTU) — documentação de transição oficial (Moodle Atlassian Wiki)
- [Moodle Marketplace](https://marketplace.moodle.com) — plataforma oficial
