import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Card */}
      <div className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl shadow-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div className="relative z-10 p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 backdrop-blur-sm rounded-2xl bg-blue-100 border border-blue-200">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">
              Contact Information
            </h3>
          </div>
          <p className="mb-8 max-w-xl text-blue-700/70">
            Reach out anytime — we're here to help with your eye care needs.
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 backdrop-blur-sm rounded-xl bg-blue-100 border border-blue-200 transition-colors">
                <Phone className="h-5 w-5 text-blue-600 transition-transform" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Phone</h4>
                <p className="text-lg font-medium text-blue-800">
                  +251 911 123 456
                </p>
                <p className="text-sm text-blue-600/60">
                  Available during office hours
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 backdrop-blur-sm rounded-xl bg-blue-100 border border-blue-200 transition-colors">
                <Mail className="h-5 w-5 text-blue-600 transition-transform" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Email</h4>
                <p className="text-lg font-medium text-blue-800">
                  info@orbitoptical.com
                </p>
                <p className="text-sm text-blue-600/60">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 backdrop-blur-sm rounded-xl bg-blue-100 border border-blue-200 transition-colors">
                <MapPin className="h-5 w-5 text-blue-600 transition-transform" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Location</h4>
                <p className="text-blue-800">Nifas Silk Lafto Sub City</p>
                <p className="text-blue-800">Addis Ababa, Ethiopia</p>
                <p className="text-sm text-blue-600/60">
                  Near Megenagna Bus Station
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors pointer-events-none"></div>
      </div>

      {/* Office Hours */}
      <div className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg shadow-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="relative z-10 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 backdrop-blur-sm rounded-2xl bg-blue-100 border border-blue-200">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900">Office Hours</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-blue-800">
                Monday - Friday
              </span>
              <span className="font-semibold text-blue-600">
                8:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-blue-800">Saturday</span>
              <span className="font-semibold text-blue-600">
                9:00 AM - 4:00 PM
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-blue-800">Sunday</span>
              <span className="text-blue-500/60">Closed</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-100 flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-600" />
            <p className="text-sm text-blue-700/70">
              Emergency services available{" "}
              <span className="font-medium text-blue-600">24/7</span> by
              appointment
            </p>
          </div>
        </div>

        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors pointer-events-none"></div>
      </div>
    </div>
  );
}

export default ContactInfo;
