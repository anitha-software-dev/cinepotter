import { lazy, Suspense, type ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieBanner } from './components/layout/CookieBanner';
import { RouteCanonical } from './components/seo/SEO';
import { TrailingSlash } from './components/seo/TrailingSlash';
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

const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogDetail = lazy(() => import('./pages/BlogDetail').then(m => ({ default: m.BlogDetail })));

function slashRoutes(path: string, element: ReactNode) {
  const base = path.replace(/\/+$/, '');
  return [
    <Route key={base} path={base} element={element} />,
    <Route key={`${base}/`} path={`${base}/`} element={element} />,
  ];
}

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <ScrollToTop />
      <TrailingSlash />
      <RouteCanonical />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {slashRoutes('/journey', <Journey />)}
        {slashRoutes('/offerings', <Offerings />)}
        {slashRoutes('/solutions', <Solutions />)}
        {slashRoutes('/resources', <Resources />)}
        {slashRoutes('/contact', <Contact />)}
        {slashRoutes('/trends', <Trends />)}
        {slashRoutes('/privacy', <PrivacyPolicy />)}
        {slashRoutes('/terms', <TermsOfService />)}
        {slashRoutes('/cookies', <CookiesPolicy />)}
        {slashRoutes('/trends/:id', <Article />)}
        {slashRoutes('/resources/:id', <Article />)}
        {slashRoutes('/blog', (
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-text-secondary text-sm">Loading articles...</div>}>
            <Blog />
          </Suspense>
        ))}
        {slashRoutes('/blog/:slug', (
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-text-secondary text-sm">Loading article...</div>}>
            <BlogDetail />
          </Suspense>
        ))}
      </Routes>
      
      
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
