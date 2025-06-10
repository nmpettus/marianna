function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-featured online shopping platform built with React and Node.js",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600",
            technologies: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
            id: 2,
            title: "Task Management System",
            description: "A collaborative task management tool for remote teams",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600",
            technologies: ["React", "Firebase", "Material-UI"]
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather monitoring application with interactive maps",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600",
            technologies: ["React", "OpenWeather API", "Leaflet"]
        }
    ];

    return (
        <div className="main-content" data-name="projects-page">
            <h1 className="text-3xl font-bold mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div 
                        key={project.id} 
                        className="section project-card" 
                        data-name={`project-${project.id}`}
                    >
                        <div className="project-image rounded-lg overflow-hidden mb-4">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                                <span 
                                    key={tech} 
                                    className="project-tech-tag bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm cursor-pointer"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
