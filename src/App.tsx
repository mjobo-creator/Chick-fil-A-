import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Menu from './components/Menu';
import Why from './components/Why';
import Rewards from './components/Rewards';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import AppPromo from './components/AppPromo';
import Footer from './components/Footer';
import OrderButton from './components/OrderButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      
      <main>
        <Hero />
        <StatsBar />
        <Menu />
        <Why />
        <Rewards />
        <Locations />
        <Testimonials />
        <AppPromo />
      </main>
      
      <Footer />
      <OrderButton />
    </div>
  );
}

