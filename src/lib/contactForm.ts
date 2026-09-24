export async function submitContactLead(payload: any) {
  const apiUrl = String(
    import.meta.env.VITE_CONTACT_API_URL || '/api/contact'
  ).trim();

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.error || data?.message || 'Unable to send your message. Please try again.');
  }

  return { ok: true };
}

export function buildContactPayload(fields: any) {
  return {
    name: `${fields.firstName || ''} ${fields.lastName || ''}`.trim(),
    email: String(fields.email || '').trim(),
    phone: String(fields.phone || '').trim() || null,
    subject: String(fields.subject || '').trim() || null,
    message: String(fields.message || '').trim() || null,
    source: 'website',
    submittedAt: new Date().toISOString(),
  };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(fields: any) {
  const errors: Record<string, string> = {};

  const firstName = String(fields.firstName || '').trim();
  if (!firstName) {
    errors.firstName = 'First name is required';
  }

  const lastName = String(fields.lastName || '').trim();
  if (!lastName) {
    errors.lastName = 'Last name is required';
  }

  const email = String(fields.email || '').trim();
  if (!email) {
    errors.email = 'Email is required';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address';
  }

  const phone = String(fields.phone || '').trim();
  if (phone && !/^[\d\s+().-]{7,20}$/.test(phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  const subject = String(fields.subject || '').trim();
  if (!subject) {
    errors.subject = 'Subject is required';
  }

  const message = String(fields.message || '').trim();
  if (!message) {
    errors.message = 'Message is required';
  }

  return errors;
}
