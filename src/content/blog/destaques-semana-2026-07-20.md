---
title: "Destaques da semana — novos plugins no Moodle (13 a 19 de jul)"
description: "Quatro plugins para tutoria com IA, restrição por nome de grupo e integração de chaves de API no Moodle."
pubDate: 2026-07-20
category: moodle
tags: [moodle, plugins, tutoria ia, restrição acesso, api ia, educação]
---

Esta semana, o diretório de plugins do Moodle recebeu lançamentos que exploram diferentes abordagens para personalização do aprendizado e simplificação técnica. Entre os novos plugins, há opções voltadas para tutoria com inteligência artificial, controle de acesso por grupos e integração de serviços de IA. Abaixo, uma visão geral de quatro plugins que podem ser do interesse de professores, coordenadores e administradores.

## [eLeDia.ai Tutor](https://moodle.org/plugins/view.php?plugin=block_eledia_aitutor)
O eLeDia.ai Tutor é um bloco que insere um assistente de IA diretamente nos cursos e painéis do Moodle. Ele se conecta a um serviço RAG (Retrieval-Augmented Generation) no servidor, o que permite oferecer respostas baseadas nos materiais do curso de forma segura e personalizada.

Para professores e administradores que desejam disponibilizar suporte automatizado aos alunos sem comprometer a segurança dos dados, este plugin resolve a necessidade de uma assistência contextualizada dentro do próprio ambiente de aprendizagem. Ele pode ser configurado para respeitar permissões de acesso, garantindo que apenas conteúdos autorizados sejam usados nas respostas.

## [eLeDia.ai LiteRAG](https://moodle.org/plugins/view.php?plugin=local_literag)
O eLeDia.ai LiteRAG é um plugin local que implementa um sistema RAG diretamente no Moodle, indexando conteúdos dos cursos e gerando respostas fundamentadas por meio de modelos de linguagem compatíveis com a API OpenAI. Ele opera respeitando as permissões de acesso do Moodle.

Este plugin é particularmente útil para educadores que buscam um tutor virtual capaz de responder perguntas dos alunos com base exclusivamente no material do curso. A integração local evita a necessidade de enviar dados para servidores externos, o que pode ser um diferencial para instituições com políticas rigorosas de proteção de dados.

## [Restriction by group name](https://moodle.org/plugins/view.php?plugin=availability_groupname)
O plugin "Restriction by group name" adiciona uma nova condição de acesso baseada no nome textual dos grupos do curso. No Moodle padrão, as restrições podem usar grupos, mas não diretamente os nomes atribuídos a eles.

Para professores que gerenciam múltiplos grupos e precisam liberar atividades ou recursos para turmas específicas (como "Grupo A" ou "Laboratório 1"), este plugin oferece uma forma direta de configurar essas regras sem depender de IDs numéricos. Administradores também podem utilizá-lo para criar fluxos de acesso mais intuitivos em cursos com muitas divisões.

## [AI Hub](https://moodle.org/plugins/view.php?plugin=local_aihub)
O AI Hub atua como um intermediário centralizado para serviços de IA, adotando o modelo BYOK (traga sua própria chave). Ele permite que outros plugins institucionais gerem texto usando chaves de API compartilhadas, sem que cada plugin precise implementar a comunicação HTTP, proteção contra SSRF, balanceamento de provedores ou armazenamento de credenciais.

Este plugin é voltado para administradores e desenvolvedores que mantêm múltiplos plugins com funcionalidades de IA. Ao unificar a infraestrutura de conexão com APIs, ele reduz a complexidade de manutenção e garante consistência na forma como as chaves são gerenciadas na instituição.

Os plugins listados trazem abordagens complementares para ampliar as possibilidades do Moodle, seja na personalização da tutoria, no controle de acesso ou na gestão de integrações técnicas. Vale a pena explorar cada um conforme as necessidades específicas da sua instituição.
