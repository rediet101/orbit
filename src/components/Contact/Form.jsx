// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { CheckCircle } from "lucide-react";
// import { Footer } from "@/components/Footer";
// import { Navigation } from "@/components/Navigation";
// const API_URL = import.meta.env.VITE_API_LINK + 'contact';
// function Form() {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSelectChange = (value) => {
//     setFormData({ ...formData, subject: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: `${formData.firstName} ${formData.lastName}`,
//           email: formData.email,
//           phonenumber: formData.phone,
//           subject: formData.subject,
//           message: formData.message,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         // Show backend error message if available
//         setError(data?.data?.message || "Something went wrong.");
//       } else {
//         setIsSubmitted(true);
//       }
//     } catch (err) {
//       setError("Failed to submit. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <div className="py-20">
//           <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
//             <CheckCircle className="h-16 w-16 text-secondary mx-auto" />
//             <h1 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
//               Message Sent Successfully!
//             </h1>
//             <p className="text-lg text-muted-foreground">
//               Thank you for contacting Orbit Optical Clinic. We have received
//               your message and will respond within 24 hours.
//             </p>
//             <Button onClick={() => setIsSubmitted(false)}>
//               Send Another Message
//             </Button>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Card className="transition-all duration-300 border border-violet-200 bg-gradient-to-br from-violet-100 to-violet-100">
//         <CardHeader>
//           <CardTitle className="font-heading text-3xl mb-1">
//             Send Us a Message
//           </CardTitle>
//           <CardDescription>
//             Fill out the form below and we'll get back to you as soon as
//             possible.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="firstName">First Name *</Label>
//                 <Input
//                   id="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                   placeholder="John"
//                   className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="lastName">Last Name *</Label>
//                 <Input
//                   id="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                   placeholder="Doe"
//                   className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
//                 />
//               </div>
//             </div>
//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email Address *</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john.doe@example.com"
//                   required
//                   className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
//                 />
//               </div>
//              <div className="space-y-2">
//   <Label htmlFor="phone">Phone Number</Label>
//   <Input
//     id="phone"
//     type="tel"
//     value={formData.phone}
//     onChange={(e) => {
//       // Remove non-digit characters
//       const digitsOnly = e.target.value.replace(/\D/g, "");
//       // Limit to 10 digits max
//       if (digitsOnly.length <= 10) {
//         setFormData({ ...formData, phone: digitsOnly });
//       }
//     }}
//     placeholder="Enter phone number (6-10 digits)"
//     className="border-1 border-muted-foreground focus:border-primary focus:ring-0"
//   />
//   {formData.phone && (formData.phone.length < 6 || formData.phone.length > 10) && (
//     <p className="text-red-500 text-sm">Phone number must be 6 to 10 digits.</p>
//   )}
// </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="subject">Subject *</Label>
//               <Select onValueChange={handleSelectChange}>
//                 <SelectTrigger className="border-1 border-muted-foreground focus:border-primary focus:ring-0">
//                   <SelectValue placeholder="Select a subject" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="Appointment Inquiry">
//                     Appointment Inquiry
//                   </SelectItem>
//                   <SelectItem value="Services Information">
//                     Services Information
//                   </SelectItem>
//                   <SelectItem value="Insurance Questions">
//                     Insurance Questions
//                   </SelectItem>
//                   <SelectItem value="Billing Support">Billing Support</SelectItem>
//                   <SelectItem value="Feedback">Feedback</SelectItem>
//                   <SelectItem value="Other">Other</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="message">Message *</Label>
//               <Textarea
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Please describe how we can help you..."
//                 className="min-h-[120px] border-1 border-muted-foreground focus:border-primary focus:ring-0"
//                 required
//               />
//             </div>

//             {error && <p className="text-red-500">{error}</p>}

//             <Button type="submit" size="lg" className="w-full" disabled={loading}>
//               {loading ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Form;



/////##################### new code #########################/////

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
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const API_URL = import.meta.env.VITE_API_LINK + "contact";

function ContactForm() {
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
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    if (digits.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: digits }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phonenumber: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data?.data?.message || "Failed to send message.");
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Success State
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
        <Navigation />
        <div className="flex-1 py-20 lg:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
              <CheckCircle2 className="h-20 w-20 text-primary relative z-10" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Message Sent Successfully!
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Thank you for reaching out to <span className="font-semibold text-primary">Orbit Optical Clinic</span>. 
              We’ve received your message and will respond within <strong>24 hours</strong>.
            </p>
            <Button
              size="lg"
              onClick={() => setIsSubmitted(false)}
              className="group"
            >
              <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Send Another Message
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Form State
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Card */}
        <Card className="group relative overflow-hidden rounded-3xl bg-card/95 backdrop-blur-sm border border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-60 group-hover:opacity-80 transition-opacity"></div>

          <CardHeader className="relative z-10 pb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-3xl lg:text-4xl font-bold text-foreground">
                Get in Touch
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              Fill out the form below and we’ll respond within <strong>24 hours</strong>.
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                    className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                    className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john.doe@example.com"
                    className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="911123456"
                    className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  {formData.phone && (formData.phone.length < 6 || formData.phone.length > 10) && (
                    <p className="text-sm text-red-500 animate-fade-in">Phone must be 6–10 digits</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="font-medium">Subject *</Label>
                <Select onValueChange={handleSelectChange} value={formData.subject}>
                  <SelectTrigger className="h-12 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <SelectValue placeholder="Choose a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Appointment Inquiry",
                      "Services Information",
                      "Insurance Questions",
                      "Billing Support",
                      "Feedback",
                      "Other",
                    ].map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="font-medium">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you today? Please include any details about your eye care needs..."
                  className="min-h-32 resize-none border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm animate-fade-in">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg font-semibold group relative overflow-hidden"
                disabled={loading}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
            </form>
          </CardContent>

          {/* Hover Glow Border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>
        </Card>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.4s ease-out; }
      `}</style>
    </div>
  );
}

export default ContactForm;