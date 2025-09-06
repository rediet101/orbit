import React, { useState } from "react";
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
import { CheckCircle } from "lucide-react";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto" />
            <h1 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
              Message Sent Successfully!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for contacting Orbit Optical Clinic. We have received
              your message and will respond within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Card className=" transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-violet-100">
        <CardHeader>
          <CardTitle className="font-heading text-3xl mb-1">
            Send Us a Message
          </CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+251 911 123 456"
                  className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                />
              </div>
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="subject">Subject *</Label>
              <Select>
                <SelectTrigger className="border-1 border-muted-foreground focus:border-primary focus:ring-0">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="appointment">
                    Appointment Inquiry
                  </SelectItem>
                  <SelectItem value="services">Services Information</SelectItem>
                  <SelectItem value="insurance">Insurance Questions</SelectItem>
                  <SelectItem value="billing">Billing Support</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Please describe how we can help you..."
                className="min-h-[120px] border-1 border-muted-foreground focus:border-primary focus:ring-0"
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Form;
