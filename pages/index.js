import Image from 'next/image'
import Header from './src/patterns/Header'
import Newsletter from './src/components/Newsletter'
import ComoConseguir from './src/components/ComoConseguir'
import Ofertas from './src/components/Ofertas'
import Footer from './src/patterns/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Newsletter />
      <ComoConseguir />
      <Ofertas />
      <Footer />
    </main>
  )
}
