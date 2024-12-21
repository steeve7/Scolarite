"use client";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Footer2 from "./Footer2";

// Dynamically import Footer with SSR disabled
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function FooterWrapper() {
  const pathName = usePathname();
  return (pathName.includes("/student") ? <Footer2/> : <Footer />);
}
