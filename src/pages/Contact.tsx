
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';
import { Map } from 'lucide-react';

const Contact = () => {
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
  
  return (
    <MainLayout>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-green-700">Contact Us</h1>
            <p className="text-lg text-center mb-12 text-gray-700">
              Have questions about our projects or how to get involved? We'd love to hear from you!
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
                    <h3 className="text-2xl font-bold mb-4 text-green-700">Thank You!</h3>
                    <p className="text-gray-700 mb-6">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-green-500 hover:bg-green-600">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-semibold mb-6 text-green-600">Send us a message</h2>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
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
                          Email Address
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
                          Subject
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
                          Your Message
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
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Contact Information */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-semibold mb-6 text-green-600">Get in Touch</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-green-700">Address</h3>
                      <p className="text-gray-600">123 Green Street<br />Earth City, Planet 12345</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-green-700">Email</h3>
                      <p className="text-gray-600">info@greenroots.org</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-green-700">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-green-700">Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-6 text-green-600">Visit Us</h2>
                  <div className="aspect-ratio border border-gray-300 rounded-md bg-gray-100 flex items-center justify-center h-64">
                    <div className="flex flex-col items-center text-gray-500">
                      <Map className="w-12 h-12 mb-2" />
                      <p>Map placeholder - Interactive map would be here</p>
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
