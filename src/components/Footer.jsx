import { Eye, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Eye className="h-8 w-8 text-primary" />
              <span className="font-heading font-bold text-2xl text-primary">
                Orbit
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Professional eye care services in Addis Ababa, Ethiopia. Clear
              vision, better life.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Eye Examinations
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Prescription Glasses
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Contact Lenses
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Pediatric Care
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+251 911 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@orbitoptical.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Nifas Silk Lafto, Addis Ababa</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
              <div>Saturday: 9:00 AM - 4:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Orbit Optical Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
