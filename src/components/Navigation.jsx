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
import { Menu, X, ChevronDown, CalendarPlus, ClipboardList } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import logo from "../assets/Logo/Logo1-01.svg";

export function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav 
      className={cn(
        "fixed z-50 transition-all duration-1000 ease-in-out",
        isScrolled 
          ? "top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-b-3xl bg-blue-50/95 backdrop-blur-md shadow-2xl border-x border-b border-blue-100 py-1" 
          : "top-0 left-0 right-0 bg-black/10 backdrop-blur-[2px] py-1"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-17">

          {/* LEFT: LOGO */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Orbit Optical"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* CENTER: DESKTOP NAV */}
          <div className="hidden md:flex justify-center items-center gap-6 lg:gap-10">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.isDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsMediaDropdownOpen(!isMediaDropdownOpen)}
                      className={cn(
                        "flex items-center gap-1 transition-colors duration-200 relative h-17 whitespace-nowrap",
                        isScrolled 
                          ? "text-sm lg:text-lg text-gray-700 hover:text-blue-600" 
                          : "text-md lg:text-lg text-white hover:text-blue-400",
                        pathname.startsWith("/media") && (isScrolled ? "text-blue-600 font-semibold" : "text-blue-400 font-semibold")
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
                        <span className="absolute bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"></span>
                      )}
                    </button>
                    
                    {isMediaDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
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
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center transition-colors duration-200 relative h-16 whitespace-nowrap",
                      isScrolled 
                        ? "text-sm lg:text-lg text-gray-700 hover:text-blue-600" 
                        : "text-base lg:text-lg text-white hover:text-blue-400",
                      pathname === item.href && (isScrolled ? "text-blue-600 font-semibold" : "text-blue-400 font-semibold")
                    )}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="absolute bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: ACTION ICONS & MOBILE BUTTON */}
          <div className="flex justify-end items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link 
                to="/appointment" 
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isScrolled ? "text-blue-600 hover:bg-blue-100" : "text-blue-400 hover:bg-white/10"
                )}
                title="Book Appointment"
              >
                <CalendarPlus className="h-6 w-6" />
              </Link>
              <Link 
                to="/screen" 
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isScrolled ? "text-blue-600 hover:bg-blue-100" : "text-blue-400 hover:bg-white/10"
                )}
                title="Screen Yourself"
              >
                <ClipboardList className="h-6 w-6" />
              </Link>
            </div>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isScrolled ? "text-blue-600 hover:bg-blue-100" : "text-white hover:bg-blue-400"
                )}
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </Button>
            </div>
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
                            ? "text-blue-400 bg-blue-600/10"
                            : "text-white hover:text-blue-400 hover:bg-white/10"
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
                                  ? "text-blue-400 bg-blue-600/10 font-semibold"
                                  : "text-gray-300 hover:text-blue-400 hover:bg-white/10"
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
                          ? "text-blue-400 bg-blue-600/10"
                          : "text-white hover:text-blue-400 hover:bg-white/10"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="px-3 pt-2 space-y-2">
                <Button
                  className="w-full rounded-md bg-blue-600 hover:bg-blue-700 font-semibold"
                  asChild
                >
                  <Link to="/appointment" onClick={handleLinkClick}>
                    Book Appointment
                  </Link>
                </Button>
                <Button
                  className="w-full rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 font-semibold backdrop-blur-sm"
                  asChild
                >
                  <Link to="/screen" onClick={handleLinkClick}>
                    Screen Yourself
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

