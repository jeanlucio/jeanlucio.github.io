---
title: "Report Unlocker: gerencie todas as restrições de acesso do Moodle em um só lugar"
description: "Análise do Report Unlocker, um relatório de curso para Moodle que centraliza as condições de disponibilidade de todas as atividades, permitindo visualização, edição inline e exclusão em lote."
pubDate: 2026-06-30
category: plugin
tags: [report-unlocker, moodle, restrições, disponibilidade, gestão, relatórios]
---

O **Report Unlocker** é um relatório de curso do Moodle projetado para administradores e professores. Ele exibe e centraliza as **restrições de acesso** (condições de disponibilidade) aplicadas a todas as atividades e recursos de um curso.

Em vez de editar manualmente as configurações de restrição de cada atividade uma por uma, o Unlocker reúne tudo em um único painel de controle pesquisável e filtrável — reduzindo significativamente o tempo de configuração e melhorando a visibilidade de como o curso está estruturado.

## ✅ O que é o Report Unlocker?

Acessível pela barra de navegação do curso em **Relatórios → Unlocker — Restrições de Acesso** (que pode aparecer diretamente no menu superior ou dentro de **Mais**, dependendo do tamanho da tela), o Unlocker lista todas as atividades e exibe, em formato legível, quais restrições estão aplicadas (por exemplo, "Disponível a partir de 2026-03-20" ou "Requer nota mínima 70% no Quiz 1").

O grande diferencial do plugin é permitir a **edição inline**. Para os tipos de restrição nativos (data, grupo, agrupamento, nota, conclusão e perfil) e condições do PlayerHUD, você pode alterar os parâmetros diretamente na página do relatório, sem precisar abrir a página de configurações de cada atividade.

## 🧠 Por que gerenciar restrições centralmente?

Em cursos complexos, com dezenas de atividades, gerenciar quem pode ver o quê e quando é um desafio. Problemas comuns incluem:

- Esquecer de atualizar uma data de liberação em um módulo específico.
- Perder a visão geral de quais grupos têm acesso a quais fóruns.
- Gastar horas abrindo e fechando configurações de atividades apenas para revisar as condições.

O Report Unlocker resolve isso trazendo transparência e agilidade para o gerenciamento do curso.

## 🚀 O que o Report Unlocker oferece?

Entre os principais recursos do plugin estão:

- 📋 **Painel Unificado:** Visualize todas as restrições do curso em uma única tela.
- 🔍 **Filtros Avançados:** Filtre por seção da atividade, tipo de restrição (data, grupo, nota, conclusão, etc.) ou busque pelo nome da atividade.
- ✏️ **Edição Inline:** Altere datas, limites de notas, seleções de grupo e configurações de conclusão diretamente no relatório.
- 🗑️ **Ações em Massa:** Marque restrições individuais para remoção e salve tudo de uma vez, ou exclua todas as restrições visíveis filtradas com um único clique.
- 🤖 **Assistente IA Integrado:** Se configurado (via `core_ai` ou `local_aihub`), descreva as mudanças em linguagem natural e deixe o assistente preparar as modificações para sua aprovação.
- 🔗 **Suporte ao PlayerHUD:** Integração automática com o ecossistema PlayerHUD para editar restrições baseadas em nível de jogador, itens e classe.

**Tipos de Restrição com Edição Inline:**
- 📅 **Data** — desbloqueia/bloqueia em datas e horas específicas
- 👥 **Grupo e Agrupamento** — restringe com base na divisão de alunos
- 📊 **Nota** — restringe baseada em nota (mínima, máxima, intervalo)
- ✅ **Conclusão** — requer atividades anteriores completas
- 🆔 **Perfil** — restringe por campos do usuário
- 🎮 **PlayerHUD** — restringe pela progressão do jogador gamificado

## 🎓 Possibilidades pedagógicas

O Report Unlocker simplifica cenários pedagógicos que dependem de restrições de acesso:

- **Lançamento de Módulos Cronometrados:** Garanta rapidamente que todo o conteúdo de uma semana se desbloqueie na data correta.
- **Aprendizagem Baseada em Grupos:** Audite em segundos se os fóruns e tarefas de grupo estão com as restrições corretas.
- **Progressão Baseada em Domínio:** Verifique se as notas mínimas para avançar de módulo estão configuradas de forma coerente ao longo de todo o curso.
- **Gamificação Segura:** Com a integração ao PlayerHUD, garanta que os chefões finais só abram para alunos do nível adequado.

## 📋 Como utilizar o Report Unlocker (passo a passo)

**1️⃣ Acessar o relatório**

Navegue até o seu curso (como professor ou administrador) e localize **Relatórios** na barra de navegação superior do curso — pode aparecer diretamente ou dentro do menu **Mais**, dependendo da tela. Clique em **Unlocker — Restrições de Acesso**.

**2️⃣ Visualizar as restrições**

A tela inicial listará todas as atividades e recursos do curso juntamente com as condições de disponibilidade aplicadas a cada um, em um formato muito mais fácil de ler.

**3️⃣ Filtrar por necessidade**

Use o painel no topo para encontrar o que precisa. Você pode filtrar por **Seção** do curso, por **Tipo de Restrição** (ex: exibir apenas restrições de "Data") ou pesquisar uma atividade específica pela caixa de busca.

**4️⃣ Editar restrições na própria tela (inline)**

Em vez de abrir as configurações de cada atividade separadamente, você pode alterar datas, selecionar grupos e ajustar notas mínimas diretamente na lista do relatório. 

**5️⃣ Excluir e salvar em lote**

Marque a caixa de remoção ao lado de qualquer restrição que deseja apagar ou clique em "Excluir todas as visíveis" para limpar restrições em massa com base nos seus filtros. Depois de finalizar as edições, clique no botão para salvar todas as alterações simultaneamente.

## 🎯 Público-alvo

- Administradores Moodle que precisam auditar e gerenciar restrições em múltiplos cursos de forma eficiente.
- Professores que utilizam fortemente recursos de disponibilidade, gamificação ou liberação programada de conteúdos.
- Coordenadores pedagógicos e designers instrucionais que buscam garantir que todas as regras de acesso de um curso estão configuradas corretamente antes de liberar o acesso aos alunos.

## 🔗 Como instalar

O Report Unlocker está disponível em dois lugares:

- **Moodle Plugin Directory** (recomendado): [moodle.org/plugins/report_unlocker](https://moodle.org/plugins/report_unlocker)
- **GitHub** (código-fonte e versão mais recente): [github.com/jeanlucio/moodle-report_unlocker](https://github.com/jeanlucio/moodle-report_unlocker)

**Instalando pelo Moodle Plugin Directory:**

1. Acesse **Administração do site → Plugins → Instalar plugins**
2. Pesquise por **"Report Unlocker"**
3. Instale o plugin; ele ficará disponível no menu de Administração do curso

**Instalando pelo GitHub:**

1. Baixe o `.zip` da versão mais recente
2. Extraia o conteúdo na pasta `report/unlocker` do seu servidor Moodle
3. Acesse **Administração do site → Notificações** para concluir a instalação

---

O Report Unlocker é Open Source (GPLv3) e compatível com Moodle 4.5 ou superior.
