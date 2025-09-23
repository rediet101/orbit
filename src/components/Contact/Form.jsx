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
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
const API_URL = import.meta.env.VITE_API_LINK + 'contact';
function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, subject: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phonenumber: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show backend error message if available
        setError(data?.data?.message || "Something went wrong.");
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
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
      <Card className="transition-all duration-300 border border-violet-200 bg-gradient-to-br from-violet-100 to-violet-100">
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
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                  className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
    value={formData.phone}
    onChange={(e) => {
      // Remove non-digit characters
      const digitsOnly = e.target.value.replace(/\D/g, "");
      // Limit to 10 digits max
      if (digitsOnly.length <= 10) {
        setFormData({ ...formData, phone: digitsOnly });
      }
    }}
    placeholder="Enter phone number (6-10 digits)"
    className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
  />
  {formData.phone && (formData.phone.length < 6 || formData.phone.length > 10) && (
    <p className="text-red-500 text-sm">Phone number must be 6 to 10 digits.</p>
  )}
</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="border-1 border-muted-foreground focus:border-primary focus:ring-0">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Appointment Inquiry">
                    Appointment Inquiry
                  </SelectItem>
                  <SelectItem value="Services Information">
                    Services Information
                  </SelectItem>
                  <SelectItem value="Insurance Questions">
                    Insurance Questions
                  </SelectItem>
                  <SelectItem value="Billing Support">Billing Support</SelectItem>
                  <SelectItem value="Feedback">Feedback</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe how we can help you..."
                className="min-h-[120px] border-1 border-muted-foreground focus:border-primary focus:ring-0"
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Form;
