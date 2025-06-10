function useNavigation() {
    const [currentPage, setCurrentPage] = React.useState('home');

    const navigate = (page) => {
        try {
            setCurrentPage(page);
            window.location.hash = page;
        } catch (error) {
            console.error('Navigation error:', error);
        }
    };

    React.useEffect(() => {
        try {
            const handleHashChange = () => {
                const hash = window.location.hash.replace('#', '') || 'home';
                setCurrentPage(hash);
            };

            window.addEventListener('hashchange', handleHashChange);
            handleHashChange(); // Initial check

            return () => window.removeEventListener('hashchange', handleHashChange);
        } catch (error) {
            console.error('Navigation setup error:', error);
        }
    }, []);

    return { currentPage, navigate };
}