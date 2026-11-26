---
title: "StudioLMS Course Designer: design instrucional dentro do editor do Moodle"
description: "Análise do StudioLMS Course Designer, plugin para o editor TinyMCE do Moodle com 19 blocos instrucionais, 26 modelos prontos e assistência opcional de IA para criar páginas visuais sem escrever HTML."
pubDate: 2026-11-26
category: plugin
tags: [studiolms, moodle, design-instrucional, tinymce, editor, plugin]
---

O **StudioLMS Course Designer** é um plugin para o editor TinyMCE do Moodle que ajuda o professor a desenhar as páginas do curso: aulas, boas-vindas, planos de estudo e roteiros de atividade. Em vez de escrever HTML, ele monta o conteúdo com blocos de design instrucional, partindo de um modelo pronto ou de uma tela em branco.

Ele faz parte do [ecossistema StudioLMS](/studiolms/), junto com o [Course Builder](/blog/studiolms-course-builder-o-que-e/) e o [Widgets](/blog/studiolms-widgets-o-que-e/), mas funciona sozinho.

## ✅ O que é o StudioLMS Course Designer?

Com o plugin instalado, o editor do Moodle ganha o botão **StudioLMS** na barra de ferramentas (também disponível no menu **Ferramentas**). Ele abre um compositor em tela cheia, onde a página é montada bloco a bloco, reordenada, pré-visualizada e inserida no editor em uma única etapa.

Cada bloco é configurado por formulários e guarda as próprias configurações dentro do conteúdo. Por isso, um bloco já publicado pode ser reaberto e editado depois, sem precisar ser refeito.

## 🧠 Por que levar o design instrucional para dentro do editor?

Deixar um curso visualmente agradável e bem organizado costuma exigir conhecimento de HTML, ferramentas externas ou uma equipe de design. Muitos professores não têm nenhum dos três.

Ter os blocos no próprio editor ajuda a:

- **Reduzir a barreira técnica:** o professor preenche formulários em vez de escrever código
- **Organizar a informação:** cartões, abas, passos e linhas do tempo dão estrutura a textos longos
- **Manter consistência:** modelos reaproveitáveis criam uma linguagem visual comum entre as páginas do curso
- **Ficar dentro do Moodle:** não é preciso desenhar a página em outra ferramenta e depois colar o resultado

## 🚀 O que o StudioLMS Course Designer oferece?

Entre os principais recursos do plugin estão:

- 🧱 **19 blocos instrucionais:** título estilizado, botão de ação, cartão avançado (com imagem ou vídeo do YouTube ou Vimeo), accordion, abas, webteca, grid de cards, caixa de destaque, caixa de texto, tabela, cartão de perfil, gráficos de composição e de barras, velocímetro e infográficos de estatísticas, passos, funcionalidades, linha do tempo e comparativo
- 📐 **26 modelos prontos:** layouts em português do Brasil e em inglês, como mapa do curso, aula em abas, plano de estudos semanal, equipe do curso, boas-vindas e datas importantes
- 🗂️ **Biblioteca de modelos:** modelos do site, mantidos pelos gestores e somente leitura para professores, além de modelos pessoais e favoritos
- 📤 **Exportação e importação:** os modelos viajam entre sites Moodle em arquivos `.json`
- 🤖 **IA opcional:** criação de um bloco a partir de uma frase, de um layout completo a partir de um contexto pedagógico ou por meio de uma conversa
- 🧩 **Aba Widgets:** com o filtro [StudioLMS Widgets](/blog/studiolms-widgets-o-que-e/) instalado e um widget ligado, insere mapa do curso, participação no fórum e regras do questionário
- ♿ **Saída amigável a leitores de tela:** os títulos são títulos de verdade, os accordions anunciam o estado e os emojis dos blocos são escondidos dos leitores de tela
- ✅ **Compatibilidade com a limpeza de HTML:** os blocos aparecem por inteiro também em mensagens de fórum, verbetes de glossário e textos de questão
- 🔒 **Privacidade:** modelos e favoritos são cobertos pela API de Privacidade do Moodle

