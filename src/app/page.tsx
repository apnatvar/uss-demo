import PillNav from '@/components/mini/pillNav'
import { ThemeToggle } from '@/components/mini/theme-trigger'
import UnmatchedSection from '@/components/site/features'
import GetInTouch from '@/components/site/getInTouch'
import HeroBento from '@/components/site/hero'
import HowItWorks from '@/components/site/howItWorks'

export default function Home() {
  return (
    <>
      <PillNav activeHref={'/'} />
      <HeroBento />
      <UnmatchedSection />
      <HowItWorks />
      <GetInTouch />
      <ThemeToggle />
    </>
  )
}
