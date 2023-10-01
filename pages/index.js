import Head from 'next/head'
import { Inter } from 'next/font/google'
import style from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/navbar/Footer'
import Contact from '@/components/contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>InTouch</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={style["main"]}>
        <div className={style["introduction-container"]}>
          <h1>STIAMO CERCANDO TE!</h1>
          <p>Posizioni aperti per la nostra campagna di energia 💡</p>

          <div className={`${style["features"]} ${style["d-flex"]} ${style["flex-column"]}`}>
            <div className={style["feature"]}>
              <h2>Qualifiche</h2>
              <p>Conoscienza della lingua Italiana</p>
              <p>Buone capacita' di comunicazione</p>
              <p>Esperienza e' un vantaggio</p>
              <p>Formazione retribuita</p>
              <p>300L - 450L/ora + bonus</p>
              <p>Orario di lavoro: 15:00 - 21:00</p>
              <p>6/7 della settimana</p>
            </div>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  )
}