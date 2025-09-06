import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

function ReachoutSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance">
          Still Have Questions?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Our friendly team is here to help. Get in touch with us through any of
          these convenient methods.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-violet-50">
            <CardHeader>
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-heading">Call Us</CardTitle>
              <CardDescription>Speak directly with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">+251 911 123 456</p>
              <p className="text-sm text-muted-foreground mb-4">
                Mon-Fri: 8AM-6PM, Sat: 9AM-4PM
              </p>
              <Button className="w-full hover:bg-muted-foreground cursor-pointer">
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-violet-50">
            <CardHeader>
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-heading">Email Us</CardTitle>
              <CardDescription>Send us a detailed message</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">info@orbitoptical.com</p>
              <p className="text-sm text-muted-foreground mb-4">
                We respond within 24 hours
              </p>
              <Button
                className="w-full bg-transparent hover:bg-primary"
                variant="outline"
                asChild
              >
                <Link to="/contact">Send Email</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 border  border-violet-200 bg-gradient-to-br from-violet-100 to-violet-50">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-heading">Visit Us</CardTitle>
              <CardDescription>Come see us in person</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">Nifas Silk Lafto</p>
              <p className="text-sm text-muted-foreground mb-4">
                Addis Ababa, Ethiopia
              </p>
              <Button
                className="w-full bg-transparent hover:bg-primary"
                variant="outline"
                asChild
              >
                <Link to="/contact">Get Directions</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ReachoutSection;
