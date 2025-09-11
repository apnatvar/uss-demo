import PillNav from '@/components/site/pillNav'
import { ThemeToggle } from '@/components/mini/theme-trigger'
import UnmatchedSection from '@/components/site/features'
import Footer from '@/components/site/footer'
import GetInTouch from '@/components/site/getInTouch'
import HowItWorks from '@/components/site/howItWorks'
import MobileBentoGrid from '@/components/mini/hero/bento/mobileBentoGrid'
import BentoGrid from '@/components/mini/hero/bento/bentoGrid'
import HeroHeader from '@/components/mini/hero/heroHeader'

export default function Home() {
  return (
    <>
      <PillNav activeHref={'#home'} />
      <section className="w-full" id="home">
        <HeroHeader />
        <BentoGrid />
        <MobileBentoGrid />
      </section>
      <UnmatchedSection />
      <HowItWorks />
      <GetInTouch />
      <Footer />
    </>
  )
}
