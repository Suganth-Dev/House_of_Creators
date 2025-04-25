import React, { useEffect, useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('access_key', 'b98a0991-7ba5-4006-9afb-04f64f3edcdc');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMsg(true);
      event.target.reset();
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSuccessMsg(false), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contactRef}
          className="max-w-3xl mx-auto transition-all duration-700 translate-y-10 opacity-0"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get in{' '}
              <span className="bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Have questions about our community? We'd love to hear from you.
            </p>
          </div>

          {successMsg && (
            <div className="text-green-600 font-medium text-center mb-4">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="Your message..."
                required
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit" variant="primary" className="flex items-center">
                Send Message
                <Send size={18} className="ml-2" />
              </Button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center text-indigo-800">
              <Mail className="w-5 h-5 mr-2" />
              <a
                href="mailto:hello@houseofcreators.co"
                className="hover:text-indigo-600 transition-colors"
              >
                hello@houseofcreators.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
