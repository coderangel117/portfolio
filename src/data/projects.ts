export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubUrl?: string;
    demoUrl?: string;
}

export const projectItems: Project[] = [
    {
        id: "1",
        title: "Mini jeux console",
        description: "Programme pour lancer des mini jeux en version console.",
        technologies: ["Python"],
        image: "/images/python_casino.png",
        githubUrl: "https://github.com/coderangel117/python_game",
    },
    {
        id: "2",
        title: "Todolist",
        description: "Intégration de défi todolist de FrontendMentor",
        technologies: ["html", "css", "js"],
        image: "/images/todolist-preview.jpg",
        githubUrl: "https://github.com/coderangel117/todolist",
    },
    {
        id: "3",
        title: "Metalheads",
        description: "Blog sur les nouveautés métal",
        technologies: ["laravel", "Mariadb"],
        image: "/images/metalheads.png",
        githubUrl: "https://github.com/coderangel117/metalheads-laravel",
    },
    {
        id: "4",
        title: "hyrule castle",
        description: "Mini jeu tour par tour en version console sur le thème de Zelda.",
        technologies: ["Python"],
        image: "/images/zelda_game.png",
        githubUrl: "https://github.com/coderangel117/python_game",
    },
];