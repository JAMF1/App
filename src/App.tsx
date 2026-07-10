import React, { useState } from "react";
import {
  Car,
  Lock,
  Mail,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  User,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Filter,
  Plus,
  Clock,
  MapPin,
  DollarSign,
  Award,
  ChevronRight,
  ChevronDown,
  Settings,
  LogOut,
  Code,
  Users,
  Search,
  CheckSquare,
  AlertTriangle,
  Compass,
  X
} from "lucide-react";

// Importar componentes
import LandingPage from "./components/LandingPage";

// Importar datos simulados
import { usuarios, Usuario } from "../data/usuarios";
import { conductores, Conductor } from "../data/conductores";
import { viajes, Viaje } from "../data/viajes";

export default function App() {
  // Navigation / Route state
  const [route, setRoute] = useState<"landing" | "login" | "registro-pasajero" | "registro-conductor" | "dashboard">("landing");
  
  // Dashboard tab state
  const [activeTab, setActiveTab] = useState<"inicio" | "conductores">("inicio");

  // User session state
  const [currentUser, setCurrentUser] = useState<Usuario | null>(null);

  // Modal with pickup instructions & map
  const [activeInstructionsTrip, setActiveInstructionsTrip] = useState<Viaje | null>(null);

  // Interactive local states (to make the mockup live and reactive!)
  const [localViajes, setLocalViajes] = useState<Viaje[]>(viajes);
  const [localConductores, setLocalConductores] = useState<Conductor[]>(conductores);
  const [localUsuarios, setLocalUsuarios] = useState<Usuario[]>(usuarios);

  // Filter state for trips
  const [tripFilter, setTripFilter] = useState<"todos" | "programado" | "en_curso" | "finalizado">("todos");

  // New Trip Creator states
  const [isCreatingTrip, setIsCreatingTrip] = useState(false);
  const [newTripOrigen, setNewTripOrigen] = useState("Metro Tasqueña (Andenes de Autobuses Sur)");
  const [newTripDestino, setNewTripDestino] = useState("Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)");
  const [newTripConductorId, setNewTripConductorId] = useState("cond_1");
  const [newTripAsientos, setNewTripAsientos] = useState(3);
  const [newTripMetodo, setNewTripMetodo] = useState<"spei" | "efectivo">("efectivo");

  // State to toggle the user settings dropdown
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // State to trigger the driver trip success modal
  const [showDriverSuccessModal, setShowDriverSuccessModal] = useState(false);
  const [lastPublishedTrip, setLastPublishedTrip] = useState<Viaje | null>(null);

  // Dynamic login form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Dynamic passenger registration states
  const [regPasajeroNombre, setRegPasajeroNombre] = useState("");
  const [regPasajeroEmail, setRegPasajeroEmail] = useState("");
  const [regPasajeroPass, setRegPasajeroPass] = useState("");
  const [regPasajeroConfirmPass, setRegPasajeroConfirmPass] = useState("");
  const [regPasajeroError, setRegPasajeroError] = useState("");
  const [isRegPasajeroLoading, setIsRegPasajeroLoading] = useState(false);

  // Dynamic conductor registration states
  const [regCondNombre, setRegCondNombre] = useState("");
  const [regCondEmail, setRegCondEmail] = useState("");
  const [regCondPass, setRegCondPass] = useState("");
  const [regCondMarca, setRegCondMarca] = useState("");
  const [regCondModelo, setRegCondModelo] = useState("");
  const [regCondColor, setRegCondColor] = useState("");
  const [regCondPlacas, setRegCondPlacas] = useState("");
  const [regCondAsientos, setRegCondAsientos] = useState(3);
  const [regCondError, setRegCondError] = useState("");
  const [isRegCondLoading, setIsRegCondLoading] = useState(false);

  // Code snippets database for the developer center
  const codeFiles: Record<string, { path: string; language: string; content: string }> = {
    login: {
      path: "/app/login/page.tsx",
      language: "typescript",
      content: `"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Car, Lock, Mail, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Por favor, ingresa tu correo institucional.");
      return;
    }

    // RegEx validation for @alumnos.uam.mx or @xanum.uam.mx
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(alumnos\\.uam\\.mx|xanum\\.uam\\.mx)$/;
    if (!emailRegex.test(email.toLowerCase().trim())) {
      setError("El correo debe pertenecer a la UAM Xochimilco (@alumnos.uam.mx o @xanum.uam.mx).");
      return;
    }

    if (!password) {
      setError("Por favor, ingresa tu contraseña.");
      return;
    }

    setIsLoading(true);

    // Simular inicio de sesión exitoso
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 font-sans">
      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#DFF7EC] flex items-center justify-center mb-4 shadow-sm">
            <Car className="w-8 h-8 text-[#0B8F63]" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">Conecta X</h1>
          <p className="text-sm text-[#6B7280] mt-1">
            Movilidad colaborativa · UAM Xochimilco
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1A1A1A] mb-6">Iniciar sesión</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="flex items-start gap-2.5 p-3.5 bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl text-sm text-[#E5484D]">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-medium text-[#1A1A1A] uppercase tracking-wider">
                Correo Institucional
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@alumnos.uam.mx"
                  className="block w-full pl-10 pr-3.5 py-3 border border-gray-200 rounded-xl bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63] focus:border-transparent text-sm transition-all"
                />
              </div>
              <p className="text-[11px] text-[#6B7280]">
                Usa tu cuenta @alumnos.uam.mx o @xanum.uam.mx
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-xs font-medium text-[#1A1A1A] uppercase tracking-wider">
                  Contraseña
                </label>
                <a
                  href="#forgot-password"
                  onClick={(e) => { e.preventDefault(); alert("Enlace de recuperación simulado."); }}
                  className="text-xs font-medium text-[#0B8F63] hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-3.5 py-3 border border-gray-200 rounded-xl bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63] focus:border-transparent text-sm transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0B8F63] hover:bg-[#097551] text-white font-medium py-3 px-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B8F63] text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              {isLoading ? "Verificando..." : "Iniciar sesión"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3 text-center">
            <p className="text-sm text-[#6B7280]">
              ¿No tienes una cuenta?{" "}
              <a href="/registro/pasajero" className="font-semibold text-[#0B8F63] hover:underline">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`
    },
    registroPasajero: {
      path: "/app/registro/pasajero/page.tsx",
      language: "typescript",
      content: `"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Car, User, Mail, Lock, AlertCircle, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function RegistroPasajeroPage() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nombre.trim()) {
      setError("Por favor, ingresa tu nombre completo.");
      return;
    }

    if (!email) {
      setError("Por favor, ingresa tu correo institucional.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(alumnos\\.uam\\.mx|xanum\\.uam\\.mx)$/;
    if (!emailRegex.test(email.toLowerCase().trim())) {
      setError("El correo debe pertenecer a la UAM Xochimilco (@alumnos.uam.mx o @xanum.uam.mx).");
      return;
    }

    if (!password) {
      setError("Por favor, ingresa una contraseña.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 font-sans">
      <div className="w-full max-w-md">
        <a href="/login" className="inline-flex items-center gap-2 text-sm text-[#6B7280] mb-6">
          <ArrowLeft className="w-4 h-4" /> Volver al login
        </a>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Registro de Pasajero</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl text-sm text-[#E5484D]">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] uppercase">Nombre Completo</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border p-2.5 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] uppercase">Correo Institucional</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2.5 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] uppercase">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2.5 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1A1A1A] uppercase">Confirmar Contraseña</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border p-2.5 rounded-xl text-sm"
              />
            </div>

            <button type="submit" className="w-full bg-[#0B8F63] text-white p-2.5 rounded-xl">
              Registrarme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}`
    },
    registroConductor: {
      path: "/app/registro/conductor/page.tsx",
      language: "typescript",
      content: `"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Car, User, Mail, Lock, AlertCircle, ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

export default function RegistroConductorPage() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [placas, setPlacas] = useState("");
  const [asientos, setAsientos] = useState(3);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nombre.trim() || !email || !password || !marca || !modelo || !color || !placas) {
      setError("Por favor, llena todos los campos obligatorios.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(alumnos\\.uam\\.mx|xanum\\.uam\\.mx)$/;
    if (!emailRegex.test(email.toLowerCase().trim())) {
      setError("El correo debe pertenecer a la UAM Xochimilco.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold">Registro de Conductor Voluntario</h2>
        {/* Formulario que recopila datos del vehículo y personales */}
      </div>
    </div>
  );
}`
    },
    dataUsuarios: {
      path: "/data/usuarios.ts",
      language: "typescript",
      content: `export interface Usuario {
  id: string;
  nombre: string;
  correoInstitucional: string;
  rol: "pasajero" | "conductor" | "admin";
  fotoUrl?: string;
  calificacionPromedio: number;
  fechaRegistro: string;
}

export const usuarios: Usuario[] = [
  {
    id: "usr_1",
    nombre: "Sofía Hernández García",
    correoInstitucional: "sofia.hernandez@alumnos.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.8,
    fechaRegistro: "2026-02-15"
  },
  {
    id: "usr_2",
    nombre: "Mateo Alejandro Ruíz",
    correoInstitucional: "mateo.ruiz@alumnos.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.9,
    fechaRegistro: "2026-03-01"
  },
  {
    id: "usr_3",
    nombre: "Dra. Elena Ramos Ortiz",
    correoInstitucional: "elena.ramos@xanum.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 5.0,
    fechaRegistro: "2026-01-10"
  },
  {
    id: "usr_4",
    nombre: "Valeria Mendoza Solís",
    correoInstitucional: "valeria.mendoza@alumnos.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.7,
    fechaRegistro: "2026-04-12"
  },
  {
    id: "usr_5",
    nombre: "Diego Torres Juárez",
    correoInstitucional: "diego.torres@alumnos.uam.mx",
    rol: "pasajero",
    fotoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.6,
    fechaRegistro: "2026-05-18"
  }
];`
    },
    dataConductores: {
      path: "/data/conductores.ts",
      language: "typescript",
      content: `import { Usuario } from "./usuarios";

export interface Conductor extends Usuario {
  estadoSolicitud: "pendiente" | "en_revision" | "aprobado" | "rechazado";
  vehiculo: {
    marca: string;
    modelo: string;
    color: string;
    placas: string;
    asientosDisponibles: number;
  };
}

export const conductores: Conductor[] = [
  {
    id: "cond_1",
    nombre: "Ing. Carlos Fuentes Bravo",
    correoInstitucional: "carlos.fuentes@xanum.uam.mx",
    rol: "conductor",
    fotoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.9,
    fechaRegistro: "2026-01-20",
    estadoSolicitud: "aprobado",
    vehiculo: {
      marca: "Nissan",
      modelo: "Versa",
      color: "Gris Platino",
      placas: "982-YUZ",
      asientosDisponibles: 4
    }
  },
  {
    id: "cond_2",
    nombre: "Andrea Peralta Luna",
    correoInstitucional: "andrea.peralta@alumnos.uam.mx",
    rol: "conductor",
    fotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.7,
    fechaRegistro: "2026-03-10",
    estadoSolicitud: "pendiente",
    vehiculo: {
      marca: "Chevrolet",
      modelo: "Aveo",
      color: "Rojo Rubí",
      placas: "NMX-45-89",
      asientosDisponibles: 3
    }
  },
  {
    id: "cond_3",
    nombre: "Dr. Rodrigo Silva Nava",
    correoInstitucional: "rodrigo.silva@xanum.uam.mx",
    rol: "conductor",
    fotoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 5.0,
    fechaRegistro: "2026-02-05",
    estadoSolicitud: "en_revision",
    vehiculo: {
      marca: "Toyota",
      modelo: "Prius (Híbrido)",
      color: "Blanco Perlado",
      placas: "A-543-BCN",
      asientosDisponibles: 4
    }
  },
  {
    id: "cond_4",
    nombre: "Mariana Delgado Ríos",
    correoInstitucional: "mariana.delgado@alumnos.uam.mx",
    rol: "conductor",
    fotoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120",
    calificacionPromedio: 4.8,
    fechaRegistro: "2026-04-01",
    estadoSolicitud: "aprobado",
    vehiculo: {
      marca: "Volkswagen",
      modelo: "Vento",
      color: "Azul Marino",
      placas: "Z90-WXC",
      asientosDisponibles: 3
    }
  }
];`
    },
    dataViajes: {
      path: "/data/viajes.ts",
      language: "typescript",
      content: `export interface Viaje {
  id: string;
  conductorId: string;
  pasajerosIds: string[];
  origen: { nombre: string; lat: number; lng: number };
  destino: { nombre: string; lat: number; lng: number };
  distanciaKm: number;
  tiempoEstimadoMin: number;
  tarifaTotal: number;
  tarifaConductor: number;
  tarifaPlataforma: number;
  estado: "programado" | "en_curso" | "finalizado" | "cancelado";
  metodoPago: "spei" | "efectivo";
  fecha: string;
}

export const viajes: Viaje[] = [
  {
    id: "viaje_1",
    conductorId: "cond_1",
    pasajerosIds: ["usr_1", "usr_2"],
    origen: { nombre: "Metro Tasqueña (Andenes de Autobuses Sur)", lat: 19.3440, lng: -99.1428 },
    destino: { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", lat: 19.3039, lng: -99.1171 },
    distanciaKm: 6.2,
    tiempoEstimadoMin: 18,
    tarifaTotal: 40,
    tarifaConductor: 34,
    tarifaPlataforma: 6,
    estado: "finalizado",
    metodoPago: "efectivo",
    fecha: "2026-07-08T08:15:00-06:00"
  },
  {
    id: "viaje_2",
    conductorId: "cond_4",
    pasajerosIds: ["usr_3"],
    origen: { nombre: "Metro General Anaya (Salida Oriente)", lat: 19.3585, lng: -99.1454 },
    destino: { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", lat: 19.3039, lng: -99.1171 },
    distanciaKm: 8.5,
    tiempoEstimadoMin: 22,
    tarifaTotal: 50,
    tarifaConductor: 42,
    tarifaPlataforma: 8,
    estado: "en_curso",
    metodoPago: "spei",
    fecha: "2026-07-09T10:00:00-06:00"
  },
  {
    id: "viaje_3",
    conductorId: "cond_1",
    pasajerosIds: ["usr_4", "usr_5"],
    origen: { nombre: "Estación Tren Ligero Huipulco (Frente a Hospitales)", lat: 19.2929, lng: -99.1504 },
    destino: { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", lat: 19.3039, lng: -99.1171 },
    distanciaKm: 5.4,
    tiempoEstimadoMin: 15,
    tarifaTotal: 35,
    tarifaConductor: 30,
    tarifaPlataforma: 5,
    estado: "programado",
    metodoPago: "efectivo",
    fecha: "2026-07-10T07:30:00-06:00"
  },
  {
    id: "viaje_4",
    conductorId: "cond_4",
    pasajerosIds: ["usr_1"],
    origen: { nombre: "Periférico Sur (Frente a Centro Comercial Perisur)", lat: 19.3031, lng: -99.1868 },
    destino: { nombre: "Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)", lat: 19.3039, lng: -99.1171 },
    distanciaKm: 9.8,
    tiempoEstimadoMin: 25,
    tarifaTotal: 60,
    tarifaConductor: 51,
    tarifaPlataforma: 9,
    estado: "programado",
    metodoPago: "spei",
    fecha: "2026-07-10T08:45:00-06:00"
  }
];`
    }
  };

  // Simulated Login Handler
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!loginEmail) {
      setLoginError("Por favor, ingresa tu correo institucional.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@alumnos\.xoc\.uam\.mx$/;
    if (!emailRegex.test(loginEmail.toLowerCase().trim())) {
      setLoginError("El correo debe pertenecer a la UAM Xochimilco (@alumnos.xoc.uam.mx).");
      return;
    }

    if (!loginPassword) {
      setLoginError("Por favor, ingresa tu contraseña.");
      return;
    }

    setIsLoggingIn(true);

    setTimeout(() => {
      // Find matching user or create a generic session user based on email prefix
      const lowerEmail = loginEmail.toLowerCase().trim();
      let matchedUser = localUsuarios.find(u => u.correoInstitucional.toLowerCase() === lowerEmail) ||
                         (localConductores.find(c => c.correoInstitucional.toLowerCase() === lowerEmail) as Usuario);

      if (!matchedUser) {
        // Create dynamic session user
        const prefix = lowerEmail.split("@")[0];
        const formattedName = prefix
          .split(".")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        matchedUser = {
          id: `usr_${Date.now()}`,
          nombre: formattedName || "Miembro de la UAM-X",
          correoInstitucional: lowerEmail,
          rol: "pasajero",
          fotoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
          calificacionPromedio: 5.0,
          fechaRegistro: new Date().toISOString().split("T")[0]
        };
        setLocalUsuarios(prev => [...prev, matchedUser!]);
      }

      setCurrentUser(matchedUser);
      setIsLoggingIn(false);
      setRoute("dashboard");
    }, 1000);
  };

  // Quick action shortcut for testing logins
  const handleDemoLogin = (email: string) => {
    // Replace domain to match the new strict constraint
    const emailXoc = email.replace(/@(alumnos\.uam\.mx|xanum\.uam\.mx)$/, "@alumnos.xoc.uam.mx");
    setLoginEmail(emailXoc);
    setLoginPassword("password123");
    // Trigger login submit simulated
    setLoginError("");
    setIsLoggingIn(true);
    setTimeout(() => {
      const matched = localUsuarios.find(u => u.correoInstitucional === emailXoc) ||
                      (localConductores.find(c => c.correoInstitucional === emailXoc) as Usuario);
      setCurrentUser(matched);
      setIsLoggingIn(false);
      setRoute("dashboard");
    }, 600);
  };

  // Simulated Passenger Registration Handler
  const handleRegPasajeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegPasajeroError("");

    if (!regPasajeroNombre.trim()) {
      setRegPasajeroError("Por favor, ingresa tu nombre completo.");
      return;
    }
    if (!regPasajeroEmail) {
      setRegPasajeroError("Por favor, ingresa tu correo institucional.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@alumnos\.xoc\.uam\.mx$/;
    if (!emailRegex.test(regPasajeroEmail.toLowerCase().trim())) {
      setRegPasajeroError("El correo debe pertenecer a la UAM Xochimilco (@alumnos.xoc.uam.mx).");
      return;
    }

    if (!regPasajeroPass) {
      setRegPasajeroError("Por favor, ingresa una contraseña.");
      return;
    }

    if (regPasajeroPass.length < 6) {
      setRegPasajeroError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (regPasajeroPass !== regPasajeroConfirmPass) {
      setRegPasajeroError("Las contraseñas no coinciden.");
      return;
    }

    setIsRegPasajeroLoading(true);

    setTimeout(() => {
      const newPassenger: Usuario = {
        id: `usr_${Date.now()}`,
        nombre: regPasajeroNombre.trim(),
        correoInstitucional: regPasajeroEmail.toLowerCase().trim(),
        rol: "pasajero",
        fotoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
        calificacionPromedio: 5.0,
        fechaRegistro: new Date().toISOString().split("T")[0]
      };

      setLocalUsuarios(prev => [...prev, newPassenger]);
      setCurrentUser(newPassenger);
      setIsRegPasajeroLoading(false);
      setRoute("dashboard");
    }, 1200);
  };

  // Simulated Conductor Registration Handler
  const handleRegCondSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegCondError("");

    if (!regCondNombre.trim() || !regCondEmail || !regCondPass || !regCondMarca || !regCondModelo || !regCondColor || !regCondPlacas) {
      setRegCondError("Por favor, llena todos los campos obligatorios.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@alumnos\.xoc\.uam\.mx$/;
    if (!emailRegex.test(regCondEmail.toLowerCase().trim())) {
      setRegCondError("El correo debe pertenecer a la UAM Xochimilco (@alumnos.xoc.uam.mx).");
      return;
    }

    if (regCondPass.length < 6) {
      setRegCondError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setIsRegCondLoading(true);

    setTimeout(() => {
      const newConductor: Conductor = {
        id: `cond_${Date.now()}`,
        nombre: regCondNombre.trim(),
        correoInstitucional: regCondEmail.toLowerCase().trim(),
        rol: "conductor",
        fotoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120",
        calificacionPromedio: 5.0,
        fechaRegistro: new Date().toISOString().split("T")[0],
        estadoSolicitud: "pendiente",
        vehiculo: {
          marca: regCondMarca.trim(),
          modelo: regCondModelo.trim(),
          color: regCondColor.trim(),
          placas: regCondPlacas.trim().toUpperCase(),
          asientosDisponibles: regCondAsientos
        }
      };

      setLocalConductores(prev => [...prev, newConductor]);
      // Also register as a general user
      const userRepresentation: Usuario = {
        id: newConductor.id,
        nombre: newConductor.nombre,
        correoInstitucional: newConductor.correoInstitucional,
        rol: "conductor",
        fotoUrl: newConductor.fotoUrl,
        calificacionPromedio: newConductor.calificacionPromedio,
        fechaRegistro: newConductor.fechaRegistro
      };
      setLocalUsuarios(prev => [...prev, userRepresentation]);
      setCurrentUser(userRepresentation);
      setIsRegCondLoading(false);
      setRoute("dashboard");
      setActiveTab("inicio"); // Show them their dashboard!
    }, 1500);
  };

  // Simulate joining a trip
  const joinTrip = (tripId: string) => {
    if (!currentUser) return;

    setLocalViajes(prev =>
      prev.map(viaje => {
        if (viaje.id === tripId) {
          // If already in trip, remove them
          if (viaje.pasajerosIds.includes(currentUser.id)) {
            return {
              ...viaje,
              pasajerosIds: viaje.pasajerosIds.filter(id => id !== currentUser.id)
            };
          } else {
            // Check if seats are available
            const cond = localConductores.find(c => c.id === viaje.conductorId);
            const maxAsientos = cond?.vehiculo.asientosDisponibles ?? 3;
            if (viaje.pasajerosIds.length >= maxAsientos) {
              alert("Este viaje ya no tiene asientos disponibles.");
              return viaje;
            }
            // Trigger instruction modal for joining!
            setActiveInstructionsTrip(viaje);
            return {
              ...viaje,
              pasajerosIds: [...viaje.pasajerosIds, currentUser.id]
            };
          }
        }
        return viaje;
      })
    );
  };

  // Simulate creating a new trip
  const handleCreateTripSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Map origins/destinations to real distances for the simulation
    let distance = 6.2;
    let duration = 18;

    if (newTripOrigen.includes("Tasqueña")) {
      distance = 6.2;
      duration = 18;
    } else if (newTripOrigen.includes("General Anaya")) {
      distance = 8.5;
      duration = 22;
    } else if (newTripOrigen.includes("Huipulco")) {
      distance = 5.4;
      duration = 15;
    } else if (newTripOrigen.includes("Periférico Sur")) {
      distance = 9.8;
      duration = 25;
    }

    // Standard platform fare calculation rule
    // Base $15 + $4.5 per km, rounded
    const fareTotal = Math.round(15 + 4.5 * distance);
    const fareConductor = Math.round(fareTotal * 0.85);
    const farePlataforma = fareTotal - fareConductor;

    const assignedConductorId = currentUser?.rol === "conductor" ? currentUser.id : newTripConductorId;

    const newTrip: Viaje = {
      id: `viaje_${Date.now()}`,
      conductorId: assignedConductorId,
      pasajerosIds: [],
      origen: {
        nombre: newTripOrigen,
        lat: 19.3440, // standard CDMX approx
        lng: -99.1428
      },
      destino: {
        nombre: newTripDestino,
        lat: 19.3039,
        lng: -99.1171
      },
      distanciaKm: distance,
      tiempoEstimadoMin: duration,
      tarifaTotal: fareTotal,
      tarifaConductor: fareConductor,
      tarifaPlataforma: farePlataforma,
      estado: "programado",
      metodoPago: newTripMetodo,
      fecha: new Date(Date.now() + 86400000).toISOString() // Tomorrow
    };

    setLocalViajes(prev => [newTrip, ...prev]);
    setLastPublishedTrip(newTrip);
    setShowDriverSuccessModal(true);
    setIsCreatingTrip(false);
  };

  // Simulate admin approving a conductor
  const updateConductorStatus = (conductorId: string, newStatus: "pendiente" | "en_revision" | "aprobado" | "rechazado") => {
    setLocalConductores(prev =>
      prev.map(c => (c.id === conductorId ? { ...c, estadoSolicitud: newStatus } : c))
    );
  };

  // Filtered trips
  const filteredViajes = localViajes.filter(v => {
    if (tripFilter === "todos") return true;
    return v.estado === tripFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-[#1A1A1A]">
      {/* Dynamic Views Render */}
      {route === "landing" && (
        <LandingPage setRoute={setRoute} />
      )}

      {route === "login" && (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-12">
            <div className="w-full max-w-md">
              {/* Back to Landing */}
              <button
                onClick={() => setRoute("landing")}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#1A1A1A] mb-6 transition-all focus:outline-none cursor-pointer"
                id="btn-login-back"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
              </button>

              {/* Branding */}
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#DFF7EC] flex items-center justify-center mb-4 shadow-sm">
                  <Car className="w-8 h-8 text-[#0B8F63]" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] font-display">Conecta X</h1>
                <p className="text-sm text-[#6B7280] mt-1">
                  Movilidad colaborativa · UAM Xochimilco
                </p>
                <div className="mt-2 inline-flex items-center gap-1 bg-[#DFF7EC] px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#0B8F63]">
                  <span>Prototipo de Validación de UI</span>
                </div>
              </div>

              {/* Login Form Card */}
              <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Iniciar sesión</h2>

                <form onSubmit={handleLoginSubmit} className="space-y-5">
                  {loginError && (
                    <div className="bg-[#E5484D]/10 border border-[#E5484D]/20 p-4 rounded-2xl flex items-center gap-3 text-xs text-[#E5484D] font-medium">
                      <div className="w-2 h-2 bg-[#E5484D] rounded-full shrink-0"></div>
                      <span>{loginError}</span>
                    </div>
                  )}

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                      Correo Institucional
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="ejemplo@alumnos.xoc.uam.mx"
                        className="block w-full pl-10 pr-3.5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                        disabled={isLoggingIn}
                      />
                    </div>
                    <p className="text-[11px] text-[#6B7280]">
                      Usa tu cuenta institucional @alumnos.xoc.uam.mx
                    </p>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                        Contraseña
                      </label>
                      <button
                        type="button"
                        onClick={() => alert("Simulación: Enlace de recuperación enviado al correo institucional.")}
                        className="text-xs font-semibold text-[#0B8F63] hover:underline"
                      >
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••"
                        className="block w-full pl-10 pr-3.5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                        disabled={isLoggingIn}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoggingIn}
                    className="w-full bg-[#0B8F63] hover:bg-[#097551] text-white font-semibold py-4 px-4 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B8F63] text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0B8F63]/20 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isLoggingIn ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Verificando...</span>
                      </>
                    ) : (
                      <>
                        <span>Iniciar sesión</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Registration Links */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3 text-center">
                  <p className="text-sm text-[#6B7280]">
                    ¿No tienes una cuenta?{" "}
                    <button
                      onClick={() => setRoute("registro-pasajero")}
                      className="font-semibold text-[#0B8F63] hover:underline focus:outline-none"
                    >
                      Regístrate aquí
                    </button>
                  </p>
                  <button
                    onClick={() => setRoute("registro-conductor")}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#0B8F63] bg-[#DFF7EC] hover:bg-[#cbf1df] px-4 py-2 rounded-full transition-all w-fit mx-auto focus:outline-none"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Quiero ser conductor voluntario</span>
                  </button>
                </div>
              </div>

              {/* Demo Quick Access */}
              <div className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-150">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 text-center">
                  Acceso Rápido para Pruebas (Demo)
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleDemoLogin("sofia.hernandez@alumnos.xoc.uam.mx")}
                    className="bg-white hover:bg-[#DFF7EC] text-xs font-medium border border-gray-200 py-2 px-3 rounded-lg text-center transition-all shadow-2xs hover:border-[#0B8F63] focus:outline-none"
                  >
                    Pasajero (Sofía)
                  </button>
                  <button
                    onClick={() => handleDemoLogin("carlos.fuentes@alumnos.xoc.uam.mx")}
                    className="bg-white hover:bg-[#DFF7EC] text-xs font-medium border border-gray-200 py-2 px-3 rounded-lg text-center transition-all shadow-2xs hover:border-[#0B8F63] focus:outline-none"
                  >
                    Conductor (Carlos)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#0B8F63] to-[#044c34] p-12 text-white flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Car className="w-8 h-8" />
                <span className="font-bold text-xl tracking-tight font-display">Conecta X</span>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tight font-display leading-tight">
                Viaja seguro y colabora con tu comunidad de la UAM Xochimilco.
              </h2>
              <p className="text-emerald-100 text-lg">
                La red voluntaria que conecta estudiantes y profesores para compartir trayectos hacia el campus sin fines de lucro, reduciendo tiempos y huella de carbono.
              </p>

              {/* Mini Interactive Map Simulation */}
              <div className="bg-[#05573b] bg-opacity-60 backdrop-blur-md rounded-2xl p-5 border border-emerald-500/30 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-300">Monitoreo Zona UAM-X</span>
                  </div>
                  <span className="text-[10px] text-emerald-200 font-mono">19.3039° N, 99.1171° W</span>
                </div>
                {/* SVG Mock Map */}
                <svg className="w-full h-32 rounded-lg bg-[#04412c] opacity-90 p-2" viewBox="0 0 300 120">
                  {/* Grid Lines */}
                  <line x1="10" y1="30" x2="290" y2="30" stroke="#05553b" strokeWidth="1" strokeDasharray="3" />
                  <line x1="10" y1="70" x2="290" y2="70" stroke="#05553b" strokeWidth="1" strokeDasharray="3" />
                  <line x1="80" y1="10" x2="80" y2="110" stroke="#05553b" strokeWidth="1" strokeDasharray="3" />
                  <line x1="220" y1="10" x2="220" y2="110" stroke="#05553b" strokeWidth="1" strokeDasharray="3" />

                  {/* Route path */}
                  <path d="M 40 90 Q 150 20, 260 50" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="5" />

                  {/* Map Points */}
                  <circle cx="40" cy="90" r="5" fill="#f59e0b" />
                  <text x="50" y="94" fill="#ffffff" fontSize="8" fontWeight="bold">Metro Tasqueña</text>

                  <circle cx="260" cy="50" r="6" fill="#10b981" />
                  <text x="185" y="44" fill="#ffffff" fontSize="9" fontWeight="bold">UAM Xochimilco</text>

                  {/* Moving Driver Point */}
                  <g>
                    <circle cx="150" cy="42" r="5" fill="#3b82f6" />
                    <circle cx="150" cy="42" r="9" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="animate-pulse" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-emerald-200 border-t border-emerald-500/20 pt-6">
              <p>© 2026 Conecta X UAM-X</p>
              <p>Iniciativa Social Universitaria</p>
            </div>
          </div>
        </div>
      )}

      {route === "registro-pasajero" && (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 font-sans">
          <div className="w-full max-w-md">
            {/* Back to Landing */}
            <button
              onClick={() => setRoute("landing")}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#1A1A1A] mb-6 transition-all focus:outline-none cursor-pointer"
              id="btn-passenger-back"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </button>

            {/* Branding */}
            <div className="flex flex-col items-center mb-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#DFF7EC] flex items-center justify-center mb-3 shadow-sm">
                <Car className="w-7 h-7 text-[#0B8F63]" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A] font-display">Registro de Pasajero</h1>
              <p className="text-xs text-[#6B7280] mt-1">
                Únete a Conecta X y viaja seguro con tu comunidad universitaria
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              <form onSubmit={handleRegPasajeroSubmit} className="space-y-4">
                {regPasajeroError && (
                  <div className="bg-[#E5484D]/10 border border-[#E5484D]/20 p-4 rounded-2xl flex items-center gap-3 text-xs text-[#E5484D] font-medium">
                    <div className="w-2 h-2 bg-[#E5484D] rounded-full shrink-0"></div>
                    <span>{regPasajeroError}</span>
                  </div>
                )}

                {/* Nombre Completo */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={regPasajeroNombre}
                      onChange={(e) => setRegPasajeroNombre(e.target.value)}
                      placeholder="Sofía Hernández García"
                      className="block w-full pl-10 pr-3.5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                      disabled={isRegPasajeroLoading}
                    />
                  </div>
                </div>

                {/* Correo Institucional */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                    Correo Institucional *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={regPasajeroEmail}
                      onChange={(e) => setRegPasajeroEmail(e.target.value)}
                      placeholder="ejemplo@alumnos.xoc.uam.mx"
                      className="block w-full pl-10 pr-3.5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                      disabled={isRegPasajeroLoading}
                    />
                  </div>
                  <p className="text-[10px] text-[#6B7280]">
                    Usa tu cuenta institucional @alumnos.xoc.uam.mx
                  </p>
                </div>

                {/* Contraseña */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                    Contraseña *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={regPasajeroPass}
                      onChange={(e) => setRegPasajeroPass(e.target.value)}
                      placeholder="Mínimo 6 caracteres"
                      className="block w-full pl-10 pr-3.5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                      disabled={isRegPasajeroLoading}
                    />
                  </div>
                </div>

                {/* Confirmar Contraseña */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                    Confirmar Contraseña *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={regPasajeroConfirmPass}
                      onChange={(e) => setRegPasajeroConfirmPass(e.target.value)}
                      placeholder="Repite tu contraseña"
                      className="block w-full pl-10 pr-3.5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                      disabled={isRegPasajeroLoading}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isRegPasajeroLoading}
                  className="w-full bg-[#0B8F63] hover:bg-[#097551] text-white font-semibold py-4 px-4 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B8F63] text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0B8F63]/20 disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                >
                  {isRegPasajeroLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Registrando...</span>
                    </>
                  ) : (
                    <span>Registrarme como Pasajero</span>
                  )}
                </button>
              </form>

              {/* Alternative Signup link */}
              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <p className="text-xs text-[#6B7280]">
                  ¿Prefieres compartir tu auto?{" "}
                  <button
                    onClick={() => setRoute("registro-conductor")}
                    className="font-semibold text-[#0B8F63] hover:underline focus:outline-none"
                  >
                    Regístrate como Conductor voluntario
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {route === "registro-conductor" && (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 font-sans">
          <div className="w-full max-w-lg">
            {/* Back to Landing */}
            <button
              onClick={() => setRoute("landing")}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#1A1A1A] mb-6 transition-all focus:outline-none cursor-pointer"
              id="btn-conductor-back"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </button>

            {/* Branding */}
            <div className="flex flex-col items-center mb-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#DFF7EC] flex items-center justify-center mb-3 shadow-sm">
                <ShieldCheck className="w-7 h-7 text-[#0B8F63]" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A] font-display">Registro de Conductor Voluntario</h1>
              <p className="text-xs text-[#6B7280] mt-1">
                Comparte tu auto con tus compañeros y ayuda a mejorar la movilidad en UAM-X
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              <form onSubmit={handleRegCondSubmit} className="space-y-6">
                {regCondError && (
                  <div className="bg-[#E5484D]/10 border border-[#E5484D]/20 p-4 rounded-2xl flex items-center gap-3 text-xs text-[#E5484D] font-medium">
                    <div className="w-2 h-2 bg-[#E5484D] rounded-full shrink-0"></div>
                    <span>{regCondError}</span>
                  </div>
                )}

                {/* Sección 1: Datos Personales */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pb-1 border-b border-gray-100">
                    1. Datos Personales
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                        Nombre Completo *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          value={regCondNombre}
                          onChange={(e) => setRegCondNombre(e.target.value)}
                          placeholder="Carlos Fuentes"
                          className="block w-full pl-9 pr-3 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                          disabled={isRegCondLoading}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                        Correo Institucional *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          value={regCondEmail}
                          onChange={(e) => setRegCondEmail(e.target.value)}
                          placeholder="carlos.fuentes@alumnos.xoc.uam.mx"
                          className="block w-full pl-9 pr-3 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                          disabled={isRegCondLoading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                      Contraseña *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        value={regCondPass}
                        onChange={(e) => setRegCondPass(e.target.value)}
                        placeholder="Mínimo 6 caracteres"
                        className="block w-full pl-9 pr-3 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                        disabled={isRegCondLoading}
                      />
                    </div>
                  </div>
                </div>

                {/* Sección 2: Datos del Vehículo */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pb-1 border-b border-gray-100">
                    2. Datos del Vehículo
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                        Marca *
                      </label>
                      <input
                        type="text"
                        value={regCondMarca}
                        onChange={(e) => setRegCondMarca(e.target.value)}
                        placeholder="Nissan"
                        className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                        disabled={isRegCondLoading}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                        Modelo y Año *
                      </label>
                      <input
                        type="text"
                        value={regCondModelo}
                        onChange={(e) => setRegCondModelo(e.target.value)}
                        placeholder="Versa 2022"
                        className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                        disabled={isRegCondLoading}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                        Color del auto *
                      </label>
                      <input
                        type="text"
                        value={regCondColor}
                        onChange={(e) => setRegCondColor(e.target.value)}
                        placeholder="Gris"
                        className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                        disabled={isRegCondLoading}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                        Placas de CDMX / Edoméx *
                      </label>
                      <input
                        type="text"
                        value={regCondPlacas}
                        onChange={(e) => setRegCondPlacas(e.target.value)}
                        placeholder="982-YUZ"
                        className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                        disabled={isRegCondLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-2">
                      Asientos Libres Disponibles para Pasajeros
                    </label>
                    <select
                      value={regCondAsientos}
                      onChange={(e) => setRegCondAsientos(Number(e.target.value))}
                      className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/20 text-sm transition-all"
                      disabled={isRegCondLoading}
                    >
                      <option value={1}>1 asiento disponible</option>
                      <option value={2}>2 asientos disponibles</option>
                      <option value={3}>3 asientos disponibles</option>
                      <option value={4}>4 asientos disponibles</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isRegCondLoading}
                  className="w-full bg-[#0B8F63] hover:bg-[#097551] text-white font-semibold py-4 px-4 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B8F63] text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0B8F63]/20 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isRegCondLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando solicitud...</span>
                    </>
                  ) : (
                    <>
                      <span>Registrarme como Conductor</span>
                      <Car className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Alternative Link */}
              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <p className="text-xs text-[#6B7280]">
                  ¿Solo quieres viajar como pasajero?{" "}
                  <button
                    onClick={() => setRoute("registro-pasajero")}
                    className="font-semibold text-[#0B8F63] hover:underline focus:outline-none"
                  >
                    Regístrate como Pasajero aquí
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {route === "dashboard" && currentUser && (
        <div className="flex-1 flex flex-col md:flex-row min-h-screen">
          {/* Dashboard Sidebar */}
          <aside className="w-full md:w-72 bg-white border-r border-gray-100 flex flex-col justify-between shrink-0">
            <div>
              {/* Branding Header with Top Logout button */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DFF7EC] flex items-center justify-center shadow-xs">
                    <Car className="w-5 h-5 text-[#0B8F63]" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-[#1A1A1A] font-display">Conecta X</h2>
                    <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">UAM Xochimilco</span>
                  </div>
                </div>

                {/* Quick logout button at the very top */}
                <button
                  onClick={() => {
                    setCurrentUser(null);
                    setRoute("landing");
                  }}
                  title="Cerrar sesión"
                  className="p-2 text-gray-400 hover:text-[#E5484D] hover:bg-red-50 rounded-xl transition-all cursor-pointer focus:outline-none"
                  id="btn-sidebar-logout-top"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>

              {/* Current User Session Profile */}
              <div className="p-4 mx-4 my-4 bg-gray-50 border border-gray-100/50 rounded-[1.5rem] flex items-center gap-3">
                <img
                  src={currentUser.fotoUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120"}
                  alt={currentUser.nombre}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#DFF7EC]"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-semibold text-[#1A1A1A] truncate">{currentUser.nombre}</h4>
                  <p className="text-[10px] text-[#6B7280] truncate font-mono">{currentUser.correoInstitucional}</p>
                  <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#DFF7EC] text-[#0B8F63] rounded-lg">
                    {currentUser.rol}
                  </span>
                </div>
              </div>

              {/* Sidebar Menu Items */}
              <nav className="px-4 space-y-1">
                <button
                  onClick={() => setActiveTab("inicio")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "inicio"
                      ? "bg-[#DFF7EC] text-[#0B8F63]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Compass className={`w-5 h-5 ${activeTab === "inicio" ? "text-[#0B8F63]" : "text-gray-400"}`} />
                  <span>Inicio / Viajes</span>
                </button>
              </nav>
            </div>

            {/* Sidebar Footer with system verification marker */}
            <div className="p-4 mx-4 mb-4 bg-[#DFF7EC]/30 rounded-xl border border-[#DFF7EC]/40 text-center">
              <span className="text-[10px] font-bold text-[#0B8F63] uppercase tracking-wider block">🔒 Comunidad Protegida</span>
              <p className="text-[9px] text-gray-500 mt-0.5">Vínculo institucional verificado</p>
            </div>
          </aside>

          {/* Main Dashboard Panel */}
          <main className="flex-1 bg-[#FDFDFD] p-6 md:p-8 overflow-y-auto relative">
            {/* Top Premium Header Bar */}
            <div className="flex justify-between items-center bg-white border border-gray-100 rounded-3xl p-4 mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.015)]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B8F63] animate-pulse"></span>
                <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100/50">
                  UAM Xochimilco · {currentUser.rol === "conductor" ? "Panel de Conductor Voluntario" : "Panel de Pasajero"}
                </span>
              </div>

              {/* User options in the corner */}
              <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all focus:outline-none cursor-pointer"
                  id="btn-user-dropdown-toggle"
                >
                  <img
                    src={currentUser.fotoUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120"}
                    alt={currentUser.nombre}
                    className="w-8 h-8 rounded-full object-cover border-2 border-[#DFF7EC]"
                  />
                  <div className="text-left hidden sm:block">
                    <p className="text-xs font-bold text-gray-800 leading-tight">{currentUser.nombre}</p>
                    <p className="text-[9px] text-[#0B8F63] font-bold leading-none uppercase tracking-wider">{currentUser.rol}</p>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {/* Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-100 rounded-2xl shadow-xl p-2 z-40 animate-fade-in">
                    <div className="p-2 border-b border-gray-50 text-left">
                      <p className="text-xs font-bold text-gray-800">{currentUser.nombre}</p>
                      <p className="text-[10px] text-gray-500 font-mono truncate">{currentUser.correoInstitucional}</p>
                    </div>
                    <div className="py-1.5 space-y-0.5">
                      <button
                        onClick={() => {
                          alert(`Perfil universitario verificado para la comunidad UAM Xochimilco.\nID: ${currentUser.id}\nRol: ${currentUser.rol.toUpperCase()}`);
                          setIsUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <User className="w-3.5 h-3.5 text-[#0B8F63]" /> <span>Mi Perfil UAM-X</span>
                      </button>
                      <button
                        onClick={() => {
                          alert("Configuración de notificaciones y alertas optimizada.");
                          setIsUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <Settings className="w-3.5 h-3.5 text-gray-400" /> <span>Ajustes de Cuenta</span>
                      </button>
                      <button
                        onClick={() => {
                          alert("Tu credencial escolar y matrícula han sido validadas por el comité administrativo.");
                          setIsUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 hover:bg-[#DFF7EC] hover:text-[#0B8F63] rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0B8F63]" /> <span>Verificación de Estatus</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentUser(null);
                          setRoute("landing");
                          setIsUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-bold text-[#E5484D] hover:bg-red-50 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" /> <span>Cerrar Sesión</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tab: INICIO / VIAJES */}
            {activeTab === "inicio" && (
              <div className="space-y-6">
                {currentUser.rol === "conductor" ? (
                  /* DRIVER VIEW HEADER */
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-5">
                    <div>
                      <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A] font-display">
                        Panel de Conducción Comunitaria
                      </h1>
                      <p className="text-sm text-[#6B7280]">
                        Publica tu ruta, calcula aportes sugeridos de gasolina y apoya a compañeros de la UAM Xochimilco.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* PASSENGER VIEW HEADER */
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-5">
                    <div>
                      <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A] font-display">
                        Panel de Movilidad UAM-X
                      </h1>
                      <p className="text-sm text-[#6B7280]">
                        Iniciativa de transporte comunitario voluntario para compartir gastos sin fines de lucro.
                      </p>
                    </div>
                  </div>
                )}

                {currentUser.rol === "conductor" ? (
                  /* DRIVER SPECIALIZED METRICS AND CONTENT */
                  <div className="space-y-8 animate-fade-in" id="driver-dashboard-container">
                    {/* Driver Metric Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white p-6 rounded-[2rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                        <div className="flex justify-between items-start">
                          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Asientos Ofrecidos</p>
                          <span className="p-2.5 rounded-2xl bg-[#DFF7EC] text-[#0B8F63]">
                            <Users className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-[#1A1A1A] tracking-tight mt-4">12 asientos</p>
                        <p className="text-xs text-[#0B8F63] font-semibold mt-2">✓ Capacidad optimizada</p>
                      </div>

                      <div className="bg-white p-6 rounded-[2rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                        <div className="flex justify-between items-start">
                          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Rutas Completadas</p>
                          <span className="p-2.5 rounded-2xl bg-[#DFF7EC] text-[#0B8F63]">
                            <Car className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-[#1A1A1A] tracking-tight mt-4">8 trayectos</p>
                        <p className="text-xs text-[#6B7280] font-semibold mt-2">UAM Xochimilco Campus</p>
                      </div>

                      <div className="bg-white p-6 rounded-[2rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                        <div className="flex justify-between items-start">
                          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Calificación Promedio</p>
                          <span className="p-2.5 rounded-2xl bg-[#DFF7EC] text-[#0B8F63]">
                            <Award className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-[#1A1A1A] tracking-tight mt-4">5.0 ⭐</p>
                        <p className="text-xs text-[#0B8F63] font-semibold mt-2">Excelente conductor</p>
                      </div>

                      <div className="bg-white p-6 rounded-[2rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.015)]">
                        <div className="flex justify-between items-start">
                          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Ahorro Estimado CO2</p>
                          <span className="p-2.5 rounded-2xl bg-[#DFF7EC] text-[#0B8F63]">
                            <Compass className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-[#1A1A1A] tracking-tight mt-4">124.8 kg</p>
                        <p className="text-xs text-gray-500 font-semibold mt-2">🌿 Comunidad sostenible</p>
                      </div>
                    </div>

                    {/* Dual Column Driver Dashboard Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      
                      {/* Left Column: Premium Trip Publisher */}
                      <div className="lg:col-span-5 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-6 md:p-8 space-y-6">
                        <div>
                          <h2 className="text-lg font-bold text-gray-900 font-display">Configurar Nueva Ruta de Conducción</h2>
                          <p className="text-xs text-gray-500 leading-relaxed mt-1">
                            Establece tus puntos de salida y llegada para que los alumnos verificados de la UAM-X puedan solicitar asiento en tu vehículo.
                          </p>
                        </div>

                        <form onSubmit={handleCreateTripSubmit} className="space-y-4">
                          {/* Point of Departure (Origen) */}
                          <div className="space-y-1.5">
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Punto de Salida (Origen)</label>
                            <div className="relative">
                              <select
                                value={newTripOrigen}
                                onChange={(e) => setNewTripOrigen(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 px-4 py-3.5 rounded-2xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/15 transition-all appearance-none cursor-pointer"
                              >
                                <option value="Metro Tasqueña (Andenes de Autobuses Sur)">Metro Tasqueña</option>
                                <option value="Metro General Anaya (Salida Oriente)">Metro General Anaya</option>
                                <option value="Estación Tren Ligero Huipulco (Frente a Hospitales)">Estación Huipulco</option>
                                <option value="Periférico Sur (Frente a Centro Comercial Perisur)">Periférico Sur</option>
                                <option value="Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)">Universidad (UAM Xochimilco)</option>
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </div>
                          </div>

                          {/* Point of Arrival (Destino) */}
                          <div className="space-y-1.5">
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Punto de Llegada (Destino)</label>
                            <div className="relative">
                              <select
                                value={newTripDestino}
                                onChange={(e) => setNewTripDestino(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-100 hover:border-gray-200 px-4 py-3.5 rounded-2xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/15 transition-all appearance-none cursor-pointer"
                              >
                                <option value="Universidad Autónoma Metropolitana Unidad Xochimilco (UAM-X)">Universidad (UAM Xochimilco)</option>
                                <option value="Metro Tasqueña (Andenes de Autobuses Sur)">Metro Tasqueña</option>
                                <option value="Metro General Anaya (Salida Oriente)">Metro General Anaya</option>
                                <option value="Estación Tren Ligero Huipulco (Frente a Hospitales)">Estación Huipulco</option>
                                <option value="Periférico Sur (Frente a Centro Comercial Perisur)">Periférico Sur</option>
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </div>
                          </div>

                          {/* Available Seats & Payment in Row */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Asientos Disponibles</label>
                              <div className="relative">
                                <select
                                  value={newTripAsientos}
                                  onChange={(e) => setNewTripAsientos(Number(e.target.value))}
                                  className="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/15 transition-all appearance-none cursor-pointer"
                                >
                                  <option value={1}>1 asiento</option>
                                  <option value={2}>2 asientos</option>
                                  <option value={3}>3 asientos</option>
                                  <option value={4}>4 asientos</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                  <ChevronDown className="w-4 h-4" />
                                </div>
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Método de Pago</label>
                              <div className="relative">
                                <select
                                  value={newTripMetodo}
                                  onChange={(e) => setNewTripMetodo(e.target.value as "spei" | "efectivo")}
                                  className="w-full bg-gray-50 border border-gray-100 px-4 py-3.5 rounded-2xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B8F63]/15 transition-all appearance-none cursor-pointer"
                                >
                                  <option value="efectivo">Efectivo</option>
                                  <option value="spei">SPEI (Transf.)</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                  <ChevronDown className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Automatic Suggested Fare Box */}
                          <div className="bg-[#DFF7EC] p-4 rounded-2xl flex justify-between items-center border border-[#0B8F63]/10">
                            <div className="space-y-0.5 text-[#0B8F63]">
                              <p className="text-[10px] font-bold uppercase tracking-wider">Tarifa Sugerida de Recuperación:</p>
                              <p className="text-[11px] leading-tight text-[#08734e]">Para viáticos de gasolina y gastos operativos.</p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-base font-black text-[#0B8F63]">
                                ${newTripOrigen.includes("Tasqueña") || newTripDestino.includes("Tasqueña") ? "40" : newTripOrigen.includes("Anaya") || newTripDestino.includes("Anaya") ? "50" : newTripOrigen.includes("Huipulco") || newTripDestino.includes("Huipulco") ? "35" : "60"} MXN
                              </p>
                              <p className="text-[9px] text-emerald-800 font-semibold">100% para conductor</p>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-[#0B8F63] hover:bg-[#097551] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#0B8F63]/20 text-sm flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Publicar Ruta Comunitaria</span>
                          </button>
                        </form>
                      </div>

                      {/* Right Column: Active Trips and Passengers */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h2 className="text-lg font-bold text-gray-900 font-display">Tus Rutas Activas y Pasajeros</h2>
                            <p className="text-xs text-gray-500 mt-0.5">Controla el estatus de tus traslados programados de hoy.</p>
                          </div>
                          <span className="text-[11px] font-bold text-[#0B8F63] bg-[#DFF7EC] px-3 py-1 rounded-full">
                            {localViajes.filter(v => v.conductorId === currentUser.id).length} publicadas
                          </span>
                        </div>

                        <div className="space-y-4">
                          {localViajes.filter(v => v.conductorId === currentUser.id).length === 0 ? (
                            <div className="border-2 border-dashed border-gray-200 rounded-[2.5rem] bg-white p-12 text-center flex flex-col items-center justify-center space-y-4">
                              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border text-xl">
                                🗺️
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-bold text-gray-700">Aún no tienes rutas de conducción abiertas</p>
                                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                                  Configura tu punto de salida y llegada a la izquierda para abrir tus asientos y que la comunidad de la UAM Xochimilco los visualice.
                                </p>
                              </div>
                            </div>
                          ) : (
                            localViajes
                              .filter(v => v.conductorId === currentUser.id)
                              .map(viaje => {
                                const activePassengers = viaje.pasajerosIds.map(id => localUsuarios.find(u => u.id === id)).filter(Boolean) as Usuario[];
                                const seatsOccupied = activePassengers.length;
                                const maxSeatsAvailable = viaje.asientosDisponibles || 3;

                                return (
                                  <div
                                    key={viaje.id}
                                    className="bg-white rounded-[2rem] border border-gray-100/90 shadow-[0_15px_40px_rgba(0,0,0,0.015)] p-6 space-y-5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-all"
                                  >
                                    {/* Header Row */}
                                    <div className="flex justify-between items-start flex-wrap gap-2">
                                      <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                          <span className="text-[10px] uppercase font-bold text-gray-400">Ruta de Conducción</span>
                                          <span
                                            className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                                              viaje.estado === "programado"
                                                ? "bg-blue-50 text-blue-600 border border-blue-100"
                                                : viaje.estado === "en_curso"
                                                ? "bg-amber-50 text-amber-600 border border-amber-100 animate-pulse"
                                                : "bg-[#DFF7EC] text-[#0B8F63] border border-[#0B8F63]/10"
                                            }`}
                                          >
                                            {viaje.estado.replace("_", " ")}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm font-bold text-gray-800">
                                          <span>{viaje.origen.nombre.split(" (")[0]}</span>
                                          <span className="text-[#0B8F63]">➔</span>
                                          <span>{viaje.destino.nombre.split(" (")[0]}</span>
                                        </div>
                                      </div>

                                      <div className="text-right">
                                        <span className="text-[10px] uppercase font-bold text-gray-400 block">Viáticos Sugeridos</span>
                                        <span className="text-sm font-extrabold text-[#0B8F63]">${viaje.tarifaTotal} MXN</span>
                                      </div>
                                    </div>

                                    {/* Action Buttons to control state */}
                                    <div className="flex gap-2 border-t border-b border-gray-50 py-3 flex-wrap">
                                      {viaje.estado === "programado" && (
                                        <button
                                          onClick={() => {
                                            setLocalViajes(prev =>
                                              prev.map(v => (v.id === viaje.id ? { ...v, estado: "en_curso" } : v))
                                            );
                                            alert("¡Trayecto iniciado con éxito! Conduce con precaución.");
                                          }}
                                          className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-bold px-4 py-2.5 rounded-xl border border-amber-100 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                        >
                                          <span>⚡</span> Iniciar Trayecto Ahora
                                        </button>
                                      )}
                                      {viaje.estado === "en_curso" && (
                                        <button
                                          onClick={() => {
                                            setLocalViajes(prev =>
                                              prev.map(v => (v.id === viaje.id ? { ...v, estado: "finalizado" } : v))
                                            );
                                            alert("¡Ruta finalizada! Gracias por apoyar a tu comunidad.");
                                          }}
                                          className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold px-4 py-2.5 rounded-xl border border-emerald-100 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                        >
                                          <span>✓</span> Completar Trayecto
                                        </button>
                                      )}
                                      {viaje.estado === "finalizado" && (
                                        <div className="flex-1 text-center py-1 text-xs text-[#0B8F63] font-bold bg-[#DFF7EC] rounded-xl flex items-center justify-center gap-1.5">
                                          <span>🎉</span> Trayecto completado con éxito
                                        </div>
                                      )}
                                    </div>

                                    {/* Passenger List Inside Conductor Card */}
                                    <div className="space-y-3">
                                      <div className="flex justify-between items-center text-xs">
                                        <span className="font-bold text-gray-700 uppercase tracking-wider text-[10px]">Pasajeros confirmados ({seatsOccupied} / {maxSeatsAvailable}):</span>
                                        <span className="text-gray-400 font-medium">Método: {viaje.metodoPago.toUpperCase()}</span>
                                      </div>

                                      {activePassengers.length === 0 ? (
                                        <div className="bg-gray-50/50 border border-dashed border-gray-100 p-4 rounded-2xl text-center">
                                          <div className="inline-block w-2 h-2 rounded-full bg-[#0B8F63] animate-ping mr-2"></div>
                                          <span className="text-xs text-gray-500 font-medium animate-pulse">Esperando confirmación de pasajeros de la UAM...</span>
                                        </div>
                                      ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                          {activePassengers.map(passenger => (
                                            <div
                                              key={passenger.id}
                                              className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center gap-3 hover:bg-gray-100/50 transition-all"
                                            >
                                              <img
                                                src={passenger.fotoUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"}
                                                alt={passenger.nombre}
                                                className="w-8 h-8 rounded-full object-cover border"
                                              />
                                              <div className="min-w-0 flex-1">
                                                <p className="text-xs font-bold text-gray-800 truncate">{passenger.nombre}</p>
                                                <p className="text-[10px] text-gray-400 font-mono truncate">{passenger.correoInstitucional}</p>
                                                <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-1 py-0.25 rounded-md border border-amber-100">
                                                  ⭐ {passenger.calificacionPromedio ? passenger.calificacionPromedio.toFixed(1) : "5.0"}
                                                </span>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>

                                  </div>
                                );
                              })
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                ) : (
                  /* PASSENGER BANNER AND SEARCH VIEWS */
                  <div className="space-y-6">
                    {/* Live Banner Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white p-6 rounded-[2rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-start">
                          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Ahorro Estimado CO2</p>
                          <span className="p-2.5 rounded-2xl bg-[#DFF7EC] text-[#0B8F63]">
                            <Compass className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-[#1A1A1A] tracking-tight mt-4">124.8 kg</p>
                        <p className="text-xs text-[#0B8F63] font-semibold mt-2 flex items-center gap-1">
                          <span>🌿</span> <span>+12% esta semana</span>
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-[2rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-start">
                          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Viajes Registrados</p>
                          <span className="p-2.5 rounded-2xl bg-[#DFF7EC] text-[#0B8F63]">
                            <Car className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-[#1A1A1A] tracking-tight mt-4">{localViajes.length}</p>
                        <p className="text-xs text-[#6B7280] font-semibold mt-2">UAM Xochimilco Campus</p>
                      </div>

                      <div className="bg-white p-6 rounded-[2rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-start">
                          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Conductores Activos</p>
                          <span className="p-2.5 rounded-2xl bg-[#DFF7EC] text-[#0B8F63]">
                            <Users className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-[#1A1A1A] tracking-tight mt-4">
                          {localConductores.filter(c => c.estadoSolicitud === "aprobado").length}
                        </p>
                        <p className="text-xs text-[#0B8F63] font-semibold mt-2">✓ Todos certificados</p>
                      </div>

                      <div className="bg-white p-6 rounded-[2rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                        <div className="flex justify-between items-start">
                          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Cuota de Recuperación</p>
                          <span className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
                            <DollarSign className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-[#1A1A1A] tracking-tight mt-4">Calculada</p>
                        <p className="text-xs text-[#6B7280] font-semibold mt-2">Tarifas 100% automáticas</p>
                      </div>
                    </div>
                  </div>
                )}

                {currentUser.rol !== "conductor" && (
                  <>
                    {/* Filter Controls */}
                <div className="flex justify-between items-center bg-white p-5 rounded-[1.5rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.01)]">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-500">Filtrar viajes:</span>
                  </div>
                  <div className="flex gap-1.5">
                    {(["todos", "programado", "en_curso", "finalizado"] as const).map(f => (
                      <button
                        key={f}
                        onClick={() => setTripFilter(f)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all focus:outline-none ${
                          tripFilter === f
                            ? "bg-[#0B8F63] text-white"
                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {f === "todos" ? "Todos" : f.replace("_", " ")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* List of trips */}
                <div className="space-y-4">
                  {filteredViajes.length === 0 ? (
                    <div className="bg-white text-center py-12 rounded-[2rem] border border-gray-100 text-gray-500">
                      No se encontraron viajes con el filtro seleccionado.
                    </div>
                  ) : (
                    filteredViajes.map(viaje => {
                      const cond = localConductores.find(c => c.id === viaje.conductorId);
                      const isJoined = viaje.pasajerosIds.includes(currentUser.id);
                      const activePassengersCount = viaje.pasajerosIds.length;
                      const maxAsientos = cond?.vehiculo.asientosDisponibles ?? 3;

                      return (
                        <div
                          key={viaje.id}
                          className="bg-white rounded-[2rem] border border-gray-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all space-y-4"
                        >
                          {/* Top row */}
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                            <div className="flex items-center gap-3">
                              <img
                                src={cond?.fotoUrl || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"}
                                alt={cond?.nombre}
                                className="w-11 h-11 rounded-full object-cover border"
                              />
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-bold text-sm text-[#1A1A1A]">{cond?.nombre || "Conductor Voluntario"}</h3>
                                  {cond?.calificacionPromedio && (
                                    <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-lg border border-amber-100">
                                      ⭐ {cond.calificacionPromedio.toFixed(1)}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500">
                                  {cond?.vehiculo.marca} {cond?.vehiculo.modelo} ({cond?.vehiculo.color}) · Placas <span className="font-mono font-semibold">{cond?.vehiculo.placas}</span>
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between">
                              <span
                                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                                  viaje.estado === "programado"
                                    ? "bg-blue-50 text-blue-600"
                                    : viaje.estado === "en_curso"
                                    ? "bg-yellow-50 text-yellow-600 animate-pulse"
                                    : viaje.estado === "finalizado"
                                    ? "bg-[#DFF7EC] text-[#0B8F63]"
                                    : "bg-red-50 text-red-600"
                                }`}
                              >
                                {viaje.estado.replace("_", " ")}
                              </span>

                              <div className="text-right">
                                <span className="text-xs text-gray-500 block">Metodo de pago</span>
                                <span className="text-xs font-mono font-bold text-gray-800 uppercase bg-gray-100 px-2 py-0.5 rounded">
                                  {viaje.metodoPago}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Route & Times */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50/60 p-4 rounded-2xl">
                            <div className="space-y-2">
                              <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-[10px] uppercase font-bold text-gray-400">Origen</p>
                                  <p className="text-xs font-semibold text-[#1A1A1A]">{viaje.origen.nombre}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-[10px] uppercase font-bold text-gray-400">Destino</p>
                                  <p className="text-xs font-semibold text-[#1A1A1A]">{viaje.destino.nombre}</p>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-center md:border-l border-gray-200 md:pl-4">
                              <div className="bg-white p-3 rounded-2xl border border-gray-100">
                                <Clock className="w-4 h-4 text-[#0B8F63] mx-auto mb-1" />
                                <span className="text-[10px] text-gray-400 uppercase block font-bold">Tiempo Est.</span>
                                <span className="text-xs font-bold text-[#1A1A1A]">{viaje.tiempoEstimadoMin} mins</span>
                              </div>
                              <div className="bg-white p-3 rounded-2xl border border-gray-100">
                                <Compass className="w-4 h-4 text-[#0B8F63] mx-auto mb-1" />
                                <span className="text-[10px] text-gray-400 uppercase block font-bold">Distancia</span>
                                <span className="text-xs font-bold text-[#1A1A1A]">{viaje.distanciaKm} km</span>
                              </div>
                            </div>
                          </div>

                          {/* Suggested Fare Details */}
                          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center p-4 bg-[#DFF7EC]/30 border border-[#DFF7EC]/50 rounded-2xl gap-3">
                            <div className="space-y-1">
                              <span className="text-[10px] uppercase font-bold text-[#0B8F63] tracking-wider block">Tarifa Sugerida de Recuperación</span>
                              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
                                <span>Aporte sugerido para gasolina: <strong className="text-gray-900 font-bold">${viaje.tarifaTotal} MXN</strong></span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                              <div className="text-right">
                                <span className="text-[10px] text-gray-400 block font-semibold">Cupo</span>
                                <span className="text-xs font-bold text-gray-800">
                                  {activePassengersCount} / {maxAsientos} asientos ocupados
                                </span>
                              </div>

                              {/* Book Trip Button */}
                              {viaje.estado === "programado" && (
                                <button
                                  onClick={() => joinTrip(viaje.id)}
                                  className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                                    isJoined
                                      ? "bg-red-50 text-red-600 border border-red-100 hover:bg-red-100/80"
                                      : activePassengersCount >= maxAsientos
                                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                      : "bg-[#0B8F63] text-white hover:bg-[#097551] shadow-md shadow-[#0B8F63]/10"
                                  }`}
                                  disabled={!isJoined && activePassengersCount >= maxAsientos}
                                >
                                  {isJoined ? "Bajarme del viaje" : "Unirme al viaje"}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
                  </>
                )}
              </div>
            )}

            {/* Driver Success Modal */}
            {showDriverSuccessModal && lastPublishedTrip && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto p-6 md:p-8 space-y-6">
                  {/* Succes Banner Header */}
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-[#DFF7EC] text-[#0B8F63] rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0B8F63] bg-[#DFF7EC] px-3.5 py-1.5 rounded-full inline-block">
                        ¡Trayecto Autorizado con Éxito!
                      </span>
                      <h2 className="text-xl md:text-2xl font-black text-[#1A1A1A] font-display mt-2 leading-tight">
                        Puntos de Abordaje Optimizados
                      </h2>
                    </div>
                    <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                      Se han estructurado los puntos de abordaje autorizados en base a tu ruta para optimizar el trayecto y maximizar la seguridad de la comunidad de la UAM Xochimilco.
                    </p>
                  </div>

                  {/* Trip Quick Details Box */}
                  <div className="bg-gray-50 p-5 rounded-3xl border border-gray-100/80 space-y-3">
                    <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-2.5">
                      <span className="font-bold text-gray-500 uppercase tracking-wider text-[10px]">Detalle de tu Publicación</span>
                      <span className="font-extrabold text-[#0B8F63] bg-emerald-50 px-2 py-1 rounded-lg">Ruta Comunitaria Activa</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider">Punto de Partida</p>
                        <p className="font-bold text-gray-800 mt-0.5">{lastPublishedTrip.origen.nombre.split(" (")[0]}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider">Destino (Tu punto de llegada)</p>
                        <p className="font-bold text-[#0B8F63] mt-0.5">{lastPublishedTrip.destino.nombre.split(" (")[0]}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider">Asientos Ofrecidos</p>
                        <p className="font-bold text-gray-800 mt-0.5">{lastPublishedTrip.asientosDisponibles || 3} asientos disponibles</p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider">Tarifa de Recuperación Sugerida</p>
                        <p className="font-bold text-gray-800 mt-0.5">${lastPublishedTrip.tarifaTotal} MXN (Gasolina)</p>
                      </div>
                    </div>
                  </div>

                  {/* Professional Mockup Route Map */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-gray-400 block">Esquema Digital de la Ruta Optimizada</span>
                    <div className="relative bg-slate-900 rounded-[2rem] h-48 overflow-hidden border border-slate-800 flex flex-col justify-between p-4 shadow-inner">
                      {/* Stylized background lines mimicking grid roads */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-white"></div>
                        <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-white"></div>
                        <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-white"></div>
                        <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-white"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white transform -rotate-12"></div>
                      </div>

                      {/* Map Title Tag */}
                      <div className="relative z-10 self-start bg-slate-800/95 backdrop-blur-xs border border-slate-700/50 rounded-xl px-2.5 py-1 flex items-center gap-1.5 text-[9px] font-bold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        GPS: Trayecto Inteligente UAM-X
                      </div>

                      {/* Conceptual Visual Route Nodes */}
                      <div className="relative z-10 flex justify-between items-center px-6 mt-2">
                        {/* Source node */}
                        <div className="text-center space-y-1">
                          <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold border-2 border-slate-900 mx-auto">
                            A
                          </div>
                          <span className="text-[9px] font-bold text-gray-400 block uppercase">Origen</span>
                        </div>

                        {/* Mid stop (creados puntos de recoge) */}
                        <div className="text-center space-y-1 relative">
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DFF7EC] text-[#0B8F63] px-2 py-0.5 rounded-md text-[8px] font-extrabold whitespace-nowrap uppercase tracking-wider border border-emerald-300">
                            Punto de Abordaje Creado
                          </div>
                          <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold border-2 border-slate-900 mx-auto">
                            📍
                          </div>
                          <span className="text-[9px] font-bold text-gray-400 block uppercase">Tránsito Seguro</span>
                        </div>

                        {/* Destination node */}
                        <div className="text-center space-y-1">
                          <div className="w-8 h-8 rounded-full bg-[#0B8F63] text-white flex items-center justify-center text-xs font-bold border-2 border-slate-900 mx-auto">
                            B
                          </div>
                          <span className="text-[9px] font-bold text-gray-400 block uppercase">UAM-X Campus</span>
                        </div>
                      </div>

                      {/* Map Footer status */}
                      <div className="relative z-10 self-center bg-slate-800/95 backdrop-blur-xs border border-slate-700/50 rounded-xl px-3 py-1 text-[9px] text-gray-300">
                        Puntos sugeridos seguros para recoger alumnos: <strong className="text-white">Andén de Conexión UAM</strong>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2">
                    <button
                      onClick={() => setShowDriverSuccessModal(false)}
                      className="w-full bg-[#0B8F63] hover:bg-[#097551] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#0B8F63]/20 text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Entendido, Ver Panel de Ruta</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Pickup Instructions & Map Modal */}
            {activeInstructionsTrip && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B8F63] bg-[#DFF7EC] px-3 py-1.5 rounded-full">
                        ¡Te has unido con éxito!
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-display mt-2">
                        Instrucciones de Abordaje y Encuentro
                      </h2>
                    </div>
                    <button
                      onClick={() => setActiveInstructionsTrip(null)}
                      className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-all cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Warning / Notice Box */}
                  <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#0B8F63]">Punto de Encuentro</h4>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Por favor dirígete con al menos <strong>5 minutos de anticipación</strong> al punto de partida indicado abajo para esperar a ser recogido de manera segura. El conductor voluntario te estará esperando.
                      </p>
                    </div>
                  </div>

                  {/* Travel details list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100/50">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Punto de Origen</p>
                      <p className="text-sm font-bold text-gray-800 mt-0.5">{activeInstructionsTrip.origen.nombre}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100/50">
                      <p className="text-[10px] uppercase font-bold text-gray-400">Destino Final</p>
                      <p className="text-sm font-bold text-gray-800 mt-0.5">{activeInstructionsTrip.destino.nombre}</p>
                    </div>
                  </div>

                  {/* Mock MAPPA */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Ruta Comunitaria y Localización</h3>
                    <div className="relative w-full h-64 bg-slate-100 border border-gray-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                      {/* SVG Mock Map Representation */}
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Simulated streets / avenues lines */}
                        <line x1="50" y1="0" x2="50" y2="300" stroke="#cbd5e1" strokeWidth="8" />
                        <line x1="200" y1="0" x2="200" y2="300" stroke="#cbd5e1" strokeWidth="12" />
                        <line x1="0" y1="120" x2="600" y2="120" stroke="#cbd5e1" strokeWidth="10" />
                        <line x1="0" y1="200" x2="600" y2="200" stroke="#cbd5e1" strokeWidth="8" />

                        {/* Route path from Origin pin to UAM Xochimilco pin */}
                        <path d="M 80 80 Q 200 80 200 180 T 450 180" fill="none" stroke="#0B8F63" strokeWidth="4" strokeDasharray="6 4" />

                        {/* Origin Landmark visual */}
                        <circle cx="80" cy="80" r="16" fill="#F97316" fillOpacity="0.2" />
                        <circle cx="80" cy="80" r="6" fill="#F97316" />

                        {/* Dest Landmark visual */}
                        <circle cx="450" cy="180" r="20" fill="#0B8F63" fillOpacity="0.2" />
                        <circle cx="450" cy="180" r="8" fill="#0B8F63" />

                        {/* Connecting Line pulse */}
                        <circle cx="200" cy="130" r="5" fill="#3B82F6" className="animate-ping" />
                        <circle cx="200" cy="130" r="4" fill="#3B82F6" />
                      </svg>

                      {/* Overlaid UI labels on mock map */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-gray-100 text-[10px] font-bold text-gray-700 shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <span>Origen: {activeInstructionsTrip.origen.nombre.split(" (")[0]}</span>
                      </div>

                      <div className="absolute bottom-4 right-4 bg-[#0B8F63]/95 backdrop-blur-xs px-3 py-1.5 rounded-xl text-white text-[10px] font-bold shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        <span>Destino: UAM Xochimilco</span>
                      </div>

                      <div className="absolute top-[55%] left-[25%] bg-blue-500/90 text-white text-[9px] font-bold px-2 py-1 rounded-md shadow-xs">
                        Punto de abordaje
                      </div>
                    </div>
                  </div>

                  {/* Professional Guidelines/Tips Checklist */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Pautas de Seguridad y Convivencia:</h4>
                    <ul className="text-xs text-[#6B7280] space-y-2 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0B8F63] font-bold">✓</span>
                        <span><strong>Identificación del vehículo:</strong> Al llegar el auto, verifica que coincidan la marca, color y placas (<strong className="font-mono text-gray-900">{localConductores.find(c => c.id === activeInstructionsTrip.conductorId)?.vehiculo.placas || "982-YUZ"}</strong>).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0B8F63] font-bold">✓</span>
                        <span><strong>Comunicación Respetuosa:</strong> Sé cortés con el conductor voluntario y los demás pasajeros; este es un viaje solidario de la comunidad de la UAM-X.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0B8F63] font-bold">✓</span>
                        <span><strong>Aporte de Recuperación:</strong> Lleva el importe sugerido de <strong>${activeInstructionsTrip.tarifaTotal} MXN</strong> si pagas en efectivo, o ten lista la transferencia SPEI previamente acordada.</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setActiveInstructionsTrip(null)}
                    className="w-full bg-[#0B8F63] hover:bg-[#097551] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#0B8F63]/20 text-sm cursor-pointer"
                  >
                    Entendido, ya voy en camino
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
