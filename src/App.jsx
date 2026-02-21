import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Stats from "./components/Stats";
import Tools from "./components/Tools";
import Bonuses from "./components/Bonuses";
import Certificate from "./components/Certificate";
import FAQ from "./components/FAQ";
import FooterCTA from "./components/FooterCTA";
import StickyCTA from "./components/StickyCTA";
import Mentor from "./components/Mentor";
import RegisterModal from "./components/RegisterModal";

import Success from "./components/Success";
import Failure from "./components/Failure";

import Admin from "./components/Admin";

function LandingPage() {
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <>
      <Navbar onEnroll={() => setOpenRegister(true)} />
      <main>
        <Hero onEnroll={() => setOpenRegister(true)} />
        <Mentor onEnroll={() => setOpenRegister(true)} />
        <Trust />
        <Stats />
        <Tools />
        <Bonuses />
        <Certificate />
        <FAQ />
        <FooterCTA onEnroll={() => setOpenRegister(true)} />
      </main>

      <RegisterModal
        open={openRegister}
        onClose={() => setOpenRegister(false)}
      />
      <StickyCTA onEnroll={() => setOpenRegister(true)} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Existing landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Payment result pages */}
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />

        {/* Admin page */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
