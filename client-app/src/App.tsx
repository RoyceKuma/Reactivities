import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
 const [activites, setActivites] =useState([]);

 useEffect(() => {
  axios.get('http://localhost:5000/api/activites').then(response => {
    console.log(response);
    setActivites(response.data);
  })
 }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ul>
        {activites.map((activity:any )=> (
          <li key = {activity.id}>
              {activity.title}
          </li>
        ))}
      </ul>
      </header>
    </div>
  );
}

export default App;
