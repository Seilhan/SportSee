import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="nav-header">
      <Link>Accueil</Link>
      <Link>Profil</Link>
      <Link>Réglage</Link>
      <Link>Communauté</Link>
    </nav>
  );
}

export default Nav;
