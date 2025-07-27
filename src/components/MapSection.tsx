import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const MapSection = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Visit Our Hospital</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conveniently located in Rajahmundry for easy access to quality eye care
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-scale-in">
            <Card className="h-full shadow-soft border-medical-blue/10">
              <CardHeader>
                <CardTitle className="flex items-center text-medical-blue">
                  <MapPin className="mr-2 h-5 w-5" />
                  Location & Directions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-hero rounded-lg mb-6 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121873.54374392894!2d81.61234567890123!3d17.012345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a4d663616929%3A0x56694a575756b50!2sRajahmundry%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                  <div className="absolute inset-0 bg-medical-blue/10 pointer-events-none"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-medical-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Hospital Address</div>
                      <div className="text-muted-foreground">
                        Sriram Eye Care<br />
                        Rajahmundry, East Godavari District<br />
                        Andhra Pradesh, India
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-medical-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Contact Numbers</div>
                      <div className="text-muted-foreground">
                        Emergency: +91 9876543210<br />
                        Appointments: +91 9876543211
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-medical-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">info@srirameyecare.com</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-up">
            <Card className="shadow-soft border-medical-blue/10 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center text-medical-blue">
                  <Clock className="mr-2 h-5 w-5" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-medical-blue/10">
                    <span className="font-medium text-foreground">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-medical-blue/10">
                    <span className="font-medium text-foreground">Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-medical-blue/10">
                    <span className="font-medium text-foreground">Sunday</span>
                    <span className="text-muted-foreground">Emergency Only</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-foreground">Emergency Care</span>
                    <span className="text-medical-blue font-semibold">24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-medical-blue/10">
              <CardHeader>
                <CardTitle className="text-medical-blue">Quick Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-hero p-4 rounded-lg">
                    <div className="font-semibold text-foreground mb-2">Parking Available</div>
                    <div className="text-sm text-muted-foreground">
                      Free parking available for patients and visitors
                    </div>
                  </div>
                  <div className="bg-gradient-hero p-4 rounded-lg">
                    <div className="font-semibold text-foreground mb-2">Wheelchair Accessible</div>
                    <div className="text-sm text-muted-foreground">
                      Full wheelchair accessibility throughout the facility
                    </div>
                  </div>
                  <div className="bg-gradient-hero p-4 rounded-lg">
                    <div className="font-semibold text-foreground mb-2">Insurance Accepted</div>
                    <div className="text-sm text-muted-foreground">
                      We accept most major insurance plans
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;