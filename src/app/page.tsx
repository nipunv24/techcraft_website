import { ArrowRight, Code, Lightbulb, Zap, Users, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function TechCraftHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">TechCraft</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
              <a href="#solutions" className="text-white hover:text-purple-400 transition-colors">Solutions</a>
              <a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
            </nav>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Crafting Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We transform complex problems into elegant solutions. From web development to system integration, 
            we deliver cutting-edge technology that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-12 h-12 text-purple-400" />,
                title: "Web Development",
                description: "Custom websites and web applications built with modern frameworks and responsive design."
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-purple-400" />,
                title: "Digital Strategy",
                description: "Strategic planning and consultation to transform your business with technology solutions."
              },
              {
                icon: <Zap className="w-12 h-12 text-purple-400" />,
                title: "System Integration",
                description: "Seamless integration of different systems and platforms for optimal business workflow."
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
                <div className="mb-6">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose TechCraft?</h2>
              <div className="space-y-4">
                {[
                  "Expert team with 10+ years experience",
                  "Cutting-edge technology stack",
                  "24/7 support and maintenance",
                  "Scalable and secure solutions",
                  "Agile development process"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10">
                <Users className="w-16 h-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Trusted by 500+ Companies</h3>
                <p className="text-gray-300">
                  From startups to enterprise, we've delivered solutions that drive growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Build Something Amazing</h3>
              <p className="text-gray-300 mb-8">
                Ready to transform your ideas into reality? Contact us today and let's discuss how we can help your business thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">hello@techcraft.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">TechCraft</span>
            </div>
            <div className="text-gray-400">
              © 2025 TechCraft. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}