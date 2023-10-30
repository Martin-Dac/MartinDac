import React from "react";
import NavBar from "./components/layout/navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Container from "./components/layout/container";

function App() {
  return (
    <div className="text-white font-OpenSans">
      <div className="w-screen h-screen bg-cover bg-backgroundGif">
        <HashRouter>
          <NavBar />
          <Container>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
          </Container>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
