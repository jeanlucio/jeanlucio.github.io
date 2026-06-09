---
title: "Teacher Checklist: verificação de qualidade de cursos no Moodle"
description: "Análise do Teacher Checklist, bloco para Moodle que detecta automaticamente problemas de configuração em cursos e combina essa detecção com uma lista de tarefas manual para o professor."
pubDate: 2026-06-09
category: plugin
tags: [teacher-checklist, moodle, qualidade, checklist, gestão, plugin]
---

O **Teacher Checklist** é um bloco para Moodle desenvolvido para ajudar professores a verificar a qualidade da configuração de seus cursos antes de publicá-los para os estudantes. Ele combina dois tipos de verificação em uma única interface: a detecção automática de problemas comuns de configuração e uma lista de tarefas manual para itens que o sistema não consegue detectar sozinho.

## ✅ O que é o Teacher Checklist?

O Teacher Checklist é um bloco adicionado à página do curso. Uma vez instalado, ele começa a escanear automaticamente o curso em busca de problemas de configuração e exibe um resumo diretamente no bloco — sem precisar abrir nenhum relatório separado.

Para a lista completa, o professor clica em **Ver relatório completo** e acessa um painel com três abas: **Pendentes**, **Ignorados** e **Feitos**. Nessa página é possível gerenciar todos os itens, adicionar tarefas manuais e realizar ações em lote.

## 🧠 Por que verificar a qualidade do curso?

Cursos mal configurados geram problemas que chegam tarde: estudantes que não conseguem entregar tarefas sem prazo, atividades sem descrição que geram dúvidas, quizzes sem perguntas que travam o progresso. Muitos desses problemas são detectáveis antes de qualquer estudante acessar o curso.

Uma verificação estruturada antes da publicação pode:

- **Reduzir chamados de suporte** causados por configurações incompletas
- **Aumentar a clareza do curso** para os estudantes desde o primeiro acesso
- **Apoiar garantia de qualidade em escala** para coordenadores que revisam múltiplos cursos
- **Funcionar como lista de lembretes** para itens específicos de cada professor ou instituição

## 🚀 O que o Teacher Checklist oferece?

Entre os principais recursos do plugin estão:

- 🔍 **Verificação automática:** detecta problemas comuns de configuração sem nenhum trabalho manual
- 📝 **Itens manuais:** o professor adiciona tarefas que o sistema não consegue detectar automaticamente
- 🔗 **Link inteligente:** se o título de uma tarefa manual coincidir com o nome de uma atividade, um link clicável é criado automaticamente
- 🗂️ **Rastreamento de status:** cada item pode ser marcado como Feito, Ignorado ou restaurado para Pendente
- ⚡ **Ações em lote:** marque ou ignore vários itens de uma vez com um único clique
- 💾 **Backup seguro:** itens manuais são preservados no backup/restore; verificações automáticas são recalculadas dinamicamente
- 🔄 **Modo somente manual:** a verificação automática pode ser desativada para usar o bloco como lista de tarefas pura

**Verificações automáticas disponíveis:**

| # | Verificação | O que detecta |
|---|-------------|--------------|
| 1 | Visibilidade do curso | Curso oculto para os estudantes |
| 2 | Resumo do curso | Curso sem resumo ou descrição |
| 3 | Data de término | Curso sem data de término configurada |
| 4 | Livro de notas | Nenhum item de avaliação configurado |
| 5 | Tarefas | Sem prazo de entrega, sem descrição ou envios pendentes de correção |
| 6 | Questionários | Sem perguntas, sem limite de tempo ou data de fechamento, tentativas aguardando correção manual |
| 7 | Fóruns | Sem tópicos de discussão ou sem descrição (Fórum de Avisos excluído) |
| 8 | Rastreamento de conclusão | Atividades visíveis com rastreamento de conclusão desativado |
| 9 | Seções vazias | Seções visíveis do curso sem conteúdo |

## 🎓 Possibilidades pedagógicas

O Teacher Checklist apoia práticas de qualidade no ambiente virtual:

- verificação completa do curso antes de cada nova edição ou abertura de matrículas
- revisão sistemática por coordenadores pedagógicos em cursos de múltiplos professores
- adaptação dos itens manuais para refletir os padrões de qualidade da instituição
- redução do ciclo de erros descobertos pelos estudantes — antes que eles cheguem ao suporte

Indicado para:

- professores que querem garantir a qualidade do curso antes de publicá-lo
- equipes de EAD que adotam critérios mínimos de configuração
- instituições que buscam padronizar a qualidade dos cursos no Moodle

## 📋 Como utilizar o Teacher Checklist (passo a passo)

**1️⃣ Adicionar o bloco ao curso**

Ative o modo de edição e selecione **Adicionar bloco → Teacher Checklist**.

**2️⃣ Revisar os problemas detectados**

O bloco exibe imediatamente um resumo dos problemas encontrados. Clique em **Ver relatório completo** para abrir o painel com a lista detalhada.

**3️⃣ Resolver ou ignorar cada item**

Para cada item automático, resolva o problema no curso — ele desaparecerá automaticamente da lista — ou clique em **Ignorar** caso seja intencional.

**4️⃣ Adicionar tarefas manuais**

No topo do painel, use o campo de texto para adicionar lembretes personalizados. Se o título corresponder ao nome de uma atividade, o link é criado automaticamente.

**5️⃣ Usar ações em lote**

Para processar vários itens de uma vez, selecione-os com os checkboxes e use o botão de ação em lote.

**6️⃣ Desativar a verificação automática (opcional)**

Se preferir usar o bloco apenas como lista manual, desative a **Verificação Automática** nas configurações do bloco. Ele passa a funcionar como um to-do list dentro do próprio Moodle.

## 🎯 Público-alvo

- Professores que querem garantir a qualidade do curso antes de abri-lo para os estudantes
- Coordenadores pedagógicos que revisam cursos de múltiplos professores
- Designers instrucionais que trabalham com padrões de qualidade definidos pela instituição
- Equipes de EAD que buscam reduzir chamados de suporte causados por configurações incompletas

## 🔗 Como instalar

O Teacher Checklist está disponível gratuitamente no **Moodle Plugin Directory**:

1. Acesse **Administração do site → Plugins → Instalar plugins**
2. Pesquise por **"Teacher Checklist"**
3. Instale e adicione o bloco ao curso pelo modo de edição

O código-fonte também está disponível no [GitHub](https://github.com/jeanlucio/moodle-block_teacher_checklist) para acompanhar a versão mais recente.

---

O Teacher Checklist é 100% Open Source, compatível com Moodle 4.5 ou superior, e está disponível no [Diretório Oficial de Plugins do Moodle](https://moodle.org/plugins/block_teacher_checklist).
