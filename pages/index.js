import Head from 'next/head';
import Header from '../components/header/header';
import HomePage from '../components/homepage/homepage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Início</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <HomePage></HomePage>

      <footer>
       
      </footer>
    </div>
  )
}