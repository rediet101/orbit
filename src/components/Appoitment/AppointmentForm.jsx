import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function AppointmentForm({ onSubmit }) {
  return (
    <div className="lg:col-span-2">
      <Card className=" transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-violet-100">
        <CardHeader>
          <CardTitle className="font-heading">
            Appointment Request Form
          </CardTitle>
          <CardDescription>
            Please provide your information and we'll contact you to schedule
            your appointment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    required
                    placeholder="John"
                    className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    required
                    placeholder="Doe"
                    className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+251 911 123 456"
                    className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    min="1"
                    max="120"
                    required
                    className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger className="border-1 border-muted-foreground focus:border-primary focus:ring-0">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Appointment Preferences */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold">
                Appointment Preferences
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed *</Label>
                  <Select>
                    <SelectTrigger className="border-1 border-muted-foreground focus:border-primary focus:ring-0">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comprehensive-exam">
                        Comprehensive Eye Exam
                      </SelectItem>
                      <SelectItem value="glasses-consultation">
                        Glasses Consultation
                      </SelectItem>
                      <SelectItem value="contact-lens">
                        Contact Lens Fitting
                      </SelectItem>
                      <SelectItem value="pediatric-care">
                        Pediatric Eye Care
                      </SelectItem>
                      <SelectItem value="glaucoma-screening">
                        Glaucoma Screening
                      </SelectItem>
                      <SelectItem value="computer-vision">
                        Computer Vision Syndrome
                      </SelectItem>
                      <SelectItem value="other">
                        Other (specify in notes)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select>
                    <SelectTrigger className="border-1 border-muted-foreground focus:border-primary focus:ring-0">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="routine">
                        Routine (within 2 weeks)
                      </SelectItem>
                      <SelectItem value="soon">Soon (within 1 week)</SelectItem>
                      <SelectItem value="urgent">
                        Urgent (within 2-3 days)
                      </SelectItem>
                      <SelectItem value="emergency">
                        Emergency (same day)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Select>
                    <SelectTrigger className="border-1 border-muted-foreground focus:border-primary focus:ring-0">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">
                        Morning (8:00 AM - 12:00 PM)
                      </SelectItem>
                      <SelectItem value="afternoon">
                        Afternoon (12:00 PM - 4:00 PM)
                      </SelectItem>
                      <SelectItem value="evening">
                        Evening (4:00 PM - 6:00 PM)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Medical History */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold">
                Brief Medical History
              </h3>
              <div className="space-y-2">
                <Label htmlFor="currentSymptoms">
                  Current Vision Concerns or Symptoms
                </Label>
                <Textarea
                  id="currentSymptoms"
                  placeholder="Describe any vision problems, eye pain, or concerns you're experiencing..."
                  className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medications">Current Medications</Label>
                <Textarea
                  id="medications"
                  placeholder="List any medications you're currently taking..."
                  className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="previousTreatment">Previous Eye Care</Label>
                <Textarea
                  id="previousTreatment"
                  placeholder="When was your last eye exam? Any previous eye surgeries or treatments?"
                  className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold">
                Additional Information
              </h3>
              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests or Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special accommodations needed, insurance information, or other notes..."
                  className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Appointment Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AppointmentForm;