## 🤖 Como funciona a assistência de IA?

A IA é uma ferramenta de produtividade, não uma exigência: todos os blocos podem ser montados manualmente.

O plugin não guarda chaves de API. Os pedidos vão primeiro para o [AI Hub](/blog/aihub-o-que-e/) e, quando ele não está instalado ou não consegue atender, para o subsistema de IA do próprio Moodle (`core_ai`). Sem nenhum dos dois, o restante do plugin continua funcionando.

A resposta da IA aparece primeiro como pré-visualização, e é o professor quem decide o que entra no curso. O texto digitado nas abas de IA é enviado ao provedor configurado, por isso **não digite dados pessoais num pedido de IA**.

## 🎓 Possibilidades pedagógicas

Os blocos ajudam a escolher uma forma de apresentação adequada a cada tipo de informação. A documentação do plugin relaciona essas escolhas a referências como a Teoria da Aprendizagem Multimídia, de Mayer, a Teoria da Carga Cognitiva, de Sweller, e o Desenho Universal para a Aprendizagem.

Alguns exemplos de uso:

- abrir um módulo com os objetivos de aprendizagem antes do conteúdo detalhado
- apresentar um procedimento como uma sequência de passos, marcando a etapa atual
- comparar conceitos lado a lado em um infográfico comparativo
- dividir um material extenso em abas ou accordions, mostrando uma parte de cada vez
- apresentar a equipe do curso com cartões de perfil, aproximando professores e estudantes
- reunir PDFs, vídeos, áudios e links em uma webteca

O visual não substitui o planejamento pedagógico. O bloco ajuda a organizar o conteúdo, mas a escolha do que mostrar, e em que ordem, continua sendo do professor.

## 📋 Como utilizar o StudioLMS Course Designer (passo a passo)

**1️⃣ Abrir o compositor**

Em qualquer editor TinyMCE, como o de uma página ou o resumo de uma seção, clique no botão **StudioLMS** na barra de ferramentas.

**2️⃣ Montar a página**

Na aba **Componentes**, clique em um bloco para adicioná-lo à tela. Se preferir, comece por um dos **Modelos prontos**.

**3️⃣ Configurar e reordenar**

Selecione um bloco para editar suas propriedades no painel lateral. Use as setas para reordenar e o × para remover.

**4️⃣ Inserir no editor**

Clique em **Inserir** e depois salve a página normalmente.

**5️⃣ Reaproveitar o layout**

Use **Salvar como modelo** para guardar a composição em **Meus modelos**. Para alterar um bloco já inserido, clique nele no editor e abra o StudioLMS novamente.

## 🎯 Público-alvo

- Professores que querem páginas bem organizadas sem escrever código
- Designers instrucionais que precisam padronizar os layouts dos cursos
- Equipes de EAD que mantêm uma identidade visual entre várias disciplinas
- Instituições que querem compartilhar modelos oficiais com os professores

## 🔗 Como instalar

O StudioLMS Course Designer está disponível em dois lugares:

- **Moodle Marketplace** (recomendado): [marketplace.moodle.com/plugins/tiny_studiolms](https://marketplace.moodle.com/plugins/tiny_studiolms)
- **GitHub** (código-fonte): [github.com/jeanlucio/moodle-tiny_studiolms](https://github.com/jeanlucio/moodle-tiny_studiolms)

A [documentação completa](https://jeanlucio.github.io/moodle-tiny_studiolms/) traz todos os blocos, capturas de tela e detalhes de segurança.

**Instalando pelo GitHub:**

1. Baixe o `.zip` da versão mais recente
2. Extraia o conteúdo na pasta `lib/editor/tiny/plugins/studiolms` do seu Moodle
3. Acesse **Administração do site → Notificações** para concluir a instalação

Quatro modelos prontos cumprimentam o estudante com `[firstname]`, um atalho do plugin de terceiros `filter_shortcodes`. Sem esse filtro, troque o atalho por um texto comum ou apague.

---

O StudioLMS Course Designer é gratuito, Open Source (GPLv3) e compatível com o Moodle 4.5 a 5.3.
