"use client";
import { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer id="contact" className="bg-green-800 text-white py-20 pt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap gap-12 mb-12">
          {/* Company Info */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">Revives</h3>
            <p className="mb-5">Turning waste into worth through innovative recycling solutions that benefit households, businesses, and the environment.</p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-white hover:bg-yellow-500 hover:text-green-800 transition-all duration-300">
                <Facebook size={18} className='invert'/>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-white hover:bg-yellow-500 hover:text-green-800 transition-all duration-300">
                <Twitter size={18} className='invert'/>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-white hover:bg-yellow-500 hover:text-green-800 transition-all duration-300">
                <Instagram size={18} className='invert'/>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-white hover:bg-yellow-500 hover:text-green-800 transition-all duration-300">
                <Linkedin size={18} className='invert'/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#how-it-works" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">How It Works</a></li>
              <li><a href="#why-choose-us" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">Why Choose Us</a></li>
              <li><a href="#who-we-serve" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">Who We Serve</a></li>
              <li><a href="#app-preview" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">Our App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} /> 6304218355
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> revives@gitam.in
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Visakhapatnam, India
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-500">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on our initiatives and recycling tips.</p>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address" 
              className="w-full p-3 rounded-full bg-white bg-opacity-20 text-white mb-4 focus:outline-none"
            />
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-800 font-semibold py-3 px-6 rounded-full transition-colors duration-300">Subscribe</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-white border-opacity-10">
          <p className="text-white text-opacity-70 text-sm">&copy; {new Date().getFullYear()} Revives. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}