import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Microscope, 
  Zap, 
  Shield, 
  HeartHandshake, 
  Stethoscope,
  Glasses,
  Target
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Eye,
      title: "Comprehensive Eye Exams",
      description: "Complete eye health evaluation with advanced diagnostic technology",
      features: ["Digital Retinal Imaging", "Visual Field Testing", "Eye Pressure Measurement"],
      badge: "Routine Care"
    },
    {
      icon: Microscope,
      title: "Cataract Surgery",
      description: "Advanced phacoemulsification with premium intraocular lens implants",
      features: ["Micro-incision Surgery", "Premium IOL Options", "Same-day Procedure"],
      badge: "Surgery"
    },
    {
      icon: Target,
      title: "Retinal Treatments",
      description: "Specialized care for diabetic retinopathy and macular degeneration",
      features: ["Anti-VEGF Injections", "Laser Photocoagulation", "OCT Imaging"],
      badge: "Specialized"
    },
    {
      icon: Zap,
      title: "Glaucoma Management",
      description: "Early detection and comprehensive treatment of glaucoma",
      features: ["IOP Monitoring", "Visual Field Analysis", "Medical & Surgical Options"],
      badge: "Chronic Care"
    },
    {
      icon: Glasses,
      title: "Refractive Services",
      description: "Corrective solutions for vision problems and eye strain",
      features: ["Prescription Glasses", "Contact Lens Fitting", "Vision Therapy"],
      badge: "Correction"
    },
    {
      icon: Shield,
      title: "Pediatric Eye Care",
      description: "Specialized eye care for children and adolescents",
      features: ["Amblyopia Treatment", "Strabismus Correction", "School Vision Screening"],
      badge: "Children"
    },
    {
      icon: HeartHandshake,
      title: "Emergency Eye Care",
      description: "Immediate treatment for eye injuries and urgent conditions",
      features: ["24/7 Availability", "Foreign Body Removal", "Infection Treatment"],
      badge: "Emergency"
    },
    {
      icon: Stethoscope,
      title: "Dry Eye Treatment",
      description: "Comprehensive management of dry eye syndrome",
      features: ["Tear Film Analysis", "Punctal Plugs", "Lifestyle Counseling"],
      badge: "Therapy"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Surgery": return "default";
      case "Emergency": return "destructive";
      case "Specialized": return "secondary";
      default: return "outline";
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive eye care services using the latest technology and proven treatment methods
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medical transition-all duration-300 border-medical-blue/10 hover:border-medical-blue/30 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-medical p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant={getBadgeVariant(service.badge)} className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-medical-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-medical-blue rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-hero p-8 rounded-2xl border border-medical-blue/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Consultation?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule an appointment with Dr. Ashok Kumar for personalized eye care tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-medical-blue/20">
                <div className="font-semibold text-foreground">Walk-in Hours</div>
                <div className="text-sm text-muted-foreground">Mon-Sat: 9:00 AM - 7:00 PM</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-medical-blue/20">
                <div className="font-semibold text-foreground">Emergency Care</div>
                <div className="text-sm text-muted-foreground">24/7 Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;