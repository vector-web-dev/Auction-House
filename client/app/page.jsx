import Image from 'next/image'
import Header from './components/Header'
import About from './components/About'
import Content from './components/Content'
import Footer from './components/Footer'

export default function Home() {
  
  return (
    <>
      <Header />
      <About />
      <Content />
      <Footer />
    </>
  )  
}
