// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./modules/Header";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    </>
  );
}

export default App;
