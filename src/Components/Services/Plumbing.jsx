import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Plumbing() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    navigate(path);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);

  // Brand Colors
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
                      <Link to="/services/plumbing" onClick={() => handleNavClick('/services/plumbing')} className="block px-5 py-3 text-sm font-medium" style={{ color: brandOrange }}>Plumbing</Link>
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
                        <Link to="/services/plumbing" onClick={() => handleNavClick('/services/plumbing')} className="block px-2 py-2 text-sm font-medium" style={{ color: brandOrange }}>Plumbing</Link>
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

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative flex items-center justify-center h-[40vh] min-h-[350px] overflow-hidden" style={{ backgroundColor: brandNavy }}>
            {/* Background Image (Plumbing pipes) */}
            <div className="absolute inset-0 opacity-40">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                alt="Plumbing Pipes Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] to-transparent opacity-80"></div>

            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                Plumbing Services
              </h1>
              <div className="flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase text-white/80">
                <span className="material-symbols-outlined text-base" style={{ color: brandOrange }}>location_on</span>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-white/40">/</span>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span className="text-white/40">/</span>
                <span style={{ color: brandOrange }}>Plumbing Services</span>
              </div>
            </div>
          </section>

          {/* Main Content & Form Section */}
          <section className="py-20 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
              
              {/* Left Column: Content */}
              <div className="flex-1 max-w-3xl">
                <h2 className="text-2xl font-bold mb-6" style={{ color: brandNavy }}>
                  Your Partner for Reliable Plumbing Solutions
                </h2>
                
                <div className="space-y-6 text-slate-600 leading-relaxed text-base">
                  <p>
                    At Janiga Building Solutions, we understand that plumbing projects can be complex, requiring seamless integration of various systems within the building. We also recognize the need for rapid response when plumbing issues arise, as well as the importance of efficiency, reliability, safety, and cost containment in every project.
                  </p>
                  <p>
                    As a full-service plumbing company, Janiga specializes in residential and commercial plumbing services, including design and build solutions for projects of all sizes—with expertise in modern piping systems and water heaters.
                  </p>
                  <p>
                    Our experienced team works alongside building engineers, general contractors, and architectural teams to ensure all plumbing needs are expertly met. We don't just fix leaks; we engineer lasting solutions for your home or business.
                  </p>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-4" style={{ color: brandNavy }}>
                      Our Plumbing Services Include:
                    </h3>
                    <ul className="space-y-3">
                      {[
                        '24/7 Emergency Plumbing Service',
                        'Plumbing System Maintenance & Repair',
                        'Water Heater Installation & Repair',
                        'Drain Cleaning & Hydro Jetting',
                        'Leak Detection & Identification',
                        'Sewer Line Camera Inspections',
                        'Fixture Installation (Faucets, Toilets, Sinks)',
                        'Repiping & Pipe Replacement'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-lg mt-0.5" style={{ color: brandOrange }}>check_circle</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-4" style={{ color: brandNavy }}>
                      Design & Build Services
                    </h3>
                    <p>
                      Janiga offers design/build plumbing system services for construction projects of all sizes. Our team specializes in complex piping and plumbing systems, combining technical knowledge and hands-on experience to design and install efficient plumbing solutions for even the most complex applications. 
                    </p>
                  </div>
                  
                  <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-xl">
                    <h4 className="font-bold mb-2 flex items-center gap-2" style={{ color: brandNavy }}>
                      <span className="material-symbols-outlined" style={{ color: brandOrange }}>credit_card</span>
                      Pay After Service
                    </h4>
                    <p className="text-sm">
                      We stand behind our work. You don't pay until the job is done and you're 100% satisfied. We accept Credit/Debit Cards, Checks, and Bank Transfers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Contact Form */}
              <div className="lg:w-[400px]">
                <div className="sticky top-28 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: brandNavy }}>
                    Contact Us For More Information!
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all" />
                    </div>
                    <div>
                      <input type="tel" placeholder="Phone" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all" />
                    </div>
                    <div>
                      <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all" />
                    </div>
                    
                    <div>
                      <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-600 outline-none transition-all appearance-none cursor-pointer">
                        <option>Please select a city</option>
                        <option>Hoboken</option>
                        <option>Jersey City</option>
                        <option>Weehawken</option>
                        <option>Union City</option>
                        <option>North Bergen</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-600 outline-none transition-all appearance-none cursor-pointer">
                        <option>What services can we help you with?</option>
                        <option>Emergency Repair</option>
                        <option>Water Heater Issue</option>
                        <option>Drain Cleaning</option>
                        <option>Leak Detection</option>
                        <option>New Installation / Remodel</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <textarea rows="4" placeholder="Questions or comments" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-900 placeholder-slate-400 outline-none transition-all resize-none"></textarea>
                    </div>

                    <button 
                      type="button" 
                      className="w-full py-4 text-white font-bold rounded-lg transition-colors hover:opacity-90 shadow-md uppercase tracking-wide text-sm"
                      style={{ backgroundColor: brandOrange }}
                    >
                      Submit
                    </button>
                  </form>
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
                  <li><Link to="/services/plumbing" className="hover:text-white transition-colors" style={{ color: brandOrange }}>Plumbing</Link></li>
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
      `}</style>
    </div>
  );
}

export default Plumbing;