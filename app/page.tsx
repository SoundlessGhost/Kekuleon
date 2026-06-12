import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import CTA from '@/components/home/CTA'
import KRTCModel from '@/components/home/KRTCModel'
import ConceptStatement from '@/components/home/ConceptStatement'
import ProblemSolution from '@/components/home/ProblemSolution'

// Title/description are inherited from the root layout; only the canonical
// is set here (do NOT put canonical on the layout — every page would inherit
// "/" and self-canonicalize incorrectly).
export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

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
