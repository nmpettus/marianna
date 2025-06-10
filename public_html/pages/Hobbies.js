function Hobbies() {
    const hobbies = [
        {
          id: 1,
          title: "Cardio Drumming",
          description:
            "An energetic  text and fun workout that combines cardio exercise with drumming movements. It's a great way to stay fit while enjoying rhythm and music.",
          image: {
            src: "/images/cardio1.jpg",
            alt: "Cardio drumming workout session",
          },
        },
        {
            id: 2,
            title: "Chair Yoga",
            description: "A gentle form of yoga that can be done while seated. Perfect for improving flexibility, reducing stress, and maintaining physical well-being in a comfortable way.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600"
        },
        {
            id: 3,
            title: "Cards with Friends",
            description: "Enjoying quality time with friends over card games. It's not just about playing cards - it's about the laughter, stories, and bonds we share.",
            image: "https://images.unsplash.com/photo-1529480780361-c8cb81eb5735?auto=format&fit=crop&w=600"
        },
        {
            id: 4,
            title: "Going to the Movies",
            description: "Experiencing the magic of cinema on the big screen. Whether it's the latest blockbuster or a touching drama, there's nothing quite like a movie theater experience.",
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600"
        }
    ];

    return (
        <div className="main-content" data-name="hobbies-page">
            <h1 className="text-3xl font-bold mb-8">My Hobbies & Activities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hobbies.map(hobby => (
                    <div 
                        key={hobby.id} 
                        className="section hobby-card" 
                        data-name={`hobby-${hobby.id}`}
                    >
                        <div className="hobby-image rounded-lg overflow-hidden mb-4">
                            <img 
                                src={hobby.image.src} 
                                alt={hobby.title} 
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
                        <p className="text-gray-600">{hobby.description}</p>
                    </div>
                ))}
            </div>
            <div className="section mt-8" data-name="hobbies-description">
                <h2 className="text-2xl font-bold mb-4">Staying Active & Social</h2>
                <p className="text-lg text-gray-700">
                    My hobbies reflect my love for staying active, maintaining wellness, and enjoying social connections. 
                    From the energetic beats of cardio drumming to the peaceful practice of chair yoga, and from 
                    entertaining card games with friends to the excitement of movie outings - each activity brings its 
                    own special joy to my life.
                </p>
            </div>
        </div>
    );
}
