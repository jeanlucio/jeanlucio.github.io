---
title: "PlayerPuzzle: um RPG Match-3 movido pelas questões do curso"
description: "Análise do PlayerPuzzle, atividade para Moodle em que o estudante combina peças num tabuleiro 8×8 para enfrentar oponentes e responde questões do curso para desferir ataques críticos, com Campanha, loja, ranking e integração com o PlayerHUD."
pubDate: 2026-11-27
category: plugin
tags: [playerpuzzle, moodle, gamificação, jogos, banco-de-questões, plugin]
---

O **PlayerPuzzle** é um plugin de atividade para Moodle que transforma a revisão de conteúdo em uma luta de RPG por turnos. O estudante combina peças num tabuleiro Match-3 de 8×8 para atacar um oponente controlado pelo computador e, quando enche a barra de mana, responde a uma questão do curso: se acertar, desfere um ataque crítico.

Ele faz parte do [ecossistema PlayerGames](/playergames/), junto com o [PlayerHUD](/blog/playerhud-o-que-e/), o PlayerWords e o PlayerCross, mas funciona sozinho.

<figure class="prose-full">
  <img src="/images/playerpuzzle.jpg" alt="Luta do PlayerPuzzle em andamento no Nível 3, Fase 4: o herói do estudante à esquerda e uma múmia à direita, num cenário de deserto, com o tabuleiro Match-3 de 8×8 no centro (estrelas, poções, moedas, escudos, espadas, grimórios e orbes de mana) e, dos dois lados, o HP, os itens, os medidores e o histórico de jogadas" loading="lazy" />
</figure>

## ✅ O que é o PlayerPuzzle?

O PlayerPuzzle é um módulo de atividade: aparece no curso como qualquer outra atividade, com ícone, nome, nota no livro de notas e rastreamento de conclusão.

Ao abrir a atividade, o estudante chega ao **Lobby**, a tela inicial do jogo. Ali ele vê o progresso, escolhe a dificuldade, compra itens na loja, consulta o ranking da turma e aperta **Jogar**. Também pode começar por uma **Partida Demo**, uma luta de prática guiada que não conta para nota, moedas nem tentativas.

As questões vêm de um banco da própria atividade, que o professor monta de três formas: importando uma categoria do **Banco de Questões** do Moodle, escrevendo à mão ou gerando com IA. Os tipos aceitos são múltipla escolha e verdadeiro/falso.

## 🧠 Por que levar as questões para dentro de um jogo?

Questionários de fixação são úteis, mas costumam virar uma sequência de marcações a caminho da nota. No PlayerPuzzle, acertar uma questão tem uma consequência imediata e visível na luta, e errar também: o multiplicador de dano acumulado volta a zero.

Essa abordagem ajuda a:

- **Dar sentido imediato ao acerto:** a resposta certa vira um golpe crítico, não só um ponto
- **Reaproveitar o que o curso já tem:** a categoria do Banco de Questões usada no Quiz serve sem migração
- **Estimular a repetição:** o estudante volta para avançar na Campanha, melhorar o herói ou subir no ranking
- **Manter a avaliação séria:** as tentativas são limitadas e o resultado é conferido no servidor, não no navegador

## 🚀 O que o PlayerPuzzle oferece?

Entre os principais recursos do plugin estão:

- ⚔️ **Combate Match-3 por turnos:** sete peças (estrela, grimório, orbe de mana, espadas, escudo, poção e moeda), cada uma com um efeito, e um oponente que segue exatamente as mesmas regras do estudante
- ❓ **Desafios de pergunta:** a barra do Orbe de Mana abre uma questão, e toda fase começa com uma pergunta que decide quem joga primeiro
- 🗺️ **Dois modos de jogo:** **Campanha**, com até 10 níveis de 10 fases cada, e **Partida Única**, uma rodada curta e repetível
- 🦸 **Heróis e oponentes:** na Campanha o estudante escolhe um de seis heróis, que cresce com melhorias compradas na loja, e enfrenta onze oponentes com poderes próprios, incluindo um chefão final
- 🎚️ **Três dificuldades:** Fácil, Normal e Difícil mudam a força do oponente e a recompensa, mas nunca a nota
- 🪙 **PuzzleCoin e loja:** a moeda do próprio jogo, ganha nas vitórias e gasta em poções, escudos, espadas, magias e dicas para a próxima luta
- 🏆 **Ranking da turma:** opcional, separado da nota, respeita grupos separados e deixa o estudante aparecer como anônimo
- 💾 **Retomada:** fechar a aba ou recarregar a página retoma a luta de onde parou
- 📊 **Nota e conclusão:** item de nota escalado pela nota máxima, opção de descontar respostas erradas e conclusão por tentativas ou vitórias
- 📈 **Relatório do professor:** progresso por estudante, taxa de acerto, questões mais erradas, distribuição das notas, resultados por dificuldade e heróis escolhidos
- 🛡️ **Anti-trapaça:** a resposta correta só chega ao navegador depois de o servidor julgá-la, e o servidor refaz as jogadas para calcular o resultado real
- ♿ **Acessibilidade:** o tabuleiro é uma grade navegável pelo teclado, com anúncios para leitores de tela a cada turno e narração falada opcional

