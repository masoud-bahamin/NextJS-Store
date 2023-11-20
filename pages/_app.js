import Footer from '@/components/modules/Footer/Footer'
import Header from '@/components/modules/Header/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  ) 
}
