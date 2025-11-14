import React, { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, Stethoscope, CheckCircle2 } from "lucide-react";

function DoctorAvailability() {
  // Fixed useState for date
  const [date, setDate] = useState(new Date());
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);

  const handleCheckAvailability = () => {
    setChecking(true);
    setTimeout(() => {
      setAvailable(Math.random() > 0.3);
      setChecking(false);
    }, 1200);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            <Stethoscope className="h-3.5 w-3.5 mr-1" />
            Doctor Availability
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Check Doctor Schedule
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a date to see if your preferred doctor is available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Doctor Profile */}
          <Card className="group relative overflow-hidden rounded-3xl bg-card/95 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-60 group-hover:opacity-80 transition-opacity"></div>

            <CardContent className="relative z-10 p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden ring-4 ring-white/50 shadow-xl">
                    <img
                      src="https://i.pravatar.cc/160?u=doctor1"
                      alt="Dr. Alemayehu Kebede"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-3 flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Dr. Alemayehu Kebede
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    Ophthalmologist
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <Badge variant="outline" className="text-xs">
                      15+ Years Experience
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Cataract Specialist
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Expert in comprehensive eye exams, glaucoma treatment, and
                    refractive surgery.
                  </p>
                </div>
              </div>

              {/* Availability Status */}
              {available !== null && date && (
                <div
                  className={`mt-6 p-4 rounded-xl flex items-center gap-3 transition-all duration-500 ${
                    available
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  <CheckCircle2
                    className={`h-5 w-5 ${
                      available ? "text-green-600" : "text-red-600"
                    }`}
                  />
                  <p className="font-medium">
                    {available
                      ? `Available on ${format(date, "MMMM d, yyyy")}`
                      : `Not available on ${format(date, "MMMM d, yyyy")}`}
                  </p>
                </div>
              )}
            </CardContent>

            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>
          </Card>

          {/* Date Picker + Check Button */}
          <Card className="group relative overflow-hidden rounded-3xl bg-card/95 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-60 group-hover:opacity-80 transition-opacity"></div>

            <CardContent className="relative z-10 p-8 lg:p-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    Select Appointment Date
                  </h3>
                </div>

                {/* Simple input for date selection */}
                <div className="flex justify-center mb-4">
                  <input
                    type="date"
                    className="rounded-2xl border border-border/50 p-3 text-center"
                    value={format(date, "yyyy-MM-dd")}
                    onChange={(e) => setDate(new Date(e.target.value))}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Clinic Hours: Mon–Fri 8AM–6PM, Sat 9AM–4PM</span>
                  </div>

                  <Button
                    size="lg"
                    className="w-full h-14 text-lg font-semibold group/btn relative overflow-hidden"
                    onClick={handleCheckAvailability}
                    disabled={checking || !date}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {checking ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Checking...
                        </>
                      ) : (
                        <>
                          <CalendarIcon className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                          Check Availability
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  </Button>
                </div>
              </div>
            </CardContent>

            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors pointer-events-none"></div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need to book with a different doctor?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="/doctors" className="flex items-center gap-2">
              View All Doctors
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default DoctorAvailability;
