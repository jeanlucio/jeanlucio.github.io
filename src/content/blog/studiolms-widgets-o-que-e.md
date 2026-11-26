---
title: "StudioLMS Widgets: informação ao vivo dentro das páginas do Moodle"
description: "Análise do StudioLMS Widgets, filtro de texto para Moodle que mostra a participação no fórum, o mapa do curso e as regras do questionário com dados atualizados, a partir de marcas simples e sem IA."
pubDate: 2026-11-26
category: plugin
tags: [studiolms, moodle, filtro, widgets, engajamento, plugin]
---

O **StudioLMS Widgets** é um filtro de texto para Moodle que coloca informação ao vivo nas páginas do curso. O professor escreve uma marca curta no texto e, quando a página é exibida, o filtro troca essa marca por um widget com os dados atuais.

Ele não usa IA, não depende de outro plugin e não consulta serviços externos. Faz parte do [ecossistema StudioLMS](/studiolms/), junto com o [Course Designer](/blog/studiolms-course-designer-o-que-e/) e o [Course Builder](/blog/studiolms-course-builder-o-que-e/).

## ✅ O que é o StudioLMS Widgets?

Na versão atual, o filtro oferece três widgets:

| Marca | Onde usar | O que mostra |
|---|---|---|
| `[FORUMSTATS]` | Descrição de um fórum | Quanto da turma participou daquele fórum |
| `[COURSEMAP]` | Qualquer texto de um curso | As seções do curso apresentadas como um caminho |
| `[QUIZINFO]` | Descrição de um questionário | As regras do questionário como estão agora |

No texto, fica salva apenas a marca. O widget é desenhado na exibição da página, sem que o professor precise atualizar números manualmente.

## 🧠 Por que mostrar informação ao vivo?

Um aviso escrito à mão envelhece. Se o professor muda o número de tentativas ou o tempo de um questionário, o texto da descrição pode continuar mostrando a regra antiga e gerar dúvidas.

Levar os dados para dentro do conteúdo ajuda a:

- **Evitar informação desatualizada:** as regras do questionário são lidas das configurações atuais
- **Orientar o estudante:** o mapa mostra as seções do curso e pode indicar onde ele está
- **Dar visibilidade à participação:** a barra do fórum mostra como a turma está participando
- **Reduzir retrabalho:** não é preciso editar o texto a cada mudança

## 🚀 O que o StudioLMS Widgets oferece?

### 📊 Participação no fórum

O widget `[FORUMSTATS]` mostra uma barra com a quantidade e a porcentagem de estudantes que já participaram. Conta como participação o envio de ao menos um tópico ou uma resposta. Mensagens apagadas e respostas privadas não entram.

Em fóruns com grupos separados, a contagem considera os grupos de quem está vendo. Quando a turma é menor que o mínimo configurado, cinco por padrão, a barra fica escondida dos estudantes para evitar que alguém seja identificado. O professor continua vendo, com um aviso.

As contagens ficam em cache por até cinco minutos e são renovadas quando uma mensagem é publicada, apagada ou movida.

### 🧭 Mapa do curso

O widget `[COURSEMAP]` apresenta as seções como etapas numeradas, cada uma com um link. Seções que o usuário não pode ver não aparecem.

Por padrão, a etapa atual segue a marcação do formato do curso, como o tópico destacado ou a semana de hoje. Com a opção `current=progress`, o mapa acompanha a conclusão de atividades de cada estudante. Para isso, as atividades precisam ter regras de conclusão.

Também é possível escolher o visual em passos ou em cartões:

`[COURSEMAP current=progress style=tiles]`

### ✅ Regras do questionário

O widget `[QUIZINFO]` apresenta informações como número de questões, tempo, tentativas, nota para aprovação, método de avaliação e data de encerramento.

Cada pessoa vê as regras que se aplicam a ela. Um estudante com prazo estendido ou tentativas adicionais vê a própria exceção, enquanto os colegas veem as regras padrão.

## 🔒 Segurança e privacidade

O alvo de cada widget vem do local onde o texto é exibido, e não do que é digitado na marca. Assim, uma marca não consegue apontar para outro curso ou atividade.

A barra do fórum mostra apenas contagens, sem identificar quem participou. O filtro não cria tabelas nem guarda preferências, e o cache armazena somente contagens agregadas. Visitantes não veem os widgets.

## 🎓 Possibilidades pedagógicas

O filtro pode apoiar a orientação e a autonomia dos estudantes:

- abrir o curso com um mapa da jornada de aprendizagem
- ajudar o estudante a localizar a próxima etapa com pendências
- apresentar com clareza as condições de uma avaliação antes de ela começar
- usar a participação coletiva do fórum como convite para entrar na discussão
- manter instruções corretas depois de ajustes em prazos ou tentativas

A barra de participação indica envio de mensagens, não a qualidade da discussão. Ela é um apoio para o acompanhamento, e não substitui a leitura e a mediação do professor.

## 📋 Como utilizar o StudioLMS Widgets (passo a passo)

**1️⃣ Conferir o filtro**

O filtro é ligado na primeira instalação. Se a marca aparecer como texto comum, verifique se o filtro está ativo no site e no curso.

**2️⃣ Escolher o local**

Abra a descrição de um fórum, a descrição de um questionário ou outro texto do curso, conforme o widget desejado.

**3️⃣ Inserir a marca**

Digite a marca em uma linha própria. Com o [Course Designer](/blog/studiolms-course-designer-o-que-e/) instalado, também é possível inserir pela aba **Widgets**.

**4️⃣ Salvar e conferir**

Salve e visualize a página. O widget aparecerá no lugar da marca, com os dados disponíveis para quem está vendo.

**5️⃣ Ajustar as configurações do site (administrador)**

Em **Administração do site → Plugins → Filtros → StudioLMS widgets**, é possível desligar widgets específicos e mudar o tamanho mínimo da turma para a barra do fórum.

## 🎯 Público-alvo

- Professores que querem orientar melhor a navegação no curso
- Cursos a distância com muitas seções e atividades
- Equipes de EAD que precisam evitar instruções desatualizadas
- Administradores que procuram recursos visuais sem integração com serviços externos

## 🔗 Como instalar

O StudioLMS Widgets está disponível em dois lugares:

- **Moodle Marketplace** (recomendado): [marketplace.moodle.com/plugins/filter_studiolms](https://marketplace.moodle.com/plugins/filter_studiolms)
- **GitHub** (código-fonte): [github.com/jeanlucio/moodle-filter_studiolms](https://github.com/jeanlucio/moodle-filter_studiolms)

A [documentação completa](https://jeanlucio.github.io/moodle-filter_studiolms/) apresenta os widgets, as opções e os detalhes de segurança.

**Instalando pelo GitHub:**

1. Baixe o `.zip` da versão mais recente
2. Extraia o conteúdo na pasta `filter/studiolms` do seu Moodle
3. Acesse **Administração do site → Notificações** para concluir a instalação

---

O StudioLMS Widgets é gratuito, Open Source (GPLv3) e compatível com o Moodle 4.5 a 5.3.
