import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, Mail, User, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-care">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Book Your Appointment</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a consultation with Dr. Ashok Kumar for personalized eye care
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-scale-in">
            <Card className="shadow-care border-medical-blue/10">
              <CardHeader>
                <CardTitle className="flex items-center text-medical-blue">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="border-medical-blue/20 focus:border-medical-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="border-medical-blue/20 focus:border-medical-blue"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="mr-2 h-4 w-4" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                        className="border-medical-blue/20 focus:border-medical-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="border-medical-blue/20 focus:border-medical-blue">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="comprehensive-exam">Comprehensive Eye Exam</SelectItem>
                          <SelectItem value="cataract-surgery">Cataract Surgery</SelectItem>
                          <SelectItem value="retinal-treatment">Retinal Treatment</SelectItem>
                          <SelectItem value="glaucoma-management">Glaucoma Management</SelectItem>
                          <SelectItem value="refractive-services">Refractive Services</SelectItem>
                          <SelectItem value="pediatric-care">Pediatric Eye Care</SelectItem>
                          <SelectItem value="emergency-care">Emergency Eye Care</SelectItem>
                          <SelectItem value="dry-eye-treatment">Dry Eye Treatment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        required
                        className="border-medical-blue/20 focus:border-medical-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        Preferred Time
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger className="border-medical-blue/20 focus:border-medical-blue">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Additional Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Any specific concerns or questions?"
                      className="border-medical-blue/20 focus:border-medical-blue min-h-[100px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark shadow-medical"
                    size="lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-up space-y-6">
            <Card className="shadow-soft border-medical-blue/10">
              <CardHeader>
                <CardTitle className="text-medical-blue">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gradient-hero rounded-lg">
                  <Phone className="h-5 w-5 text-medical-blue" />
                  <div>
                    <div className="font-semibold text-foreground">Emergency Hotline</div>
                    <div className="text-muted-foreground">+91 9876543210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-hero rounded-lg">
                  <Calendar className="h-5 w-5 text-medical-blue" />
                  <div>
                    <div className="font-semibold text-foreground">Appointments</div>
                    <div className="text-muted-foreground">+91 9876543211</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-hero rounded-lg">
                  <Mail className="h-5 w-5 text-medical-blue" />
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">info@srirameyecare.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-medical-blue/10">
              <CardHeader>
                <CardTitle className="text-medical-blue">What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-medical-blue rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <div className="font-semibold text-foreground">Confirmation Call</div>
                      <div className="text-sm text-muted-foreground">We'll call within 24 hours to confirm your appointment</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-medical-blue rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <div className="font-semibold text-foreground">Preparation</div>
                      <div className="text-sm text-muted-foreground">Bring your insurance card and list of current medications</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-medical-blue rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <div className="font-semibold text-foreground">Consultation</div>
                      <div className="text-sm text-muted-foreground">Comprehensive examination and personalized treatment plan</div>
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

export default AppointmentSection;