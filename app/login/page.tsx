"use client";

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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(alumnos\.uam\.mx|xanum\.uam\.mx)$/;
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
            {/* Error Message */}
            {error && (
              <div className="flex items-start gap-2.5 p-3.5 bg-[#FEF2F2] border border-[#FEE2E2] rounded-xl text-sm text-[#E5484D]">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Email Field */}
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
                  disabled={isLoading}
                />
              </div>
              <p className="text-[11px] text-[#6B7280]">
                Usa tu cuenta @alumnos.uam.mx o @xanum.uam.mx
              </p>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-xs font-medium text-[#1A1A1A] uppercase tracking-wider">
                  Contraseña
                </label>
                <a
                  href="#forgot-password"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("En un entorno real, se enviaría un enlace de recuperación a tu correo institucional.");
                  }}
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
                  disabled={isLoading}
                />
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
              <a href="/registro/pasajero" className="font-semibold text-[#0B8F63] hover:underline">
                Regístrate aquí
              </a>
            </p>
            <a
              href="/registro/conductor"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#0B8F63] bg-[#DFF7EC] hover:bg-[#cbf1df] px-3 py-1.5 rounded-full transition-all w-fit mx-auto"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Quiero ser conductor voluntario</span>
            </a>
          </div>
        </div>

        {/* Social Notice */}
        <p className="text-center text-[11px] text-[#6B7280] mt-8 max-w-sm mx-auto">
          Iniciativa comunitaria sin fines de lucro. Al usar Conecta X, te comprometes a seguir las normas de seguridad y respeto mutuo.
        </p>
      </div>
    </div>
  );
}
