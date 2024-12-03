import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Contact from './pages/contactpage/Contact'; 
import Home from './pages/Home/Home'; 
import TodoList from './path/to/TodoList'; 

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />        
                <Route path="/contact" element={<Contact />} />  
                <Route path="/todolist" element={<TodoList />} /> 
            </Routes>
        </Router>
    );
}

export default App;