## 🤖 Como funciona a geração de questões por IA?

A IA é opcional: o jogo funciona por completo com questões importadas ou escritas à mão.

Na página **Gerenciar questões**, o professor informa um tema, a quantidade e o tipo de questão. O pedido passa pelo [AI Hub](/blog/aihub-o-que-e/), quando ele está instalado e tem uma chave configurada, ou pelo subsistema de IA do próprio Moodle (`core_ai`). Sem nenhum dos dois, o gerador simplesmente não aparece.

O pedido não leva dados de estudantes nem conteúdo do curso. As questões geradas são salvas como **pendentes** e só entram nas partidas depois que o professor as aprova.

## 💰 Integração com o PlayerHUD

O PlayerPuzzle tem a própria moeda e não depende de nenhum outro plugin. Com o [PlayerHUD](/blog/playerhud-o-que-e/) instalado no curso, o professor pode ligar três recursos:

- **Transferência de moedas:** o estudante converte itens do PlayerHUD em PuzzleCoin, na proporção de 1 para 1
- **Custo de nova tentativa:** a partir da segunda tentativa, jogar de novo custa um item do PlayerHUD, que o estudante pode conquistar com atividades de reforço fora do jogo
- **Prêmio de vitória:** cada vitória concede um item do PlayerHUD, além das moedas

## 🎓 Possibilidades pedagógicas

O PlayerPuzzle funciona melhor como complemento das avaliações formais, não como substituto. Alguns exemplos de uso:

- revisar o conteúdo de uma unidade antes da prova, usando a mesma categoria de questões do Quiz
- montar uma Campanha que acompanha o semestre, com questões separadas por nível e por fase
- usar a Partida Única como desafio rápido no início ou no fim de uma aula
- observar no relatório as questões mais erradas e retomar esses conceitos com a turma
- ligar o custo de nova tentativa a atividades de reforço, para que quem mais precisa de outra chance tenha como conquistá-la

O jogo não substitui o planejamento pedagógico: a qualidade da experiência depende das questões que o professor seleciona e aprova.

## 📋 Como utilizar o PlayerPuzzle (passo a passo)

**1️⃣ Adicionar a atividade**

No curso, adicione uma atividade **PlayerPuzzle** e escolha o modo de jogo: Campanha ou Partida Única.

**2️⃣ Configurar a luta**

Defina o HP e o dano base, o número de níveis da Campanha, as tentativas, o mínimo de questões por partida e, se quiser, um intervalo de espera entre partidas.

**3️⃣ Montar o banco de questões**

Abra **Gerenciar questões** e importe uma categoria do Banco de Questões, escreva questões à mão ou gere com IA. Aprove as questões pendentes antes de liberar a atividade.

**4️⃣ Definir a nota**

Escolha a nota máxima, a nota para aprovação e o método de avaliação. Se o PlayerHUD estiver no curso, ligue os itens que quiser usar.

**5️⃣ Acompanhar a turma**

Use a página de **Relatório** para ver o progresso dos estudantes, as questões mais erradas e os resultados por dificuldade.

## 🎮 Experimente

Há uma [demonstração jogável](https://educainfo2.duckdns.org/mod/playerpuzzle/view.php?id=3051) disponível online, para conhecer o Lobby, a loja e o combate antes de instalar.

## 🎯 Público-alvo

- Professores que querem uma forma lúdica de revisar o conteúdo com a turma
- Cursos que já usam o Banco de Questões em questionários de fixação
- Cursos gamificados com o PlayerHUD
- Instituições que exploram jogos como complemento às avaliações formais

## 🔗 Como instalar

O PlayerPuzzle está disponível em dois lugares:

- **Moodle Marketplace** (recomendado): [marketplace.moodle.com/plugins/mod_playerpuzzle](https://marketplace.moodle.com/plugins/mod_playerpuzzle)
- **GitHub** (código-fonte): [github.com/jeanlucio/moodle-mod_playerpuzzle](https://github.com/jeanlucio/moodle-mod_playerpuzzle)

A [documentação completa](https://jeanlucio.github.io/moodle-mod_playerpuzzle/pt.html) traz as regras do combate, as fórmulas de nota, os detalhes de segurança e capturas de tela.

**Instalando pelo GitHub:**

1. Baixe o `.zip` da versão mais recente
2. Extraia o conteúdo na pasta `mod/playerpuzzle` do seu Moodle
3. Acesse **Administração do site → Notificações** para concluir a instalação

Para a integração com moedas e itens, instale também o [PlayerHUD](https://marketplace.moodle.com/plugins/block_playerhud) (versão 1.7.1 ou superior).

---

O PlayerPuzzle é gratuito, Open Source (GPLv3) e compatível com o Moodle 4.5 a 5.3.
