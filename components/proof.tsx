// components/Proof.tsx
"use client";
import { useEffect } from 'react';
import Script from 'next/script';

const Proof = () => {
  useEffect(() => {
    window.provesrc = window.provesrc || { dq: [], display: function () { this.dq.push(arguments) } };
    window._provesrcAsyncInit = function () {
      window.provesrc.init({ apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2NjhjZDgyZGYzOGJiNDBhZGQzYzgwZGYiLCJpYXQiOjE3MjA1MDY0MTN9.kzf3ZLPFXrHlikWtnjgQY-uY2-3RQnjHAHKHA3ywL6k", v: "0.0.4" });
    };
  }, []);

  return (
    <Script
      src="https://cdn.provesrc.com/provesrc.js"
      strategy="afterInteractive"
    />
  );
};

export default Proof;
