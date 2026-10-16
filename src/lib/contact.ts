export const CONTACT = {
  phone: '+91 9096837474',
  phoneHref: 'tel:+919096837474',
  whatsapp: 'https://wa.me/919096837474',
  email: 'info@kpgl.in',
  emailHref: 'mailto:info@kpgl.in',
  address: 'Office No. 403 & 404, Skyline Building, Near CCD, Infront of Swaminarayan Mandir, Ambegaon Khurd, Pune – 411046, Maharashtra, India.',
  workingHours: 'Monday - Saturday | 9:30 AM - 6:30 PM IST',
  web3formsKey: '5e1d2b5a-3f7c-4e2b-9a8d-6c5f0a1b2e3d',
};

export const SERVICE_OPTIONS = [
  'Web Design & Development',
  'Mobile App Development',
  'Custom Software & ERP',
  'UI/UX Design & Branding',
  'Digital Marketing & SEO',
  'Tech Sponsorship & Incubation',
];

export const PROJECT_TYPES = [
  'General Inquiry',
  'Tech Sponsorship',
];

export async function sendEmailNotification(data: Record<string, string>) {
  const formData = {
    access_key: CONTACT.web3formsKey,
    subject: `New Inquiry — ${data.full_name} (${data.service_required || 'General'})`,
    from_name: 'KP Technologies Website',
    to_email: CONTACT.email,
    ...data,
  };

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`Email dispatch failed (${response.status})`);
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || 'Email dispatch failed');
  }
  return result;
}
