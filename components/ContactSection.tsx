
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Inquiry',
    message: ''
  });

  const TARGET_PHONE = "8555045033";
  const TARGET_EMAIL = "harikaagritech422@gmail.com";
  const TARGET_CALL = "8977992064";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a brief professional delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const textContent = `*New Inquiry from HarikaAgritech Website*\n\n` +
                        `👤 *Name:* ${formData.name}\n` +
                        `📞 *Phone:* ${formData.phone}\n` +
                        `🏷️ *Topic:* ${formData.subject}\n` +
                        `📝 *Message:* ${formData.message}`;

    if (contactMethod === 'whatsapp') {
      const waLink = `https://wa.me/${TARGET_PHONE}?text=${encodeURIComponent(textContent)}`;
      window.open(waLink, '_blank');
    } else {
      const mailToLink = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(formData.subject + ' - ' + formData.name)}&body=${encodeURIComponent(textContent.replace(/\*/g, ''))}`;
      window.location.href = mailToLink;
    }

    setIsSubmitting(false);
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-['Playfair_Display']">Get In Touch</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Reach out to us directly via WhatsApp or Email.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">Office</h4>
                  <p className="text-slate-600">HarikaAgritech, Rampur, Telangana - 506142</p>
                  <a href={`tel:${TARGET_CALL}`} className="text-emerald-600 font-bold hover:underline flex items-center gap-1">
                                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                      +91 8977992064
                                    </a>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">Email Us</h4>
                  <p className="text-slate-600">{TARGET_EMAIL}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm">
              <p className="text-slate-500 text-sm font-medium mb-4 uppercase tracking-widest">Connect with us on</p>
              <div className="flex gap-4">
                 <a href={`https://wa.me/${TARGET_PHONE}`} target="_blank" className="p-4 bg-[#25D366]/10 text-[#25D366] rounded-2xl hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-2 font-bold">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                 </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-emerald-900/10 border border-slate-100 relative">
            {isSent ? (
              <div className="text-center py-12 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner animate-bounce">✓</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3 font-['Playfair_Display']">Inquiry Prepared!</h3>
                <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                  {contactMethod === 'whatsapp'
                    ? "We've opened WhatsApp. Please press 'Send' to finish your inquiry."
                    : "Your email app has been opened with the inquiry details."}
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex p-1 bg-slate-100 rounded-2xl mb-8">
                  <button
                    type="button"
                    onClick={() => setContactMethod('whatsapp')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${contactMethod === 'whatsapp' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    💬 WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod('email')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${contactMethod === 'email' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    ✉️ Email
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50/50"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Inquiry For</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50/50"
                  >
                    <option>Inquiry</option>
                    <option>Bulk Order</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 transition-all bg-slate-50/50"
                    placeholder="Tell us about your farm requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 ${contactMethod === 'whatsapp' ? 'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-[#25D366]/20' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20'}`}
                >
                  {isSubmitting ? (
                    'Connecting...'
                  ) : (
                    <>
                      {contactMethod === 'whatsapp' ? 'Connect on WhatsApp' : 'Open Email Draft'}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
