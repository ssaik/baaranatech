import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-md bg-black/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex gap-1"><Image
            src="/logo.png"
            alt="Baarana Tech Logo"
            width={50}
            height={50}
            className="hover:opacity-80 transition"
          />
          <div className="flex flex-col items-center space-y-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-orange-500"> baar</span>
              <span className="text-pink-500">ana </span>
            </h1>
          </div></div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-orange-400 transition">
              Services
            </a>
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block">Transform Your Ideas</span>
            <span className="block mt-4 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Into Digital Reality
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Baarana Tech Private Limited specializes in crafting innovative web
            and mobile applications that empower your business and delight your
            users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
              Get Started
            </button>
            <button className="border border-orange-400/50 hover:border-orange-400 px-8 py-4 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive solutions for your digital needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Web Development Card */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-orange-400/20 rounded-xl p-8 hover:border-orange-400/50 transition group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition">
              <span className="text-xl">🌐</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Web Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Cutting-edge web applications built with modern technologies.
              Responsive, fast, and scalable solutions that grow with your
              business.
            </p>
          </div>

          {/* Mobile Development Card */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-orange-400/20 rounded-xl p-8 hover:border-orange-400/50 transition group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition">
              <span className="text-xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Mobile Apps</h3>
            <p className="text-gray-400 leading-relaxed">
              Native and cross-platform mobile applications that deliver
              exceptional user experiences across iOS and Android platforms.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-400/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">About Baarana Tech</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Baarana Tech Private Limited is dedicated to delivering world-class
            web and mobile applications. With a team of experienced developers
            and designers, we transform your vision into innovative digital
            solutions that drive results.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Start Your{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Project
          </span>
          ?
        </h2>
        <a 
          href="mailto:ssalla@baarana.com"
          className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
          Contact Us Today
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 mt-24 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-gray-400">
          <p className="mb-2">
            &copy; 2025 Baarana Tech Private Limited. All rights reserved.
          </p>
          <p>Crafting digital excellence through innovation and expertise.</p>
        </div>
      </footer>
    </div>
  );
}
