export function PrivacyPolicy() {
  return (
    <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#DD19E0] to-[#0054D1]">Privacy Policy</h1>
      
      <div className="space-y-8 text-sm md:text-base text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
          <p>
            When you use CinePotter, we may collect personal information such as your name, email address, and billing information when you register for an account. We also collect usage data, including the prompts you enter and the videos you generate, to improve our AI models and service quality.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services. Your data helps us personalize your experience, process transactions, and communicate with you about updates or support requests.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">3. Data Security and AI Usage</h2>
          <p>
            We implement industry-standard security measures to protect your data. While we use generated content to train and refine our AI systems, we respect your privacy and provide opt-out mechanisms for enterprise users regarding model training.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share information with trusted third-party service providers who assist us in operating our platform, conducting business, or serving our users, provided those parties agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. If you wish to exercise these rights or have any questions about our privacy practices, please contact us at support@cinepotter.com.
          </p>
        </section>
      </div>
    </main>
  );
}
