---
title: "Moodle 5.3 LTS chegou: modo escuro, resultados de aprendizagem, navegação linear e Claude no core"
description: "Lançado em 5 de outubro de 2026, o Moodle 5.3 é a nova versão LTS, sucessora do 4.5. Veja as novidades, os novos requisitos de servidor e o que checar antes de atualizar."
pubDate: 2026-10-06
category: moodle
tags: [Moodle, Moodle 5.3, LTS, Atualização, Inteligência Artificial, Avaliação]
---

O Moodle 5.3 foi lançado em **5 de outubro de 2026** e é uma versão **LTS** (Long Term Support), a sucessora do Moodle 4.5. Na prática, ele reúne as mudanças acumuladas nas versões 5.0, 5.1 e 5.2 e passa a ser o destino natural para quem está em uma LTS anterior.

A seguir, um resumo das principais novidades para quem ensina, para quem administra o ambiente e para quem desenvolve plugins.

## Suporte: por quanto tempo o 5.3 será mantido

Segundo a página oficial de lançamentos do Moodle:

| Versão | Lançamento | Correções gerais até | Correções de segurança até |
|---|---|---|---|
| 5.3 (LTS) | 5 out 2026 | 4 out 2027 | 1 out 2029 |
| 4.5 (LTS) | 7 out 2024 | 6 out 2025 | 4 out 2027 |

Ou seja, o 4.5 já saiu do período de correções gerais e só recebe correções de segurança, até outubro de 2027. Quem ainda está nele tem cerca de um ano para planejar a migração.

## Novidades para professores e estudantes

### Navegação linear no curso
O Moodle agora oferece botões **Anterior** e **Próximo** para o estudante avançar pelo curso passo a passo, sem precisar voltar ao índice a cada atividade. A navegação linear vem habilitada por padrão e pode ser configurada. Em cursos longos, isso reduz bastante o atrito de navegação.

![Página de uma atividade com os botões Anterior e Próximo na parte inferior da tela](/images/moodle-5-3-navegacao-linear.png)

### Resultados de aprendizagem (learning outcomes)
Há novos recursos para ligar o que se espera que o estudante aprenda ao modo como o curso ensina e avalia. Entre eles estão uma página que mostra os resultados de aprendizagem do curso e as atividades associadas, a possibilidade de usar resultados **sem escala** e suporte a backup/restauração e importação/exportação desses resultados.

![Página Resultados de aprendizagem do curso, listando cada resultado e as atividades associadas a ele](/images/moodle-5-3-resultados-aprendizagem.png)

### Fluxos de correção com múltiplos avaliadores
Na avaliação de tarefas, o 5.3 amplia o trabalho iniciado no 5.2: é possível ter mais de um corretor por entrega, cada um com feedback individual além do comentário geral, e escolher como a nota final é composta (por exemplo, a maior nota ou a média). Há também suporte a moderação e correção por amostragem.

![Configurações da tarefa com fluxo de avaliação e alocação de avaliadores ativados, exibindo os campos de número de avaliadores necessários e opcionais](/images/moodle-5-3-tarefa-multiplos-avaliadores.png)

### Questionários
- Suporte a **data de entrega** (due date) em questionários;
- Exportação de questões em **Moodle XML**;
- Novos filtros nos relatórios;
- Atraso configurável no cálculo de estatísticas e atualizações no Safe Exam Browser.

![Configurações do questionário mostrando o campo Data de entrega entre a abertura e o encerramento](/images/moodle-5-3-quiz-data-entrega.png)

> **Nota:** a data de entrega do questionário é um bom complemento para o plugin [Penalidade por Atraso (`local_latepenalty`)](/blog/late-penalty-o-que-e), que permite aplicar um desconto automático na nota de quem entrega depois do prazo. Desde a versão 1.2.0, o plugin já está adaptado ao Moodle 5.3: ele usa a data de entrega do questionário como prazo da penalidade, incluindo as datas definidas nas exceções (overrides) por estudante e por grupo. A data de fechamento só é usada quando o questionário não tem data de entrega, já que o fechamento bloqueia novas tentativas.

![Seção Penalidade por atraso nas configurações do questionário, indicando que o prazo usado é a data de entrega](/images/moodle-5-3-quiz-penalidade-atraso.png)

### Editor TinyMCE
Dois recursos novos: **sanfona (accordion)** e **estilos de lista**, que ajudam a estruturar conteúdo longo. Também há suporte a colar texto em Markdown (conforme a documentação, vinculado ao TinyMCE Premium).

![Menu Inserir do TinyMCE com a opção Accordion](/images/moodle-5-3-tinymce-accordion.png)

### Fóruns
A leitura de tópicos ganhou uma ação fixa no rodapé que leva de volta à lista de discussões, algo simples que melhora a navegação em fóruns movimentados.

![Tópico de fórum com a ação fixa Ir para todas as discussões no rodapé](/images/moodle-5-3-forum-rodape.png)

## Visual renovado e modo escuro

A interface segue o redesenho alinhado ao Moodle Design System: nova tipografia, layout centralizado, hierarquia mais clara na página do curso, gaveta de blocos melhorada e ícones de notificação redesenhados.

