---
title: "Lab Virtual: crie sandboxes para estudantes no Moodle"
description: "Análise do Lab Virtual (local_virtuallab), um plugin para criação e manutenção em lote de cursos-laboratório isolados, com painel self-service para estudantes."
pubDate: 2026-07-08
category: plugin
tags: [virtuallab, moodle, laboratório, sandboxes, gestão, turmas, self-service]
---

O **Lab Virtual** (local_virtuallab) é um plugin local Moodle para criação e manutenção em lote de cursos-laboratório (sandboxes isolados), organizados por turmas. Ele conta com um painel *self-service* para estudantes escolherem e acessarem seus ambientes sem intervenção do administrador a cada semestre.

O Moodle já possui ferramentas nativas para criar vários cursos de uma vez, mas o Lab Virtual foca no ciclo de vida completo: ele automatiza desde a criação em lote agrupada por turmas, passando pelo acesso simplificado sem chaves de inscrição, até o *reset* ou exclusão programada no final do semestre.

## ✅ Principais Recursos

- **Criação e Reset em Lote**: Permite criar, limpar ou excluir dezenas de instâncias de cursos simultaneamente a partir da página de gerência da turma.
- **Painel Self-Service**: Estudantes acessam um painel simplificado, veem os labs disponíveis na sua turma e podem se inscrever com um clique como editores ou visitantes, sem necessidade de chaves de inscrição.
- **Gestão Delegada**: Professores recebem um papel de gerência na subcategoria de sua turma, podendo gerenciar apenas seus laboratórios sem precisar de permissões amplas de administração no site.
- **Ciclo de Vida Automático**: O administrador (ou o professor da turma) pode definir uma política de ciclo de vida (ex: exclusão ou reset automático após X meses). O sistema notifica professores e alunos com antecedência.
- **Integração com Teacher Checklist**: Compatibilidade com o bloco Teacher Checklist para sincronizar e gerenciar listas de tarefas em todos os laboratórios criados.

## 🧠 Para que tipo de curso ele serve?

O Lab Virtual é projetado para disciplinas em que cada estudante ou grupo precisa de um curso Moodle isolado para construir protótipos, páginas ou entregas sem interferir na turma oficial nem no trabalho dos colegas. 

Cenários típicos:
- Design de Interface, Desenvolvimento Web e disciplinas similares baseadas em projetos.
- Formação técnica e profissional em que os estudantes precisam de um sandbox pessoal.
- Qualquer disciplina em que os estudantes necessitam de um espaço Moodle configurável próprio a cada semestre.

Recomenda-se instalar este plugin num ambiente Moodle dedicado a laboratórios, separado do AVA principal onde as disciplinas regulares ocorrem. Isso evita poluir a lista de cursos do estudante e segmenta o tráfego e recursos de criação/exclusão.

## 🚀 Como começar?

O Lab Virtual já está disponível gratuitamente. O código-fonte está hospedado no GitHub e ele também pode ser encontrado no diretório oficial de plugins do Moodle.

**Link do Diretório:** [Moodle.org - Lab Virtual](https://moodle.org/plugins/local_virtuallab)  
**Código Fonte:** [GitHub - jeanlucio/moodle-local_virtuallab](https://github.com/jeanlucio/moodle-local_virtuallab)
