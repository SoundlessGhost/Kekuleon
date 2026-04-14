import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import CTA from '@/components/home/CTA'
import KRTCModel from '@/components/home/KRTCModel'
import ConceptStatement from '@/components/home/ConceptStatement'
import ProblemSolution from '@/components/home/ProblemSolution'

export default function Home() {
  return (
    <>
      <Hero />
      <KRTCModel />
      <ConceptStatement />
      <About />
      <ProblemSolution />
      <Services />
      <CTA />
    </>
  );
}
