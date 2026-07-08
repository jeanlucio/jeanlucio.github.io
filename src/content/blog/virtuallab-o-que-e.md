---
title: "Lab Virtual: crie sandboxes para estudantes no Moodle"
description: "Análise do Lab Virtual (local_virtuallab), um plugin para criação e manutenção em lote de cursos-laboratório isolados, com painel self-service para estudantes."
pubDate: 2026-07-08
category: plugin
tags: [virtuallab, moodle, laboratório, sandboxes, gestão, turmas, self-service]
---

O **Lab Virtual** (local_virtuallab) é um plugin local para Moodle desenvolvido para resolver um desafio comum em disciplinas técnicas: a necessidade de prover um ambiente isolado (sandbox) para cada estudante ou grupo. Em vez de administradores criarem e limparearem cursos manualmente a cada semestre, o plugin automatiza o ciclo de vida completo desses laboratórios, organizando-os por turmas e oferecendo um painel *self-service* aos alunos.

<figure class="prose-full">
  <img src="/images/virtuallab.png" alt="Painel do Lab Virtual mostrando a lista de laboratórios disponíveis para os estudantes entrarem." loading="lazy" />
</figure>

## 🧪 O que é o Lab Virtual?

O Lab Virtual é um plugin do tipo "local" no Moodle. Ele não atua dentro de um curso específico, mas sim no nível de sistema e categorias, gerenciando a criação em massa de "cursos-laboratório".

Através de um painel de gerenciamento, o professor (ou coordenador) visualiza suas turmas e pode:

- criar múltiplos cursos em lote com um único clique
- resetar ou excluir laboratórios individualmente ou em massa
- definir prazos de validade (ciclo de vida) para limpeza automática
- compartilhar um link direto do painel da turma para os estudantes

Os estudantes, por sua vez, acessam esse painel da turma e encontram a lista de labs disponíveis, podendo ingressar neles instantaneamente, escolhendo atuar como editor (editingteacher) ou visitante (student), sem precisar de chaves de inscrição.

## 🧠 Por que usar o Lab Virtual?

Embora o Moodle possua ferramentas nativas para envio de cursos em lote (via CSV), essa abordagem foca apenas na criação. Em disciplinas que usam laboratórios semestrais, a dor de cabeça não é só criar, mas gerenciar o acesso fluido e, principalmente, limpar o lixo depois.

Usar o Lab Virtual permite:

- reduzir drasticamente o trabalho do administrador do sistema, delegando a gestão ao professor da turma
- remover a barreira das "chaves de inscrição" com o acesso self-service
- garantir que os cursos sejam reciclados ou excluídos automaticamente ao fim do semestre (política de ciclo de vida)
- isolar as experimentações dos estudantes, evitando que quebrem o ambiente principal de aulas

## 🚀 O que o Lab Virtual oferece?

Entre os principais recursos do plugin estão:

- 🗂 **Criação em lote:** gera dezenas de cursos de uma vez dentro de uma subcategoria própria da turma.
- 🔓 **Inscrição sem chaves:** os estudantes entram nos labs com um clique pelo painel self-service.
- 🎓 **Gestão delegada:** professores recebem um papel com permissão restrita para gerenciar apenas os labs de sua turma.
- ⏰ **Manutenção automática:** uma tarefa noturna reseta ou exclui labs vencidos de acordo com as regras definidas, enviando alertas por e-mail.
- 🚦 **Status em tempo real:** o painel indica automaticamente se um lab está Disponível, Em uso ou Cheio.
- 📋 **Integração com Teacher Checklist:** provisiona automaticamente uma lista de tarefas padrão para os laboratórios quando o bloco Teacher Checklist está instalado.
- 📊 **Relatórios de uso:** visão geral de engajamento dos estudantes nos labs, com exportação para CSV e Excel.

## 🎓 Possibilidades de uso

O Lab Virtual é ideal para cenários educacionais práticos:

- disciplinas de Design de Interface e Desenvolvimento Web baseadas em projetos
- formação técnica onde estudantes precisam construir conteúdos no Moodle ou testar configurações
- workshops e minicursos onde os participantes precisam de um ambiente "quebrável" para praticar
- espaços individuais para Trabalho de Conclusão de Curso (TCC) ou desenvolvimento de portfólio

## 🖥️ Como utilizar o Lab Virtual (passo a passo)

**1️⃣ Criar a Turma (Administrador)**

O administrador do Moodle acessa as configurações do plugin e clica em **Nova Turma**, definindo um nome e designando um ou mais professores responsáveis. O sistema já cria uma subcategoria isolada para essa turma.

**2️⃣ Provisionar os Laboratórios (Professor)**

O professor recebe uma notificação de que foi designado. Ao acessar o painel, ele escolhe um prefixo (ex: "Lab") e define quantos laboratórios criar de uma vez. Os cursos são gerados imediatamente.

**3️⃣ Compartilhar o Acesso (Professor)**

O professor copia a URL do painel da turma e disponibiliza no curso oficial da disciplina (via Rótulo, URL ou Fórum). 

**4️⃣ Acessar os Labs (Estudante)**

Os estudantes clicam no link, visualizam a lista de laboratórios da turma e clicam no botão para entrar. O sistema inscreve o aluno automaticamente com o papel apropriado e o redireciona para dentro do laboratório.

## 🎯 Público-alvo

- Administradores Moodle sobrecarregados com requisições de criação e exclusão de cursos
- Professores de disciplinas técnicas e de tecnologia que precisam de ambientes práticos
- Coordenadores de laboratórios virtuais e de experimentação pedagógica

## 🔗 Como instalar

O Lab Virtual está disponível em dois lugares:

- **Moodle Plugin Directory** (recomendado): [moodle.org/plugins/local_virtuallab](https://moodle.org/plugins/local_virtuallab)
- **GitHub** (código-fonte e versão mais recente): [github.com/jeanlucio/moodle-local_virtuallab](https://github.com/jeanlucio/moodle-local_virtuallab)

**Instalando pelo Moodle Plugin Directory:**

1. Acesse **Administração do site → Plugins → Instalar plugins**
2. Pesquise por **"Lab Virtual"** ou "virtuallab"
3. Instale e prossiga com a atualização do banco de dados

**Instalando pelo GitHub:**

1. Baixe o `.zip` da versão mais recente
2. Extraia o conteúdo na pasta `local/virtuallab` do seu servidor Moodle
3. Acesse **Administração do site → Notificações** para concluir a instalação

---

O Lab Virtual é 100% Open Source e compatível com Moodle 4.5 ou superior.
