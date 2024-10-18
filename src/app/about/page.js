"use client"
import React from 'react'

import { useRouter } from "next/navigation";

export default function page() {

  const router = useRouter();

  const handleGoBack = () => {
      router.back(); // Navigates back to the previous page
  };

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}
