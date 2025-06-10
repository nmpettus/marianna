function App() {
    const { currentPage, navigate } = useNavigation();

    const renderPage = () => {
        switch(currentPage) {
            case 'hobbies':
                return <Hobbies />;
            case 'family':
                return <Family />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="page-container" data-name="app">
            <div className="tech-pattern"></div>
            <Navbar currentPage={currentPage} onNavigate={navigate} />
            {renderPage()}
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);