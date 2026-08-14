---
title: "PlayerHUD Filter: dados dinâmicos e itens interativos no conteúdo do Moodle"
description: "Análise do PlayerHUD Filter, plugin de filtro para Moodle que permite incorporar drops de itens coletáveis, widgets do HUD e comércio inline diretamente no conteúdo de cursos por meio de shortcodes."
pubDate: 2026-06-24
category: plugin
tags: [playerhud, playerhud-filter, moodle, gamificação, shortcodes, drops, plugin]
---

O **PlayerHUD Filter** é um plugin de filtro de texto para Moodle desenvolvido como uma extensão essencial do ecossistema **PlayerGames**. Enquanto o [PlayerHUD Block](/blog/playerhud-o-que-e) concentra a gestão geral da gamificação, o perfil e o painel lateral do estudante, o **PlayerHUD Filter** leva essa experiência para dentro do conteúdo pedagógico — permitindo que páginas, rótulos, livros, enunciados de tarefas e fóruns exibam drops de itens coletáveis, postos de troca com NPCs e dados em tempo real do jogador.

Em vez de manter a gamificação isolada em um bloco na lateral da tela, o filtro transforma a própria leitura do material em uma experiência interativa e imersiva.

---

## 🔍 O que é o PlayerHUD Filter?

O PlayerHUD Filter é um plugin do tipo *Text Filter* (`filter_playerhud`). No Moodle, filtros examinam o texto antes de ele ser exibido no navegador e substituem padrões específicos por elementos interativos em HTML.

Com o PlayerHUD Filter ativado, o professor pode escrever shortcodes simples no editor de texto (TinyMCE ou Atto). Ao renderizar a página, o Moodle substitui esses códigos por:

- 💎 **Drops de itens coletáveis:** baús, moedas, pergaminhos ou artefatos que os estudantes coletam com um clique.
- 🏪 **Postos de comércio (NPC Trade):** pequenos cards inline de troca onde o aluno pode adquirir itens utilizando recursos acumulados.
- 🎮 **Widget compacto do HUD:** uma versão reduzida do HUD (com avatar, nível, XP, barra de progresso e ranking) embutida em qualquer ponto do curso.

---

## 🧩 Shortcodes Disponíveis e Como Funcionam

O filtro reconhece três shortcodes principais com sintaxe limpa e de fácil memorização:

### 1. Inserção de Drops (`[PLAYERHUD_DROP ...]`)

Permite inserir um item coletável em qualquer ponto do conteúdo utilizando o código identificador configurado no bloco PlayerHUD:

```text
[PLAYERHUD_DROP code="GEM_SABEDORIA" /]
```

Quando o aluno visualiza o conteúdo, o shortcode é substituído por um card visual do item com botão de coleta. Ao clicar, o item vai imediatamente para o inventário do jogador, disparando animação de feedback sem recarregar a página.

### 2. Comércio Inline (`[PLAYERHUD_TRADE ...]`)

Permite embutir uma oferta de troca de loja NPC diretamente no fluxo de uma narrativa ou instrução de atividade:

```text
[PLAYERHUD_TRADE code="POCAO_CURA" /]
```

O aluno visualiza o custo em moedas ou itens necessários e pode concluir a transação diretamente na página.

### 3. Widget Compacto (`[PLAYERHUD_WIDGET /]`)

Exibe o resumo do perfil gamificado do aluno no corpo de uma página ou cabeçalho de seção:

```text
[PLAYERHUD_WIDGET /]
```

Ideal para páginas de boas-vindas, painéis de abertura de módulos ou páginas de instruções onde se deseja reforçar a identidade do jogador.

---

## ⚡ Arquitetura Técnica e Desempenho

Desenvolver filtros no Moodle exige muito cuidado com desempenho e segurança, especialmente quando envolve banco de dados e ações assíncronas. O PlayerHUD Filter foi projetado seguindo as melhores práticas da arquitetura Moodle:

