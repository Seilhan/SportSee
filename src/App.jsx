import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./Pages/Accueil";
import Profil from "./Pages/Profil";
import Réglage from "./Pages/Réglage";
import Communauté from "./Pages/Communauté";
import NavItems from "./components/NavItems";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="content">
          <Header />
          <NavItems />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Réglage" element={<Réglage />} />
            <Route path="Communauté" element={<Communauté />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
