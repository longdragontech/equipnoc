'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart2, Code, Cloud, Globe2, Database, Building2 } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasScrolled?: boolean;
}

const NavLink = ({ href, children, hasScrolled }: NavLinkProps) => (
  <Link 
    href={href} 
    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
      hasScrolled ? 'text-gray-900' : 'text-white'
    }`}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => (
  <Link 
    href={href}
    onClick={onClick}
    className="block text-gray-900 hover:text-blue-600 transition-colors"
  >
    {children}
  </Link>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      hasScrolled ? 'bg-white shadow-lg' : 'bg-slate-900'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className={`w-8 h-8 ${hasScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${hasScrolled ? 'text-gray-900' : 'text-white'}`}>
              Equip Noc
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink hasScrolled={hasScrolled} href="#solutions">Solutions</NavLink>
            <NavLink hasScrolled={hasScrolled} href="#trading">Trading</NavLink>
            <NavLink hasScrolled={hasScrolled} href="#global">Global Network</NavLink>
            <NavLink hasScrolled={hasScrolled} href="#contact">Contact</NavLink>
          </div>

          <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white">
            Partner With Us
          </Button>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${hasScrolled ? 'bg-gray-900' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${hasScrolled ? 'bg-gray-900' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 transition-all ${hasScrolled ? 'bg-gray-900' : 'bg-white'}`}></div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <MobileNavLink href="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</MobileNavLink>
            <MobileNavLink href="#trading" onClick={() => setIsMenuOpen(false)}>Trading</MobileNavLink>
            <MobileNavLink href="#global" onClick={() => setIsMenuOpen(false)}>Global Network</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Empowering Global Trade Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Your trusted partner in international trade and commerce. We connect businesses worldwide through innovative trading solutions and comprehensive global network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
                Explore Solutions
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/trading-dashboard.jpg"
                alt="Trading Dashboard"
                width={600}
                height={400}
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Trading Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer end-to-end solutions for businesses looking to expand their global reach
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
            <BarChart2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
            <p className="text-gray-600">Comprehensive market insights and trend analysis for informed decision-making</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
            <Globe2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Global Trade Network</h3>
            <p className="text-gray-600">Access to worldwide markets and trusted trading partners</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
            <Database className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Supply Chain Management</h3>
            <p className="text-gray-600">Efficient logistics and supply chain optimization solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Trading Experience?
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Connect with our team to discover how Equip Noc can help your business thrive in the global market
          </p>
          <p className="text-lg text-blue-400 mb-8">
            Email us at: <a href="mailto:info@equip-noc.com" className="hover:text-blue-300">info@equip-noc.com</a>
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400">Market Analysis</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Global Trade</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Supply Chain</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-400">Compliance</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Equip Noc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Main = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Solutions />
      <Contact />
      <Footer />
    </main>
  );
};

export { Main };