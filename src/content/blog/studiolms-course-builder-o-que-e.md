---
title: "StudioLMS Course Builder: construtor de cursos com IA no Moodle"
description: "Análise do StudioLMS Course Builder, plugin local para Moodle que usa IA para planejar e montar cursos, seções e atividades nativas, com revisão do professor, e estiliza em blocos visuais um texto já escrito."
pubDate: 2026-11-26
category: plugin
tags: [studiolms, moodle, ia, inteligência-artificial, criação-de-cursos, plugin]
---

O **StudioLMS Course Builder** é um plugin local para Moodle que funciona como um construtor de cursos guiado por IA. De dentro de um curso que já existe, o professor descreve o tema, revisa a estrutura proposta e só então manda o plugin montar o conteúdo.

O resultado são atividades e recursos nativos do Moodle, que continuam editáveis como em qualquer outro curso. Ele faz parte do [ecossistema StudioLMS](/studiolms/), junto com o [Course Designer](/blog/studiolms-course-designer-o-que-e/) e o [Widgets](/blog/studiolms-widgets-o-que-e/).

## ✅ O que é o StudioLMS Course Builder?

Depois de instalado, o item **StudioLMS** aparece na navegação do curso para quem tem permissão, como professores com edição e gerentes. Na tela inicial, é possível escolher entre gerar:

| Opção | O que faz |
|---|---|
| Atividade ou recurso | Cria um item na seção escolhida: página, rótulo, questionário, fórum, tarefa ou glossário |
| Seção | Planeja as atividades de uma seção nova ou existente, para o professor revisar antes de gerar |
| Curso completo | Propõe objetivos, seções e atividades e monta o curso depois da aprovação |
| Estilizar o que já existe | Transforma uma página ou rótulo já escrito em blocos visuais, em uma cópia oculta |

O plugin trabalha de propósito em um curso que já existe. Assim, o professor não precisa da permissão administrativa de criar cursos.

## 🧠 Por que usar um construtor de cursos com IA?

Montar um curso no Moodle envolve muitas etapas repetitivas: criar seções, escrever páginas, cadastrar questões, abrir fóruns e redigir enunciados. A IA pode acelerar essa primeira versão e dar ao professor um ponto de partida para revisar.

O ganho está no rascunho estruturado, não na publicação sem revisão. O professor continua responsável por conferir informações, ajustar a linguagem, definir datas e decidir o que faz sentido para a turma.

## 🚀 O que o StudioLMS Course Builder oferece?

Entre os principais recursos do plugin estão:

- 🧭 **Revisão antes de gerar:** na criação de um curso ou de uma seção, o professor revisa a proposta, renomeia itens, muda tipos de atividade e adiciona ou remove partes
- 📑 **Seis tipos de atividade:** páginas, rótulos, questionários, fóruns, tarefas e glossários, todos como conteúdo nativo do Moodle
- 🗺️ **Plano da disciplina:** no curso completo, a primeira página é escrita a partir da estrutura aprovada, com objetivos, organização do curso e tabela das atividades avaliativas
- ❓ **Questões no banco de questões:** questões de múltipla escolha, verdadeiro ou falso e resposta curta são cadastradas e ligadas ao questionário
- ⏳ **Geração em segundo plano:** seções e cursos completos são montados com acompanhamento do progresso e um relatório final
- 🩹 **Reversão seletiva:** se uma execução falha, o plugin remove as seções e os módulos que ela havia criado, sem apagar o curso
- 🎮 **Modo gamificado:** com o [PlayerHUD](/blog/playerhud-o-que-e/) instalado e permissão para adicionar o bloco, acrescenta elementos de gamificação ao curso
- 🌐 **Idioma do professor:** o conteúdo é gerado no idioma da interface de quem está usando o assistente
- 🔒 **Permissões e privacidade:** usa permissões próprias, somadas às do Moodle, e implementa a API de Privacidade

Nenhuma etapa define datas: elas são configuradas depois, no próprio Moodle.

Por padrão, o plugin acrescenta conteúdo sem mexer no que já existe. Há opções para limpar o curso ou sobrescrever uma seção, mas elas pedem confirmação. Use com atenção: o que os estudantes fizeram nas atividades apagadas também é perdido.

## 🖌️ Estilizar sem reescrever

Muitos professores já têm o texto pronto, mas sem uma boa organização visual. A opção de estilizar atende a esse caso.

