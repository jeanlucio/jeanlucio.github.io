---
title: "PlayerGroup: formação autônoma de grupos no Moodle"
description: "Análise do PlayerGroup, plugin de atividade para Moodle que permite aos estudantes formarem seus próprios grupos com diferentes níveis de privacidade, sistema de convites e integração automática com notas e conclusão de atividade."
pubDate: 2026-06-09
category: plugin
tags: [playergroup, moodle, grupos, colaboração, gamificação, plugin]
---

O **PlayerGroup** é um plugin de atividade para Moodle desenvolvido para resolver um gargalo comum em cursos online: a formação manual de grupos pelo professor. Em vez de criar grupos administrativamente e atribuir estudantes a eles, o plugin transforma essa etapa em uma atividade pedagógica autônoma — os próprios estudantes acessam a atividade, criam ou ingressam em grupos, e o Moodle registra tudo automaticamente.

<figure class="prose-full">
  <img src="/images/playergroup.png" alt="Tela da atividade PlayerGroup exibindo seis grupos criados pelos estudantes — Caçadores do Norte, Filhos do Trovão, Guerreiros da Luz (fechado), Magos do Cristal (protegido por senha), Os Invencíveis e Sombras Eternas — cada um com emoji, líder, descrição, contador de membros e botão Entrar no Grupo" loading="lazy" />
</figure>

## 🤝 O que é o PlayerGroup?

O PlayerGroup é um módulo de atividade do Moodle. Ao contrário de blocos e filtros, ele aparece diretamente como uma atividade no curso — com ícone, nome e rastreamento de conclusão.

Dentro da atividade, o estudante visualiza os grupos existentes e pode:

- criar um novo grupo com nome, descrição e emoji badge
- ingressar em um grupo aberto livremente
- ingressar em um grupo protegido informando a senha
- receber e aceitar convites para grupos fechados

O professor define as regras antes de publicar: número mínimo e máximo de membros, se os estudantes podem sair do grupo após entrar, se os grupos são excluídos quando a atividade é deletada e qual nota atribuir a quem participar.

## 🧠 Por que usar formação autônoma de grupos?

A formação manual de grupos consome tempo do professor e frequentemente ignora as preferências dos estudantes. Em atividades baseadas em projetos, laboratórios ou cursos gamificados, permitir que os próprios estudantes escolham suas equipes pode:

- aumentar o comprometimento com o grupo e com o trabalho coletivo
- estimular a negociação e o protagonismo dos estudantes
- reduzir o volume de operações administrativas do professor
- tornar a formação de grupos um marco pedagógico visível no curso

No contexto do ecossistema **PlayerGames**, o PlayerGroup serve como base de identidade de equipe: o **PlayerHUD** exibe o grupo do estudante como parte do seu perfil de jogo, conectando a formação de times à progressão gamificada do curso.

## 🚀 O que o PlayerGroup oferece?

Entre os principais recursos do plugin estão:

- 🔒 **Privacidade flexível:** grupos abertos, protegidos por senha ou fechados (somente por convite)
- 📨 **Sistema de convites nativo:** notificações pelo sininho do Moodle + e-mail para quem está offline
- ⚙️ **Limites configuráveis:** mínimo e máximo de membros por grupo, definidos pelo professor
- 🏗️ **Agrupamento automático:** o Moodle cria o agrupamento correspondente sem configuração manual adicional
- 📊 **Integração com notas:** nota atribuída automaticamente ao ingressar ou criar um grupo; permanente mesmo após a saída
- ✅ **Conclusão de atividade:** regra personalizada — o estudante precisa criar ou ingressar em um grupo
- 📋 **Relatório do professor:** log de auditoria com os últimos 200 eventos, com exportação em CSV e Excel
- 📱 **App mobile:** suporte nativo ao aplicativo oficial do Moodle

## 🎓 Possibilidades pedagógicas

O PlayerGroup se encaixa em diferentes contextos de ensino:

- aprendizagem baseada em projetos onde as equipes são escolhidas pelos próprios estudantes
- cursos gamificados onde o grupo é a unidade de identidade e progressão
- laboratórios e workshops com número limitado de vagas por grupo
- atividades colaborativas onde a formação do time é, em si, um primeiro desafio pedagógico
- disciplinas online onde reduzir o esforço administrativo do professor é prioritário

## 🎮 Como utilizar o PlayerGroup (passo a passo)

**1️⃣ Adicionar a atividade ao curso**

Ative o modo de edição e selecione **Adicionar uma atividade → PlayerGroup**.

**2️⃣ Configurar a atividade**

No formulário de configuração, defina:

- **Mínimo e máximo de membros** por grupo
- **Permitir que estudantes saiam** do grupo após entrar
- **Excluir grupos ao deletar a atividade** (se marcado, remove grupos e agrupamentos permanentemente)
- **Recompensa de fundação** — nota atribuída ao participar de um grupo

**3️⃣ Publicar e acompanhar**

Com a atividade publicada, os estudantes acessam a página e criam ou ingressam em grupos de forma autônoma. O professor acompanha tudo pelo relatório da atividade.

**4️⃣ Usar os grupos em outras atividades**

Como o PlayerGroup cria agrupamentos nativos, os grupos formados ficam imediatamente disponíveis em tarefas colaborativas, fóruns segmentados e restrições de acesso do Moodle — sem nenhuma configuração extra.

## 🎯 Público-alvo

- Professores de cursos com atividades colaborativas em equipe
- Designers instrucionais que trabalham com aprendizagem baseada em projetos
- Coordenadores de cursos gamificados que utilizam o ecossistema PlayerHUD
- Docentes que querem reduzir o trabalho manual de formação de grupos

## 🔗 Como instalar

O PlayerGroup está disponível em dois lugares:

- **Moodle Plugin Directory** (recomendado): [moodle.org/plugins/mod_playergroup](https://moodle.org/plugins/mod_playergroup)
- **GitHub** (código-fonte e versão mais recente): [github.com/jeanlucio/moodle-mod_playergroup](https://github.com/jeanlucio/moodle-mod_playergroup)

**Instalando pelo Moodle Plugin Directory:**

1. Acesse **Administração do site → Plugins → Instalar plugins**
2. Pesquise por **"PlayerGroup"**
3. Instale e adicione a atividade ao curso desejado

**Instalando pelo GitHub:**

1. Baixe o `.zip` da versão mais recente
2. Extraia o conteúdo na pasta `mod/playergroup` do seu servidor Moodle
3. Acesse **Administração do site → Notificações** para concluir a instalação

---

O PlayerGroup é 100% Open Source e compatível com Moodle 4.5 ou superior.
