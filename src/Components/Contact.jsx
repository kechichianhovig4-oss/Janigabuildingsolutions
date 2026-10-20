import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    navigate(path);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);

  // Form Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call / form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const currentPath = '/contact';

  // Brand Colors
  const brandNavy = "#0B1F3A";
  const brandOrange = "#F26B21";

  // Updated Service areas to match NJ region
  const serviceAreas = [
    'Hoboken', 'Jersey City', 'Weehawken', 'Union City', 
    'West New York', 'North Bergen', 'Guttenberg', 'Secaucus',
    'Bayonne', 'Kearny', 'Harrison', 'East Newark'
  ];

  return (
    <div className="bg-[#f8f9fa] font-sans text-slate-800 min-h-screen flex flex-col">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      
      <div className="relative w-full overflow-x-hidden flex-1 flex flex-col">
        
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
                <Link to="/" className="transition-colors uppercase hover:opacity-70">Home</Link>
                
                {/* Services Dropdown */}
                <div className="relative flex items-center gap-1.5">
                  <Link 
                    to="/services" 
                    onClick={() => handleNavClick('/services')}
                    className="transition-colors uppercase hover:opacity-70"
                  >
                    Services
                  </Link>
                  <button 
                    onClick={toggleServicesDropdown}
                    className="flex items-center justify-center transition-colors hover:opacity-70"
                    aria-label="Toggle Services Dropdown"
                  >
                    <span className="material-symbols-outlined text-base">
                      {isServicesDropdownOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>

                  {/* Dropdown Menu */}
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
                <Link to="/contact" className="transition-colors uppercase" style={{ color: brandOrange }}>Contact</Link>
              </div>
              
              <div className="flex items-center gap-3">
                <a href="tel:9854018276" className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-sm font-bold transition-colors hover:bg-slate-200" style={{ color: brandNavy }}>
                  <span className="material-symbols-outlined text-base" style={{ color: brandOrange }}>call</span>
                  (985)-401-8276
                </a>
                <Link to="/contact" className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: brandOrange }}>
                  Book Online
                  <span className="material-symbols-outlined text-base">arrow_outward</span>
                </Link>
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
                  
                  {/* Mobile Services Accordion */}
                  <div className="border-t border-slate-100">
                    <div className="flex items-center justify-between w-full px-2 py-3">
                      <Link 
                        to="/services" 
                        onClick={() => handleNavClick('/services')}
                        className="text-sm font-bold hover:opacity-70"
                        style={{ color: brandNavy }}
                      >
                        Services
                      </Link>
                      <button 
                        onClick={toggleServicesDropdown}
                        className="p-1 hover:opacity-70"
                        style={{ color: brandNavy }}
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
                  <Link to="/contact" onClick={() => handleNavClick('/contact')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100" style={{ color: brandOrange }}>Contact</Link>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative px-4 sm:px-10 lg:px-20 py-20 lg:py-28 text-center border-b border-white/10" style={{ backgroundColor: brandNavy }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <p className="font-bold tracking-widest text-sm mb-6 uppercase" style={{ color: brandOrange }}>SCHEDULE YOUR SERVICE</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Get Your Home Comfort<br />
                <span style={{ color: brandOrange }}>Back on Track</span>
              </h1>
              <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                Whether it's a routine tune-up or an urgent repair, the Janiga team is ready to help. Real people, honest pricing, and professional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#contact-form" className="flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-white transition-all hover:opacity-90 shadow-lg" style={{ backgroundColor: brandOrange }}>
                  Request Service <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </a>
                <a href="tel:9854018276" className="flex items-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 rounded-full text-base font-bold text-white hover:bg-white/20 transition-colors">
                  (985)-401-8276 <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </a>
              </div>
            </div>
          </section>

          {/* Quick Contact Bar */}
          <section className="bg-slate-50 py-10 px-4 sm:px-10 lg:px-20 border-b border-slate-200">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${brandOrange}15` }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>call</span>
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest uppercase mb-1" style={{ color: brandOrange }}>Phone</p>
                  <p className="font-bold text-lg" style={{ color: brandNavy }}>(985) 401-8276</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${brandOrange}15` }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>mail</span>
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest uppercase mb-1" style={{ color: brandOrange }}>Email</p>
                  <p className="font-bold text-lg" style={{ color: brandNavy }}>info@janigabuildingsolutions.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${brandOrange}15` }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>location_on</span>
                </div>
                <div>
                  <p className="font-bold text-xs tracking-widest uppercase mb-1" style={{ color: brandOrange }}>Office</p>
                  <p className="font-bold text-base" style={{ color: brandNavy }}>77 PARK AVE, HOBOKEN, NJ 07030</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact-form" className="px-4 sm:px-10 lg:px-20 py-24 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
              
              {/* Form Area */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: brandNavy }}>Request a Visit</h2>
                <p className="text-slate-500 text-lg mb-10">
                  Fill out the form below and one of our experts will contact you within the hour during business hours to confirm your appointment.
                </p>
                
                <h3 className="text-2xl font-bold mb-6" style={{ color: brandNavy }}>Contact Form</h3>
                
                {/* Success Message */}
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800">
                    <span className="material-symbols-outlined">check_circle</span>
                    <p className="font-medium">Thank you! Your request has been submitted successfully. We'll be in touch shortly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: brandNavy }}>Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all" 
                        placeholder="Enter your name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: brandNavy }}>Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all" 
                        placeholder="you@example.com" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: brandNavy }}>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all" 
                        placeholder="(000) 000-0000" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2" style={{ color: brandNavy }}>Service Type *</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 outline-none transition-all appearance-none"
                      >
                        <option value="" disabled>Select Service</option>
                        <option value="Air Conditioning">Air Conditioning</option>
                        <option value="Heating">Heating</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Remodeling">Remodeling</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: brandNavy }}>Preferred Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-500 outline-none transition-all" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: brandNavy }}>Tell us about the issue</label>
                    <textarea 
                      rows="5" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all resize-none" 
                      placeholder="Description of repair or install needed..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 text-white font-bold rounded-lg transition-colors text-lg shadow-md flex items-center justify-center gap-2
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                    style={{ backgroundColor: brandOrange }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">refresh</span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              </div>

              {/* Sidebar Area */}
              <div className="lg:w-[400px] flex flex-col gap-8">
                {/* Hours Card */}
                <div className="rounded-2xl p-8 border border-slate-200 bg-slate-50">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: brandNavy }}>Hours of Operation</h3>
                  <div className="space-y-4 text-slate-600">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                      <span>Monday – Friday</span>
                      <span className="font-bold" style={{ color: brandNavy }}>7:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                      <span>Saturday</span>
                      <span className="font-bold" style={{ color: brandNavy }}>8:00 AM – 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sunday</span>
                      <span className="font-bold" style={{ color: brandOrange }}>Closed</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: brandNavy }}>Our Location</h3>
                  <button className="px-6 py-2.5 text-white text-sm font-bold rounded-lg transition-colors hover:opacity-90" style={{ backgroundColor: brandOrange }}>
                    GET DIRECTIONS
                  </button>
                </div>

                {/* Pay After Service Card */}
                <div className="rounded-2xl p-8 border border-slate-200 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>credit_card</span>
                    <h3 className="text-lg font-bold" style={{ color: brandNavy }}>Pay After Service</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    You don't pay until the job is done and you're 100% satisfied. We accept Credit/Debit Cards, Checks, and Bank Transfers.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Emergency Banner */}
          <section className="py-24 px-4 sm:px-10 lg:px-20 relative overflow-hidden" style={{ backgroundColor: brandNavy }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #fff 0%, transparent 50%)' }}></div>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
              <div className="flex-1">
                <p className="font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2" style={{ color: brandOrange }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brandOrange }}></span> CALLS ANSWERED • 24/7
                </p>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
                  Emergency<br />repairs when<br />
                  <span style={{ color: brandOrange }}>everyone else is<br />asleep.</span>
                </h2>
              </div>
              <div className="lg:w-[450px] bg-white/5 rounded-2xl p-10 border border-white/10 backdrop-blur-sm">
                <p className="text-slate-400 font-bold text-xs tracking-widest uppercase mb-4">URGENT DISPATCH</p>
                <a href="tel:9854018276" className="text-3xl sm:text-4xl font-black text-white hover:opacity-80 transition-colors block mb-6">
                  (985)-401-8276
                </a>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Speak with a local expert now. We dispatch our own contractors directly to your home.
                </p>
                <a href="tel:9854018276" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white transition-all w-full justify-center hover:opacity-90 shadow-md" style={{ backgroundColor: brandOrange }}>
                  <span className="material-symbols-outlined text-lg">call</span> Call Now
                </a>
              </div>
            </div>
          </section>

          {/* Service Areas Section */}
          <section className="py-24 px-4 sm:px-10 lg:px-20 bg-slate-50">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Map Graphic Placeholder */}
              <div className="flex-1 w-full relative flex justify-center py-12">
                {/* Decorative Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 md:w-96 md:h-96 rotate-45 transform rounded-3xl opacity-10" style={{ backgroundColor: brandOrange }}></div>
                </div>
                {/* Map Container */}
                <div className="relative w-full max-w-lg aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden border-4 border-white shadow-2xl z-10">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Service Area Map" className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply" />
                  {/* Map Pins */}
                  <div className="absolute top-1/3 left-1/3 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-lg" style={{ backgroundColor: brandNavy }}><span className="text-[8px]">📍</span></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-lg" style={{ backgroundColor: brandNavy }}><span className="text-[8px]">📍</span></div>
                  <div className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-lg" style={{ backgroundColor: brandNavy }}><span className="text-[8px]">📍</span></div>
                </div>
              </div>

              {/* Text and Tags */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={{ color: brandNavy }}>
                  Local to Hoboken &<br />Surrounding Areas
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  From Jersey City to Weehawken, we show up same-day across the region.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {serviceAreas.map((area, index) => (
                    <span key={index} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-slate-300 transition-colors cursor-default">
                      {area}
                    </span>
                  ))}
                </div>

                <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm" style={{ color: brandNavy }}>
                  View All Services <span className="material-symbols-outlined text-base" style={{ color: brandOrange }}>arrow_outward</span>
                </Link>
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>home_repair_service</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-tight">
                    A New Jersey family<br />fixing New Jersey homes.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-slate-300">
                  <p className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm" style={{ color: brandOrange }}>call</span>
                    (985)-401-8276
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm" style={{ color: brandOrange }}>mail</span>
                    info@janigabuildingsolutions.com
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-sm mt-0.5" style={{ color: brandOrange }}>location_on</span>
                    77 PARK AVE, HOBOKEN, NJ 07030
                  </p>
                </div>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Services</h3>
                <ul className="space-y-3 text-sm font-semibold">
                  <li><Link to="/services/air-conditioning" className="hover:text-white transition-colors">Air Conditioning</Link></li>
                  <li><Link to="/services/heating" className="hover:text-white transition-colors">Heating</Link></li>
                  <li><Link to="/services/plumbing" className="hover:text-white transition-colors">Plumbing</Link></li>
                  <li><Link to="/services/remodeling" className="hover:text-white transition-colors">Remodel & Construction</Link></li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Company</h3>
                <ul className="space-y-3 text-sm font-semibold">
                  <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Legal & Policies */}
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Legal & Policies</h3>
                <ul className="space-y-3 text-sm font-semibold">
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Statement</Link></li>
                  <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
              <p>© {new Date().getFullYear()} Janiga Building Solutions. All rights reserved.</p>
              <p className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Licensed & Insured in New Jersey
              </p>
            </div>
          </div>
        </footer>

      </div>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default Contact;