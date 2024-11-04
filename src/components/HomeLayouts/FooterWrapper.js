"use client";
import dynamic from "next/dynamic";

// Dynamically import Footer with SSR disabled
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function FooterWrapper() {
  return <Footer />;
}
