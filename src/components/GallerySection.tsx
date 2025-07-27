import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import examinationRoom from "@/assets/examination-room.jpg";
import receptionArea from "@/assets/reception-area.jpg";
import surgicalSuite from "@/assets/surgical-suite.jpg";

const GallerySection = () => {
  const galleryItems = [
    {
      image: examinationRoom,
      title: "Modern Examination Rooms",
      description: "State-of-the-art diagnostic equipment for comprehensive eye examinations",
      badge: "Diagnostics"
    },
    {
      image: receptionArea,
      title: "Comfortable Reception Area",
      description: "Welcoming and comfortable waiting area for our patients",
      badge: "Comfort"
    },
    {
      image: surgicalSuite,
      title: "Advanced Surgical Suite",
      description: "Cutting-edge surgical facilities for safe and effective procedures",
      badge: "Surgery"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-care">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Facilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our modern facilities designed to provide the best possible care for your vision
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-care transition-all duration-500 border-medical-blue/10 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Badge 
                    className="absolute top-4 left-4 bg-white/90 text-medical-blue border-0"
                  >
                    {item.badge}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-medical-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-medical-blue/20 animate-fade-in">
              <div className="text-3xl font-bold text-medical-blue mb-2">2500+</div>
              <div className="text-lg font-semibold text-foreground mb-1">Successful Surgeries</div>
              <div className="text-sm text-muted-foreground">With 99% success rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-medical-blue/20 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-3xl font-bold text-medical-blue mb-2">15+</div>
              <div className="text-lg font-semibold text-foreground mb-1">Years of Excellence</div>
              <div className="text-sm text-muted-foreground">Serving the community</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-medical-blue/20 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-3xl font-bold text-medical-blue mb-2">5000+</div>
              <div className="text-lg font-semibold text-foreground mb-1">Happy Patients</div>
              <div className="text-sm text-muted-foreground">Satisfied with our care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;