import { ThemeToggle } from '@/components/mini/theme-trigger'
import UnmatchedSection from '@/components/site/features'
import GetInTouch from '@/components/site/getInTouch'
import HowItWorks from '@/components/site/howItWorks'

export default function Home() {
  return (
    <div className="w-full">
      <ThemeToggle />
      <HowItWorks />
      <GetInTouch />
      <UnmatchedSection />
    </div>
  )
}
