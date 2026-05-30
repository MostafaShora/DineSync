"use client";

import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

export const QRScanner = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 5,
        qrbox: {
          width: 250,
          height: 250,
        },
      },
      false,
    );

    scanner.render(
      (decodedText) => {
        console.log("Scanned:", decodedText);
      },

      (error) => {
        console.log(error);
      },
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return <div id="reader"></div>;
};
