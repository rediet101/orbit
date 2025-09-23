import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Appoitment/Hero";
import SideBar from "@/components/Appoitment/SideBar";
import AppointmentForm from "@/components/Appoitment/AppointmentForm";
import SubmissionSuccess from "@/components/Appoitment/SubmissionSuccess";

export default function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (payload) => {
    try {
      setSubmitting(true);
      const res = await fetch(
        `${import.meta.env.VITE_EMR_API_BASE_URL}/appointments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to submit appointment");
      }
      setIsSubmitted(true);
    } catch (err) {
      alert(err.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <SubmissionSuccess onBookAnother={() => setIsSubmitted(false)} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <AppointmentForm onSubmit={handleSubmit} />
            <SideBar />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
