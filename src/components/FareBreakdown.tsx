import React from "react";
import { DollarSign, HelpCircle, Users, Percent } from "lucide-react";

interface FareBreakdownProps {
  distanciaKm: number;
  pasajerosCount: number; // Current passengers in the ride
  hasJoined: boolean; // Whether the current passenger is already in the ride
}

export default function FareBreakdown({ distanciaKm, pasajerosCount, hasJoined }: FareBreakdownProps) {
  // Total passengers traveling if the user is in the vehicle
  const totalPassengers = hasJoined ? Math.max(1, pasajerosCount) : pasajerosCount + 1;

  // Discount percentage based on total passengers:
  // 1 pass -> 0%
  // 2 pass -> 10%
  // 3 pass -> 20%
  // 4+ pass -> 30% (max)
  const discountPercent = Math.min(30, (totalPassengers - 1) * 10);

  // Core base rate per passenger is $8 per km
  const baseRatePerKm = 8;
  const baseFarePerPassenger = distanciaKm * baseRatePerKm;
  const discountAmount = (baseFarePerPassenger * discountPercent) / 100;
  const netFarePerPassenger = Math.max(15, baseFarePerPassenger - discountAmount); // Minimum contribution of $15 MXN

  return (
    <div className="bg-gray-50/60 rounded-2xl p-4 border border-gray-100 space-y-3">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Desglose de Tarifa</span>
        </div>
        <div className="flex items-center gap-1.5 bg-primary-light text-primary text-[10px] font-bold px-2 py-0.5 rounded-lg">
          <Users className="w-3 h-3" />
          <span>
            {totalPassengers} {totalPassengers === 1 ? "pasajero" : "pasajeros"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-2 text-xs">
        <div className="text-gray-500">Tarifa base ({distanciaKm.toFixed(1)} km × $8/km):</div>
        <div className="text-right font-semibold text-gray-800">${baseFarePerPassenger.toFixed(2)} MXN</div>

        <div className="text-gray-500 flex items-center gap-1">
          <span>Descuento compartido:</span>
          {discountPercent > 0 && (
            <span className="bg-green-50 text-green-700 text-[9px] font-extrabold px-1.5 py-0.5 rounded-md border border-green-100">
              -{discountPercent}%
            </span>
          )}
        </div>
        <div className="text-right font-semibold text-green-600">
          {discountPercent > 0 ? `-$${discountAmount.toFixed(2)} MXN` : "$0.00 MXN"}
        </div>

        <div className="col-span-2 border-t border-dashed border-gray-200 my-1"></div>

        <div className="text-sm font-bold text-gray-800">Aporte sugerido:</div>
        <div className="text-right text-sm font-black text-primary">
          ${netFarePerPassenger.toFixed(0)} MXN
        </div>
      </div>

      <div className="text-[10px] text-gray-400 leading-relaxed pt-1.5 flex items-start gap-1">
        <HelpCircle className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
        <span>
          Tarifa dinámica calculada por km. A mayor ocupación del auto, menor es el aporte individual requerido para el combustible.
        </span>
      </div>
    </div>
  );
}
