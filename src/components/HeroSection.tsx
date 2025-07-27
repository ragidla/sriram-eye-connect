import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img 
                src="/lovable-uploads/36ff6c9f-d5a7-405c-b06b-8c8f7d1c6436.png" 
                alt="Sriram Eye Care Logo" 
                className="h-20 w-auto mr-4"
              />
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-2">
                  Sriram Eye Care
                </h1>
                <p className="text-lg text-muted-foreground">Excellence in Vision Care</p>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Providing comprehensive eye care services with state-of-the-art technology 
              and personalized treatment in Rajahmundry, Andhra Pradesh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-medical-blue hover:bg-medical-blue-dark shadow-medical"
                onClick={scrollToAppointment}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start text-muted-foreground">
              <MapPin className="mr-2 h-5 w-5 text-medical-blue" />
              <span>Rajahmundry, East Godavari District, Andhra Pradesh</span>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white rounded-2xl shadow-care p-8 border border-medical-blue/10">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-medical rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-medical-blue rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Vision Excellence</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced eye care with cutting-edge technology and compassionate service
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-medical-blue">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-medical-blue">5000+</div>
                    <div className="text-sm text-muted-foreground">Happy Patients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-medical-blue">24/7</div>
                    <div className="text-sm text-muted-foreground">Emergency Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;