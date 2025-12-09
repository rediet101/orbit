import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Appoitment/Hero";
import SideBar from "@/components/Appoitment/SideBar";
import AppointmentForm from "@/components/Appoitment/AppointmentForm";
import SubmissionSuccess from "@/components/Appoitment/SubmissionSuccess";

export default function AppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_EMR_API_BASE_URL}/doctors-paginate?per_page=10`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data?.data?.length > 0) {
            setDoctors(data.data.data);
          }
        }
      } catch (err) {
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const handleSubmit = async (payload, selectedDoctorId) => {
    try {
      setSubmitting(true);
      const res = await fetch(
        `${import.meta.env.VITE_EMR_API_BASE_URL}/create-appointment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      
      if (!res.ok) {
        // Try to parse JSON error response
        let errorMessage = "Failed to submit appointment";
        try {
          const errorData = await res.json();
          if (errorData.message) {
            errorMessage = errorData.message;
          } else if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch {
          // If not JSON, use status text
          errorMessage = `Error: ${res.status} - ${res.statusText}`;
        }
        throw new Error(errorMessage);
      }
      
      setIsSubmitted(true);
    } catch (err) {
      alert(err.message || "Submission failed. Please try again.");
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
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>

        {/* Floating Bubbles */}
        <div className="absolute top-10 left-[5%] animate-float">
          <div className="w-4 h-4 rounded-full bg-blue-400/20"></div>
        </div>
        <div className="absolute top-20 left-[15%] animate-float-delayed">
          <div className="w-6 h-6 rounded-full bg-cyan-400/20"></div>
        </div>
        <div className="absolute top-32 left-[25%] animate-float-slow">
          <div className="w-3 h-3 rounded-full bg-blue-300/30"></div>
        </div>
        <div className="absolute top-16 right-[10%] animate-float">
          <div className="w-8 h-8 rounded-full bg-blue-400/15"></div>
        </div>
        <div className="absolute top-40 right-[20%] animate-float-delayed">
          <div className="w-5 h-5 rounded-full bg-blue-500/25"></div>
        </div>
        <div className="absolute top-60 right-[5%] animate-float-slow">
          <div className="w-4 h-4 rounded-full bg-cyan-500/20"></div>
        </div>
        <div className="absolute bottom-20 left-[8%] animate-float-delayed">
          <div className="w-7 h-7 rounded-full bg-blue-400/20"></div>
        </div>
        <div className="absolute bottom-40 left-[18%] animate-float">
          <div className="w-3 h-3 rounded-full bg-blue-500/30"></div>
        </div>
        <div className="absolute bottom-32 left-[30%] animate-float-slow">
          <div className="w-5 h-5 rounded-full bg-blue-500/20"></div>
        </div>
        <div className="absolute bottom-16 right-[12%] animate-float">
          <div className="w-6 h-6 rounded-full bg-cyan-300/25"></div>
        </div>
        <div className="absolute bottom-48 right-[25%] animate-float-delayed">
          <div className="w-4 h-4 rounded-full bg-blue-500/20"></div>
        </div>
        <div className="absolute bottom-60 right-[8%] animate-float-slow">
          <div className="w-8 h-8 rounded-full bg-blue-400/15"></div>
        </div>
        <div className="absolute top-1/2 left-[3%] animate-float">
          <div className="w-5 h-5 rounded-full bg-cyan-400/25"></div>
        </div>
        <div className="absolute top-1/3 right-[3%] animate-float-delayed">
          <div className="w-6 h-6 rounded-full bg-blue-300/20"></div>
        </div>
        <div className="absolute top-2/3 left-[12%] animate-float-slow">
          <div className="w-4 h-4 rounded-full bg-blue-400/25"></div>
        </div>
        <div className="absolute top-3/4 right-[15%] animate-float">
          <div className="w-3 h-3 rounded-full bg-blue-500/35"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <AppointmentForm onSubmit={handleSubmit} doctors={doctors} />
            <SideBar />
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(-5deg);
            }
          }

          @keyframes float-slow {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-25px) rotate(8deg);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite 1s;
          }

          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite 0.5s;
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}