A atividade é duplicada, o original não é alterado e o novo layout vai para uma **cópia oculta**. No modo padrão, a IA apenas indica o papel de cada trecho, como título, lista, destaque ou passos. As palavras dos blocos continuam sendo as originais.

Há também um modo opcional, desligado por padrão, que permite à IA reorganizar e polir o texto. Nesse caso, o plugin aplica proteções, como recusar um resultado com números que não estavam no original. Mesmo assim, essa proteção não garante que nenhum número tenha sumido: **leia a cópia antes de publicar**.

## 🤖 De onde vem a IA?

O Course Builder precisa de pelo menos uma fonte de IA:

- o [AI Hub](/blog/aihub-o-que-e/), com uma chave pessoal ou do site
- o subsistema de IA do próprio Moodle (`core_ai`), com um provedor configurado para geração de texto

Se as duas existirem, o AI Hub é consultado primeiro. O plugin não guarda chaves de API e, a partir do Moodle 5.0, respeita a opção que desliga as ferramentas de IA em um curso.

O tema, o material de referência e, na estilização, o texto da atividade são enviados ao provedor configurado. O que o professor digita no assistente também fica guardado em tabelas do plugin. Por isso, **não cole dados pessoais no campo de referência**.

## 🎓 Possibilidades pedagógicas

O assistente de curso completo pergunta o nível cognitivo predominante, com base na **Taxonomia de Bloom**, o que influencia o tipo e o tom das atividades. A estrutura também procura ligar cada objetivo a pelo menos uma seção.

Ele pode apoiar:

- a criação da primeira versão de uma disciplina nova
- o planejamento de uma unidade a partir de um material de referência
- a produção de questionários diagnósticos para revisão do professor
- a organização visual de textos antigos, que já estão no curso
- oficinas de formação docente sobre uso crítico de IA no planejamento

A IA pode errar. Todo conteúdo gerado deve passar pela revisão pedagógica e técnica de quem conhece a disciplina e a turma.

## 📋 Como utilizar o StudioLMS Course Builder (passo a passo)

O exemplo abaixo mostra a geração de um curso completo.

**1️⃣ Abrir o assistente**

Entre no curso, clique em **StudioLMS** na navegação e escolha **Curso Completo**.

**2️⃣ Preencher o briefing**

Descreva o tema ou cole um material de referência. Escolha o nível de Bloom, a estrutura e o modo, padrão ou gamificado.

**3️⃣ Revisar o roteiro**

Confira objetivos, seções e atividades. Faça as mudanças necessárias antes de continuar.

**4️⃣ Montar o curso**

Clique em **Montar curso** e acompanhe o progresso.

**5️⃣ Revisar antes de liberar**

Confira cada página, questão e enunciado, configure datas e notas e observe no relatório quais atividades foram marcadas como simplificadas.

## 🎯 Público-alvo

- Professores que querem um ponto de partida para montar seus cursos
- Designers instrucionais que produzem muitas disciplinas
- Equipes de EAD que precisam acelerar a primeira versão do material
- Professores que já têm textos prontos e querem melhorar a organização visual

## 🔗 Como instalar

O StudioLMS Course Builder está disponível em dois lugares:

- **Moodle Marketplace** (recomendado): [marketplace.moodle.com/plugins/local_studiolms](https://marketplace.moodle.com/plugins/local_studiolms)
- **GitHub** (código-fonte): [github.com/jeanlucio/moodle-local_studiolms](https://github.com/jeanlucio/moodle-local_studiolms)

A [documentação completa](https://jeanlucio.github.io/moodle-local_studiolms/) detalha o assistente, a estilização e a segurança.

**Instalando pelo GitHub:**

1. Baixe o `.zip` da versão mais recente
2. Extraia o conteúdo na pasta `local/studiolms` do seu Moodle
3. Acesse **Administração do site → Notificações** para concluir a instalação
4. Configure uma fonte de IA antes de usar o assistente

O **Course Designer** é opcional, mas recomendado: com ele, as páginas ganham os blocos visuais e podem ser ajustadas no editor. Sem ele, são geradas em HTML simples. O **Widgets** também é opcional e mantém atualizadas as regras exibidas nos questionários.

---

O StudioLMS Course Builder é gratuito, Open Source (GPLv3) e compatível com o Moodle 4.5 a 5.3. O uso do provedor de IA segue os termos e os custos do serviço escolhido.
