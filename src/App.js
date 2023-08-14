import './App.css';
import LoginForm from './components/LoginForm';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Comment from './components/Comment';
import { Button } from 'react-bootstrap';
import ThankYou from './components/ThankYou';
function App() {
  const [user, setUser] = useState();
  const updateUser = (user)=>{
    setUser(user);
    console.log(user);
  }
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LoginForm updateUser={updateUser}/>} />
        <Route path="/comment" element={<Comment user={user} updateUser={updateUser}/>} />
        <Route path="/thank-you" element={<ThankYou user={user}/>} />
      </Routes>
    </div>
  );
}


export default App;
