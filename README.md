# jeanlucio.github.io

Este repositório contém o código-fonte do blog e portfólio profissional do **Prof. Jean Lúcio**, hospedado em [jeanlucio.github.io](https://jeanlucio.github.io).

O site funciona como um espaço de difusão de conhecimento sobre educação, tecnologia, metodologias ativas e gamificação, além de apresentar seu portfólio de plugins Moodle open source e capacitações acadêmicas.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas de desenvolvimento web para garantir excelente performance, SEO e facilidade de manutenção:

*   **[Astro](https://astro.build/)**: Framework web moderno focado em velocidade e geração de sites estáticos (SSG).
*   **TypeScript**: Superconjunto JavaScript para tipagem estática e maior segurança de código.
*   **CSS Vanilla**: Estilização flexível e customizada, utilizando CSS custom properties (design tokens) para manter consistência visual.
*   **GitHub Pages**: Hospedagem gratuita dos arquivos estáticos diretamente do repositório.

---

## 📂 Estrutura do Projeto

Abaixo estão os diretórios e arquivos principais do projeto:

```text
├── .github/workflows/    # Workflows do GitHub Actions (Deploy automático e utilitários)
├── public/               # Ativos estáticos públicos (imagens, ícones)
├── scripts/              # Scripts utilitários de automação
│   └── weekly-digest.py  # Script em Python para gerar digest semanal de novos plugins do Moodle
├── src/
│   ├── components/       # Componentes Astro reutilizáveis (Header, Footer, Cards)
│   ├── content/          # Conteúdo dinâmico (postagens de blog em Markdown)
│   ├── data/             # Dados estruturados em TypeScript (plugins, capacitações)
│   ├── layouts/          # Layouts base das páginas
│   ├── pages/            # Páginas e rotas estáticas do blog (Início, Blog, Projetos, Webteca, Capacitações, Sobre)
│   └── styles/           # Folhas de estilo CSS globais e tokens
├── astro.config.mjs      # Configuração do Astro
└── package.json          # Dependências e scripts do projeto
```

---

## 💻 Desenvolvimento Local

Para rodar e testar o projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
*   [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada)
*   [npm](https://www.npmjs.com/) (gerenciador de pacotes padrão do Node)

### 1. Clonar o repositório

```bash
git clone https://github.com/jeanlucio/jeanlucio.github.io.git
cd jeanlucio.github.io
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o servidor de desenvolvimento

Inicie o servidor local para visualizar as alterações em tempo real (geralmente disponível em `http://localhost:4321`):

```bash
npm run dev
```

### 4. Compilar para produção

Para gerar a build de produção otimizada na pasta `/dist`:

```bash
npm run build
```

---

## 🛠️ Deploy Automático

O deploy do site é totalmente automatizado utilizando o **GitHub Actions**:
*   Toda vez que um commit é enviado (`git push`) para a branch `main`, o workflow [deploy.yml](.github/workflows/deploy.yml) é disparado.
*   Ele realiza a instalação das dependências, executa a build do Astro e publica a pasta `/dist` automaticamente no GitHub Pages.

---

## 📄 Licença

O código-fonte deste blog está licenciado sob a licença **MIT**. O conteúdo das postagens e materiais de autoria própria seguem as diretrizes acadêmicas e de compartilhamento aberto.
