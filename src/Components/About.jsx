import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function About() {
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

  const currentPath = '/about';

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
                      <Link to="/services/plumbing" onClick={() => handleNavClick('/services/plumbing')} className="block px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium">Plumbing</Link>
                      <Link to="/services/remodeling" onClick={() => handleNavClick('/services/remodeling')} className="block px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium">Remodeling</Link>
                    </div>
                  )}
                </div>

                <Link to="/projects" className="transition-colors uppercase hover:opacity-70">Projects</Link>
                <Link to="/about" className="transition-colors uppercase" style={{ color: brandOrange }}>About</Link>
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
                  
                  <Link to="/projects" onClick={() => handleNavClick('/projects')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100 hover:opacity-70" style={{ color: brandNavy }}>Projects</Link>
                  <Link to="/about" onClick={() => handleNavClick('/about')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100" style={{ color: brandOrange }}>About</Link>
                  <Link to="/contact" onClick={() => handleNavClick('/contact')} className="block px-2 py-3 text-sm font-bold border-t border-slate-100 hover:opacity-70" style={{ color: brandNavy }}>Contact</Link>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          {/* About Hero Section */}
          <section className="relative px-4 sm:px-10 lg:px-20 py-24 lg:py-32 overflow-hidden text-center" style={{ backgroundColor: brandNavy }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <p className="text-white font-bold tracking-widest text-sm mb-6 uppercase">ABOUT JANIGA</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Modern Solutions.<br />
                <span style={{ color: brandOrange }}>Hometown Trust.</span>
              </h1>
              <p className="mt-6 text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                We are a tight-knit team of 25 dedicated professionals bringing honest, high-quality home services to our neighbors.
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
              <p className="font-bold tracking-widest text-sm mb-4 uppercase" style={{ color: brandOrange }}>OUR DNA</p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4" style={{ color: brandNavy }}>
                Honest service is in our family name
              </h2>
              <p className="text-slate-500 text-lg mb-16 max-w-2xl mx-auto">
                We aren't a massive corporation or a faceless franchise. We are your neighbors, and we treat your home exactly how we'd treat our own.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>groups</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>A Team of 15 Experts</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We are large enough to handle any job, but small enough to care about every detail. Our dedicated crew handles every project directly.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>handshake</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>In-House Contractors</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    When you call, we come. We don't sub out your emergency to a random third party. Our own trained contractors show up to do the work right.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-2xl" style={{ color: brandOrange }}>verified</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Customers Come First</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Up-front pricing, clear communication, and workmanship that lasts. We fix it right the first time so you don't have to call us back.
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

          {/* Pay After Service Section (Replaces the old "Three Generations" section) */}
          <section className="px-4 sm:px-10 lg:px-20 py-24" style={{ backgroundColor: brandNavy }}>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                  You don't pay<br />
                  <span style={{ color: brandOrange }}>until the job is done.</span>
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  We believe in earning your trust, not just taking your deposit. When you hire Janiga, our contractors come out, assess the situation, and complete the service. Once you are 100% satisfied with the work, that's when payment happens. 
                </p>
                
                {/* Payment Methods highlight */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                  <p className="text-white font-bold mb-4">We make paying easy after the job is complete:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-300">
                      <span className="material-symbols-outlined text-lg" style={{ color: brandOrange }}>credit_card</span>
                      Credit / Debit Card
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <span className="material-symbols-outlined text-lg" style={{ color: brandOrange }}>payments</span>
                      Personal or Business Check
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <span className="material-symbols-outlined text-lg" style={{ color: brandOrange }}>account_balance</span>
                      Direct Bank Transfer
                    </li>
                  </ul>
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
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
                   {/* Modern image of a worker/contractor */}
                   <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop" alt="Janiga Contractor at Work" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 right-6">
                     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
                       <span className="material-symbols-outlined text-3xl" style={{ color: brandOrange }}>shield_person</span>
                       <div>
                         <p className="text-white font-bold">100% Satisfaction Guarantee</p>
                         <p className="text-slate-300 text-sm">No payment until the work is done right.</p>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story / Modern Approach Section */}
          <section className="py-24 px-4 sm:px-10 lg:px-20 bg-slate-50">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-bold tracking-widest text-sm mb-4 uppercase" style={{ color: brandOrange }}>OUR APPROACH</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-6" style={{ color: brandNavy }}>
                Modern expertise.<br />Small-town values.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                The home service industry has changed a lot. We've seen massive corporations buy up local companies, cut corners, and outsource labor. We intentionally chose a different path. By keeping our team lean (just 25 of us) and handling every job with our own in-house contractors, we maintain total control over the quality of our work. 
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-100">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: brandOrange }}></span>
                  <span className="text-sm font-bold" style={{ color: brandNavy }}>Boutique Team of 25</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-100">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: brandOrange }}></span>
                  <span className="text-sm font-bold" style={{ color: brandNavy }}>Licensed & Insured in New Jersey</span>
                </div>
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-100">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: brandOrange }}></span>
                  <span className="text-sm font-bold" style={{ color: brandNavy }}>Pay-After-Service Available</span>
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

          {/* Comfort Guaranteed Section */}
          <section className="py-24 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto text-center">
              <p className="font-bold tracking-widest text-sm mb-4 uppercase" style={{ color: brandOrange }}>OUR PROMISE TO YOU</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4" style={{ color: brandNavy }}>
                Comfort you can count on – guaranteed
              </h2>
              <p className="text-slate-500 text-lg mb-16 max-w-2xl mx-auto">
                We back our work with promises that a modern, local business can actually stand behind.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16">
                <div>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: `${brandOrange}15` }}>
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>cleaning_services</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Home Protection</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">We protect your home like it's our own – clean work areas, shoe covers, and total respect for your space.</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: `${brandOrange}15` }}>
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>support_agent</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Direct Communication</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">No call centers or endless hold times. You speak directly with the team handling your job.</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: `${brandOrange}15` }}>
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>price_check</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Price-Quote Honesty</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">The price we quote is the price you pay. No surprise add-ons, no pressure, and no hidden fees.</p>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <button onClick={openEstimateModal} className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 shadow-md" style={{ backgroundColor: brandOrange }}>
                  Request Service <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </button>
                <a href="tel:9854018276" className="flex items-center gap-2 px-8 py-3.5 bg-transparent border border-slate-200 rounded-full text-sm font-bold hover:bg-slate-50 transition-colors" style={{ color: brandNavy }}>
                  (985)-401-8276 <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </a>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-24 px-4 sm:px-10 lg:px-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-6xl mx-auto text-center">
              <p className="font-bold tracking-widest text-sm mb-4 uppercase" style={{ color: brandOrange }}>OUR CORE VALUES</p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-16" style={{ color: brandNavy }}>
                The JANIGA Promise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>done</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Unyielding Integrity</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">We diagnose before we quote. No upsells, no hidden fees, and no guesswork. If we can't fix it, you don't pay.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>done</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Local Quality</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Our techs are certified and live in the communities they serve. We carry common parts so you aren't waiting on a shipment.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined" style={{ color: brandOrange }}>done</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: brandNavy }}>Community First</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Being a local business means we'll run into you at the grocery store. We do the job right because we are your neighbors.</p>
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

              {/* Services Links (Removed Electrical & Emergency) */}
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Services</h3>
                <ul className="space-y-3 text-sm font-semibold">
                  <li><Link to="/services/air-conditioning" className="hover:text-white transition-colors">Air Conditioning</Link></li>
                  <li><Link to="/services/heating" className="hover:text-white transition-colors">Heating</Link></li>
                  <li><Link to="/services/plumbing" className="hover:text-white transition-colors">Plumbing</Link></li>
                  <li><Link to="/services/remodeling" className="hover:text-white transition-colors">Remodel & Construction</Link></li>
                </ul>
              </div>

              {/* Company Links (Removed Careers) */}
              <div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Company</h3>
                <ul className="space-y-3 text-sm font-semibold">
                  <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Legal & Policies (Removed Accessibility) */}
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

      {/* Free Estimate Modal (Removed Electrical & Emergency Service options) */}
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

export default About;