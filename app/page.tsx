
import Aboutus from './_components/Aboutus';
import Contact from './_components/Contact';
import Footer from './_components/Footer';
import Header from './_components/Header'
import Proyects from './_components/Proyects';
import Service from './_components/Service';
import Trayectory from './_components/Trayectory';

export default function Home() {
  return (
    <body >
        <Header />
        <Service />
        <Proyects />
        <Aboutus />
        <Trayectory />
        <Contact />
        <Footer />
    </body>
  );
}
