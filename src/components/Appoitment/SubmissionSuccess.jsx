import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

function SubmissionSuccess({ onBookAnother }) {
  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <CheckCircle className="h-16 w-16 text-[#75B4DA] mx-auto" />
        <h1 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
          Appointment Request Submitted!
        </h1>
        <p className="text-lg text-muted-foreground">
          Thank you for choosing Orbit Optical Clinic. We have received your
          appointment request and will contact you within 24 hours to confirm
          your appointment time.
        </p>
        <div className="bg-white p-6 rounded-lg border border-[#75B4DA]">
          <h3 className="font-heading font-semibold mb-4">
            What happens next?
          </h3>
          <ul className="space-y-2 text-left">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#75B4DA]" />
              Our team will review your request
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#75B4DA]" />
              We'll call you to confirm your preferred time
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-secondary" />
              You'll receive appointment details via SMS/email
            </li>
          </ul>
        </div>
        <Button onClick={onBookAnother} className="bg-[#75B4DA] hover:bg-[#75B4DA]/80 text-white">Book Another Appointment</Button>
      </div>
    </div>
  );
}

export default SubmissionSuccess;