O **modo escuro** do tema Boost, um dos recursos mais pedidos pela comunidade, chega nesta versão como **opção experimental**. O administrador precisa habilitá-lo, e então cada usuário pode escolher entre os modos Claro, Escuro ou o do sistema.

![Menu de modo de cor do Boost com as opções Claro, Escuro e Sistema](/images/moodle-5-3-menu-modo-de-cor.png)

![Página do curso no modo escuro](/images/moodle-5-3-modo-escuro.png)

Outro ponto de atenção: o **tema Classic foi removido do core** e passou a ser um plugin externo. Instituições que usam o Classic (ou temas filhos dele) precisam instalar o plugin separadamente antes de atualizar, ou migrar para o Boost.

## Inteligência artificial: Claude entra no core

O **Anthropic Claude** passa a ser um provedor de IA oficial no core do Moodle, ao lado dos provedores já suportados. Além disso, há novos **relatórios de uso de IA em nível de curso**, que dão a professores e estudantes mais visibilidade sobre como a IA está sendo usada.

Para instituições preocupadas com governança e transparência no uso de IA, esse relatório é um passo importante.

## Para administradores

- **Relatórios (Report builder):** agregações por tempo, fontes de dados baseadas em SQL e melhor desempenho. Também é possível baixar a conclusão do curso em Excel ou PDF;
- **Busca global:** passa a aceitar correspondência por parte de palavras;
- **Exclusão assíncrona de cursos** e execução de tarefas agendadas em segundo plano, o que alivia o desempenho em exclusões grandes;
- **Segurança:** notificações de login ativadas por padrão, verificação de login e tokens aprimorada, mais visibilidade e auditoria dos riscos de cada papel;
- **BigBlueButton** habilitado por padrão;
- **Web services:** suporte a **OAuth 2** e a tokens de acesso pessoal para a API REST.

## Para desenvolvedores

As mudanças que mais afetam quem mantém plugins incluem a remoção do tema Classic do core, uma API de filtragem de e-mails, suporte ao Symfony Console, injeção de dependência via atributos PHP, conversão de módulos JavaScript para ESM e a implementação de servidor OAuth 2 para web services. Vale revisar os plugins próprios em um ambiente 5.3 de testes antes da atualização em produção.

## Requisitos de servidor: atenção antes de atualizar

Esta é a parte que mais costuma pegar equipes de TI de surpresa. De acordo com a documentação oficial do 5.3:

- **PHP:** mínimo **8.3.0** (o 8.4 também é suportado), apenas 64 bits, com a extensão `sodium` e `max_input_vars` igual ou maior que 5000;
- **PostgreSQL:** mínimo **17** (aumentou nesta versão);
- **MariaDB:** mínimo **11.4.0** (aumentou nesta versão);
- **MySQL:** mínimo 8.4;
- **SQL Server:** mínimo 2019;
- **Oracle:** não é mais suportado.

Outro ponto estrutural é que o **diretório web do Moodle agora fica na subpasta `/public`**, então o servidor web precisa ser reconfigurado para apontar para esse novo local. Instalações baseadas em Git também precisam rodar o Composer (`composer install --no-dev --classmap-authoritative`), pois o Moodle verifica a pasta `vendor` na inicialização. Para quem sai direto do 4.5, essas duas mudanças serão novidade.

O caminho de atualização oficial parte do Moodle 4.4 ou superior. Se você usa uma versão anterior, será preciso passar por uma versão intermediária antes.

## Checklist rápido antes de migrar

1. Conferir as versões de PHP e do banco de dados no servidor (principalmente PostgreSQL e MariaDB);
2. Verificar se o site usa o tema Classic ou temas filhos dele;
3. Ajustar o document root do servidor web para `/public`;
4. Revisar a compatibilidade dos plugins de terceiros com o 5.3 no Moodle Marketplace;
5. Testar tudo em um ambiente de homologação com cópia dos dados antes de atualizar a produção;
6. Fazer backup completo do banco de dados e do `moodledata`.

## Conclusão

O Moodle 5.3 combina uma interface mais moderna, novas ferramentas de avaliação e de alinhamento pedagógico, mais transparência no uso de IA e uma base técnica atualizada, tudo isso com um ciclo de suporte longo. Para a maioria das instituições, o desafio principal não será aprender os recursos novos, e sim preparar a infraestrutura.

O Moodle também promove o webinar oficial "Learning with intent: Inside Moodle LMS 5.3" em **15 de outubro de 2026, às 14h (horário da Europa Central)**, para quem quiser ver as novidades em detalhe.

## Fontes

- [Moodle 5.3: notas de lançamento e requisitos (moodledev.io)](https://moodledev.io/general/releases/5.3)
- [Releases do Moodle e datas de suporte (moodledev.io)](https://moodledev.io/general/releases)
- [Moodle 5.3: novidades (docs.moodle.org)](https://docs.moodle.org/503/en/New_features)
- [Anúncio oficial do Moodle (moodle.org)](https://moodle.org/news)
