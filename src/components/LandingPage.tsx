import React from "react";
import { motion } from "motion/react";
import {
  Car,
  Shield,
  Heart,
  DollarSign,
  Users,
  Leaf,
  ArrowRight,
  MapPin,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare
} from "lucide-react";

interface LandingPageProps {
  setRoute: (route: "landing" | "login" | "registro-pasajero" | "registro-conductor" | "dashboard") => void;
}

export default function LandingPage({ setRoute }: LandingPageProps) {
  // Smooth scroll helper
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans overflow-x-hidden">
      {/* 1. NAVBAR */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            id="navbar-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B8F63] flex items-center justify-center shadow-md shadow-[#0B8F63]/10 transition-transform group-hover:scale-105">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.64-.73-8.031-2.018" />
              </svg>
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-gray-900">
              Conecta <span className="text-[#0B8F63]">X</span>
            </span>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-900 hover:text-[#0B8F63] transition-colors cursor-pointer"
              id="nav-link-inicio"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToId("como-funciona")}
              className="text-gray-500 hover:text-[#0B8F63] transition-colors cursor-pointer"
              id="nav-link-como"
            >
              Cómo funciona
            </button>
            <button 
              onClick={() => scrollToId("beneficios")}
              className="text-gray-500 hover:text-[#0B8F63] transition-colors cursor-pointer"
              id="nav-link-beneficios"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToId("footer")}
              className="text-gray-500 hover:text-[#0B8F63] transition-colors cursor-pointer"
              id="nav-link-contacto"
            >
              Contacto
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setRoute("login")}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 cursor-pointer focus:outline-none"
              id="btn-nav-login"
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setRoute("registro-pasajero")}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#0B8F63] text-white hover:bg-[#097551] transition-all shadow-md shadow-[#0B8F63]/10 hover:shadow-lg hover:shadow-[#0B8F63]/20 active:scale-95 cursor-pointer focus:outline-none"
              id="btn-nav-register"
            >
              Regístrate
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-24 md:py-36 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 max-w-xl"
              id="hero-content-col"
            >
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFF7EC] border border-[#d2f3e3] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B8F63] animate-pulse"></span>
                <span className="text-xs font-bold tracking-wider text-[#0B8F63] uppercase">
                  Exclusivo para la comunidad UAM-X
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 font-display leading-[1.1]">
                Tu ruta,<br />
                <span className="text-[#0B8F63]">nuestra comunidad.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Conecta X es una iniciativa social sin fines de lucro que une a estudiantes, profesores y administrativos para compartir viajes hacia y desde la UAM Xochimilco. Juntos reducimos tiempos de traslado, ahorramos costos y cuidamos el planeta en cada viaje.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setRoute("registro-pasajero")}
                  className="px-8 py-4 rounded-2xl text-sm font-bold bg-[#0B8F63] text-white hover:bg-[#097551] transition-all shadow-lg shadow-[#0B8F63]/15 hover:shadow-xl hover:shadow-[#0B8F63]/30 active:scale-95 text-center cursor-pointer focus:outline-none"
                  id="btn-hero-cta"
                >
                  Regístrate con tu correo UAM
                </button>
                <button
                  onClick={() => scrollToId("como-funciona")}
                  className="px-8 py-4 rounded-2xl text-sm font-bold bg-[#DFF7EC] text-[#0B8F63] hover:bg-[#cbf1df] transition-all text-center cursor-pointer focus:outline-none"
                  id="btn-hero-secondary"
                >
                  Descubre cómo funciona
                </button>
              </div>
            </motion.div>

            {/* Right Column: Interactive Styled Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] lg:aspect-square max-w-lg mx-auto bg-gray-50 rounded-[3rem] border border-gray-100 p-8 flex items-center justify-center shadow-inner"
              id="hero-illustration-col"
            >
              {/* Map Illustration Grid */}
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
              </div>

              {/* Styled SVG Route */}
              <div className="relative w-full h-full flex flex-col justify-between p-6">
                <svg className="absolute inset-0 w-full h-full p-6" viewBox="0 0 400 400" fill="none">
                  {/* Styled connection lines */}
                  <path d="M 80 320 C 120 200, 280 200, 320 80" stroke="#0B8F63" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" className="animate-[dash_30s_linear_infinite]" />
                  <path d="M 80 320 C 120 200, 280 200, 320 80" stroke="#0B8F63" strokeWidth="4" strokeLinecap="round" opacity="0.15" />
                  
                  {/* Origin Ring */}
                  <circle cx="80" cy="320" r="14" fill="#0B8F63" fillOpacity="0.1" />
                  <circle cx="80" cy="320" r="6" fill="#0B8F63" />

                  {/* Destination Ring */}
                  <circle cx="320" cy="80" r="18" fill="#EF4444" fillOpacity="0.1" />
                  <circle cx="320" cy="80" r="8" fill="#EF4444" />
                </svg>

                {/* Floating Cards (Superimposed) */}
                
                {/* Top Left Floating Card: Driver details */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 left-6 bg-white border border-gray-100/80 rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.06)] flex items-center gap-3.5 z-10 w-64"
                  id="hero-floating-card-1"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0B8F63]/10 flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 text-[#0B8F63]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-[#0B8F63] uppercase tracking-wider">Conductor Verificado</p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">Miguel te lleva</p>
                    <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Ruta: Metro Tasqueña
                    </p>
                  </div>
                </motion.div>

                {/* Bottom Right Floating Card: Price details */}
                <motion.div 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 right-6 bg-white border border-gray-100/80 rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.06)] flex items-center gap-3.5 z-10 w-64"
                  id="hero-floating-card-2"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Ahorro Solidario</p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">Tarifa justa</p>
                    <p className="text-xs text-gray-500 mt-0.5">Recuperación de gastos</p>
                  </div>
                </motion.div>

                {/* Destination Badge Pin */}
                <div className="absolute top-[50px] right-[40px] bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  UAM Xochimilco
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN "POR QUÉ VIAJAR EN CONECTA X" */}
      <section id="como-funciona" className="py-24 bg-white border-y border-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 font-display">
              Por qué viajar en Conecta X
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Construido exclusivamente para nuestra comunidad con bases sólidas de confianza, economía cooperativa y responsabilidad ambiental.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="benefits-grid">
            
            {/* Benefit 1 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between"
              id="benefit-card-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF7EC] flex items-center justify-center shadow-2xs">
                  <Shield className="w-6 h-6 text-[#0B8F63]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Seguridad ante todo</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comunidad 100% verificada. Solo permitimos el registro con correos institucionales vigentes y realizamos una rigurosa revisión manual de documentos de todos los conductores.
                </p>
              </div>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between"
              id="benefit-card-2"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF7EC] flex items-center justify-center shadow-2xs">
                  <DollarSign className="w-6 h-6 text-[#0B8F63]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Ahorro inteligente</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  El sistema calcula y propone una tarifa justa diseñada únicamente para recuperar gastos de gasolina y casetas de peaje. Sin comisiones abusivas ni especulación de precios.
                </p>
              </div>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between"
              id="benefit-card-3"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF7EC] flex items-center justify-center shadow-2xs">
                  <Users className="w-6 h-6 text-[#0B8F63]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Comunidad solidaria</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Una plataforma hecha por y para la UAM. Viaja con comodidad mientras conoces e interactúas con compañeros estudiantes, docentes y administrativos de tu propia ruta diaria.
                </p>
              </div>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between"
              id="benefit-card-4"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF7EC] flex items-center justify-center shadow-2xs">
                  <Leaf className="w-6 h-6 text-[#0B8F63]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Sustentabilidad</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Menos autos individuales en las vialidades significan menos tráfico en las inmediaciones de Calzada de las Bombas y una reducción directa en la huella de carbono universitaria.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. SECCIÓN CTA FINAL */}
      <section id="como-funciona-cta" className="py-24 bg-gray-50 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8" id="cta-final-container">
          {/* Badge icon circle */}
          <div className="inline-flex w-16 h-16 rounded-full bg-[#DFF7EC] items-center justify-center text-[#0B8F63] shadow-md shadow-[#0B8F63]/5">
            <Heart className="w-8 h-8 fill-[#0B8F63]/10" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 font-display">
            Únete a la comunidad de movilidad UAM-X
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hagamos que nuestros traslados diarios de ida y vuelta a la universidad sean más seguros, económicos, sostenibles y agradables mientras contribuimos activamente a descongestionar la Ciudad de México.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => setRoute("registro-pasajero")}
              className="px-8 py-4 rounded-2xl text-sm font-bold bg-[#0B8F63] text-white hover:bg-[#097551] transition-all shadow-lg shadow-[#0B8F63]/15 hover:shadow-xl hover:shadow-[#0B8F63]/30 active:scale-95 cursor-pointer focus:outline-none"
              id="btn-cta-pasajero"
            >
              Soy Pasajero
            </button>
            <button
              onClick={() => setRoute("registro-conductor")}
              className="px-8 py-4 rounded-2xl text-sm font-bold bg-[#DFF7EC] text-[#0B8F63] hover:bg-[#cbf1df] transition-all cursor-pointer focus:outline-none"
              id="btn-cta-conductor"
            >
              Quiero ser Conductor
            </button>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer id="footer" className="bg-white border-t border-gray-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-100">
            {/* Column 1 */}
            <div className="lg:col-span-4 space-y-6" id="footer-col-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0B8F63] flex items-center justify-center text-white">
                  <Car className="w-4.5 h-4.5" />
                </div>
                <span className="text-lg font-bold tracking-tight text-gray-900 font-display">
                  Conecta <span className="text-[#0B8F63]">X</span>
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Movilidad colaborativa para la comunidad UAM Xochimilco. Una iniciativa solidaria sin fines de lucro enfocada en la sustentabilidad, seguridad y economía de estudiantes y docentes.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                <a href="#facebook" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#0B8F63] hover:bg-[#DFF7EC] transition-all shadow-2xs">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#twitter" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#0B8F63] hover:bg-[#DFF7EC] transition-all shadow-2xs">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#instagram" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#0B8F63] hover:bg-[#DFF7EC] transition-all shadow-2xs">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#linkedin" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#0B8F63] hover:bg-[#DFF7EC] transition-all shadow-2xs">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Columns Wrapper for Links */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Column 2 */}
              <div className="space-y-4" id="footer-col-2">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Plataforma</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <button onClick={() => scrollToId("como-funciona")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      Cómo funciona
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setRoute("login")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      Buscar un viaje
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setRoute("registro-conductor")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      Ser conductor
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToId("como-funciona")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="space-y-4" id="footer-col-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Comunidad</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="https://www.xoc.uam.mx" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0B8F63] transition-colors">
                      UAM Xochimilco
                    </a>
                  </li>
                  <li>
                    <button onClick={() => scrollToId("como-funciona")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      Acerca del proyecto
                    </button>
                  </li>
                  <li>
                    <button onClick={() => alert("Blog disponible próximamente.")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      Blog
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToId("footer")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      Contacto
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="space-y-4 col-span-2 sm:col-span-1" id="footer-col-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Legal</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <button onClick={() => alert("Aviso de Privacidad: Conecta X protege todos tus datos personales y los limita estrictamente a la validación de la cuenta universitaria.")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      Aviso de privacidad
                    </button>
                  </li>
                  <li>
                    <button onClick={() => alert("Términos y condiciones: Esta es una plataforma social solidaria sin fines de lucro para viajes compartidos de la comunidad UAM.")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      Términos y condiciones
                    </button>
                  </li>
                  <li>
                    <button onClick={() => alert("Política de Uso: Exclusivo para miembros activos de la comunidad UAM Xochimilco.")} className="text-gray-600 hover:text-[#0B8F63] transition-colors cursor-pointer">
                      Política de uso
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Area */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© 2026 Conecta X UAM-X. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1.5">
              <span>Desarrollado con orgullo para la UAM Xochimilco</span>
              <span className="text-[#0B8F63]">❤</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
