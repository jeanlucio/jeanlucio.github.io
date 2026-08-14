---
title: "PromptKit Edu: organização e gestão de prompts de IA para educadores"
description: "Análise do PromptKit Edu, aplicação web open source desenvolvida para professores e designers instrucionais organizarem, customizarem e exportarem prompts pedagógicos com foco em privacidade e formatos Moodle."
pubDate: 2026-06-25
category: ferramentas
tags: [promptkit-edu, ia na educação, prompts, moodle, ferramentas web, open source, produtividade]
---

O **PromptKit Edu** é uma aplicação web interativa que desenvolvi para resolver um problema cada vez mais frequente na rotina docente: a organização e o reaproveitamento de prompts de Inteligência Artificial para fins educacionais.

Com a popularização de modelos como ChatGPT, Claude, Gemini e Copilot, muitos professores e designers instrucionais começaram a criar prompts eficientes para planejar aulas, elaborar avaliações e fornecer feedbacks. No entanto, esses comandos costumam ficar dispersos em blocos de notas, históricos de chat ou documentos soltos. O **PromptKit Edu** surge como uma central de organização pensada especificamente para o contexto pedagógico.

---

## 🌐 O que é o PromptKit Edu?

O PromptKit Edu é uma ferramenta web que funciona **100% no navegador** (*Single Page Application*), sem necessidade de instalação, login ou configuração de servidores.

A ferramenta reúne uma biblioteca estruturada de prompts educacionais pré-configurados, permitindo que o professor:

- 📋 **Copie comandos com um clique** para usar no seu modelo de IA favorito;
- ✍️ **Crie, edite e personalize** seus próprios prompts pedagógicos;
- 🗂️ **Organize por categorias** temáticas (Planejamento, Avaliação, Gamificação, Tutoria, etc.);
- 💾 **Exporte e importe backups** em JSON para compartilhar kits com outros docentes.

---

## 🚀 Principais Recursos e Diferenciais

### 1. Foco Pedagógico e Integração com Moodle
Diferente de repositórios genéricos de prompts, o PromptKit Edu foi desenhado com foco nas necessidades reais da sala de aula e do ensino a distância. A ferramenta inclui formatos estruturados para:
- Geração de questões prontas no formato **GIFT** e **XML do Moodle** para importação direta no banco de questões;
- Construção de matrizes e rubricas de avaliação por competências;
- Roteirização de atividades práticas e estudos de caso;
- Elaboração de narrativas e missões para cursos gamificados.

### 2. Notas e Instruções Didáticas por Card
Cada card de prompt conta com uma área de observações pedagógicas. Esse espaço orienta o professor sobre quais variáveis e contextos devem ser preenchidos (ex: faixa etária da turma, objetivo de aprendizagem, tempo estimado de atividade) para obter a melhor resposta da IA.

### 3. Privacidade Total (Zero Backend & 100% Client-Side)
Uma das decisões centrais de arquitetura foi a **privacidade dos dados**:
- Toda a base de prompts criada ou editada pelo professor é armazenada localmente no `localStorage` do seu próprio navegador.
- Nenhum dado, prompt ou informação institucional trafega por servidores externos.
- A ferramenta respeita integralmente a LGPD e pode ser utilizada com segurança em qualquer computador institucional.

### 4. Backup, Portabilidade e Compartilhamento
O professor pode exportar toda a sua base de prompts em um arquivo `.json` com um único clique. Isso possibilita:
- Criar backups periódicos de segurança;
- Transferir a biblioteca entre diferentes computadores ou navegadores;
- Criar e compartilhar "kits temáticos de prompts" entre colegas de departamento ou equipes de design instrucional.

### 5. Interface Moderna e Responsiva
- **Tema Claro e Escuro (Dark Mode):** Alternância instantânea de temas com alto contraste.
- **Busca em Tempo Real:** Filtro rápido por palavras-chave em títulos, conteúdos e observações.
- **Otimização Mobile:** Barra de ferramentas compacta e adaptada para uso em smartphones e tablets.

---

## 🎓 Possibilidades Pedagógicas na Prática

O PromptKit Edu pode ser incorporado à rotina educacional de diversas maneiras:

1. **Agilidade no Planejamento Docente:** Estruturação de planos de aula, cronogramas de disciplinas e sequências didáticas alinhadas à BNCC ou diretrizes curriculares.
2. **Criação Rápida de Bancos de Questões:** Elaboração de dezenas de itens de múltipla escolha com distratores pedagogicamente justificados, formatados para subida direta no Moodle.
3. **Personalização de Feedback Formativo:** Prompts que auxiliam na redação de devolutivas detalhadas e acolhedoras sobre redações, relatórios e projetos práticos.
4. **Alinhamento em Equipes Pedagógicas:** Coordenadores de curso podem distribuir kits de prompts padronizados para garantir uniformidade na qualidade do material didático.

---

## 🔗 Como Acessar e Utilizar

O **PromptKit Edu** é gratuito, livre e de código aberto (GPL v3+):

- **Acessar online:** [jeanlucio.github.io/promptkitedu](https://jeanlucio.github.io/promptkitedu/)
- **Código-fonte no GitHub:** [github.com/jeanlucio/promptkitedu](https://github.com/jeanlucio/promptkitedu)

---

O PromptKit Edu complementa a suíte de soluções educacionais abertas, promovendo o uso ético, produtivo e consciente da inteligência artificial na educação.
