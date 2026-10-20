import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

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

  const currentPath = '/projects';

  // Brand Colors
  const brandNavy = "#0B1F3A";
  const brandOrange = "#F26B21";

  // Project Gallery Data (Removed Fountains)
  const galleryItems = [
    { title: 'Arts & Entertainment', img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800&auto=format&fit=crop' },
    { title: 'Commercial', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
    { title: 'Education', img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop' },
    { title: 'Healthcare', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' },
    { title: 'Industrial', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
    { title: 'Sports & Recreation', img: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=800&auto=format&fit=crop' },
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

                <Link to="/projects" className="transition-colors uppercase" style={{ color: brandOrange }}>Projects</Link>
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
                  
                  <Link to="/projects" onClick={() => handleNavClick('/projects')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100" style={{ color: brandOrange }}>Projects</Link>
                  <Link to="/about" onClick={() => handleNavClick('/about')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100 hover:opacity-70" style={{ color: brandNavy }}>About</Link>
                  <Link to="/contact" onClick={() => handleNavClick('/contact')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100 hover:opacity-70" style={{ color: brandNavy }}>Contact</Link>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          {/* Project Gallery Section (Light Theme) */}
          <section className="py-24 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="font-bold tracking-widest text-sm mb-4 uppercase" style={{ color: brandOrange }}>OUR WORK</p>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6" style={{ color: brandNavy }}>
                  Project Gallery
                </h1>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                  Explore some of our recent builds and installations across New Jersey.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 flex flex-col cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="py-5 px-6 text-center mt-auto border-t border-slate-100 bg-white">
                      <h3 className="font-bold text-lg tracking-wide" style={{ color: brandNavy }}>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects & CTA Section (Light Theme) */}
          <section className="py-24 px-4 sm:px-10 lg:px-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-5xl mx-auto">
              
              {/* Featured Projects Text */}
              <div className="mb-24 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight flex flex-wrap justify-center lg:justify-start gap-x-4" style={{ color: brandNavy }}>
                  FEATURED <span style={{ color: brandOrange }}>PROJECTS</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mx-auto lg:mx-0">
                  At Janiga Building Solutions, our work speaks for itself throughout New Jersey and beyond. From modern residential remodels and advanced commercial facilities to high-performance HVAC systems and custom plumbing setups, we deliver reliable solutions tailored to each project's needs. Explore our portfolio to see our craftsmanship, attention to detail, and commitment to excellence in every environment we serve.
                </p>
              </div>

              {/* Partner With Us CTA */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight" style={{ color: brandNavy }}>
                  Partner With Janiga
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mb-10 mx-auto lg:mx-0">
                  Ready to discuss your project? Our team is here to provide expert guidance and customized solutions for your building's needs. Contact us today to request an estimate, and let us help bring your vision to life with dependable service and industry-leading expertise.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-white font-bold text-lg rounded-full transition-colors hover:opacity-90 shadow-md"
                  style={{ backgroundColor: brandOrange }}
                >
                  CONTACT US
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

export default Projects;