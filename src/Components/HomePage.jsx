import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  // Set current path to '/' to handle active state
  const currentPath = '/';

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    navigate(path);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);
  
  const openEstimateModal = () => {
    setIsEstimateModalOpen(true);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };
  const closeEstimateModal = () => setIsEstimateModalOpen(false);

  // Brand Colors based on the new logo
  const brandNavy = "#0B1F3A";
  const brandOrange = "#F26B21";

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
                <Link 
                  to="/" 
                  className={`transition-colors uppercase hover:opacity-70`}
                  style={{ color: currentPath === '/' ? brandOrange : brandNavy }}
                >
                  Home
                </Link>
                
                {/* Services Dropdown */}
                <div className="relative flex items-center gap-1">
                  <Link 
                    to="/services" 
                    onClick={() => handleNavClick('/services')}
                    className="transition-colors uppercase hover:opacity-70"
                    style={{ color: currentPath.startsWith('/services') ? brandOrange : brandNavy }}
                  >
                    Services
                  </Link>
                  <button 
                    onClick={toggleServicesDropdown}
                    className="flex items-center justify-center transition-colors hover:opacity-70"
                    style={{ color: currentPath.startsWith('/services') ? brandOrange : brandNavy }}
                    aria-label="Toggle Services Dropdown"
                  >
                    <span className="material-symbols-outlined text-base">
                      {isServicesDropdownOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  {isServicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-4 w-56 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50">
                      {['Air Conditioning', 'Heating', 'Plumbing', 'Remodeling'].map((service) => (
                        <Link 
                          key={service}
                          to={`/services/${service.toLowerCase().replace(' ', '-')}`} 
                          onClick={() => handleNavClick(`/services/${service.toLowerCase().replace(' ', '-')}`)} 
                          className="block px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium"
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/projects" className="transition-colors uppercase hover:opacity-70" style={{ color: currentPath === '/projects' ? brandOrange : brandNavy }}>Projects</Link>
                <Link to="/about" className="transition-colors uppercase hover:opacity-70" style={{ color: currentPath === '/about' ? brandOrange : brandNavy }}>About</Link>
                <Link to="/contact" className="transition-colors uppercase hover:opacity-70" style={{ color: currentPath === '/contact' ? brandOrange : brandNavy }}>Contact</Link>
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
                  <Link to="/" onClick={() => handleNavClick('/')} className="block px-2 py-3 text-sm font-bold" style={{ color: brandOrange }}>Home</Link>
                  
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
                        {['Air Conditioning', 'Heating', 'Plumbing', 'Remodeling'].map((service) => (
                          <Link 
                            key={service}
                            to={`/services/${service.toLowerCase().replace(' ', '-')}`} 
                            onClick={() => handleNavClick(`/services/${service.toLowerCase().replace(' ', '-')}`)} 
                            className="block px-2 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium"
                          >
                            {service}
                          </Link>
                        ))}
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

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative px-4 sm:px-10 lg:px-20 py-24 lg:py-32 overflow-hidden text-center" style={{ backgroundColor: brandNavy }}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <p className="font-bold tracking-widest text-sm mb-6 uppercase" style={{ color: brandOrange }}>YOUR NEIGHBORHOOD EXPERTS</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Building Comfort.<br />
                <span style={{ color: brandOrange }}>Solving Problems.</span>
              </h1>
              <p className="mt-6 text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                From emergency repairs to full-scale home remodels, we bring honest workmanship and modern solutions to every job. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button onClick={openEstimateModal} className="flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-white transition-all hover:opacity-90 shadow-lg" style={{ backgroundColor: brandOrange }}>
                  Request Service <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </button>
                <a href="tel:9854018276" className="flex items-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 rounded-full text-base font-bold text-white hover:bg-white/20 transition-colors">
                  (985)-401-8276 <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </a>
              </div>
            </div>
          </section>

          {/* What We Stand For Section */}
          <section className="px-4 sm:px-10 lg:px-20 py-24 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <p className="font-bold tracking-widest text-sm mb-4 uppercase" style={{ color: brandOrange }}>WHAT WE STAND FOR</p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: brandNavy }}>
                Honest service is in our family<br />name
              </h2>
              <p className="text-slate-500 text-lg mb-16 max-w-2xl mx-auto">
                Three things have never changed – and they're why neighbors keep calling us back.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>home</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Family-Owned Business</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    A local, family-run company – not a faceless chain. The Janiga name is on every truck and every job.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>location_on</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Rooted in the Community</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We live where we work. When you hire us, you're supporting your neighbors, not an out-of-state corporation.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>verified</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Customers Come First</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Up-front pricing, clear communication, and workmanship that lasts. We fix it right the first time.
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button onClick={openEstimateModal} className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: brandOrange }}>
                  Request Service <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </button>
                <a href="tel:9854018276" className="flex items-center gap-2 px-8 py-3.5 bg-slate-100 border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors" style={{ color: brandNavy }}>
                  (985)-401-8276 <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </a>
              </div>
            </div>
          </section>

          {/* Recent Work & Testimonials Section */}
          <section className="px-4 sm:px-10 lg:px-20 py-24" style={{ backgroundColor: brandNavy }}>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                  Craftsmanship that<br />
                  <span style={{ color: brandOrange }}>speaks for itself.</span>
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  We don't just fix units; we build relationships. Our crews are trained to handle complex HVAC, plumbing, and remodeling challenges with precision. We treat every home like it's our mother's house—clean, respectful, and meticulously detailed.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div>
                    <p className="text-5xl md:text-6xl font-black" style={{ color: brandOrange }}>500+</p>
                    <p className="text-xs font-bold text-white uppercase tracking-widest mt-2">HOMES SERVED</p>
                  </div>
                  <div>
                    <p className="text-5xl md:text-6xl font-black" style={{ color: brandOrange }}>4.9</p>
                    <p className="text-xs font-bold text-white uppercase tracking-widest mt-2">AVG RATING</p>
                  </div>
                  <div>
                    <p className="text-5xl md:text-6xl font-black" style={{ color: brandOrange }}>100%</p>
                    <p className="text-xs font-bold text-white uppercase tracking-widest mt-2">LICENSED IN NJ</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button onClick={openEstimateModal} className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: brandOrange }}>
                    Request Service <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </button>
                  <a href="tel:9854018276" className="flex items-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 rounded-full text-sm font-bold text-white hover:bg-white/20 transition-colors">
                    (985)-401-8276 <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </a>
                </div>
              </div>
              
              {/* Testimonial Card Overlay */}
              <div className="flex-1 w-full relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
                   <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" alt="Janiga Technician at Work" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                   
                   {/* Floating Testimonial Card */}
                   <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-2xl">
                      <div className="flex gap-1 text-yellow-400 mb-3">
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      </div>
                      <p className="text-slate-700 font-medium italic mb-4">"Our AC died during that heatwave last week. Janiga had a tech out the next morning. Fast, professional, and didn't try to upsell me on a whole new unit. Highly recommend!"</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold" style={{ color: brandNavy }}>— Sarah M.</p>
                        <p className="text-xs text-slate-400 font-semibold uppercase">September 18, 2026</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* We Fix it Right Section */}
          <section className="py-24 px-4 sm:px-10 lg:px-20 bg-slate-50">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-bold tracking-widest text-sm mb-4 uppercase" style={{ color: brandOrange }}>OUR STORY</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-6" style={{ color: brandNavy }}>
                We fix your home right<br />the first time.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                For decades, JANIGA has served the Hoboken and Jersey City communities with dependable expertise rooted in family values. What started as a small operation has grown into a multi-generational trade – same family, same standards, same handshake.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-100">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: brandOrange }}></span>
                  <span className="text-sm font-bold" style={{ color: brandNavy }}>Multi-generational trade</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-100">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: brandOrange }}></span>
                  <span className="text-sm font-bold" style={{ color: brandNavy }}>Licensed & Insured in New Jersey</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-100">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: brandOrange }}></span>
                  <span className="text-sm font-bold" style={{ color: brandNavy }}>HVAC, Plumbing & Remodeling</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <a href="tel:9854018276" className="flex items-center gap-2 px-8 py-3.5 bg-white border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors" style={{ color: brandNavy }}>
                  (985)-401-8276 <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </a>
                <button onClick={openEstimateModal} className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: brandOrange }}>
                  Book Online <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </button>
              </div>
            </div>
          </section>

          {/* More Testimonials Section */}
          <section className="py-24 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="font-bold tracking-widest text-sm mb-4 uppercase" style={{ color: brandOrange }}>DON'T JUST TAKE OUR WORD FOR IT</p>
                <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: brandNavy }}>
                  What your neighbors are saying
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                  </div>
                  <p className="text-slate-700 font-medium italic mb-6">"The team completely re-piped our older home. They were respectful of our property, cleaned up every day, and the price was exactly what they quoted. A rarity these days."</p>
                  <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                    <p className="text-sm font-bold" style={{ color: brandNavy }}>— David L.</p>
                    <p className="text-xs text-slate-400 font-semibold uppercase">October 2, 2026</p>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                  </div>
                  <p className="text-slate-700 font-medium italic mb-6">"Called them for an emergency plumbing issue that two other companies couldn't figure out. Janiga's tech found the problem in 20 minutes. Extremely knowledgeable and professional."</p>
                  <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                    <p className="text-sm font-bold" style={{ color: brandNavy }}>— Emily R.</p>
                    <p className="text-xs text-slate-400 font-semibold uppercase">September 28, 2026</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                  </div>
                  <p className="text-slate-700 font-medium italic mb-6">"We've used Janiga for years for our HVAC maintenance. They are always on time, always friendly, and never try to sell us things we don't need. True local business."</p>
                  <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                    <p className="text-sm font-bold" style={{ color: brandNavy }}>— Mark T.</p>
                    <p className="text-xs text-slate-400 font-semibold uppercase">September 25, 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-[#050C17] text-slate-400">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>home_repair_service</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-tight">
                    A New Jersey family<br />fixing New Jersey homes.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-slate-400">
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
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
              <p>© {new Date().getFullYear()} Janiga Building Solutions. All rights reserved.</p>
              <p className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Licensed & Insured in New Jersey
              </p>
            </div>
          </div>
        </footer>

      </div>

      {/* Free Estimate Modal */}
      {isEstimateModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative border border-slate-200">
            <button onClick={closeEstimateModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors">
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

export default HomePage;