import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Users, Clock } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const DoctorSection = () => {
  return (
    <section id="doctor" className="py-20 bg-gradient-care">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing exceptional eye care with years of experience and expertise
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-scale-in">
            <Card className="overflow-hidden shadow-soft border-medical-blue/10">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={doctorPortrait} 
                    alt="Dr. Ashok Kumar Singh" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">Dr. Ashok Kumar</h3>
                    <p className="text-lg opacity-90">MBBS, Ophthalmology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-up">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Dr. Ashok Kumar
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-medical-blue text-white">
                    MBBS
                  </Badge>
                  <Badge variant="secondary" className="bg-care-cyan text-white">
                    Ophthalmology Specialist
                  </Badge>
                  <Badge variant="outline" className="border-medical-blue text-medical-blue">
                    15+ Years Experience
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  Dr. Ashok Kumar is a highly experienced ophthalmologist dedicated to providing 
                  comprehensive eye care services. With over 15 years of practice, he specializes 
                  in advanced surgical procedures and non-invasive treatments for various eye conditions.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-blue/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      MBBS, MD Ophthalmology<br />
                      Advanced Surgical Training
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-blue/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Cataract Surgery<br />
                      Retinal Treatments
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-blue/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Patients Treated</h4>
                    <p className="text-sm text-muted-foreground">
                      5000+ Happy Patients<br />
                      98% Success Rate
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-blue/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Availability</h4>
                    <p className="text-sm text-muted-foreground">
                      Mon-Sat: 9AM-7PM<br />
                      Emergency: 24/7
                    </p>
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

export default DoctorSection;