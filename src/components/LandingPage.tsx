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
  MessageSquare,
  Gift,
  Sparkles
} from "lucide-react";
import LogoConectaX from "./Logo";

interface LandingPageProps {
  setRoute: (route: "landing" | "login" | "registro-pasajero" | "registro-conductor" | "dashboard") => void;
}

export default function LandingPage({ setRoute }: LandingPageProps) {
  const [montoDonacion, setMontoDonacion] = React.useState<number | "otro">(50);
  const [otroMontoValue, setOtroMontoValue] = React.useState<string>("");
  const [mostrarAgradecimiento, setMostrarAgradecimiento] = React.useState<boolean>(false);

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
            className="flex items-center gap-1 group focus:outline-none cursor-pointer"
            id="navbar-logo"
          >
            <LogoConectaX size="md" />
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-900 hover:text-primary transition-colors cursor-pointer"
              id="nav-link-inicio"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToId("como-funciona")}
              className="text-gray-500 hover:text-primary transition-colors cursor-pointer"
              id="nav-link-como"
            >
              Cómo funciona
            </button>
            <button 
              onClick={() => scrollToId("faq-seguridad")}
              className="text-gray-500 hover:text-primary transition-colors cursor-pointer"
              id="nav-link-beneficios"
            >
              FAQ / Seguridad
            </button>
            <button 
              onClick={() => scrollToId("footer")}
              className="text-gray-500 hover:text-primary transition-colors cursor-pointer"
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
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary-hover transition-all shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 active:scale-95 cursor-pointer focus:outline-none"
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/25 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold tracking-wider text-primary uppercase">
                  Exclusivo para la comunidad UAM-X
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 font-display leading-[1.1]">
                Tu ruta,<br />
                <span className="text-primary">nuestra comunidad.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Conecta X es una iniciativa social sin fines de lucro que une a estudiantes, profesores y administrativos para compartir viajes hacia y desde la UAM Xochimilco. Juntos reducimos tiempos de traslado, ahorramos costos y cuidamos el planeta en cada viaje.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setRoute("registro-pasajero")}
                  className="px-8 py-4 rounded-2xl text-sm font-bold bg-primary text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/30 active:scale-95 text-center cursor-pointer focus:outline-none"
                  id="btn-hero-cta"
                >
                  Regístrate con tu correo UAM
                </button>
                <button
                  onClick={() => scrollToId("como-funciona")}
                  className="px-8 py-4 rounded-2xl text-sm font-bold bg-primary-light text-primary hover:bg-primary-light/80 transition-all text-center cursor-pointer focus:outline-none"
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
                <svg className="absolute inset-0 w-full h-full p-6 text-primary" viewBox="0 0 400 400" fill="none">
                  {/* Styled connection lines */}
                  <path d="M 80 320 C 120 200, 280 200, 320 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" className="animate-[dash_30s_linear_infinite]" />
                  <path d="M 80 320 C 120 200, 280 200, 320 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.15" />
                  
                  {/* Origin Ring */}
                  <circle cx="80" cy="320" r="14" fill="currentColor" fillOpacity="0.1" />
                  <circle cx="80" cy="320" r="6" fill="currentColor" />
                  
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
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Conductor Verificado</p>
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
                <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center shadow-2xs">
                  <Shield className="w-6 h-6 text-primary" />
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
                <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center shadow-2xs">
                  <DollarSign className="w-6 h-6 text-primary" />
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
                <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center shadow-2xs">
                  <Users className="w-6 h-6 text-primary" />
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
                <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center shadow-2xs">
                  <Leaf className="w-6 h-6 text-primary" />
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

      {/* NEW: FAQ & SECURITY PROTOCOLS SECTION */}
      <section id="faq-seguridad" className="py-24 bg-gradient-to-b from-white to-gray-50/70 border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-primary-light text-primary text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/10">
              <span>🛡️</span> Protocolos de Confianza y Seguridad
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 font-display">
              Preguntas Frecuentes & Seguridad
            </h2>
            <p className="text-base text-gray-500">
              Resolvemos tus dudas sobre cómo funciona el modelo operativo y las medidas de seguridad activa en Conecta X.
            </p>
          </div>

          {/* Grid Layout of FAQ Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* FAQ 1: Puntos Designados */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.015)] space-y-3">
              <span className="text-2xl">📍</span>
              <h3 className="text-sm font-black text-gray-900 font-display uppercase tracking-wider">
                ¿Qué son los Puntos de Abordaje Designados?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Para garantizar viajes ordenados y predecibles, eliminamos el concepto de rutas libres. El origen y destino de cada trayecto se elige exclusivamente de una lista fija de paraderos oficiales y plazas comerciales estratégicas de la zona sur (como Plaza Paseo Acoxpa o Plaza Terraza Coapa), cercanas a la UAM Xochimilco.
              </p>
            </div>

            {/* FAQ 2: Tarifa Cooperativa */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.015)] space-y-3">
              <span className="text-2xl">💵</span>
              <h3 className="text-sm font-black text-gray-900 font-display uppercase tracking-wider">
                ¿Cómo funciona la Tarifa Cooperativa?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                La plataforma calcula automáticamente un aporte justo para combustible a razón de una tarifa sugerida base de $6 MXN por kilómetro real recorrido en cada tramo del trayecto. El costo total de cada tramo se distribuye de forma equitativa únicamente entre los pasajeros que viajan a bordo durante ese tramo específico.
              </p>
            </div>

            {/* FAQ 5: Cambios en el precio */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.015)] space-y-3">
              <span className="text-2xl">👥</span>
              <h3 className="text-sm font-black text-gray-900 font-display uppercase tracking-wider">
                ¿Por qué el precio cambia según cuántos pasajeros hay?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                La tarifa total de cada tramo se calcula con base en la distancia recorrida por el conductor en ese tramo, no cambia según cuántos pasajeros haya; lo que cambia es cómo se reparte esa tarifa entre los pasajeros presentes en el tramo. Por eso viajar solo muestra el monto más alto (toda la meta de recuperación recae en una sola persona), y compartir con más gente reduce lo que paga cada quien.
              </p>
            </div>

            {/* FAQ 3: Modo Mujer */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.015)] space-y-3">
              <span className="text-2xl">👩</span>
              <h3 className="text-sm font-black text-gray-900 font-display uppercase tracking-wider">
                ¿Qué es el Modo Mujer y quién puede usarlo?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Es una función exclusiva de seguridad mujer-a-mujer. Al activarla, el sistema filtra y muestra únicamente conductoras y viajes integrados exclusivamente por mujeres. Para resguardar la integridad del protocolo, esta opción está restringida y bloqueada por sistema para perfiles de género masculino.
              </p>
            </div>

            {/* FAQ 4: Identidad y Validación */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.015)] space-y-3">
              <span className="text-2xl">🔑</span>
              <h3 className="text-sm font-black text-gray-900 font-display uppercase tracking-wider">
                ¿Cómo se valida la identidad de la comunidad?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                El registro requiere obligatoriamente una cuenta institucional activa de la UAM Xochimilco (@alumnos.xoc.uam.mx). Asimismo, los conductores voluntarios pasan por una validación física manual de documentos vehiculares y licencia de conducir vigente antes de recibir la autorización para publicar rutas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: SUPPORT / DONATION SECTION */}
      <section id="apoyo-comunidad" className="py-24 bg-gradient-to-b from-indigo-50/30 to-purple-50/20 border-y border-indigo-100/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            {/* Left Column: Copy & Illustration */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-indigo-100/60 text-indigo-700 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-indigo-200/40">
                <Gift className="w-3.5 h-3.5" /> Iniciativa Social Solidaria
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 font-display">
                ¿Te gusta Conecta X? <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Apóyanos a seguir creciendo</span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                Conecta X es una iniciativa social 100% sin fines de lucro diseñada para y por la comunidad de la UAM Xochimilco. 
                Las donaciones voluntarias nos ayudan únicamente a cubrir los costos operativos esenciales de la plataforma 
                (hosting, bases de datos en la nube y mantenimiento de servidores de desarrollo) para asegurar que nunca generemos utilidades. 
                ¡Cada aportación ayuda a mantener la comunidad viajando de forma segura y económica!
              </p>
              
              {/* Supporting SVG Illustration representing community support & heart */}
              <div className="pt-4 flex items-center gap-4">
                <div className="p-4 bg-white rounded-2xl border border-indigo-100/60 shadow-xs shrink-0">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21a9 9 0 0 0 9-9c0-1.2-.3-2.3-.8-3.3L19 7l-2 2-2-2-2 2-2-2L9 7l-1.2.7c-.5 1-.8 2.1-.8 3.3a9 9 0 0 0 9 9Z" />
                    <path d="M12 9a3 3 0 0 1 3 3c0 2-3 4-3 4s-3-2-3-4a3 3 0 0 1 3-3Z" fill="currentColor" className="fill-primary-light" />
                    <path d="M7 14h.01" />
                    <path d="M17 14h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">Compromiso de Transparencia</h4>
                  <p className="text-[11px] text-gray-500 max-w-sm">
                    Toda contribución se destina exclusivamente a infraestructura técnica. No cobramos comisiones obligatorias por uso de la aplicación.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Donation Form */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-indigo-100/50 shadow-lg shadow-indigo-100/10 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> Selecciona una aportación
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  Aportaciones completamente voluntarias y deducibles para el fondo operativo.
                </p>
              </div>

              {/* Suggestions Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[20, 50, 100].map((monto) => (
                  <button
                    key={monto}
                    onClick={() => {
                      setMontoDonacion(monto);
                      setOtroMontoValue("");
                    }}
                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer focus:outline-none flex flex-col items-center justify-center gap-1 ${
                      montoDonacion === monto
                        ? "border-primary bg-primary-light/30 text-primary font-black shadow-xs"
                        : "border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/10 text-gray-600 font-bold"
                    }`}
                  >
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Aporte</span>
                    <span className="text-base font-black">${monto} MXN</span>
                  </button>
                ))}

                {/* Custom input button option */}
                <button
                  onClick={() => setMontoDonacion("otro")}
                  className={`p-4 rounded-2xl border text-center transition-all cursor-pointer focus:outline-none flex flex-col items-center justify-center gap-1 ${
                    montoDonacion === "otro"
                      ? "border-primary bg-primary-light/30 text-primary font-black shadow-xs"
                      : "border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/10 text-gray-600 font-bold"
                  }`}
                >
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Variable</span>
                  <span className="text-sm font-black">Otro monto</span>
                </button>
              </div>

              {/* Custom input field when "otro" is selected */}
              {montoDonacion === "otro" && (
                <div className="space-y-1.5 animate-fadeIn">
                  <label className="text-[10px] font-extrabold text-indigo-800 uppercase tracking-widest block">
                    Monto personalizado (MXN)
                  </label>
                  <div className="relative rounded-2xl shadow-2xs">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-gray-400 font-bold text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      placeholder="Ej. 150"
                      value={otroMontoValue}
                      onChange={(e) => setOtroMontoValue(e.target.value)}
                      className="block w-full pl-8 pr-4 py-3 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-primary/50 text-gray-900 font-bold placeholder:text-gray-300 placeholder:font-normal"
                    />
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={() => setMostrarAgradecimiento(true)}
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold bg-primary text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2 focus:outline-none"
              >
                <Heart className="w-4 h-4 fill-white/10 shrink-0" />
                <span>Donar ${montoDonacion === "otro" ? (otroMontoValue || "0") : montoDonacion} MXN ahora</span>
              </button>
            </div>
          </div>
        </div>

        {/* Simulated Thank You Modal Overlay */}
        {mostrarAgradecimiento && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-3xl border border-indigo-50 p-8 max-w-md w-full shadow-2xl relative space-y-6 text-center animate-scaleUp">
              {/* Illustration Header */}
              <div className="mx-auto w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-primary border border-indigo-100/50">
                <Heart className="w-8 h-8 fill-primary/20 text-primary animate-pulse" />
              </div>

              {/* Modal Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-black text-gray-950 font-display">
                  ¡Muchísimas gracias por tu apoyo! 🫶
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Tu generosidad y compromiso son la gasolina que impulsa este proyecto social. 
                  Queremos informarte que esta es una versión <strong className="text-primary font-bold">Prototipo MVP</strong>. 
                  La pasarela de pago real y las donaciones monetarias directas estarán disponibles en el lanzamiento oficial de Conecta X en la UAM Xochimilco.
                </p>
                <div className="bg-indigo-50/40 p-3.5 rounded-2xl border border-indigo-100/30 text-[11px] text-indigo-900 font-semibold text-left space-y-1">
                  <span className="block uppercase text-[9px] font-black tracking-widest text-indigo-500 mb-0.5">Simulación de Intención</span>
                  <span>Monto propuesto: <strong className="text-primary">${montoDonacion === "otro" ? (otroMontoValue || "0") : montoDonacion} MXN</strong></span>
                  <span className="block text-gray-400 font-normal">No se ha realizado ningún cobro real a tu cuenta bancaria ni se ha solicitado información confidencial.</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  setMostrarAgradecimiento(false);
                  setOtroMontoValue("");
                  setMontoDonacion(50);
                }}
                className="w-full py-3.5 rounded-2xl text-xs font-extrabold bg-gray-950 hover:bg-gray-900 text-white transition-all cursor-pointer shadow-md focus:outline-none uppercase tracking-wider"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 4. SECCIÓN CTA FINAL */}
      <section id="como-funciona-cta" className="py-24 bg-gray-50 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8" id="cta-final-container">
          {/* Badge icon circle */}
          <div className="inline-flex w-16 h-16 rounded-full bg-primary-light items-center justify-center text-primary shadow-md shadow-primary/5">
            <Heart className="w-8 h-8 fill-primary/10" />
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
              className="px-8 py-4 rounded-2xl text-sm font-bold bg-primary text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/30 active:scale-95 cursor-pointer focus:outline-none"
              id="btn-cta-pasajero"
            >
              Soy Pasajero
            </button>
            <button
              onClick={() => setRoute("registro-conductor")}
              className="px-8 py-4 rounded-2xl text-sm font-bold bg-primary-light text-primary hover:bg-primary-light/85 transition-all cursor-pointer focus:outline-none"
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
              <div className="flex items-center gap-1">
                <LogoConectaX size="md" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Movilidad colaborativa para la comunidad UAM Xochimilco. Una iniciativa solidaria sin fines de lucro enfocada en la sustentabilidad, seguridad y economía de estudiantes y docentes.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                <a href="#facebook" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary-light transition-all shadow-2xs">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#twitter" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary-light transition-all shadow-2xs">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#instagram" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary-light transition-all shadow-2xs">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#linkedin" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary-light transition-all shadow-2xs">
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
                    <button onClick={() => scrollToId("como-funciona")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
                      Cómo funciona
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setRoute("login")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
                      Buscar un viaje
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setRoute("registro-conductor")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
                      Ser conductor
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToId("como-funciona")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
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
                    <a href="https://www.xoc.uam.mx" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                      UAM Xochimilco
                    </a>
                  </li>
                  <li>
                    <button onClick={() => scrollToId("como-funciona")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
                      Acerca del proyecto
                    </button>
                  </li>
                  <li>
                    <button onClick={() => alert("Blog disponible próximamente.")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
                      Blog
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToId("footer")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
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
                    <button onClick={() => alert("Aviso de Privacidad: Conecta X protege todos tus datos personales y los limita estrictamente a la validación de la cuenta universitaria.")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
                      Aviso de privacidad
                    </button>
                  </li>
                  <li>
                    <button onClick={() => alert("Términos y condiciones: Esta es una plataforma social solidaria sin fines de lucro para viajes compartidos de la comunidad UAM.")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
                      Términos y condiciones
                    </button>
                  </li>
                  <li>
                    <button onClick={() => alert("Política de Uso: Exclusivo para miembros activos de la comunidad UAM Xochimilco.")} className="text-gray-600 hover:text-primary transition-colors cursor-pointer">
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
              <span className="text-primary">❤</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
