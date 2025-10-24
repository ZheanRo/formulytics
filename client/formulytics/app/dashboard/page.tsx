"use client"; // required if using Next.js app directory

import { useEffect, useState } from "react";

interface TelemetryPoint {
  Time: number;
  Speed: number;
  Throttle: number;
  Brake: number;
  RPM: number;
  DRS: boolean;
}

interface TelemetryResponse {
  driver: string;
  data: TelemetryPoint[];
}

export default function DashboardPage() {
  const [telemetry, setTelemetry] = useState<TelemetryResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTelemetry() {
      try {
        const res = await fetch("http://localhost:8000/telemetry");
        if (!res.ok) throw new Error("Failed to fetch telemetry");
        const data = await res.json();
        setTelemetry(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTelemetry();
  }, []);

  if (loading) return <p className="p-4">Loading telemetry...</p>;
  if (!telemetry) return <p className="p-4 text-red-500">No data available.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Vehicle Performance Dashboard — {telemetry.driver}
      </h1>

      <table className="min-w-full border border-gray-700 text-left text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-2">Time (s)</th>
            <th className="p-2">Speed (km/h)</th>
            <th className="p-2">Throttle (%)</th>
            <th className="p-2">Brake</th>
            <th className="p-2">RPM</th>
            <th className="p-2">DRS</th>
          </tr>
        </thead>
        <tbody>
          {telemetry.data.map((row, idx) => (
            <tr key={idx} className="border-t border-gray-700">
              <td className="p-2">{row.Time.toFixed(1)}</td>
              <td className="p-2">{row.Speed}</td>
              <td className="p-2">{row.Throttle}</td>
              <td className="p-2">{row.Brake ? "🟥" : "⬜️"}</td>
              <td className="p-2">{row.RPM}</td>
              <td className="p-2">{row.DRS ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
