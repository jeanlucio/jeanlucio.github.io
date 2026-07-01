---
title: "Penalidade por Atraso: desconto automático em atividades avaliativas no Moodle"
description: "Análise da Penalidade por Atraso, plugin local para Moodle que aplica descontos progressivos em notas quando estudantes entregam atividades depois do prazo, com suporte a múltiplos tipos de atividade, exceções por estudante ou grupo e relatório exportável."
pubDate: 2026-06-11
category: plugin
tags: [late-penalty, moodle, avaliação, prazos, notas, plugin]
---

A **Penalidade por Atraso** é um plugin local para Moodle desenvolvido para automatizar uma regra comum em cursos: aplicar desconto na nota quando uma atividade é entregue depois do prazo. A diferença é que ele não fica restrito ao módulo Tarefa. O plugin observa eventos do Livro de Notas e pode funcionar com qualquer atividade que registre nota, como Tarefas, Questionários, Fóruns, SCORM, Lições, Workshops e outros módulos avaliativos.

## ⏱️ O que é a Penalidade por Atraso?

A Penalidade por Atraso adiciona uma seção de configuração nas atividades avaliativas do Moodle. Nela, o professor ativa a penalidade progressiva, define o percentual de desconto por dia de atraso e estabelece um limite máximo de penalidade.

Quando o estudante entrega após o prazo e a nota é registrada, o plugin calcula o atraso, aplica o desconto e grava a nova nota usando a API padrão do Moodle. A alteração fica registrada no histórico do Livro de Notas, o que preserva rastreabilidade para professores, coordenação e auditoria acadêmica.

Exemplo simples: se a regra for **10% ao dia**, com limite de **50%**, uma entrega feita dois dias depois do prazo recebe 20% de desconto sobre a nota obtida. A partir do quinto dia, o desconto não passa de 50%.

## 🧠 Por que automatizar penalidades por atraso?

Políticas de atraso costumam ser fáceis de escrever no plano de ensino e trabalhosas de aplicar manualmente. Em turmas grandes, ou em cursos com várias atividades avaliativas, o professor precisa conferir datas, calcular descontos, ajustar notas e explicar inconsistências caso uma exceção tenha sido aplicada de forma diferente.

Automatizar essa regra ajuda a:

- **Padronizar a aplicação da política:** todos os estudantes seguem a mesma regra configurada para a atividade
- **Reduzir trabalho manual:** o professor não precisa recalcular notas caso a entrega tenha ocorrido fora do prazo
- **Dar transparência ao estudante:** badges e avisos indicam prazo, penalidade acumulada e limite máximo
- **Manter histórico de alterações:** as modificações aparecem no histórico padrão de notas do Moodle
- **Apoiar exceções formais:** prazos e percentuais podem ser ajustados por estudante ou por grupo

## 🚀 O que a Penalidade por Atraso oferece?

Entre os principais recursos do plugin estão:

- 📋 **Suporte amplo a atividades:** funciona com módulos que registram nota no Livro de Notas, não apenas com Tarefas
- 📅 **Resolução flexível de prazos:** usa uma cadeia de prioridade que considera exceções do plugin, overrides nativos do Moodle, lembrete da linha do tempo e campos nativos de prazo quando aplicáveis
- 👤 **Exceções por estudante:** permite definir prazo, percentual diário e limite máximo específicos para um aluno
- 👥 **Exceções por grupo:** permite configurar regras para grupos inteiros; quando o estudante pertence a múltiplos grupos, o plugin usa a combinação mais favorável
- 📉 **Penalidade progressiva:** calcula desconto por dia de atraso, arredondando frações de dia para cima
- 🔒 **Limite máximo de desconto:** impede que a penalidade ultrapasse o teto configurado
- 🔔 **Badges contextuais no curso:** mostram prazo, penalidade acumulada ou penalidade máxima conforme o estado da atividade
- 🔁 **Recálculo automático:** pode recalcular penalidades quando prazo, percentual diário ou limite máximo mudam
- 📊 **Relatório de penalidades:** lista ajustes aplicados por curso, com filtros por estudante e atividade
- 📤 **Exportação:** permite baixar o relatório em CSV ou Excel
- 💾 **Backup e restauração:** regras acompanham a atividade em backup, restore e duplicação de curso

## 📌 Como o prazo é definido?

Um ponto importante da Penalidade por Atraso é que nem todo módulo do Moodle tem um prazo "macio", isto é, um prazo que permita entrega atrasada. Alguns módulos fecham a atividade e impedem novas submissões; nesses casos, não há atraso para calcular.

