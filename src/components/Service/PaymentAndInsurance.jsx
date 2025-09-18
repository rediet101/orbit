"use client"; // if using Next.js app router

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard, Shield, DollarSign } from "lucide-react";
import parse from "html-react-parser";

function PaymentAndInsurance() {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchPaymentInfo = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_LINK}services`);
      const data = await res.json();
      setPaymentInfo(data.paymentInfo); // assuming API returns { paymentInfo: [...] }
    } catch (err) {
      console.error("Failed to fetch payment info:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchPaymentInfo();
}, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-lg text-muted-foreground">
        Loading payment information...
      </div>
    );
  }

  // Helper to pick icons based on title
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "payment methods":
        return <CreditCard className="h-12 w-12 text-primary mb-4" />;
      case "insurance partners":
        return <Shield className="h-12 w-12 text-primary mb-4" />;
      case "flexible options":
        return <DollarSign className="h-12 w-12 text-primary mb-4" />;
      default:
        return <CheckCircle className="h-12 w-12 text-primary mb-4" />;
    }
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-thin text-3xl lg:text-5xl text-balance">
            Payment & Insurance Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We accept various payment methods and work with major insurance
            providers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paymentInfo.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-xl transition-all duration-300 border border-green-200 bg-gradient-to-br from-green-100 to-white"
            >
              <CardHeader>
                {getIcon(item.title)}
                <CardTitle className="font-heading">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {item.services_list
                    .replace(/<\/?p>/g, "") // remove <p> tags
                    .split("<br>")
                    .map((line, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        {line.trim()}
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PaymentAndInsurance;
