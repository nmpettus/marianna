function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Here you would typically handle form submission
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            console.log('Form submitted:', data);
            alert('Thank you for your message! I will get back to you soon.');
        } catch (error) {
            reportError(error);
            alert('There was an error sending your message. Please try again.');
        }
    };

    return (
        <div className="main-content" data-name="contact-page">
            <div className="section max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
                <form onSubmit={handleSubmit} className="space-y-6" data-name="contact-form">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="6"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
            </div>
        </div>
    );
}
