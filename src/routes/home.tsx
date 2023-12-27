import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Joshlanny Resources"
        content="We are a business coach and marketer and sales expert providing proficient services to clients in affiliate marketing and E-commerce. We are passionate about making impact, solving problems, and meeting your business needs."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
