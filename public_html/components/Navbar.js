function Navbar({ currentPage, onNavigate }) {
    const handleClick = (e, page) => {
        e.preventDefault();
        onNavigate(page);
    };

    return (
        <nav className="bg-white shadow-lg" data-name="navbar">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-pink-600" data-name="logo">Marianna Pettus</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a 
                            href="#home" 
                            onClick={(e) => handleClick(e, 'home')} 
                            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                            data-name="nav-home"
                        >
                            Home
                        </a>
                        <a 
                            href="#hobbies" 
                            onClick={(e) => handleClick(e, 'hobbies')} 
                            className={`nav-link ${currentPage === 'hobbies' ? 'active' : ''}`}
                            data-name="nav-hobbies"
                        >
                            Hobbies
                        </a>
                        <a 
                            href="#family" 
                            onClick={(e) => handleClick(e, 'family')} 
                            className={`nav-link ${currentPage === 'family' ? 'active' : ''}`}
                            data-name="nav-family"
                        >
                            Family
                        </a>
                        <a 
                            href="#contact" 
                            onClick={(e) => handleClick(e, 'contact')} 
                            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                            data-name="nav-contact"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
