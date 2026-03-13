import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/nav";
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import ONasPage from "./pages/ONasPage";
import Footer from "./components/nav/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/onas" element={<ONasPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}