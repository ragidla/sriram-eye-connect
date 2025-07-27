import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DoctorSection from "@/components/DoctorSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import MapSection from "@/components/MapSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <DoctorSection />
        <ServicesSection />
        <GallerySection />
        <MapSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
