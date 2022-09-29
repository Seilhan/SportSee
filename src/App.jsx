import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./Pages/Dashboard";
import NavItems from "./components/NavItems";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="content">
          <Header />
          <div className="container">
            <NavItems />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
