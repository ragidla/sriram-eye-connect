import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Doctor", id: "doctor" },
    { label: "Services", id: "services" },
    { label: "Facilities", id: "gallery" },
    { label: "Location", id: "location" },
    { label: "Appointment", id: "appointment" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-medical-blue/10 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/36ff6c9f-d5a7-405c-b06b-8c8f7d1c6436.png" 
              alt="Sriram Eye Care Logo" 
              className="h-10 w-auto"
            />
            <div>
              <div className="font-bold text-lg text-foreground">Sriram Eye Care</div>
              <div className="text-xs text-muted-foreground">Excellence in Vision Care</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-medical-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button 
              size="sm" 
              className="bg-medical-blue hover:bg-medical-blue-dark"
              onClick={() => scrollToSection('appointment')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-medical-blue transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-medical-blue/10 bg-white/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-medical-blue hover:bg-medical-blue/5 transition-all duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button 
                  className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  onClick={() => scrollToSection('appointment')}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;