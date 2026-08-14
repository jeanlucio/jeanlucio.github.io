export type PluginColor = 'indigo' | 'purple' | 'emerald' | 'amber' | 'teal';

export interface PluginData {
  name: string;
  description: string;
  version?: string;
  updatedDate?: string;
  tags: string[];
  githubUrl: string;
  moodleUrl?: string;
  reviewUrl?: string;
  siteUrl?: string;
  docsUrl?: string;
  color?: PluginColor;
  icon?: string;
}

export const playerGames: PluginData[] = [
  {
    name: 'PlayerHUD',
    description:
      'Bloco de gamificação completo para Moodle. Oferece XP, níveis personalizáveis, sistema de conquistas, ranking, missões, histórico de atividades e um assistente de IA integrado (Gemini/Groq) para sugestões pedagógicas.',
    version: '1.8.2',
    updatedDate: '2026-08-12T17:35:30Z',
    tags: ['Bloco', 'Gamificação', 'XP', 'Conquistas', 'IA', 'Ranking'],
    githubUrl: 'https://github.com/jeanlucio/moodle-block_playerhud',
    moodleUrl: 'https://moodle.org/plugins/block_playerhud',
    reviewUrl: '/blog/playerhud-o-que-e',
    color: 'indigo',
    icon: '🕹️',
  },
  {
    name: 'PlayerHUD Filter',
    description:
      'Filtro de texto que permite exibir dados do PlayerHUD diretamente no conteúdo de atividades e recursos — nível atual do aluno, XP acumulado e progresso — sem precisar sair da página.',
    version: '1.6.4',
    updatedDate: '2026-08-03T20:35:26Z',
    tags: ['Filtro', 'Gamificação', 'Conteúdo Dinâmico'],
    githubUrl: 'https://github.com/jeanlucio/moodle-filter_playerhud',
    moodleUrl: 'https://moodle.org/plugins/filter_playerhud',
    reviewUrl: '/blog/playerhud-filter-o-que-e',
    color: 'indigo',
    icon: '🔍',
  },
  {
    name: 'PlayerHUD Availability',
    description:
      'Condição de disponibilidade que permite restringir o acesso a atividades com base nos dados do PlayerHUD — libere conteúdo somente quando o aluno atingir determinado nível ou quantidade de XP.',
    version: '1.4.2',
    updatedDate: '2026-08-03T19:34:28Z',
    tags: ['Disponibilidade', 'Gamificação', 'Restrição por XP'],
    githubUrl: 'https://github.com/jeanlucio/moodle-availability_playerhud',
    moodleUrl: 'https://moodle.org/plugins/availability_playerhud',
    reviewUrl: '/blog/playerhud-availability-o-que-e',
    color: 'purple',
    icon: '🔓',
  },
  {
    name: 'PlayerGroup',
    description:
      'Plugin de atividade para grupos gamificados no Moodle. Crie equipes com XP coletivo, missões colaborativas e ranking entre times. Integra com o PlayerHUD para uma experiência gamificada completa.',
    version: '1.3.2',
    updatedDate: '2026-08-13T19:41:50Z',
    tags: ['Atividade', 'Grupos', 'Colaboração', 'Gamificação'],
    githubUrl: 'https://github.com/jeanlucio/moodle-mod_playergroup',
    moodleUrl: 'https://moodle.org/plugins/mod_playergroup',
    reviewUrl: '/blog/playergroup-o-que-e',
    color: 'purple',
    icon: '👥',
  },
];

