"use client";

import { ArrowRight, Code, Lightbulb, Zap, Users, CheckCircle, Mail, Phone, MapPin, Menu, X, Star, Play, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ModernTechCraftHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Code className="h-10 w-10 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                <div className="absolute inset-0 h-10 w-10 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-purple-400/20 transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">TechCraft</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Solutions', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="relative text-white/80 hover:text-white transition-colors duration-300 group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            
            <button 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {['Home', 'Solutions', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-white/80 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Trusted by 500+ companies worldwide</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white">Crafting</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Digital Excellence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We transform ambitious ideas into powerful digital solutions. From cutting-edge web applications to enterprise systems, 
              we craft technology that propels your business into the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors duration-300">
                <div className="relative">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                  <div className="absolute inset-0 w-14 h-14 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-cyan-400/40 transition-all"></div>
                </div>
                <span className="font-semibold">Watch Our Story</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '10+', label: 'Years Experience' },
                { number: '50+', label: 'Team Members' },
                { number: '99%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Our Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-16 h-16 text-cyan-400" />,
                title: "Web Development",
                description: "Custom web applications built with React, Next.js, and modern frameworks. Responsive, fast, and scalable solutions.",
                features: ["React & Next.js", "Mobile-First Design", "Performance Optimized"],
                color: "cyan"
              },
              {
                icon: <Lightbulb className="w-16 h-16 text-purple-400" />,
                title: "Digital Strategy",
                description: "Strategic consulting and digital transformation planning to align technology with your business objectives.",
                features: ["Digital Transformation", "Technology Consulting", "ROI Analysis"],
                color: "purple"
              },
              {
                icon: <Zap className="w-16 h-16 text-pink-400" />,
                title: "System Integration",
                description: "Seamless integration of enterprise systems, APIs, and third-party services for optimal workflow automation.",
                features: ["API Integration", "Cloud Solutions", "Workflow Automation"],
                color: "pink"
              }
            ].map((solution, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 relative">
                      {solution.icon}
                      <div className={`absolute inset-0 w-16 h-16 bg-${solution.color}-400/20 rounded-full blur-xl group-hover:bg-${solution.color}-400/40 transition-all duration-500`}></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors duration-300 group/btn">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-r from-black/20 to-black/40 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-8">Why Choose TechCraft?</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                We combine technical expertise with creative innovation to deliver solutions that do not just meet requirements—they exceed expectations.
              </p>
              
              <div className="space-y-6">
                {[
                  { text: "Expert team with 10+ years experience", icon: <Users className="w-6 h-6 text-cyan-400" /> },
                  { text: "Cutting-edge technology stack", icon: <Code className="w-6 h-6 text-purple-400" /> },
                  { text: "24/7 support and maintenance", icon: <Zap className="w-6 h-6 text-pink-400" /> },
                  { text: "Scalable and secure solutions", icon: <CheckCircle className="w-6 h-6 text-green-400" /> },
                  { text: "Agile development process", icon: <Lightbulb className="w-6 h-6 text-yellow-400" /> }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="relative">
                      {feature.icon}
                      <div className="absolute inset-0 w-6 h-6 bg-current/20 rounded-full blur-lg group-hover:bg-current/40 transition-all"></div>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="mb-8 relative">
                    <Users className="w-20 h-20 text-cyan-400" />
                    <div className="absolute inset-0 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Trusted by Industry Leaders</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    From innovative startups to Fortune 500 companies, we have delivered transformative solutions that drive measurable business growth and competitive advantage.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 border-white/20"></div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-400">+500 companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your vision into reality? Get in touch and let's discuss how we can elevate your business.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6 text-cyan-400" />, text: "hello@techcraft.com", label: "Email" },
                  { icon: <Phone className="w-6 h-6 text-purple-400" />, text: "+1 (555) 123-4567", label: "Phone" },
                  { icon: <MapPin className="w-6 h-6 text-pink-400" />, text: "San Francisco, CA", label: "Location" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="relative">
                      {contact.icon}
                      <div className="absolute inset-0 w-6 h-6 bg-current/20 rounded-full blur-lg group-hover:bg-current/40 transition-all"></div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="text-white group-hover:text-cyan-400 transition-colors duration-300">{contact.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response Promise</h3>
                <p className="text-gray-300">
                  We respond to all inquiries within 24 hours. For urgent projects, we are available for same-day consultations.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-semibold">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-semibold">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all" 
                      placeholder="your@email.com" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-semibold">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all">
                    <option value="">Select project type</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="enterprise">Enterprise Solution</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-semibold">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all resize-none" 
                    placeholder="Tell us about your project vision..."
                  ></textarea>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Code className="h-10 w-10 text-cyan-400" />
                  <div className="absolute inset-0 h-10 w-10 bg-cyan-400/20 rounded-full blur-lg"></div>
                </div>
                <span className="text-2xl font-bold text-white">TechCraft</span>
              </div>
              <p className="text-gray-400">
                Crafting digital excellence through innovative technology solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Web Development', 'Mobile Apps', 'Digital Strategy', 'System Integration'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{service}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Our Team', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Blog', 'Case Studies', 'Documentation', 'Support'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 TechCraft. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}