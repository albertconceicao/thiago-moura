import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AlternativeHero } from '@/components/AlternativeHero'
import { AboutSection } from '@/components/AboutSection'

export default function Home() {
  return (
    <>
    
        <div className='container'>
            <Head>
                <title>Thiago Moura | Currículo</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <Header />
            </div>

            <AlternativeHero />
            <div className="container">
                <AboutSection />
            </div>
        <Footer />
    </>
  )
}
