---
title: "Estatísticas de Recursos: acesso a recursos no Moodle"
description: "Análise das Estatísticas de Recursos, plugin local para Moodle que exibe badges de acesso diretamente na página do curso, mostrando ao professor quantos estudantes acessaram cada recurso e quantas vezes."
pubDate: 2026-06-09
category: plugin
tags: [resource-stats, moodle, estatísticas, engajamento, dados, plugin]
---

O plugin **Estatísticas de Recursos** foi desenvolvido para responder uma pergunta que qualquer professor que usa o Moodle pode se fazer: "quais recursos os estudantes estão acessando?" Sem precisar de ferramenta externa de analytics, o plugin exibe diretamente na página do curso pequenos badges com contagens de acesso — visíveis apenas para o professor.

## 📊 O que é o plugin Estatísticas de Recursos?

O plugin Estatísticas de Recursos registra em segundo plano cada acesso de estudante a módulos do curso. Ele não interfere na experiência dos estudantes — apenas coleta os dados silenciosamente. Para o professor, os dados aparecem em dois lugares:

1. **Na página do curso:** badges abaixo de cada atividade ou recurso, com contagens de acesso
2. **Na aba de estatísticas do módulo:** uma tabela com cada estudante, total de acessos, data do primeiro acesso e data do último acesso

Visitantes e professores nunca são contados — apenas estudantes matriculados.

## 🧠 Por que acompanhar acessos no curso?

Em aulas presenciais, o professor observa a participação diretamente. Mas mesmo em disciplinas presenciais, quando o Moodle funciona como repositório de materiais e espaço de atividades, esse sinal some: o professor não sabe quem acessou a leitura indicada, quem baixou o arquivo, quem sequer abriu o recurso antes da aula. Em cursos online e híbridos, a lacuna é ainda maior.

O plugin Estatísticas de Recursos preenche essa lacuna. O professor pode não saber que um recurso crítico nunca foi aberto, ou que metade da turma nunca acessou determinado material.

O acompanhamento de acessos serve para:

- **Detectar não participação precocemente:** identificar estudantes que nunca acessaram um material antes que fiquem para trás
- **Avaliar o posicionamento de recursos:** um recurso com pouquíssimos acessos pode estar mal posicionado, com título pouco claro ou simplesmente ignorado pela turma
- **Medir engajamento real:** diferenciar atividades que realmente atraem atenção das que ficam em segundo plano
- **Embasar decisões pedagógicas:** usar dados históricos de acesso para ajustar a estrutura do curso em edições futuras

## 🚀 O que o plugin Estatísticas de Recursos oferece?

Entre os principais recursos do plugin estão:

- 🏷️ **Badges de acesso na página do curso:** visíveis apenas para professores, aparecem abaixo de cada módulo
- 👤 **Contagem de estudantes únicos:** quantos estudantes distintos acessaram cada recurso
- 👁️ **Total de visualizações:** contagem de todos os acessos, incluindo repetições
- 📋 **Estatísticas por estudante:** página dedicada com contagem, data do primeiro e do último acesso por aluno
- 🏢 **Padrão do site:** o administrador define o modo de exibição padrão; professores podem sobrescrever individualmente
- ⚙️ **Preferências por professor:** cada professor escolhe o modo de exibição pelo link Estatísticas na navegação do curso
- 🔒 **Compatibilidade com LGPD/GDPR:** exclusão de dados remove linhas individuais e transfere contagens para colunas agregadas

**Modos de exibição disponíveis:**

| Modo | O que exibe |
|------|------------|
| `none` | Nenhum badge (padrão de fábrica) |
| `unique` | Contagem de estudantes únicos |
| `total` | Total de visualizações |
| `both` | Ambas as contagens e último visualizador |

## 🎓 Possibilidades pedagógicas

O plugin Estatísticas de Recursos apoia o professor na **gestão baseada em dados**:

- monitorar quais recursos e atividades estão sendo acessados e com que frequência
- identificar estudantes que nunca acessaram um material e intervir preventivamente
- avaliar se recursos com poucos acessos precisam de reposicionamento ou revisão pedagógica
- usar padrões de acesso para tomar decisões sobre sequenciamento e relevância do conteúdo em novas edições

Indicado para:

- disciplinas presenciais que usam o Moodle como repositório de materiais e atividades
- cursos online e híbridos onde a visibilidade de participação é limitada
- cursos com materiais de ritmo livre onde o acesso é difícil de acompanhar
- professores que preferem agir de forma preventiva em vez de reativa

## 📈 Como utilizar o plugin Estatísticas de Recursos (passo a passo)

**1️⃣ Instalar o plugin**

Instale o plugin em `local/resourcestats`. Após a instalação, o registro de acessos começa automaticamente — nenhuma configuração adicional é necessária para coletar dados.

**2️⃣ Definir o padrão do site (opcional)**

Em **Administração do site → Plugins → Plugins locais → Estatísticas de Recursos**, o administrador pode definir o modo de exibição padrão para todos os professores. O padrão de fábrica é `none` — o plugin instala sem impacto visual até alguém optar por ativar.

**3️⃣ Ativar os badges no curso**

Na barra de navegação do curso, clique em **Estatísticas** (pode aparecer em *Mais* se a barra estiver cheia). Escolha o modo de exibição desejado e salve. Os badges aparecem imediatamente abaixo de cada módulo.

**4️⃣ Consultar estatísticas por estudante**

Para ver quem acessou um recurso específico, abra a atividade ou recurso e use a aba **Estatísticas** na navegação de configurações do módulo. A tabela exibe todos os estudantes que já acessaram aquele recurso — quem nunca acessou simplesmente não aparece.

## 🎯 Público-alvo

- Professores presenciais que usam o Moodle como apoio e querem saber se os materiais estão sendo acessados
- Professores de cursos online e híbridos que querem acompanhar o engajamento com os materiais
- Designers instrucionais que revisam cursos com base em dados de uso
- Coordenadores pedagógicos que precisam de indicadores de participação sem integrar ferramentas externas
- Gestores de EAD que buscam dados para decisões sobre qualidade dos cursos

## 🔗 Como instalar

O plugin Estatísticas de Recursos está disponível em dois lugares:

- **Moodle Plugin Directory** (recomendado): [moodle.org/plugins/local_resourcestats](https://moodle.org/plugins/local_resourcestats)
- **GitHub** (código-fonte e versão mais recente): [github.com/jeanlucio/moodle-local_resourcestats](https://github.com/jeanlucio/moodle-local_resourcestats)

**Instalando pelo Moodle Plugin Directory:**

1. Acesse **Administração do site → Plugins → Instalar plugins**
2. Pesquise por **"Estatísticas de Recursos"**
3. Instale e configure o padrão de exibição em **Plugins locais → Estatísticas de Recursos**

**Instalando pelo GitHub:**

1. Baixe o `.zip` da versão mais recente
2. Extraia o conteúdo na pasta `local/resourcestats` do seu servidor Moodle
3. Acesse **Administração do site → Notificações** para concluir a instalação

---

O plugin Estatísticas de Recursos é 100% Open Source e compatível com Moodle 4.5 ou superior.
