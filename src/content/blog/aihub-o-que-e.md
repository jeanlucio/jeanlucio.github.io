---
title: "AI Hub: gerencie chaves de API de Inteligência Artificial no Moodle"
description: "Análise do AI Hub, um plugin local para Moodle que funciona como um broker BYOK (Bring Your Own Key) para centralizar chaves do Gemini, Groq e OpenAI."
pubDate: 2026-07-13
category: plugin
tags: [aihub, moodle, ia, inteligência-artificial, byok, api, gestão]
---

O **AI Hub** é um plugin local (BYOK - *Bring Your Own Key* broker) para o Moodle, desenvolvido para administradores e desenvolvedores. Ele atua como uma central para gerenciar chaves de API de Inteligência Artificial, permitindo que os próprios plugins da instituição gerem texto através de chaves compartilhadas, sem a necessidade de reimplementar o transporte HTTP, a proteção SSRF ou o armazenamento de chaves em cada novo plugin.

Em vez de configurar as chaves de API de IA em diferentes plugins isoladamente, o AI Hub concentra tudo, oferecendo um sistema seguro e integrado.

## ✅ O que é o AI Hub?

Acessível para os administradores em **Administração do site → Plugins → Plugins locais → AI Hub**, o plugin permite configurar chaves do site para provedores como **Google Gemini**, **Groq** ou qualquer endpoint compatível com **OpenAI**. 

O grande diferencial do plugin é a sua resolução de chaves por camadas (ladder). Ele tenta primeiro utilizar a chave pessoal do próprio usuário (caso a opção esteja habilitada e o usuário tenha configurado em suas preferências), e em seguida, caso não encontre, utiliza a chave global do site.

## 🧠 Por que gerenciar chaves centralmente?

Com o aumento de ferramentas de IA no Moodle, cada plugin exigindo sua própria configuração de chaves pode se tornar um problema de segurança e manutenção. O AI Hub resolve isso oferecendo:

- **Segurança SSRF:** O endpoint compatível com OpenAI é forçado para HTTPS, com bloqueio de IPs locais/privados e proteção contra *DNS rebinding*.
- **Sem repetição de código:** Desenvolvedores de outros plugins podem consumir a fachada de API com apenas uma chamada `\local_aihub\ai::generate_text()`, utilizando uma dependência leve (`class_exists`).
- **Compatibilidade independente:** Ele não substitui o `core_ai` do Moodle; cada consumidor mantém o seu próprio fallback para `core_ai`.

## 🚀 O que o AI Hub oferece?

Entre os principais recursos do plugin estão:

- 🔑 **Armazenamento BYOK:** Chaves globais (site) configuradas por administradores e chaves pessoais (opt-in) configuradas pelos próprios usuários em *Minhas chaves de IA* nas preferências.
- 🪜 **Resolução Inteligente (Personal → Site):** O hub verifica primeiro a chave do usuário e depois a chave do site, retornando um único resultado.
- 👁️ **Chaves Somente Leitura:** Uma vez salvas, as chaves pessoais nunca retornam para o navegador — o sistema apenas exibe se estão configuradas ou não, prevenindo acessos indevidos via *Logar como*.
- 📊 **Relatórios de Uso:** Administradores possuem um relatório detalhado de todas as requisições atendidas pelas chaves do site, incluindo quem solicitou, o provedor, o modelo utilizado e qual componente requisitou, com exportação para CSV/Excel.
- 🧾 **Log e Retenção:** Registro detalhado com uma tarefa agendada (cron) que exclui logs antigos baseando-se na retenção configurada.
- 🔒 **Total Privacidade:** Total compatibilidade com a API de Privacidade do Moodle. O plugin não armazena os prompts enviados nem as respostas geradas.

## 🎓 Possibilidades pedagógicas e técnicas

O AI Hub abre portas para um ecossistema mais rico de IA no Moodle sem dores de cabeça para a administração:

- **Assistentes Educacionais Customizados:** Facilita a criação de assistentes de feedback ou corretores baseados em IA dentro de outros plugins, aproveitando a cota central.
- **Redução de Custos:** Permitir que professores ou departamentos insiram suas próprias chaves (BYOK) para os modelos que desejam usar, aliviando o custo global da plataforma.
- **Auditoria Transparente:** O log centralizado garante que as instituições saibam exatamente quais componentes estão utilizando IA e com qual frequência.

## 📋 Como utilizar o AI Hub (passo a passo)

**1️⃣ Configurar chaves globais (Administrador)**

Navegue até **Administração do site → Plugins → Plugins locais → AI Hub**. Insira as chaves de API nos campos correspondentes (Google Gemini, Groq ou endpoint OpenAI compatível). Salve as mudanças para que todos os plugins do site possam utilizá-las.

**2️⃣ Configurar chaves pessoais (Usuário)**

Se o administrador habilitou o uso de chaves pessoais e concedeu a permissão necessária, o usuário pode ir ao seu menu de perfil e clicar em **Preferências → Minhas chaves de IA**. Lá, ele pode salvar suas próprias chaves para uso pessoal nos plugins compatíveis.

**3️⃣ Monitorar o uso (Administrador)**

Na tela de configuração do plugin, você encontrará um relatório de uso consolidado. Você verá uma tabela com o histórico de requisições recentes informando o usuário, qual componente acionou a geração, provedor, modelo e a camada de chave utilizada (Site ou Pessoal).

**4️⃣ Integrar em um novo plugin (Desenvolvedor)**

Se você desenvolve plugins, pode verificar a existência do AI Hub via `class_exists` e solicitar a geração de texto com `\local_aihub\ai::generate_text()`, sem se preocupar em armazenar chaves ou construir clientes HTTP.

## 🎯 Público-alvo

- Administradores Moodle que buscam centralizar e auditar o uso de IA na plataforma com relatórios unificados.
- Desenvolvedores que precisam de uma API pronta e segura (SSRF guard) para criar ferramentas de IA.
- Instituições que adotam a modalidade BYOK para democratizar ou distribuir os custos de uso de IA entre os departamentos.

## 🔗 Como instalar

O AI Hub está disponível nos repositórios oficiais:

- **Moodle Plugin Directory** (recomendado): [moodle.org/plugins/local_aihub](https://moodle.org/plugins/local_aihub)
- **GitHub** (código-fonte): [github.com/jeanlucio/moodle-local_aihub](https://github.com/jeanlucio/moodle-local_aihub)

**Instalando pelo Moodle Plugin Directory:**

1. Acesse **Administração do site → Plugins → Instalar plugins**
2. Pesquise por **"AI Hub"**
3. Instale o plugin; as configurações globais estarão em **Plugins locais**.

---

O AI Hub é Open Source (GPLv3) e voltado para transformar a integração de IA no Moodle em um processo seguro e centralizado.
