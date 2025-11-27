
import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Welerson Reis",
  title: "Analista de Redes, Especialista em Cibersegurança e Entusiasta de IA",
  bio: "Sou um profissional apaixonado por segurança da informação, especializado em proteger infraestruturas de rede e sistemas contra ameaças cibernéticas. Com uma base sólida em análise de redes e resposta a incidentes, busco transformar problemas complexos em soluções de segurança robustas. Meu foco atual é integrar IA para criar sistemas de defesa mais inteligentes e proativos.",
  skills: ["Firewalls (Palo Alto, Cisco)", "SIEM (Splunk)", "Testes de Invasão", "Python para Segurança", "Análise de Tráfego (Wireshark)", "Segurança em Nuvem (AWS, Azure)", "LGPD/GDPR", "Gemini API", "SentinelOne", "Gigamon"],
  projects: [
    {
      title: "Sistema de Detecção de Intrusão com IA",
      description: "Um sistema inteligente que utiliza a API Gemini para analisar padrões de tráfego de rede e identificar anomalias, alertando sobre possíveis atividades maliciosas em tempo real.",
      techStack: ["Python", "Suricata", "ELK Stack", "Gemini API", "Scikit-learn"],
      liveUrl: "#",
      repoUrl: "#",
      imageUrl: "https://picsum.photos/seed/project1/600/400"
    },
    {
      title: "Dashboard de Análise de Vulnerabilidades",
      description: "Um painel dinâmico que centraliza e visualiza relatórios de scanners de vulnerabilidade, permitindo a priorização e o gerenciamento eficaz de correções.",
      techStack: ["React", "Python (Flask)", "Nessus API", "PostgreSQL", "Docker"],
      liveUrl: "#",
      repoUrl: "#",
      imageUrl: "https://picsum.photos/seed/project2/600/400"
    },
    {
      title: "Automação de Resposta a Incidentes (SOAR)",
      description: "Plataforma que orquestra e automatiza os fluxos de trabalho de resposta a incidentes de segurança, reduzindo o tempo de reação a ameaças.",
      techStack: ["Ansible", "Python", "TheHive", "Cortex"],
      liveUrl: "#",
      repoUrl: "#",
      imageUrl: "https://picsum.photos/seed/project3/600/400"
    },
     {
      title: "Laboratório de Testes de Invasão (Pentest)",
      description: "Ambiente controlado (lab) para simulação de ataques e testes de segurança em aplicações web e infraestrutura, utilizando ferramentas padrão do mercado.",
      techStack: ["Kali Linux", "Metasploit", "Burp Suite", "OWASP ZAP"],
      liveUrl: "#",
      repoUrl: "#",
      imageUrl: "https://picsum.photos/seed/project4/600/400"
    }
  ],
  certifications: [
    {
      name: "SentinelOne Paladin",
      issuer: "SentinelOne",
      year: 2024,
      credentialUrl: "#",
    },
    {
      name: "GigaPRO Professional Certification",
      issuer: "Gigamon",
      year: 2023,
      credentialUrl: "#",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      year: 2023,
      credentialUrl: "#",
    },
    {
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      year: 2022,
      credentialUrl: "#",
    }
  ],
  applications: [
    {
      name: "Portal de Monitoramento NOC",
      description: "Acesso direto ao painel de visualização de status de rede em tempo real.",
      url: "https://monitor.exemplo.com"
    },
    {
      name: "Scanner de Portas Web",
      description: "Ferramenta web leve para verificação rápida de portas abertas em IPs específicos.",
      url: "https://scanner.exemplo.com"
    },
    {
      name: "Gerador de Relatórios de Conformidade",
      description: "Aplicação para automação de relatórios mensais de segurança e compliance.",
      url: "https://relatorios.exemplo.com"
    }
  ],
  contact: {
    github: "https://github.com/reisdev26/",
    linkedin: "https://www.linkedin.com/in/welerson-reis-/",
    email: "reisdev26@gmail.com"
  }
};

// This context is passed to the Gemini API to ground its responses.
export const portfolioContext = `
Portfólio de ${portfolioData.name}, ${portfolioData.title}.
Biografia: ${portfolioData.bio}
Habilidades: ${portfolioData.skills.join(', ')}.

Projetos em Destaque:
${portfolioData.projects.map(p => `- ${p.title}: ${p.description} (Tecnologias: ${p.techStack.join(', ')})`).join('\n')}

Outras Aplicações e Ferramentas Desenvolvidas:
${portfolioData.applications.map(a => `- ${a.name}: ${a.description} (Link: ${a.url})`).join('\n')}

Certificações:
${portfolioData.certifications.map(c => `- ${c.name} de ${c.issuer} (${c.year})`).join('\n')}

Informações de Contato:
- GitHub: ${portfolioData.contact.github}
- LinkedIn: ${portfolioData.contact.linkedin}
- Email: ${portfolioData.contact.email}
`;
