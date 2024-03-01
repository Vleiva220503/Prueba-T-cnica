import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CharactersPage from "./pages/useCharactersPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/*" element={<CharactersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
