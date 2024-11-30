import React, { useState } from 'react';
import Navbar from './component/navbar/Navbar';
import Contact from './component/contactform/Contact';
import TodoList from './component/todolist/Todo';

function App() {
    const [showContact, setShowContact] = useState(false);

    const handleContactClick = () => {
        setShowContact(prevShowContact => !prevShowContact);
    };

    return (
        <>
            <Navbar onContactClick={handleContactClick} />
            {showContact ? <Contact /> : <TodoList />}
        </>
    );
}

export default App;