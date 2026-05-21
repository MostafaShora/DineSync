"use client";
import { QRScanner } from "@/Src/Components/features/QRScanner";

export default function ScannerPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <QRScanner />
    </div>
  );
}
  