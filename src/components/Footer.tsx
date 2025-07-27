import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/36ff6c9f-d5a7-405c-b06b-8c8f7d1c6436.png" 
                alt="Sriram Eye Care Logo" 
                className="h-12 w-auto rounded-lg p-2"
              />
              <div>
                <div className="font-bold text-xl">Sriram Eye Care</div>
                <div className="text-medical-blue-light text-sm">Excellence in Vision Care</div>
              </div>
            </div>
            <p className="text-medical-blue-light mb-4">
              Providing comprehensive eye care services with state-of-the-art technology 
              and personalized treatment in Rajahmundry, Andhra Pradesh.
            </p>
            <div className="flex items-center text-medical-blue-light">
              <Heart className="mr-2 h-4 w-4" />
              <span className="text-sm">Caring for your vision since 2009</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-medical-blue-light">
              <li>
                <button 
                  onClick={() => document.getElementById('doctor')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-200"
                >
                  About Dr. Ashok Kumar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-200"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-200"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-medical-blue-light">
              <li>Comprehensive Eye Exams</li>
              <li>Cataract Surgery</li>
              <li>Retinal Treatments</li>
              <li>Glaucoma Management</li>
              <li>Pediatric Eye Care</li>
              <li>Emergency Eye Care</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4 text-medical-blue-light">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Address</div>
                  <div>
                    Sriram Eye Care<br />
                    Rajahmundry, East Godavari District<br />
                    Andhra Pradesh, India
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div>Emergency: +91 9876543210</div>
                  <div>Appointments: +91 9876543211</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div>info@srirameyecare.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Hours</div>
                  <div>Mon-Fri: 9AM-7PM</div>
                  <div>Sat: 9AM-5PM</div>
                  <div>Emergency: 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-medical-blue-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-medical-blue-light">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Sriram Eye Care. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="hover:text-white transition-colors duration-200">Privacy Policy</button>
              <button className="hover:text-white transition-colors duration-200">Terms of Service</button>
              <button className="hover:text-white transition-colors duration-200">Patient Rights</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;