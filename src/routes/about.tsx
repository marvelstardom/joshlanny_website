import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

function AboutPage() {
  return (
    <Layout>
      <Article
        title="About Me"
        imageAlt="Joshua Olaniyan"
        imageSrc="../assets/dad.jpg"
        className="text-justify"
      >
        {/* prettier-ignore */}
        <p>
          My Name is Olaniyan Joshua Ayodeji, the  founder of  Joshlanny Resources. I am a business coach and sales expert with proficieny in Affiliate marketing and E-commerce. 
          <br/><br/>
          Joshlanny is so passionate about making impact and runs a reputable brand, teaching people how to make money successfully through the Internet. I am a man of over 60 years of age with a vast knowledge in online legit business. My desire and objectives are to help as many persons possible amass wealth through legit online businesses, affiliate marketing, 1kclub, e-commerce.
        </p>
      </Article>
    </Layout>
  )
}

export default AboutPage
