
import Head from "next/head";
import Hero from '../../components/Hero.jsx'
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Benefits from "../../components/Benefits";

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