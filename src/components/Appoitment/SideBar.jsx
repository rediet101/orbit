import React from "react";
import { Button } from "@/components/ui/button";

import { Phone, MapPin, CheckCircle, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SideBar() {
  return (
    <div className="space-y-6">
      <Card className=" transition-all duration-300 border  border-white-200 bg-gradient-to-br from-white-100 to-white">
        <CardHeader>
          <CardTitle className="font-heading text-[#75B4DA]">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-[#75B4DA]" />
            <div>
              <p className="font-medium text-[#75B4DA]">Phone</p>
              <p className="text-sm text-[#75B4DA]">+251 911 123 456</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-[#75B4DA]" />
            <div>
              <p className="font-medium text-[#75B4DA]">Email</p>
              <p className="text-sm text-[#75B4DA]">
                info@orbitoptical.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#75B4DA]">
            <MapPin className="h-5 w-5 text-[#75B4DA]" />
            <div>
              <p className="font-medium text-[#75B4DA]">Location</p>
              <p className="text-sm text-[#75B4DA]">
                Nifas Silk Lafto, Addis Ababa
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className=" transition-all duration-300 border  border-white-200 bg-gradient-to-br from-white-100 to-white">
        <CardHeader>
          <CardTitle className="font-heading text-[#75B4DA]">Office Hours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-[#75B4DA]">
            <span>Monday - Friday</span>
            <span className="text-[#75B4DA]">8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between text-[#75B4DA]">
            <span>Saturday</span>
            <span className="text-[#75B4DA]">9:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between text-[#75B4DA]">
            <span>Sunday</span>
            <span className="text-[#75B4DA]">Closed</span>
          </div>
        </CardContent>
      </Card>

      <Card className=" transition-all duration-300 border  border-white-200 bg-gradient-to-br from-white-100 to-white">
        <CardHeader>
          <CardTitle className="font-heading text-[#75B4DA]">What to Expect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-2 text-[#75B4DA]">
            <CheckCircle className="h-4 w-4 text-secondary mt-0.5 text-[#75B4DA]" />
            <p className="text-sm">Confirmation call within 24 hours</p>
          </div>
          <div className="flex items-start gap-2 text-[#75B4DA]">
            <CheckCircle className="h-4 w-4 text-secondary mt-0.5 text-[#75B4DA]" />
            <p className="text-sm">Bring valid ID and insurance card</p>
          </div>
          <div className="flex items-start gap-2 text-[#75B4DA]">
            <CheckCircle className="h-4 w-4 text-secondary mt-0.5 text-[#75B4DA]" />
            <p className="text-sm">Arrive 15 minutes early for paperwork</p>
          </div>
          <div className="flex items-start gap-2 text-[#75B4DA]">
            <CheckCircle className="h-4 w-4 text-secondary mt-0.5 text-[#75B4DA]" />
            <p className="text-sm">
              Comprehensive examination and consultation
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#EBEBEB] text-[#75B4DA]">
        <CardHeader>
          <CardTitle className="font-heading">Emergency?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[#75B4DA] mb-3">
            For urgent eye emergencies, call us immediately or visit the nearest
            emergency room.
          </p>
          <Button size="sm" className="w-full bg-white text-[#75B4DA] hover:bg-white/90">
            Call Emergency Line
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SideBar;
