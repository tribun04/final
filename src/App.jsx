import React from "react";
// Notice: We do NOT import 'Router' or 'BrowserRouter' here anymore
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Header.jsx";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Recommended to add this


// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import Construction from "./pages/Construction";
import Renovation from "./pages/Renovation";
import Amenagement from "./pages/Amenagement";
import Eco from "./pages/Éco-responsable";
import Projects from "./pages/Projectpages";
import ImaginerPage from "./pages/ImaginerPage.jsx";
import LegalNotice from './pages/LegalNotice';
import CookieConsent from "./components/CookieConsent"; // Import the Popup

import PrivacyPolicy from './pages/PrivacyPolicy';
import WhatsAppWidget from "./components/WhatsAppWidget.jsx"; // Import the WhatsApp widget
import CookiesPolicy from './pages/CookiesPolicy';

function App() {
  return (
    <div className=" min-h-screen l">
      <Navbar />
            <ScrollToTop /> 
            <WhatsAppWidget/> 

            <CookieConsent />

      <main className="flex-grow">
        {/* We use Routes and Route directly because the Router is already in main.jsx */}
        <Routes>
          <Route path="/" element={<Home />} />

          

        <Route path="/mentions-legales" element={<LegalNotice />} />


        <Route path="/confidentialite" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          
          <Route path="/imaginer" element={<ImaginerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/services/amenagement" element={<Amenagement />} />
          <Route path="/services/eco-responsable" element={<Eco />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;