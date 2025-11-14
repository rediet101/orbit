// import { Eye, Phone, Mail, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// export function Footer() {
//   return (
//     <footer className="bg-card border-t border-border py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div className="space-y-4">
//             <Link to="/" className="flex items-center gap-2">
//               <Eye className="h-8 w-8 text-primary" />
//               <span className="font-heading font-bold text-2xl text-primary">
//                 Orbit Optical
//               </span>
//             </Link>
//             <p className="text-muted-foreground text-sm">
//               Professional eye care services in Addis Ababa, Ethiopia. Clear
//               vision, better life.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <h3 className="font-heading font-semibold">Services</h3>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>
//                 <Link
//                   to="/services"
//                   className="hover:text-primary transition-colors"
//                 >
//                   Eye Examinations
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services"
//                   className="hover:text-primary transition-colors"
//                 >
//                   Prescription Glasses
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services"
//                   className="hover:text-primary transition-colors"
//                 >
//                   Contact Lenses
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services"
//                   className="hover:text-primary transition-colors"
//                 >
//                   Pediatric Care
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h3 className="font-heading font-semibold">Contact</h3>
//             <div className="space-y-2 text-sm text-muted-foreground">
//               <div className="flex items-center gap-2">
//                 <Phone className="h-4 w-4" />
//                 <span>+251 911 123 456</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Mail className="h-4 w-4" />
//                 <span>info@orbitoptical.com</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin className="h-4 w-4" />
//                 <span>Nifas Silk Lafto, Addis Ababa</span>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="font-heading font-semibold">Hours</h3>
//             <div className="space-y-2 text-sm text-muted-foreground">
//               <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
//               <div>Saturday: 9:00 AM - 4:00 PM</div>
//               <div>Sunday: Closed</div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
//           <p>&copy; 2024 Orbit Optical Clinic. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// ############ new code
import { Eye, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/Logow.svg";

export function Footer() {
  return (
    <footer className="bg-[#1A73E8] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-left ml-10 gap-2 md:gap-8">
              <img src={logo} alt="Orbit Optical" className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-white/80 max-w-xs">
              Your trusted partner for clear vision and expert eye care in Addis
              Ababa.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              {["Eye Exams", "Glasses", "Contact Lenses", "Pediatric Care"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      className="inline-block text-white/80 hover:text-white transition-colors duration-200 hover:translate-x-1"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/70" />
                <span className="text-white/90">+251 911 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/70" />
                <span className="text-white/90">info@orbitoptical.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white/70" />
                <span className="text-white/90">
                  Nifas Silk Lafto, Addis Ababa
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Clinic Hours
            </h3>
            <div className="text-sm space-y-1 text-white/90">
              <p>
                Mon–Fri: <span className="font-medium">8:00 AM – 6:00 PM</span>
              </p>
              <p>
                Sat: <span className="font-medium">9:00 AM – 4:00 PM</span>
              </p>
              <p>
                Sun: <span className="text-white/70">Closed</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Orbit Optical Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
