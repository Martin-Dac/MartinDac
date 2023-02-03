import React from "react";
import NotFound from "./components/notFound";
import NavBar from "./components/layout/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Container from "./components/layout/container";

function App() {
  return (
    <div className="text-white font-OpenSans">
      <div className="w-screen h-screen bg-cover bg-backgroundGif">
        <BrowserRouter>
          <NavBar />
          <Container>
            <Routes>
              <Route path="/MartinDac" element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Container>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
