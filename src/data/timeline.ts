export interface TimelineItem {
    id: string;
    period: string;
    title: string;
    organization: string;
    description: string;
}

export const educationItems: TimelineItem[] = [
    {
        id: "1",
        period: "2024 - 2025",
        title: "Master Informatique",
        organization: "ETNA",
        description: "Formation avancée en ingénierie logicielle et architecture d’applications modernes.\n"
    },
    {
        id: "2",
        period: "2022 - 2024",
        title: "Bachelor Informatique",
        organization: "ETNA",
        description: "Approfondissement des compétences en développement web et logiciel avec une approche orientée projets"
    },
    {
        id: "3",
        period: "2020 - 2022",
        title: "BTS SIO",
        organization: "Lycée Fulbert",
        description: "Formation axée sur les fondamentaux du développement et des systèmes informatiques : algorithmique, bases de données, développement web et gestion de projet.\n"
    }
];

export const experienceItems: TimelineItem[] = [
    {
        id: "1",
        period: "2024 - 2025",
        title: "Alternant Développeur",
        organization: "SOFTIA",
        description: "Maquette et intégration de site internet sur react."
    },
    {
        id: "2",
        period: "2022 - 2024",
        title: "Alternant Développeur",
        organization: "SOFTIA",
        description: "Développeur Symfony pendant le Bachelor. Maintenance, évolutions, mise à jour de symfony."
    },
    {
        id: "3",
        period: "2022 - 2022",
        title: "Stage Développeur",
        organization: "AbsolumentCanoe",
        description: "Développement de site de gestion des réservation de canoë kayak"
    },
];
