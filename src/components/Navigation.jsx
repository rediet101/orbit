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
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import logo from "../assets/Logo/Logo1-01.svg";

export function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    // { href: "/doctors", label: "Doctors" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { 
      label: "Media", 
      isDropdown: true,
      subItems: [
        { href: "/media/education", label: "Education" },
        { href: "/media/social", label: "Social" },
        { href: "/media/article", label: "Article" },
        { href: "/media/publication", label: "Publication" },
      ]
    },
    { href: "/contact", label: "Contact us" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMediaDropdownOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-blue-200 backdrop-blur-lg sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-left ml-10 gap-2 md:gap-8">
            <img
              src={logo}
              alt="Orbit Optical"
              className="h-18 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 mr-5">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.isDropdown ? (
                  // Media Dropdown - Click to open
                  <div className="relative">
                    <button
                      onClick={() => setIsMediaDropdownOpen(!isMediaDropdownOpen)}
                      className={cn(
                        "flex items-center gap-1 text-white hover:text-blue-300 transition-colors duration-200 relative",
                        pathname.startsWith("/media") && "text-blue-300 font-semibold"
                      )}
                    >
                      {item.label}
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isMediaDropdownOpen && "rotate-180"
                        )} 
                      />
                      {pathname.startsWith("/media") && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isMediaDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={handleLinkClick}
                            className={cn(
                              "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors",
                              pathname === subItem.href && "bg-blue-50 text-blue-600 font-semibold"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular Link
                  <Link
                    to={item.href}
                    className={cn(
                      "text-white hover:text-blue-300 transition-colors duration-200 relative pb-2",
                      pathname === item.href && "text-blue-300 font-semibold"
                    )}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
            <Button
              className="bg-blue-600 text-white shadow-md hover:bg-blue-700 transition rounded-full px-6"
              asChild
            >
              <Link to="/appointment">Book Appointment</Link>
            </Button>
            <Button
              className="border-1 border-blue-600 bg-white text-blue-600 hover:bg-white hover:text-blue-600 shadow-md transition rounded-full px-6"
              asChild
            >
              <Link to="/screen">Screen Yourself</Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-white hover:bg-blue-600 rounded-full transition"
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
          <div className="md:hidden border-t border-white/20 bg-black/80 backdrop-blur-md animate-slideDown">
            <div className="px-2 pt-3 pb-4 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.isDropdown ? (
                    // Media Dropdown for Mobile
                    <div>
                      <button
                        onClick={() => setIsMediaDropdownOpen(!isMediaDropdownOpen)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors",
                          pathname.startsWith("/media")
                            ? "text-blue-300 bg-blue-600/30"
                            : "text-white hover:text-blue-300 hover:bg-white/10"
                        )}
                      >
                        {item.label}
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isMediaDropdownOpen && "rotate-180"
                          )} 
                        />
                      </button>
                      
                      {/* Sub-items */}
                      {isMediaDropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              onClick={handleLinkClick}
                              className={cn(
                                "block px-3 py-2 text-sm rounded-md transition-colors",
                                pathname === subItem.href
                                  ? "text-blue-300 bg-blue-600/30 font-semibold"
                                  : "text-gray-300 hover:text-blue-300 hover:bg-white/10"
                              )}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular Link for Mobile
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                        pathname === item.href
                          ? "text-blue-300 bg-blue-600/30"
                          : "text-white hover:text-blue-300 hover:bg-white/10"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="px-3 pt-2 space-y-2">
                <Button
                  className="w-full rounded-full bg-amber-500 hover:bg-amber-600"
                  asChild
                >
                  <Link to="/screen" onClick={handleLinkClick}>
                    Screen Yourself
                  </Link>
                </Button>
                <Button
                  className="w-full rounded-full bg-blue-600 hover:bg-blue-700"
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

