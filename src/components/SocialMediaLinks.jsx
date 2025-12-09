import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function SocialMediaLinks() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      color: "hover:bg-[#1877F2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:bg-[#0A66C2]",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com",
      color: "hover:bg-[#FF0000]",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .social-link {
          animation: slideInRight 0.5s ease-out forwards;
        }

        .feedback-btn {
          animation: slideInRight 0.5s ease-out forwards, pulse 2s ease-in-out infinite;
        }

        .social-link:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
        .social-link:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
        .social-link:nth-child(3) { animation-delay: 0.3s; opacity: 0; }
        .social-link:nth-child(4) { animation-delay: 0.4s; opacity: 0; }
        .social-link:nth-child(5) { animation-delay: 0.5s; opacity: 0; }
        .feedback-btn { animation-delay: 0s; opacity: 0; }
      `}</style>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {/* Feedback Button */}
          <Link
            to="/contact"
            className="feedback-btn group relative flex flex-col items-center justify-center py-4 px-3 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:from-blue-600 hover:to-blue-700"
            aria-label="Feedback"
          >
            <MessageCircle className="w-5 h-5 text-white mb-2" />
            <span className="text-white font-semibold text-sm whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>Feedback</span>
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Send us your feedback
            </span>
          </Link>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          {/* Social Links */}
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link group relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl ${social.color}`}
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
              
              {/* Tooltip */}
              <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
