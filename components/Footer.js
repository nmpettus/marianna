function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8" data-name="footer">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0" data-name="footer-copyright">
                        <p>© 2024 Norman Pettus. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4" data-name="footer-social">
                        <a href="https://github.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}