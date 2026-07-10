"use client";

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
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nombre.trim() || !email || !password || !marca || !modelo || !color || !placas) {
      setError("Por favor, llena todos los campos obligatorios.");
      return;
    }

    // RegEx validation for @alumnos.uam.mx or @xanum.uam.mx
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(alumnos\.uam\.mx|xanum\.uam\.mx)$/;
    if (!emailRegex.test(email.toLowerCase().trim())) {
      setError("El correo debe pertenecer a la UAM Xochimilco (@alumnos.uam.mx o @xanum.uam.mx).");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setIsLoading(true);

    // Simular registro de conductor exitoso
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 font-sans">
      <div className="w-full max-w-lg">
        {/* Back Link */}
        <a
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#1A1A1A] mb-6 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio de sesión</span>
        </a>

        {/* Branding */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#DFF7EC] flex items-center justify-center mb-3 shadow-sm">
            <ShieldCheck className="w-7 h-7 text-[#0B8F63]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">Registro de Conductor Voluntario</h1>
          <p className="text-xs text-[#6B7280] mt-1">
            Comparte tu auto con tus compañeros y ayuda a mejorar la movilidad en UAM-X
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#DFF7EC] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#0B8F63]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">¡Solicitud recibida!</h3>
                <p className="text-sm text-[#6B7280] mt-2 max-w-sm mx-auto">
                  Tu solicitud como conductor ha sido registrada y está en estado <strong>pendiente de revisión</strong>. Redirigiéndote al dashboard para explorar...
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-2.5 p-3.5 bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl text-sm text-[#E5484D]">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* Sección 1: Datos Personales */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pb-1 border-b border-gray-100">
                  1. Datos Personales
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="nombre" className="block text-xs font-medium text-[#1A1A1A]">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Carlos Fuentes"
                        className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F63]"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-xs font-medium text-[#1A1A1A]">
                      Correo Institucional *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="carlos.fuentes@xanum.uam.mx"
                        className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F63]"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-xs font-medium text-[#1A1A1A]">
                    Contraseña *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mínimo 6 caracteres"
                      className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F63]"
                      disabled={isLoading}
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
                    <label htmlFor="marca" className="block text-xs font-medium text-[#1A1A1A]">
                      Marca *
                    </label>
                    <input
                      id="marca"
                      type="text"
                      value={marca}
                      onChange={(e) => setMarca(e.target.value)}
                      placeholder="Toyota, Nissan..."
                      className="block w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F63]"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modelo" className="block text-xs font-medium text-[#1A1A1A]">
                      Modelo y Año *
                    </label>
                    <input
                      id="modelo"
                      type="text"
                      value={modelo}
                      onChange={(e) => setModelo(e.target.value)}
                      placeholder="Versa 2022..."
                      className="block w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F63]"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="color" className="block text-xs font-medium text-[#1A1A1A]">
                      Color del auto *
                    </label>
                    <input
                      id="color"
                      type="text"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      placeholder="Gris, Blanco..."
                      className="block w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F63]"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="placas" className="block text-xs font-medium text-[#1A1A1A]">
                      Placas de CDMX / Edoméx *
                    </label>
                    <input
                      id="placas"
                      type="text"
                      value={placas}
                      onChange={(e) => setPlacas(e.target.value)}
                      placeholder="982-YUZ o similar"
                      className="block w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F63]"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="asientos" className="block text-xs font-medium text-[#1A1A1A]">
                    Asientos Libres Disponibles para Pasajeros
                  </label>
                  <select
                    id="asientos"
                    value={asientos}
                    onChange={(e) => setAsientos(Number(e.target.value))}
                    className="block w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0B8F63]"
                    disabled={isLoading}
                  >
                    <option value={1}>1 asiento disponible</option>
                    <option value={2}>2 asientos disponibles</option>
                    <option value={3}>3 asientos disponibles</option>
                    <option value={4}>4 asientos disponibles</option>
                    <option value={5}>5 asientos disponibles</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0B8F63] hover:bg-[#097551] text-white font-medium py-3 px-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B8F63] text-sm flex items-center justify-center gap-2 shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Registrando Vehículo...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar solicitud de Conductor</span>
                    <Car className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Alternative Signup link */}
          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-xs text-[#6B7280]">
              ¿Solo quieres viajar como pasajero?{" "}
              <a href="/registro/pasajero" className="font-semibold text-[#0B8F63] hover:underline">
                Regístrate como Pasajero aquí
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
