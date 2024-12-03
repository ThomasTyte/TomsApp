import React, { useState } from 'react';
import Navbar from './component/navbar/Navbar';
import Contact from './pages/contactpage/Contact'; 
import Home from './pages/Home/Home'; 

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'contact':
                return <Contact />;
            default:
               
        }
    };

    return (
        <div>
            <Navbar onPageChange={setCurrentPage} />
            {renderPage()}
        </div>
    );
}

export default App;