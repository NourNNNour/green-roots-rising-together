
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';
import { Map } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const content = {
    en: {
      title: "Contact Us",
      description: "Have questions about our projects or how to get involved? We'd love to hear from you!",
      formTitle: "Send us a message",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      messageLabel: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      sendAnother: "Send Another Message",
      thankYouTitle: "Thank You!",
      thankYouMessage: "Your message has been sent successfully. We'll get back to you as soon as possible.",
      contactInfo: {
        title: "Get in Touch",
        addressTitle: "Address",
        address: "123 Green Street\nEarth City, Planet 12345",
        emailTitle: "Email",
        phoneTitle: "Phone",
        hoursTitle: "Hours",
        hours: "Monday - Friday: 9am - 5pm"
      },
      mapTitle: "Visit Us",
      mapPlaceholder: "Map placeholder - Interactive map would be here"
    },
    ar: {
      title: "اتصل بنا",
      description: "هل لديك أسئلة حول مشاريعنا أو كيفية المشاركة؟ نود أن نسمع منك!",
      formTitle: "أرسل لنا رسالة",
      nameLabel: "اسمك",
      emailLabel: "البريد الإلكتروني",
      subjectLabel: "الموضوع",
      messageLabel: "رسالتك",
      sendButton: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      sendAnother: "إرسال رسالة أخرى",
      thankYouTitle: "شكرًا لك!",
      thankYouMessage: "تم إرسال رسالتك بنجاح. سنرد عليك في أقرب وقت ممكن.",
      contactInfo: {
        title: "تواصل معنا",
        addressTitle: "العنوان",
        address: "١٢٣ شارع الخضراء\nمدينة الأرض، كوكب ١٢٣٤٥",
        emailTitle: "البريد الإلكتروني",
        phoneTitle: "الهاتف",
        hoursTitle: "ساعات العمل",
        hours: "الاثنين - الجمعة: ٩ص - ٥م"
      },
      mapTitle: "زرنا",
      mapPlaceholder: "نموذج الخريطة - ستكون هنا خريطة تفاعلية"
    }
  };
  
  const c = language === 'ar' ? content.ar : content.en;
  
  return (
    <MainLayout>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-green-700">{c.title}</h1>
            <p className="text-lg text-center mb-12 text-gray-700">
              {c.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mb-6 text-green-500 flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-green-700">{c.thankYouTitle}</h3>
                    <p className="text-gray-700 mb-6">{c.thankYouMessage}</p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-green-500 hover:bg-green-600">
                      {c.sendAnother}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-semibold mb-6 text-green-600">{c.formTitle}</h2>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {c.nameLabel}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          {c.emailLabel}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          {c.subjectLabel}
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          {c.messageLabel}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        ></textarea>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? c.sending : c.sendButton}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Contact Information */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-semibold mb-6 text-green-600">{c.contactInfo.title}</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-green-700">{c.contactInfo.addressTitle}</h3>
                      <p className="text-gray-600">{c.contactInfo.address}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-green-700">{c.contactInfo.emailTitle}</h3>
                      <p className="text-gray-600">info@greenroots.org</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-green-700">{c.contactInfo.phoneTitle}</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-green-700">{c.contactInfo.hoursTitle}</h3>
                      <p className="text-gray-600">{c.contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-6 text-green-600">{c.mapTitle}</h2>
                  <div className="aspect-ratio border border-gray-300 rounded-md bg-gray-100 flex items-center justify-center h-64">
                    <div className="flex flex-col items-center text-gray-500">
                      <Map className="w-12 h-12 mb-2" />
                      <p>{c.mapPlaceholder}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
