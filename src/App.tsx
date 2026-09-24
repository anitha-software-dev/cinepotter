import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieBanner } from './components/layout/CookieBanner';
import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { Offerings } from './pages/Offerings';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';
import { Solutions } from './pages/Solutions';
import { Trends } from './pages/Trends';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiesPolicy } from './pages/CookiesPolicy';
import { Article } from './pages/Article';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/trends/:id" element={<Article />} />
        <Route path="/resources/:id" element={<Article />} />
      </Routes>
      
      
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
