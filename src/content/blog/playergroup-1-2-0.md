---
title: "PlayerGroup 1.2.0: suporte ao app mobile e exportação de relatório"
description: "O PlayerGroup chega à versão 1.2.0 com suporte nativo ao aplicativo oficial do Moodle e exportação de relatório em CSV e Excel, além de correções importantes na edição de grupos."
pubDate: 2026-06-03
category: plugin
tags: [playergroup, moodle, gamificação, grupos, plugin, mobile]
---

A versão 1.2.0 do **PlayerGroup** traz duas adições que ampliam bastante a usabilidade do plugin: suporte nativo ao aplicativo móvel oficial do Moodle e exportação do relatório de atividades em CSV e Excel.

## Suporte ao app mobile

A principal novidade desta versão é a compatibilidade com o aplicativo oficial do Moodle. Toda a experiência do estudante está disponível pelo celular: criar grupos, entrar, sair, enviar e responder convites e visualizar o grupo atual. Para quem usa o PlayerGroup em cursos com alto acesso mobile, a atualização elimina a necessidade de abrir o navegador para gerenciar o grupo.

## Exportação de relatório em CSV e Excel

O relatório de atividades do professor ganhou botões de exportação. O download cobre o log completo — data, usuário e ação — e é gerado diretamente pelo Moodle, sem dependências externas.

## Correções importantes

Dois problemas que afetavam a experiência do professor foram corrigidos nesta versão:

- **Modal de edição resetava a privacidade:** ao salvar, o modal redefinia a privacidade do grupo para "Aberto", podendo rebaixar silenciosamente grupos protegidos por senha ou fechados. O comportamento foi corrigido: o formulário agora carrega os valores reais do grupo.
- **Modal fechava ao arrastar texto:** soltar o mouse fora do modal após selecionar texto era interpretado como clique externo e fechava o formulário.

## Campo de senha com toggle de visibilidade

Os formulários de criação, edição e ingresso em grupo agora exibem um botão de mostrar/ocultar no campo de senha.

---

O PlayerGroup é 100% Open Source, compatível com Moodle 4.5 ou superior, e está disponível no [Diretório Oficial de Plugins do Moodle](https://moodle.org/plugins/mod_playergroup).
