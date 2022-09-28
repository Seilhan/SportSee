import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="content">
          <Header />
          <Routes></Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
