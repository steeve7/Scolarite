import About from '@/components/Section/About/About';
import Analytic from '@/components/Section/Analytic/Analytic';
import Choose from '@/components/Section/Choose/Choose';
import Faq from '@/components/Section/FAQ/Faq';
import Hero from '@/components/Section/Hero/Hero';
import Plan from '@/components/Section/Plan/Plan';
import Testimonial from '@/components/Section/Testimonial/Testimonial';

export default function Home() {
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
