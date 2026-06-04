---
title: "PlayerHUD 1.5.0: itens com poderes reais e 1.000 downloads"
description: "A versão 1.5.0 do PlayerHUD celebra a marca de 1.000 downloads com a maior atualização do plugin: itens que estendem prazos, equipam avatares e ferramentas de configuração rápida para professores."
pubDate: 2026-06-04
category: plugin
tags: [playerhud, moodle, gamificação, xp, plugin, novidades]
---

O **PlayerHUD** acaba de ultrapassar 1.000 downloads no Diretório Oficial de Plugins do Moodle. Para celebrar, a versão 1.5.0 chega com a maior coleção de novidades desde o lançamento — e o destaque principal muda a forma como os itens funcionam dentro do jogo.

## Itens com poderes reais

Até agora, os itens do inventário eram colecionáveis: o estudante os conquistava, acumulava e trocava, mas eles não tinham efeito direto no curso. A versão 1.5.0 muda isso com a introdução dos **poderes**.

Cada item pode agora carregar um poder que é ativado quando o estudante decide usá-lo. Dois poderes estão disponíveis nesta versão:

### Avatar
O estudante usa o item e ele se torna sua foto de perfil dentro do jogo. Os avatares podem ser conquistados como recompensa por XP, drops no conteúdo ou trocas na loja — criando uma camada de personalização ligada à progressão no curso.

### Extensão de prazo
O estudante usa o item e ganha tempo extra para entregar uma atividade específica, sem precisar solicitar ao professor. O prazo é estendido automaticamente.

Este poder funciona em conjunto com o **Late Penalty**, plugin complementar que já está disponível no [GitHub](https://github.com/jeanlucio/moodle-local_latepenalty) e aguarda aprovação no Diretório do Moodle.

A mecânica abre possibilidades pedagógicas interessantes: o professor pode configurar itens raros que os estudantes precisam conquistar ao longo do curso para usar estrategicamente quando mais precisarem. Em vez de pedir extensão, o estudante a obtém como recompensa pelo próprio desempenho no jogo.

Novos poderes estão sendo planejados para versões futuras. Se você tem uma ideia de efeito que faria sentido no seu curso, adoraria ouvir.

## Ferramentas de configuração rápida

Configurar a economia do jogo ficou mais rápido com três novos botões no painel do professor:

- **Criação rápida do PlayerCoin:** gera a moeda do jogo em um clique, com confirmação se ela já existir.
- **Geração de avatares:** cria 17 avatares pré-definidos automaticamente, prontos para distribuir.
- **Sugestão de trocas:** gera ofertas de troca sugeridas para o curso ativo.

## IA sem chave de API

O PlayerHUD agora detecta automaticamente se o Moodle já tem inteligência artificial configurada na instalação e a usa como primeira opção — sem precisar cadastrar uma chave separada no plugin. Para instalações que já utilizam a IA nativa do Moodle, o assistente do professor passa a funcionar sem nenhuma configuração adicional.

---

O PlayerHUD é 100% Open Source, compatível com Moodle 4.5 ou superior, e está disponível no [Diretório Oficial de Plugins do Moodle](https://moodle.org/plugins/block_playerhud).
