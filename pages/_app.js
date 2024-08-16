import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  return(
    <>
    <Head>
      <meta name='description' content='Pagina web del Dr. Luis Willians, médico Traumatólogo, Oncólogo Ortopedista Especializado en manejo de tumores Musculoesqueléticos e infecciones óseas'/>
      <title>DroncoHueso</title>
      <link rel='canonical' href='https://droncohueso.com/'/>
    </Head>
    <Component {...pageProps} />
    </> 
  
  );
}
