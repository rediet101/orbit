// "use client";

// import { Button } from "@/components/ui/button";
// import { Eye, Menu, X } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { cn } from "@/lib/utils";
// import { useState } from "react";
// import logo from "../assets/Logo/Logo01.svg";

// export function Navigation() {
//   const location = useLocation();
//   const pathname = location.pathname;
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/services", label: "Services" },
//     { href: "/about", label: "About" },
//     { href: "/blog", label: "Blog" },
//     { href: "/testimonials", label: "Testimonials" },
//     { href: "/contact", label: "Contact" },
//     { href: "/faq", label: "FAQ" },
//     { href: "/portal", label: "Patient Portal" },
//   ];

//   const handleLinkClick = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="bg-card border-b border-border sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center gap-2">
//             <Eye className="h-8 w-8 text-primary" />
//             <span className="font-heading font-bold text-xl text-primary">
//               Orbit Optical  jjjj
//             </span>
//           </Link>

//           <div className="hidden md:flex items-center gap-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 to={item.href}
//                 className={cn(
//                   "text-muted-foreground hover:text-primary transition-colors",
//                   pathname === item.href && "text-primary font-medium"
//                 )}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Button asChild>
//               <Link to="/appointment">Book Appointment</Link>
//             </Button>
//           </div>

//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="p-2 hover:text-white hover:bg-primary"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-8 w-8" />
//               ) : (
//                 <Menu className="h-8 w-8" />
//               )}
//             </Button>
//           </div>
//         </div>

//         {isMobileMenuOpen && (
//           <div className="md:hidden border-t border-border bg-card">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   to={item.href}
//                   onClick={handleLinkClick}
//                   className={cn(
//                     "block px-3 py-2 text-base font-medium rounded-md transition-colors",
//                     pathname === item.href
//                       ? "text-primary bg-primary/10"
//                       : "text-muted-foreground hover:text-primary hover:bg-muted"
//                   )}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <div className="px-3 py-2">
//                 <Button asChild className="w-full">
//                   <Link to="/appointment" onClick={handleLinkClick}>
//                     Book Appointment
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import logo from "../assets/Logo/Logo1-01.svg";

export function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/portal", label: "Patient Portal" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-left ml-10 gap-2 md:gap-8">
            <img
              src={logo}
              alt="Orbit Optical"
              className="h-18 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10 mr-10 ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-muted-foreground hover:text-primary transition-colors duration-200",
                  pathname === item.href && "text-primary font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}

            <Button
              className="bg-primary text-white shadow-md hover:bg-primary/90 transition rounded-full px-6"
              asChild
            >
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:text-white hover:bg-primary rounded-full transition"
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </Button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card animate-slideDown">
            <div className="px-2 pt-3 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-3 pt-2">
                <Button
                  className="w-full rounded-full"
                  asChild
                >
                  <Link to="/appointment" onClick={handleLinkClick}>
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown .25s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}

