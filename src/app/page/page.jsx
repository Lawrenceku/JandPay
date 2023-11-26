
import Head from "next/head";
import Hero from '/Components/Hero.jsx'
import Navbar from "/Components/Navbar";
import Footer from "/Components/footer";
import Benefits from "/Components/Benefits";

const Home = () => {
  return (
    <>
      <Head>
        <title>Jandpay- cross-border payment solution</title>
        <meta
          name="JandPay"
          content="Jandpay- cross-border payment solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero className='bg-blue-700'/>
      <Benefits className='bg-red-700'/>
    <Footer />
    </>
  );
}

export default Home;