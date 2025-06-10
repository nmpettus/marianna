function Family() {
    const familyMembers = [
        {
            id: 1,
            name: "Jon Pettus",
            relation: "Family Member",
            description: "A cherished member of our family who brings warmth and joy to our gatherings",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600"
        },
        {
            id: 2,
            name: "Doreen Pettus",
            relation: "Family Member",
            description: "Her loving presence makes our family complete and our bonds stronger",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600"
        },
        {
            id: 3,
            name: "Tracy Potter",
            relation: "Family Member",
            description: "Adds a special spark to our family with her unique perspective and care",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600"
        },
        {
            id: 4,
            name: "Alex Pettus",
            relation: "Family Member",
            description: "A valuable part of our family whose presence brightens our days",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600"
        },
        {
            id: 5,
            name: "Nicholas Hanvey",
            relation: "Family Member",
            description: "Brings energy and enthusiasm to our family gatherings",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600"
        },
        {
            id: 6,
            name: "Thye (Sam) Pettus",
            relation: "Family Member",
            description: "Known as Sam, adds wonderful diversity and joy to our family circle",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600"
        }
    ];

    return (
        <div className="main-content" data-name="family-page">
            <h1 className="text-3xl font-bold mb-8">My Family</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {familyMembers.map(member => (
                    <div 
                        key={member.id} 
                        className="section family-card" 
                        data-name={`family-member-${member.id}`}
                    >
                        <div className="family-image rounded-lg overflow-hidden mb-4">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                        <p className="text-gray-500 mb-2">{member.relation}</p>
                        <p className="text-gray-600">{member.description}</p>
                    </div>
                ))}
            </div>
            <div className="section mt-8" data-name="family-description">
                <h2 className="text-2xl font-bold mb-4">Our Family Bond</h2>
                <p className="text-lg text-gray-700">
                    Family is the heart of everything we do. Each member brings their unique qualities and strengths, 
                    making our bond stronger and our lives richer. Together, we share our joys, support each other 
                    through challenges, and create lasting memories that we'll cherish forever.
                </p>
            </div>
        </div>
    );
}