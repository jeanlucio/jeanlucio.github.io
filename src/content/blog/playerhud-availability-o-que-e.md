---
title: "PlayerHUD Availability: restrição de acesso por nível, XP e itens no Moodle"
description: "Análise do PlayerHUD Availability, plugin de condição de disponibilidade para Moodle que permite condicionar o acesso a atividades e seções ao nível, itens colecionáveis e classe de personagem do PlayerHUD."
pubDate: 2026-06-09
category: plugin
tags: [playerhud, availability, moodle, restrição de acesso, gamificação, trilhas, plugin]
---

O **PlayerHUD Availability** é um plugin de condição de acesso para Moodle que conecta diretamente o sistema de gamificação [PlayerHUD](/blog/playerhud-o-que-e) ao mecanismo nativo de restrição de disponibilidade do Moodle (*Restrict Access*).

Em cursos tradicionais, as condições de acesso costumam se limitar a datas, notas anteriores, grupos ou conclusão de atividades prévias. O **PlayerHUD Availability** expande esse horizonte, permitindo que professores criem trilhas de aprendizagem gamificadas onde o acesso a tarefas, questionários, recursos ou tópicos inteiros é condicionado ao **nível alcançado**, aos **itens acumulados no inventário** ou à **classe de personagem** do estudante.

---

## 🔓 O que é o PlayerHUD Availability?

O PlayerHUD Availability é um subplugin do tipo *Availability Condition* (`availability_playerhud`). Ele adiciona uma nova opção no painel padrão de restrições do Moodle, disponível em qualquer atividade, recurso ou seção de curso.

Quando o professor adiciona essa restrição, o Moodle avalia em tempo real o estado gamificado do estudante registrado no PlayerHUD antes de permitir a visualização ou o clique na atividade.

---

## 🎯 Tipos de Restrições Disponíveis

O plugin oferece suporte a diferentes regras de verificação que podem ser combinadas livremente:

### 1. Restrição por Nível Mínimo do Jogador
Exige que o estudante atinja determinado nível de progressão (XP) no PlayerHUD para desbloquear o conteúdo.
- *Exemplo:* Uma atividade de desafio avançado ("Desafio do Guardião") só se torna clicável quando o aluno atinge o **Nível 5**.

### 2. Restrição por Posse de Itens do Inventário
Verifica a quantidade de determinado item colecionável presente no inventário do aluno, com suporte a operadores lógicos (`>=`, `>`, `<`, `=`):
- *Exemplo 1:* O aluno precisa ter `>= 1` chave ("Chave da Torre de Cristal"), encontrada em um drop anterior via [PlayerHUD Filter](/blog/playerhud-filter-o-que-e), para abrir a avaliação do módulo.
- *Exemplo 2:* O aluno não pode acessar uma área de recuperação se já possui determinada medalha de excelência (`< 1`).

### 3. Restrição por Classe de Personagem
Permite segmentar atividades e materiais de acordo com a classe de RPG escolhida pelo estudante no PlayerHUD (como Guerreiro, Mago, Estrategista, etc.):
- *Exemplo:* Atividades com diferentes linguagens ou metodologias para cada arquétipo de aprendizagem, permitindo que cada estudante realize a missão voltada para a sua especialização.

### 4. Verificação de Gamificação Ativa (Opt-in)
Como o PlayerHUD permite que a participação na gamificação seja opcional para respeitar a autonomia do aluno, a condição permite verificar se o estudante optou por participar ou não da dinâmica gamificada.

---

## 🧩 Integração com o Ecossistema e o Report Unlocker

O PlayerHUD Availability foi construído para se integrar harmoniosamente com as ferramentas de gestão do Moodle:

- 📊 **Auditoria e Gestão em Lote com o Report Unlocker:** O plugin possui integração completa com o [Report Unlocker](/blog/report-unlocker-o-que-e). Coordenadores e professores conseguem visualizar em um relatório centralizado todas as atividades do curso que utilizam regras do PlayerHUD, com opção de edição inline e remoção em lote.
- 🔗 **Compatibilidade com Árvores de Restrição do Moodle:** Funciona em conjunto com as demais condições nativas do Moodle (data, nota, grupo, perfil). É possível criar regras compostas como: *"Disponível se: Nível >= 3 E Nota da Tarefa 1 >= 7.0 E Pertencer ao Grupo Alfa"*.
- 👁️ **Controle de Visibilidade Didático:** O professor pode configurar se a atividade bloqueada fica invisível para o estudante ou se aparece esmaecida (cinza) acompanhada de uma mensagem explicativa automática (ex: *"Não disponível até que você alcance o Nível 3 no PlayerHUD"*).

---

## 🎓 Possibilidades Pedagógicas

A aplicação de restrições por gamificação abre um leque de formatos pedagógicos envolventes:

1. **Trilhas Ramificadas e Não-Lineares:** Em vez de uma sequência rígida linear de semanas, os alunos escolhem seus próprios caminhos, desbloqueando fases conforme exploram o ambiente e ganham experiência.
2. **Masmorras de Aprendizagem (*Dungeon Crawling*):** Cursos de formação técnica ou programação podem criar "portas trancadas" onde o estudante precisa resolver desafios preliminares para coletar artefatos que funcionam como chaves de acesso.
3. **Especialização de Papéis em Projetos:** Grupos onde cada membro tem uma classe (ex: Pesquisador, Revisor, Relator) podem ter acesso a fóruns e tarefas especializadas exclusivas de suas funções.
4. **Proteção contra Sobrecarga Cognitiva:** Estudantes iniciantes focam no conteúdo introdutório sem se assustarem com materiais complexos, que permanecem bloqueados até que adquiram o domínio básico necessário.

---

## 🎮 Como Configurar Passo a Passo

1. No curso desejado, ative o **Modo de edição**.
2. Clique em **Editar configurações** na atividade, recurso ou seção que deseja proteger.
3. Expanda a seção **Restringir acesso** e clique em **Adicionar restrição**.
4. Selecione o botão **PlayerHUD**.
5. Escolha a regra desejada (**Nível**, **Item**, **Classe de Personagem** ou **Participação Ativa**).
6. Defina o valor ou selecione o item correspondente.
7. Escolha se o estudante verá a atividade esmaecida com informação do requisito ou se ela ficará totalmente oculta até o desbloqueio.
8. Salve as alterações.

---

## 🔗 Como Instalar

O **PlayerHUD Availability** é gratuito e open source (licenciado sob GPL v3+):

- **Moodle Plugin Directory:** [moodle.org/plugins/availability_playerhud](https://moodle.org/plugins/availability_playerhud)
- **GitHub:** [github.com/jeanlucio/moodle-availability_playerhud](https://github.com/jeanlucio/moodle-availability_playerhud)

---

O PlayerHUD Availability é compatível com Moodle 4.5 ou superior e compõe o núcleo de progressão do ecossistema [PlayerGames](/playergames/).
