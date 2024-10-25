import React from 'react'
import Hero from '@/components/Sections/Hero/Hero';
import About from '@/components/Sections/About/About';
import Choose from '@/components/Sections/Choose/Choose';
import Analytic from '@/components/Sections/Analytic/Analytic';
import Plan from "@/components/Sections/Plan/Plan";
import Testimonial from '@/components/Sections/Testimonial/Testimonial';
import Faq from '@/components/Sections/FAQ/Faq';

export default function page() {
  return (
    <div>
      <Hero />
      <About />
      <Choose />
      <Analytic />  
      <Plan />
      <Testimonial />
      <Faq />
    </div>
  );
}

