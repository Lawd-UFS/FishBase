import React from 'react';

const HomePage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
            <header style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 0' }}>
                <h1>Welcome to Our Website</h1>
            </header>
            <main style={{ marginTop: '20px' }}>
                <p>
                    This is the homepage of our website. Feel free to explore and learn more about what we offer.
                </p>
                <button
                    style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                    }}
                    onClick={() => alert('Button clicked!')}
                >
                    Learn More
                </button>
            </main>
            <footer style={{ marginTop: '20px', fontSize: '14px', color: '#777' }}>
                <p>&copy; {new Date().getFullYear()} Our Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;