import { Code, Computer, Settings, Smartphone } from 'lucide-react';

export const services = [
    {
        id: 'desenvolvimento-web',
        icon: Code,
        title: 'Desenvolvimento Web',
        subtitle: 'Sites e sistemas web personalizados',
        summaryDescription: 'Sites institucionais, e-commerce, sistemas web personalizados e aplicações sob demanda.',
        description: 'Desenvolvemos sites institucionais, e-commerce, sistemas de gestão e aplicações web completas. Utilizamos as tecnologias mais modernas do mercado para garantir performance, segurança e escalabilidade.',
        features: [
            'Sites responsivos e otimizados',
            'E-commerce completo',
            'Sistemas de gestão (ERP/CRM)',
            'APIs e integrações',
            'Painel administrativo',
            'SEO otimizado',
            'Integrações de PDVs com TEF'
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'MongoDB', 'MySql'],
        price: 'A partir de R$ 500',
        delivery: '15-90 dias'
    },
    {
        id: 'desenvolvimento-mobile',
        icon: Smartphone,
        title: 'Desenvolvimento Mobile',
        subtitle: 'Apps nativos e híbridos para iOS e Android',
        description: 'Criamos aplicativos móveis que proporcionam uma experiência excepcional aos usuários. Seja nativo ou híbrido, desenvolvemos soluções que atendem perfeitamente às necessidades do seu negócio.',
        summaryDescription: 'Apps nativos e híbridos para iOS e Android com funcionalidades específicas para seu negócio.',
        features: [
            'Apps nativos (iOS/Android)',
            'Apps híbridos multiplataforma',
            'Interface intuitiva (UI/UX)',
            'Integração com APIs',
            'Push notifications',
            'Publicação nas stores'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo Go'],
        price: 'A partir de R$ 5.000',
        delivery: '30-60 dias'
    },
    {
        id: 'consultoria-ti',
        icon: Settings,
        title: 'Consultoria em TI',
        subtitle: 'Estratégias digitais e otimização de processos',
        summaryDescription: 'Análise técnica, arquitetura de sistemas e estratégias digitais para otimizar seus processos.',
        description: 'Analisamos sua infraestrutura atual e propomos soluções tecnológicas que aumentam a produtividade e reduzem custos. Nossa consultoria abrange desde arquitetura de sistemas até estratégias de transformação digital.',
        features: [
            'Análise de infraestrutura',
            'Arquitetura de sistemas',
            'Otimização de processos',
            'Migração para nuvem',
            'Segurança da informação',
            'Treinamento de equipes'
        ],
        technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps'],
        price: 'A partir de R$ 0',
    },
    {
        id: 'suporte-continuo',
        icon: Computer,
        title: 'Suporte Contínuo',
        subtitle: 'Manutenção, Atualização e Configuração de Firewall',
        summaryDescription: 'Oferecemos suporte técnico contínuo para garantir que seus computadores e sistemas estejam sempre atualizados, seguros e funcionando perfeitamente.',
        description: 'Oferecemos suporte técnico contínuo para garantir que seus computadores e sistemas estejam sempre atualizados, seguros e funcionando perfeitamente. Nosso serviço inclui manutenção preventiva, atualizações de software e configuração de firewalls para proteger seus dados.',
        features: [
            'Manutenção preventiva e corretiva',
            'Atualizações de software e sistema operacional',
            'Configuração e gerenciamento de firewall',
            'Otimização de desempenho',
            'Remoção de vírus e malwares',
            'Suporte remoto e presencial'
        ],
        technologies: ['Windows', 'Linux', 'macOS', 'Norton', 'McAfee', 'ZoneAlarm', 'AnyDesk'],
        price: 'A partir de R$ 120',
    }
];
