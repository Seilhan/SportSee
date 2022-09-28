import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="nav-header">
      <Link to="/">Accueil</Link>
      <Link to="/Profil">Profil</Link>
      <Link to="/Réglage">Réglage</Link>
      <Link to="/Communauté">Communauté</Link>
    </nav>
  );
}

export default Nav;
