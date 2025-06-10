function Home() {
    return (
        <div className="main-content" data-name="home-page">
            <div className="section" data-name="hero-section">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">Welcome to My World</h1>
                        <p className="text-xl text-gray-600 mb-6">Hi, I'm Marianna Pettus. I love sharing my life experiences, hobbies, and precious family moments.</p>
                        <a href="#contact" className="btn-primary inline-block">Get in Touch</a>
                    </div>
                    <div className="md:w-1/2">
                        <img 
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=600" 
                            alt="Marianna's Portrait" 
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </div>
            </div>
            
            <div className="section" data-name="about-section">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-gray-700">
                    I'm passionate about life, family, and pursuing my various interests. Through this website, 
                    I hope to share my journey and connect with others who share similar passions. When I'm not 
                    spending time with my wonderful family, you can find me exploring my hobbies and creating 
                    beautiful memories.
                </p>
            </div>
        </div>
    );
}