- 🚀 **Prevenção de consultas N+1 (Bulk Loading):** O filtro faz uma única varredura no texto da página, identifica todos os códigos de drop e comércio presentes e carrega todos os registros do banco em uma **única consulta** antes de gerar o HTML. Mesmo que uma página tenha 20 drops espalhados, o impacto no banco de dados é mínimo.
- 🔄 **Coleta em tempo real via AJAX nativo:** As interações de coleta utilizam a API `core/ajax` do Moodle, garantindo transições suaves sem necessidade de recarregar a página ou redirecionar o aluno.
- 🔐 **Validação rigorosa no servidor:** Todas as regras de negócio definidas no PlayerHUD — como limites máximos de coleta por estudante, tempo de recarga (*cooldown*), itens secretos e verificação da permissão `block/playerhud:view` — são validadas no lado do servidor. O HTML nunca expõe dados de itens para alunos que não possuem permissão para visualizá-los.
- 📱 **Compatibilidade Mobile:** O markup gerado é totalmente responsivo e compatível com o aplicativo oficial do Moodle Mobile.

---

## 🎓 Possibilidades Pedagógicas

O PlayerHUD Filter abre portas para estratégias ativas de aprendizagem que conectam o design pedagógico ao design de jogos:

1. **Caça ao Tesouro Textual:** O professor pode esconder drops de itens ao longo de leituras longas, livros do Moodle ou artigos da disciplina. Isso incentiva a leitura atenta e a exploração minuciosa do material.
2. **Recompensas por Exploração:** Itens raros podem ser posicionados em seções opcionais de aprofundamento, fóruns de discussão ou glossários colaborativos, premiando a curiosidade dos estudantes.
3. **Narrativas Interativas e RPG Educacional:** Em cursos estruturados com storytelling, o filtro permite criar "pontos de encontro" com NPCs no meio do texto, onde o estudante negocia suprimentos antes de encarar uma atividade avaliativa desafiadora.
4. **Desbloqueio em Cadeia com PlayerHUD Availability:** Itens coletados via filtro em uma página teórica podem servir como chave de acesso para desbloquear a atividade prática seguinte através do plugin [PlayerHUD Availability](/blog/playerhud-availability-o-que-e).

---

## 🎮 Como Configurar e Utilizar (Passo a Passo)

### 1️⃣ Ativar o Filtro
1. Acesse **Administração do site → Plugins → Filtros → Gerenciar filtros**.
2. Localize **PlayerHUD Filter** e marque como **Ativado** (ou *Ativado em todo o site*).
3. No curso desejado, certifique-se de que os filtros estão ativos nas configurações do curso.

### 2️⃣ Criar o Item no PlayerHUD
1. No bloco PlayerHUD do curso, acesse o painel de gerenciamento de **Itens**.
2. Crie um item (ex: `Pergaminho Antigo`) e defina um código identificador único (ex: `SCROLL_01`), limite de coleta e tempo de recarga.

### 3️⃣ Inserir o Shortcode no Conteúdo
1. Edite uma Página, Rótulo ou Livro do curso.
2. Digite `[PLAYERHUD_DROP code="SCROLL_01" /]` no local desejado do texto e salve.

Ao abrir a página como estudante, o item aparecerá pronto para ser coletado e integrado ao inventário!

---

## 🔗 Como Instalar

O **PlayerHUD Filter** é gratuito e open source (licenciado sob GPL v3+):

- **Moodle Plugin Directory:** [moodle.org/plugins/filter_playerhud](https://moodle.org/plugins/filter_playerhud)
- **GitHub:** [github.com/jeanlucio/moodle-filter_playerhud](https://github.com/jeanlucio/moodle-filter_playerhud)

---

O PlayerHUD Filter é totalmente compatível com Moodle 4.5 ou superior e integra-se perfeitamente aos demais componentes do ecossistema [PlayerGames](/playergames/).
