"use client";

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
  const [isSuccess, setIsSuccess] = useState(false);

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

    // RegEx validation for @alumnos.uam.mx or @xanum.uam.mx
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(alumnos\.uam\.mx|xanum\.uam\.mx)$/;
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

    // Simular registro exitoso
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 font-sans">
      <div className="w-full max-w-md">
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
            <Car className="w-7 h-7 text-[#0B8F63]" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">Registro de Pasajero</h1>
          <p className="text-xs text-[#6B7280] mt-1">
            Unete a Conecta X y viaja seguro con tu comunidad universitaria
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#DFF7EC] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#0B8F63]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">¡Cuenta creada con éxito!</h3>
                <p className="text-sm text-[#6B7280] mt-1">
                  Redirigiéndote al panel de control...
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-2.5 p-3.5 bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl text-sm text-[#E5484D]">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* Nombre Completo */}
              <div className="space-y-1">
                <label htmlFor="nombre" className="block text-xs font-medium text-[#1A1A1A] uppercase tracking-wider">
                  Nombre Completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Sofía Hernández García"
                    className="block w-full pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63] focus:border-transparent text-sm transition-all"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Correo Institucional */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-medium text-[#1A1A1A] uppercase tracking-wider">
                  Correo Institucional
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@alumnos.uam.mx"
                    className="block w-full pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63] focus:border-transparent text-sm transition-all"
                    disabled={isLoading}
                  />
                </div>
                <p className="text-[10px] text-[#6B7280]">
                  Usa tu correo @alumnos.uam.mx o @xanum.uam.mx
                </p>
              </div>

              {/* Contraseña */}
              <div className="space-y-1">
                <label htmlFor="password" className="block text-xs font-medium text-[#1A1A1A] uppercase tracking-wider">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="block w-full pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63] focus:border-transparent text-sm transition-all"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Confirmar Contraseña */}
              <div className="space-y-1">
                <label htmlFor="confirmPassword" className="block text-xs font-medium text-[#1A1A1A] uppercase tracking-wider">
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repite tu contraseña"
                    className="block w-full pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl bg-white text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8F63] focus:border-transparent text-sm transition-all"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0B8F63] hover:bg-[#097551] text-white font-medium py-2.5 px-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B8F63] text-sm flex items-center justify-center gap-2 shadow-sm disabled:opacity-75 disabled:cursor-not-allowed mt-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Registrando...</span>
                  </>
                ) : (
                  <span>Registrarme como Pasajero</span>
                )}
              </button>
            </form>
          )}

          {/* Alternative Signup link */}
          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-xs text-[#6B7280]">
              ¿Prefieres compartir tu auto?{" "}
              <a href="/registro/conductor" className="font-semibold text-[#0B8F63] hover:underline">
                Regístrate como Conductor voluntario
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
