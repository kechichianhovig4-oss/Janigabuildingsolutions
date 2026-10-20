import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const openEstimateModal = () => {
    setIsEstimateModalOpen(true);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const closeEstimateModal = () => {
    setIsEstimateModalOpen(false);
  };

  // Set current path to '/services' for active highlighting
  const currentPath = '/services';

  // Brand Colors
  const brandNavy = "#0B1F3A";
  const brandOrange = "#F26B21";

  return (
    <div className="bg-[#f8f9fa] font-sans text-slate-800 min-h-screen flex flex-col">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
            <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 lg:px-20 py-4">
              
              {/* Logo */}
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-3">
                  <img 
                    src="https://imgur.com/8cwFUd2.png" 
                    alt="Janiga Building Solutions" 
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-xl font-black tracking-wider" style={{ color: brandNavy, display: 'none' }}>
                    JANIGA<span style={{ color: brandOrange }}>.</span>
                  </div>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
                <div className="flex items-center gap-8 text-sm font-bold tracking-wide" style={{ color: brandNavy }}>
                  <Link 
                    to="/" 
                    className="transition-colors uppercase hover:opacity-70"
                  >
                    Home
                  </Link>
                  
                  {/* Services Dropdown */}
                  <div className="relative flex items-center gap-1.5">
                    <Link 
                      to="/services" 
                      onClick={() => handleNavClick('/services')}
                      className="transition-colors uppercase hover:opacity-70"
                      style={{ color: currentPath === '/services' ? brandOrange : brandNavy }}
                    >
                      Services
                    </Link>
                    <button 
                      onClick={toggleServicesDropdown}
                      className="flex items-center justify-center transition-colors hover:opacity-70"
                      style={{ color: currentPath === '/services' ? brandOrange : brandNavy }}
                      aria-label="Toggle Services Dropdown"
                    >
                      <span className="material-symbols-outlined text-base">
                        {isServicesDropdownOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>

                    {/* Dropdown Menu (Removed Electrical) */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-4 w-56 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50">
                        <Link to="/services/air-conditioning" onClick={() => handleNavClick('/services/air-conditioning')} className="block px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium">Air Conditioning</Link>
                        <Link to="/services/heating" onClick={() => handleNavClick('/services/heating')} className="block px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium">Heating</Link>
                        <Link to="/services/plumbing" onClick={() => handleNavClick('/services/plumbing')} className="block px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium">Plumbing</Link>
                        <Link to="/services/remodeling" onClick={() => handleNavClick('/services/remodeling')} className="block px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium">Remodeling</Link>
                      </div>
                    )}
                  </div>

                  <Link to="/projects" className="transition-colors uppercase hover:opacity-70">Projects</Link>
                  <Link to="/about" className="transition-colors uppercase hover:opacity-70">About</Link>
                  <Link to="/contact" className="transition-colors uppercase hover:opacity-70">Contact</Link>
                </div>
                
                <div className="flex items-center gap-3">
                  <a href="tel:9854018276" className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-sm font-bold transition-colors hover:bg-slate-200" style={{ color: brandNavy }}>
                    <span className="material-symbols-outlined text-base" style={{ color: brandOrange }}>call</span>
                    (985)-401-8276
                  </a>
                  <button onClick={openEstimateModal} className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: brandOrange }}>
                    Book Online
                    <span className="material-symbols-outlined text-base">arrow_outward</span>
                  </button>
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button onClick={toggleMobileMenu} className="p-2" style={{ color: brandNavy }}>
                  <span className="material-symbols-outlined text-3xl">
                    {isMobileMenuOpen ? 'close' : 'menu'}
                  </span>
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl absolute w-full">
                <div className="px-4 py-6 space-y-4">
                  <div className="space-y-3">
                    <Link to="/" onClick={() => handleNavClick('/')} className="block px-2 py-3 text-sm font-bold hover:opacity-70" style={{ color: brandNavy }}>Home</Link>
                    
                    {/* Mobile Services Accordion (Removed Electrical) */}
                    <div className="border-t border-slate-100">
                      <div className="flex items-center justify-between w-full px-2 py-3">
                        <Link 
                          to="/services" 
                          onClick={() => handleNavClick('/services')}
                          className="text-sm font-bold"
                          style={{ color: brandOrange }}
                        >
                          Services
                        </Link>
                        <button 
                          onClick={toggleServicesDropdown}
                          className="p-1 hover:opacity-70"
                          style={{ color: brandOrange }}
                          aria-label="Toggle Services Dropdown"
                        >
                          <span className="material-symbols-outlined text-base">
                            {isServicesDropdownOpen ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                      </div>
                      
                      {isServicesDropdownOpen && (
                        <div className="pl-4 space-y-2 border-l-2 ml-2" style={{ borderColor: brandOrange }}>
                          <Link to="/services/air-conditioning" onClick={() => handleNavClick('/services/air-conditioning')} className="block px-2 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium">Air Conditioning</Link>
                          <Link to="/services/heating" onClick={() => handleNavClick('/services/heating')} className="block px-2 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium">Heating</Link>
                          <Link to="/services/plumbing" onClick={() => handleNavClick('/services/plumbing')} className="block px-2 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium">Plumbing</Link>
                          <Link to="/services/remodeling" onClick={() => handleNavClick('/services/remodeling')} className="block px-2 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium">Remodeling</Link>
                        </div>
                      )}
                    </div>
                    
                    <Link to="/projects" onClick={() => handleNavClick('/projects')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100 hover:opacity-70" style={{ color: brandNavy }}>Projects</Link>
                    <Link to="/about" onClick={() => handleNavClick('/about')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100 hover:opacity-70" style={{ color: brandNavy }}>About</Link>
                    <Link to="/contact" onClick={() => handleNavClick('/contact')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100 hover:opacity-70" style={{ color: brandNavy }}>Contact</Link>
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-10 lg:px-20 py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: brandNavy }}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #F26B21 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F26B21 0%, transparent 40%)' }}></div>
              
              <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center">
                  <p className="font-bold tracking-widest text-sm mb-6 uppercase" style={{ color: brandOrange }}>Our Full-Service Guarantee</p>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                    Everything Your Home Needs.{' '}
                    <span style={{ color: brandOrange }}>One Trusted Team.</span>
                  </h1>
                  <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                    Reliable HVAC, plumbing, and remodeling solutions for Hoboken and surrounding families. Fast, honest, and built to last.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button 
                      onClick={openEstimateModal}
                      className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90 shadow-lg"
                      style={{ backgroundColor: brandOrange }}
                    >
                      Request Service
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </button>
                    <a 
                      href="tel:9854018276" 
                      className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-base font-bold text-white hover:bg-white/20 transition-all"
                    >
                      (985)-401-8276
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Trust Bar / Stats (Removed 1967 mention) */}
            <section className="bg-slate-100 border-y border-slate-200">
              <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-20 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200">
                      <span className="material-symbols-outlined" style={{ color: brandOrange }}>engineering</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide" style={{ color: brandNavy }}>Multi-Generational Trade</p>
                      <p className="text-xs text-slate-500 mt-0.5">Decades of trusted local expertise.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200">
                      <span className="material-symbols-outlined" style={{ color: brandOrange }}>schedule</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide" style={{ color: brandNavy }}>Same-Day Service</p>
                      <p className="text-xs text-slate-500 mt-0.5">Rapid response when you need it most.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200">
                      <span className="material-symbols-outlined" style={{ color: brandOrange }}>verified</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide" style={{ color: brandNavy }}>100% Satisfaction</p>
                      <p className="text-xs text-slate-500 mt-0.5">Guaranteed workmanship on every job.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-24 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <p className="font-bold tracking-widest text-sm mb-4 uppercase" style={{ color: brandOrange }}>What We Offer</p>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight" style={{ color: brandNavy }}>Home solutions built on trust</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Air Conditioning */}
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                      <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>ac_unit</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Air Conditioning</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      From whisper-quiet installs to same-day repairs, we keep your home comfortable when summer turns punishing. Every system we touch is sized to your space, sealed for efficiency, and tested before we leave.
                    </p>
                    <Link to="/services/air-conditioning" className="font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" style={{ color: brandOrange }}>
                      LEARN MORE <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </Link>
                  </div>

                  {/* Heating */}
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                      <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>local_fire_department</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Heating</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Expert furnace and heat pump repairs, replacements, and tune-ups to keep your home warm all winter, no matter the system.
                    </p>
                    <Link to="/services/heating" className="font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" style={{ color: brandOrange }}>
                      LEARN MORE <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </Link>
                  </div>

                  {/* Plumbing */}
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                      <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>water_drop</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Plumbing</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Water heater repair, leak detection, drain cleaning, and full-service plumbing for residential systems.
                    </p>
                    <Link to="/services/plumbing" className="font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" style={{ color: brandOrange }}>
                      LEARN MORE <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </Link>
                  </div>

                  {/* Remodeling */}
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                      <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>handyman</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Remodel & Construction</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Licensed contractors for kitchen, bath, and whole-home remodels. We handle the build from permits to punch-out.
                    </p>
                    <Link to="/services/remodeling" className="font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" style={{ color: brandOrange }}>
                      LEARN MORE <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 px-4 sm:px-10 lg:px-20 relative overflow-hidden" style={{ backgroundColor: brandOrange }}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #fff 0%, transparent 50%)' }}></div>
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div>
                  <p className="text-white/80 font-bold tracking-widest text-sm mb-2 uppercase">AC down? Call Janiga.</p>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                    Need Help Right Now?
                  </h2>
                  <p className="text-white/90 mt-3 text-lg">Our team is standing by to help.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a 
                    href="tel:9854018276" 
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white hover:opacity-90 transition-all shadow-md"
                    style={{ backgroundColor: brandNavy }}
                  >
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>call</span>
                    (985)-401-8276
                  </a>
                  <button 
                    onClick={openEstimateModal}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-full text-base font-bold hover:bg-slate-50 transition-all shadow-md"
                    style={{ color: brandNavy }}
                  >
                    Book Online
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Service Areas */}
            <section className="px-4 sm:px-10 lg:px-20 py-20 bg-slate-50">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: brandNavy }}>Local to Hoboken & Surrounding Areas</h2>
                    <p className="text-slate-600 text-lg mb-6">From Jersey City to Weehawken, we show up same-day across the region.</p>
                    <div className="flex flex-wrap gap-3">
                      {['Hoboken', 'Jersey City', 'Weehawken', 'Union City', 'West New York', 'North Bergen', 'Guttenberg', 'Secaucus'].map((city, index) => (
                        <span key={index} className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium" style={{ color: brandNavy }}>
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 w-full h-64 lg:h-80 bg-white rounded-2xl border border-slate-200 flex items-center justify-center relative overflow-hidden shadow-sm">
                    <span className="material-symbols-outlined text-6xl text-slate-200">map</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-4 h-4 rounded-full animate-pulse shadow-lg" style={{ backgroundColor: brandOrange, boxShadow: `0 0 20px ${brandOrange}` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </main>

          {/* Footer */}
          <footer className="text-slate-400" style={{ backgroundColor: brandNavy }}>
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Company Info */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-white tracking-wider">JANIGA<span style={{ color: brandOrange }}>.</span></h3>
                    <p className="text-xs font-bold tracking-widest uppercase mt-1" style={{ color: brandOrange }}>Building Solutions</p>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    A New Jersey family fixing New Jersey homes. Licensed, insured, and dedicated to honest workmanship.
                  </p>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm mt-0.5" style={{ color: brandOrange }}>location_on</span>
                      <span>77 PARK AVE, HOBOKEN, NJ 07030</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm" style={{ color: brandOrange }}>call</span>
                      <a href="tel:9854018276" className="hover:text-white transition-colors">(985)-401-8276</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm" style={{ color: brandOrange }}>mail</span>
                      <a href="mailto:info@janigabuildingsolutions.com" className="hover:text-white transition-colors">info@janigabuildingsolutions.com</a>
                    </p>
                  </div>
                </div>

                {/* Services Links (Removed Electrical & Emergency) */}
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Services</h3>
                  <ul className="space-y-3 text-sm font-semibold">
                    <li><Link to="/services/air-conditioning" className="hover:text-white transition-colors">Air Conditioning</Link></li>
                    <li><Link to="/services/heating" className="hover:text-white transition-colors">Heating</Link></li>
                    <li><Link to="/services/plumbing" className="hover:text-white transition-colors">Plumbing</Link></li>
                    <li><Link to="/services/remodeling" className="hover:text-white transition-colors">Remodel & Construction</Link></li>
                  </ul>
                </div>

                {/* Company Links (Removed Careers) */}
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Company</h3>
                  <ul className="space-y-3 text-sm font-semibold">
                    <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>

                {/* Legal Links (Removed Accessibility) */}
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Legal</h3>
                  <ul className="space-y-3 text-sm font-semibold">
                    <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
                  </ul>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                <p>© {new Date().getFullYear()} Janiga Building Solutions. All rights reserved.</p>
                <p className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  Licensed & Insured in NJ
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Free Estimate Modal (Removed Electrical & Emergency Service options) */}
      {isEstimateModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative border border-slate-200">
            <button 
              onClick={closeEstimateModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="text-2xl font-bold mb-2" style={{ color: brandNavy }}>Request Service</h2>
            <p className="text-slate-500 text-sm mb-6">Fill out the form and we'll get back to you promptly.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all" placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all" placeholder="(985)-401-8276" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 outline-none transition-all appearance-none">
                  <option>Air Conditioning</option>
                  <option>Heating</option>
                  <option>Plumbing</option>
                  <option>Remodeling</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows="3" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all resize-none" placeholder="Tell us about the issue..."></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 text-white font-bold rounded-lg transition-colors mt-2 hover:opacity-90" style={{ backgroundColor: brandOrange }}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}

export default Services;