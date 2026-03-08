import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/nav";
import HomePage from "./pages/HomePage";
import KandidatPage from "./pages/KandidatiPage";
import KontaktPage from "./pages/KontaktPage";
import ProgramPage from "./pages/ProgramPage";
import ONasPage from "./pages/ONasPage";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/kandidati" element={<KandidatPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/onas" element={<ONasPage />} />
        </Routes>
      </main>
    </>
  );
}