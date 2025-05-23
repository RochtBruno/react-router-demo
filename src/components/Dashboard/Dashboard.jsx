import React from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Emoji Critic — Tudo sobre emojis</h1>
      <p>O lugar n.º 1 para avaliações de emojis na Internet desde 2020!</p>
      <Link to="/reviews">
        Clique aqui para ver as últimas avaliações
      </Link>
    </div>
  );
}

export default Dashboard;
