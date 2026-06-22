export type CapacitacaoColor = 'indigo' | 'purple' | 'emerald' | 'amber' | 'teal';

export interface CapacitacaoData {
  title: string;
  description: string;
  duration: string;
  targetAudience: string;
  topics: string[];
  color: CapacitacaoColor;
  icon: string;
}

export const capacitacoes: CapacitacaoData[] = [
  {
    title: 'Destravando o Moodle',
    description:
      'Curso prático para docentes e administradores dominarem os recursos essenciais do Moodle. Aprenda a configurar salas virtuais eficientes, organizar recursos pedagógicos, criar avaliações integradas e gerenciar turmas com facilidade e autonomia.',
    duration: '20 horas',
    targetAudience: 'Docentes, tutores e profissionais da educação em geral.',
    topics: [
      'Estruturação lógica de salas de aula e boas práticas de design instrucional.',
      'Configuração avançada de recursos de conteúdo (páginas, livros, URLs) e atividades (fóruns, tarefas, glossários).',
      'Configuração do livro de notas e estratégias eficientes de feedback.',
      'Gestão de participantes, grupos e acompanhamento de conclusão.'
    ],
    color: 'indigo',
    icon: '🔓'
  },
  {
    title: 'Gamificação no Moodle com PlayerHUD e IA',
    description:
      'Aprenda a transformar salas virtuais em experiências imersivas de aprendizagem. Domine a aplicação de mecânicas de jogos e configure o ecossistema PlayerHUD (XP, níveis, conquistas e ranking) com o suporte de Inteligência Artificial para planejar jornadas pedagógicas engajadoras.',
    duration: '30 horas',
    targetAudience: 'Professores, designers instrucionais e administradores do Moodle.',
    topics: [
      'Teorias e conceitos de gamificação aplicada à educação (octalysis, tipos de jogadores).',
      'Instalação e configuração do ecossistema PlayerHUD.',
      'Desenho de conquistas (badges), missões e regras de atribuição de XP/níveis.',
      'Uso de IA generativa para criação rápida de narrativas gamificadas e desafios.'
    ],
    color: 'purple',
    icon: '🕹️'
  },
  {
    title: 'Ferramentas de Produtividade no Moodle',
    description:
      'Otimize o tempo de gestão pedagógica e foque na mediação. Descubra como configurar checklists de qualidade de curso, badge de estatísticas locais e regras de penalidades automatizadas por atraso, integrando utilitários web para maximizar a eficiência docente.',
    duration: '15 horas',
    targetAudience: 'Professores, coordenadores de curso e tutores virtuais.',
    topics: [
      'Configuração do Checklist do Professor para garantia de qualidade pré-lançamento.',
      'Acompanhamento ágil com estatísticas locais de acesso a recursos (sem complicar a LGPD).',
      'Configuração e automação de penalidades por atraso no envio de tarefas.',
      'Uso de geradores de prompts (PromptKit Edu) e editores integrados para acelerar a rotina.'
    ],
    color: 'teal',
    icon: '⚡'
  },
  {
    title: 'Legislação aplicada a EaD',
    description:
      'Uma análise prática do marco regulatório da Educação a Distância no Brasil. Compreenda os decretos federais, as portarias do MEC para credenciamento, os limites de carga horária online em cursos presenciais e as regras específicas para a atuação de docentes federais.',
    duration: '20 horas',
    targetAudience: 'Gestores de ensino, coordenadores pedagógicos e docentes.',
    topics: [
      'Histórico e evolução das leis de EaD no Brasil (LDB, Decretos Federais).',
      'Portarias do MEC para credenciamento de cursos e polos, e processos de avaliação.',
      'Regime de Dedicação Exclusiva (Lei nº 12.772/2012) e a percepção de GECC (Lei nº 8.112/1990).',
      'Direitos autorais na internet, uso de obras de terceiros e Lei Geral de Proteção de Dados (LGPD).'
    ],
    color: 'amber',
    icon: '⚖️'
  },
  {
    title: 'Produção de Materiais Didáticos Digitais',
    description:
      'Desenvolva conteúdos educacionais digitais modernos, interativos e acessíveis. Domine princípios básicos de escrita dialógica, criação de e-books em múltiplos formatos, produção rápida de videoaulas e desenvolvimento de recursos interativos com H5P no Moodle.',
    duration: '30 horas',
    targetAudience: 'Docentes de qualquer nível de ensino e produtores de conteúdo educacional.',
    topics: [
      'Linguagem dialógica e roteirização para educação online.',
      'Edição básica de vídeo, captura de tela e gravação com ferramentas gratuitas.',
      'Criação de recursos interativos com H5P (vídeo interativo, livro de conteúdo, apresentações).',
      'Diretrizes de acessibilidade na web (WCAG) para conteúdos digitais inclusivos.'
    ],
    color: 'emerald',
    icon: '🎨'
  },
  {
    title: 'Introdução a Educação a Distância',
    description:
      'Fundamentos conceituais, históricos e metodológicos da EaD. Conheça as principais teorias de aprendizagem em rede, entenda a transição do papel de transmissor para mediador e aprenda a estabelecer uma comunicação síncrona e assíncrona clara e afetiva.',
    duration: '20 horas',
    targetAudience: 'Professores ingressantes na EaD, tutores iniciantes e licenciandos.',
    topics: [
      'Gênese e gerações da Educação a Distância.',
      'Papéis e competências do docente, do tutor e do estudante na EaD.',
      'Comunicação assíncrona (fóruns, mensagens) e síncrona: mediação pedagógica ativa.',
      'Ambientes Virtuais de Aprendizagem (AVAs) como ecossistemas de aprendizagem.'
    ],
    color: 'indigo',
    icon: '🎓'
  }
];