export const teacherTools: PluginData[] = [
  {
    name: 'Checklist do Professor',
    description:
      'Bloco que ajuda professores a garantir a qualidade do curso antes de os alunos chegarem. Combina detecção automática de problemas de configuração (visibilidade, prazos, atividades sem descrição) com uma lista de tarefas manual totalmente personalizável.',
    version: '1.3.1',
    updatedDate: '2026-07-03T19:12:39Z',
    tags: ['Bloco', 'Qualidade', 'Checklist', 'Coordenação'],
    githubUrl: 'https://github.com/jeanlucio/moodle-block_teacher_checklist',
    moodleUrl: 'https://moodle.org/plugins/block_teacher_checklist',
    reviewUrl: '/blog/teacher-checklist-o-que-e',
    color: 'emerald',
    icon: '📋',
  },
  {
    name: 'Estatísticas de Recursos',
    description:
      'Plugin local que exibe badges de acesso nos módulos do curso — total de visualizações e alunos únicos — visível só para professores, sem depender de ferramentas externas de analytics.',
    version: '1.2.1',
    updatedDate: '2026-06-20T17:42:31Z',
    tags: ['Local', 'Estatísticas', 'Engajamento', 'LGPD'],
    githubUrl: 'https://github.com/jeanlucio/moodle-local_resourcestats',
    moodleUrl: 'https://moodle.org/plugins/local_resourcestats',
    reviewUrl: '/blog/resource-stats-o-que-e',
    color: 'amber',
    icon: '📊',
  },
  {
    name: 'Penalidade por Atraso',
    description:
      'Plugin local que aplica penalidades progressivas por atraso em atividades avaliativas do Moodle. Funciona com Assignment, Quiz, Fórum, SCORM e outros módulos que registram nota no livro de notas.',
    version: '1.1.0',
    updatedDate: '2026-08-11T18:21:41Z',
    tags: ['Local', 'Avaliação', 'Prazos', 'Notas', 'Relatórios'],
    githubUrl: 'https://github.com/jeanlucio/moodle-local_latepenalty',
    moodleUrl: 'https://moodle.org/plugins/local_latepenalty',
    reviewUrl: '/blog/late-penalty-o-que-e',
    color: 'amber',
    icon: '⏱️',
  },
  {
    name: 'Report Unlocker',
    description:
      'Relatório de curso que centraliza as restrições de acesso de todas as atividades. Permite visualizar, editar inline (data, grupo, nota, conclusão, etc.) e remover restrições em lote diretamente pelo painel.',
    version: '1.0.5',
    updatedDate: '2026-07-13T20:37:46Z',
    tags: ['Relatório', 'Restrições', 'Acesso', 'Gestão', 'Administração'],
    githubUrl: 'https://github.com/jeanlucio/moodle-report_unlocker',
    moodleUrl: 'https://moodle.org/plugins/report_unlocker',
    reviewUrl: '/blog/report-unlocker-o-que-e',
    color: 'emerald',
    icon: '🔓',
  },
  {
    name: 'Lab Virtual',
    description:
      'Plugin local para criação e manutenção em lote de cursos-laboratório (sandboxes isolados), organizados por turmas, com painel self-service para estudantes escolherem e acessarem seus ambientes sem intervenção do administrador.',
    version: '1.0.2',
    updatedDate: '2026-07-08T02:01:06Z',
    tags: ['Local', 'Laboratório', 'Gestão', 'Sandboxes', 'Self-service'],
    githubUrl: 'https://github.com/jeanlucio/moodle-local_virtuallab',
    moodleUrl: 'https://moodle.org/plugins/local_virtuallab',
    reviewUrl: '/blog/virtuallab-o-que-e',
    color: 'teal',
    icon: '🖥️',
  },
  {
    name: 'AI Hub',
    description:
      'Plugin local (BYOK broker) que centraliza chaves de API de IA (Gemini, Groq, OpenAI). Permite que a instituição configure chaves globais ou usuários tragam as suas, facilitando a geração de texto por outros plugins com proteção SSRF e relatórios de uso.',
    version: '1.3.0',
    updatedDate: '2026-07-28T14:04:40Z',
    tags: ['Local', 'IA', 'BYOK', 'API', 'Gestão'],
    githubUrl: 'https://github.com/jeanlucio/moodle-local_aihub',
    moodleUrl: 'https://moodle.org/plugins/local_aihub',
    reviewUrl: '/blog/aihub-o-que-e',
    color: 'indigo',
    icon: '🧠',
  },
];

export const webTools: PluginData[] = [
  {
    name: 'PromptKit Edu',
    description:
      'Ferramenta interativa para organizar, criar e gerenciar prompts educacionais — com exportação, backup, filtros e formatos Moodle. Funciona direto no navegador, sem instalação.',
    tags: ['Prompts', 'IA', 'Educação', 'Moodle'],
    githubUrl: 'https://github.com/jeanlucio/promptkitedu',
    siteUrl: 'https://jeanlucio.github.io/promptkitedu/',
    color: 'teal',
    icon: '✨',
  },
];

export const featuredPlugins: PluginData[] = [
  ...playerGames,
  ...teacherTools,
  ...webTools,
].sort((a, b) => {
  const dateA = a.updatedDate ? new Date(a.updatedDate).getTime() : 0;
  const dateB = b.updatedDate ? new Date(b.updatedDate).getTime() : 0;
  return dateB - dateA;
}).slice(0, 3);

// Optional manual override for the PlayerGames ecosystem page.
// Set to an ISO date string (e.g. '2026-07-21T00:00:00Z') to pin the date manually.
// Set to null to auto-derive from the most recent updatedDate across playerGames plugins.
export const ecosystemLastUpdated: string | null = null;
