function Skills() {
    const skills = {
        frontend: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
        backend: ["Node.js", "Python", "Java", "Express", "Django"],
        database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
        tools: ["Git", "Docker", "AWS", "Jenkins", "Webpack"]
    };

    return (
        <div className="main-content" data-name="skills-page">
            <h1 className="text-3xl font-bold mb-8">Technical Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="section" data-name="frontend-skills">
                    <h2 className="text-2xl font-bold mb-4">Frontend Development</h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.frontend.map(skill => (
                            <span 
                                key={skill}
                                className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="section" data-name="backend-skills">
                    <h2 className="text-2xl font-bold mb-4">Backend Development</h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.backend.map(skill => (
                            <span 
                                key={skill}
                                className="bg-green-100 text-green-800 px-3 py-2 rounded-lg"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="section" data-name="database-skills">
                    <h2 className="text-2xl font-bold mb-4">Database & Storage</h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.database.map(skill => (
                            <span 
                                key={skill}
                                className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="section" data-name="tools-skills">
                    <h2 className="text-2xl font-bold mb-4">Tools & Deployment</h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.tools.map(skill => (
                            <span 
                                key={skill}
                                className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
