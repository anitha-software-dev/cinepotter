import { SEO } from '../components/seo/SEO';

export function CookiesPolicy() {
  return (
    <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto text-white">
      <SEO
        title="Cookies Policy | CinePotter"
        description="How CinePotter uses essential, analytics, and marketing cookies, and how you can manage your cookie preferences."
      />
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#DD19E0] to-[#0054D1]">Cookies Policy</h1>
      
      <div className="space-y-8 text-sm md:text-base text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
          <p>
            We use cookies to understand how you interact with our platform, to securely log you in, to remember your preferences, and to deliver targeted advertisements and content relevant to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the basic functionality of our platform, like user authentication and security.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
            <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant and engaging advertisements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">4. Managing Your Cookie Preferences</h2>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service. You can also customize your choices at any time through our Cookie settings banner.
          </p>
        </section>
      </div>
    </main>
  );
}