Por isso, o plugin resolve o prazo efetivo nesta ordem:

| Prioridade | Fonte | Aplicação |
|---|---|---|
| 1 | Exceção por estudante da Penalidade por Atraso | Todos os módulos |
| 2 | Exceção por grupo da Penalidade por Atraso | Todos os módulos |
| 3 | Overrides nativos do módulo | Tarefa, Questionário e Lição |
| 4 | "Definir lembrete na linha do tempo" (`completionexpected`) | Todos os módulos |
| 5 | Campo nativo de prazo | Tarefa e Fórum |

Para atividades como Questionário, SCORM, H5P e outros módulos que normalmente fecham após a data limite, a recomendação é usar o campo **Definir lembrete na linha do tempo** como referência de penalidade. Ele não bloqueia a entrega; serve como marco para o cálculo.

## 🎓 Possibilidades pedagógicas

A Penalidade por Atraso é útil quando a política de atraso faz parte do desenho do curso, mas precisa ser aplicada de forma consistente e transparente.

Ele pode apoiar:

- cursos com muitas atividades avaliativas distribuídas ao longo do semestre
- disciplinas presenciais que usam o Moodle para entregas, fóruns ou questionários
- cursos online e híbridos com regras institucionais de atraso
- turmas com necessidade de exceções documentadas para estudantes ou grupos
- coordenações que precisam acompanhar ajustes de nota por atraso

O plugin não substitui o julgamento pedagógico do professor. Ele automatiza uma regra configurável. Casos especiais continuam podendo ser tratados por overrides, ajustes manuais ou revisão da política de avaliação.

## 📈 Como utilizar a Penalidade por Atraso (passo a passo)

**1️⃣ Instalar o plugin**

Instale o plugin em `local/latepenalty`. Após a instalação, a seção **Penalidade por Atraso** passa a aparecer nas atividades avaliativas.

**2️⃣ Configurar o prazo da atividade**

Em Tarefas e Fóruns, use o prazo nativo quando fizer sentido. Em outros módulos, configure **Definir lembrete na linha do tempo** para indicar a data de referência da penalidade.

**3️⃣ Ativar a penalidade progressiva**

Na seção **Penalidade por Atraso**, marque **Enable progressive penalty**, defina o percentual diário e o percentual máximo. O limite máximo precisa ser maior ou igual ao percentual diário.

**4️⃣ Ajustar exceções quando necessário**

Dentro da atividade, use as opções de **Exceções da Penalidade por Atraso** para criar exceções por estudante ou por grupo. Campos deixados em branco herdam a regra padrão da atividade.

**5️⃣ Acompanhar badges e avisos**

Na página do curso, estudantes veem avisos contextuais sobre prazo e penalidade. Professores veem uma variação voltada ao acompanhamento, incluindo o número de estudantes pendentes em atividades atrasadas.

**6️⃣ Consultar o relatório**

No menu do curso, acesse **Relatório da Penalidade por Atraso** para ver as penalidades aplicadas. O relatório pode ser filtrado por estudante e atividade, e exportado em CSV ou Excel.

## 🎯 Público-alvo

- Professores que aplicam desconto por atraso em atividades avaliativas
- Coordenadores que precisam de regras consistentes de avaliação
- Equipes de EAD que revisam políticas de prazos e notas
- Instituições que querem rastreabilidade em ajustes de nota por atraso
- Cursos com múltiplos tipos de atividade avaliativa além de Tarefas

## 🔗 Como instalar

A Penalidade por Atraso está disponível em dois lugares:

- **Moodle Plugin Directory** (recomendado): [moodle.org/plugins/local_latepenalty](https://moodle.org/plugins/local_latepenalty)
- **GitHub** (código-fonte e versão mais recente): [github.com/jeanlucio/moodle-local_latepenalty](https://github.com/jeanlucio/moodle-local_latepenalty)

**Instalando pelo Moodle Plugin Directory:**

1. Acesse **Administração do site → Plugins → Instalar plugins**
2. Pesquise por **"Penalidade por Atraso"**
3. Instale e configure as regras nas atividades avaliativas

**Instalando pelo GitHub:**

1. Baixe o `.zip` da versão mais recente
2. Extraia o conteúdo na pasta `local/latepenalty` do seu servidor Moodle
3. Acesse **Administração do site → Notificações** para concluir a instalação

---

A Penalidade por Atraso é 100% Open Source e compatível com Moodle 4.5 ou superior.
