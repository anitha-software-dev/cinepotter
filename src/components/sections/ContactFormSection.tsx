import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { buildContactPayload, submitContactLead, validateContactForm } from '../../lib/contactForm';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const EMPTY_FORM: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

export function ContactFormSection() {
  const [fields, setFields] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const setField = (key: keyof ContactFormData, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const validationErrors = validateContactForm(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = buildContactPayload(fields);
      await submitContactLead(payload);

      setSubmitSuccess(true);
      setFields(EMPTY_FORM);
    } catch (err: any) {
      setSubmitError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8 max-w-[1280px] mx-auto relative z-20">
      <div className="grid grid-cols-1 gap-12 lg:gap-20 max-w-[1100px] mx-auto">

        {/* Right Column: Send Us a Message Form (6 columns) */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center mx-auto">
          {/* Gradient Border */}
          <div className="w-full rounded-[32px] p-[30px] bg-gradient-to-r from-[#DD19E0]/50 to-[#0054D1]/50 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Send Us a Message</h3>
            <p className="text-sm text-text-secondary mb-6">Fill out the form and our team will get back to you soon.</p>

            <form className="grid grid-cols-1 sm:grid-cols-12 gap-3" onSubmit={onSubmit} noValidate>

              <div className="col-span-1 sm:col-span-6 flex flex-col">
                <input
                  type="text"
                  placeholder="First Name"
                  value={fields.firstName}
                  onChange={(e) => setField('firstName', e.target.value)}
                  className={`w-full bg-[#0A132C]/40 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-sm text-white placeholder-text-secondary focus:outline-none focus:border-[#0054D1]/60 transition-colors`}
                />
                {errors.firstName && <span className="text-red-500 text-xs mt-1 ml-2">{errors.firstName}</span>}
              </div>

              <div className="col-span-1 sm:col-span-6 flex flex-col">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={fields.lastName}
                  onChange={(e) => setField('lastName', e.target.value)}
                  className={`w-full bg-[#0A132C]/40 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-sm text-white placeholder-text-secondary focus:outline-none focus:border-[#0054D1]/60 transition-colors`}
                />
                {errors.lastName && <span className="text-red-500 text-xs mt-1 ml-2">{errors.lastName}</span>}
              </div>

              <div className="col-span-1 sm:col-span-6 flex flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  value={fields.email}
                  onChange={(e) => setField('email', e.target.value)}
                  className={`w-full bg-[#0A132C]/40 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-sm text-white placeholder-text-secondary focus:outline-none focus:border-[#0054D1]/60 transition-colors`}
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 ml-2">{errors.email}</span>}
              </div>

              <div className="col-span-1 sm:col-span-6 flex flex-col">
                <input
                  type="tel"
                  placeholder="Phone"
                  value={fields.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                  className={`w-full bg-[#0A132C]/40 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-sm text-white placeholder-text-secondary focus:outline-none focus:border-[#0054D1]/60 transition-colors`}
                />
                {errors.phone && <span className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</span>}
              </div>

              <div className="col-span-1 sm:col-span-12 flex flex-col">
                <input
                  type="text"
                  placeholder="Subject"
                  value={fields.subject}
                  onChange={(e) => setField('subject', e.target.value)}
                  className={`w-full bg-[#0A132C]/40 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-sm text-white placeholder-text-secondary focus:outline-none focus:border-[#0054D1]/60 transition-colors`}
                />
                {errors.subject && <span className="text-red-500 text-xs mt-1 ml-2">{errors.subject}</span>}
              </div>

              <div className="col-span-1 sm:col-span-12 flex flex-col">
                <textarea
                  placeholder="Message"
                  rows={4}
                  value={fields.message}
                  onChange={(e) => setField('message', e.target.value)}
                  className={`w-full bg-[#0A132C]/40 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-sm text-white placeholder-text-secondary focus:outline-none focus:border-[#0054D1]/60 transition-colors resize-none`}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs mt-1 ml-2">{errors.message}</span>}
              </div>

              {submitError && (
                <div className="col-span-1 sm:col-span-12 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm mt-2">
                  {submitError}
                </div>
              )}

              {submitSuccess ? (
                <div className="col-span-1 sm:col-span-12 p-6 rounded-xl bg-green-500/10 border border-green-500/20 flex flex-col items-center text-center mt-2">
                  <CheckCircle2 className="text-green-500 mb-2" size={32} />
                  <h4 className="text-white font-bold text-lg mb-1">Message Sent!</h4>
                  <p className="text-green-400 text-sm">Thanks for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="col-span-1 sm:col-span-12 bg-gradient-to-r from-[#DD19E0] to-[#0054D1] text-white font-bold py-3.5 rounded-xl hover:shadow-glow-sm transition-shadow mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
