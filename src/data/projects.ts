export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubUrl?: string;
    demoUrl?: string;
}

export const projectItems : Project[] = [
    {
        id: "1",
        title: "Mini jeux console",
        description: "Programme pour lancer des mini jeux en version console.",
        technologies: ["Python"],
        image: "/images/python_game.png",
        githubUrl: "https://github.com/coderangel117/python_game",
    },    {
        id: "1",
        title: "Todolist",
        description: "Intégration de défi todolist de FrontendMentor",
        technologies: ["html", "css", "js"],
        image: "/images/todolist-preview.jpg",
        githubUrl: "https://github.com/coderangel117/todolist",
    },
];