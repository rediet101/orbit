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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function AppointmentForm({ onSubmit, doctors = [] }) {
  const [appointmentDate, setAppointmentDate] = useState(dayjs());
  const [appointmentTime, setAppointmentTime] = useState(null);
  const [gender, setGender] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = form.firstName?.value?.trim() || "";
    const lastName = form.lastName?.value?.trim() || "";
    const phone = form.phone?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const age = form.age?.value ? parseInt(form.age.value, 10) : undefined;
    const selectedGender = gender || "";

    const formattedDate = appointmentDate ? appointmentDate.format('YYYY-MM-DD') : "";
    const formattedTime = appointmentTime ? appointmentTime.format('HH:mm') : "";

    // Validation
    if (!selectedDoctorId) {
      alert("Please select a doctor.");
      return;
    }

    if (!formattedDate || !formattedTime) {
      alert("Please select both a date and time for your appointment.");
      return;
    }

    if (!firstName || !lastName) {
      alert("Please enter your full name.");
      return;
    }

    if (!phone) {
      alert("Please enter your phone number.");
      return;
    }

    // Payload format matching the API requirements
    const payload = {
      doctor_id: selectedDoctorId,
      appointment_date: formattedDate,
      start_time: formattedTime,
      patient_name: `${firstName} ${lastName}`.trim(),
      email,
      phone_number: phone,
      age,
      gender: selectedGender || undefined,
      source: "Website",
    };

    onSubmit?.(payload, selectedDoctorId);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="lg:col-span-2">
        <Card className="transition-all duration-300 border border-[#75B4DA]/20 bg-white shadow-xl shadow-[#75B4DA]/20">
          <CardHeader>
            <CardTitle className="font-heading text-[#75B4DA]">
              Appointment Request Form
            </CardTitle>
            <CardDescription className="text-[#75B4DA]/70">
              Please provide your information and we'll contact you to schedule
              your appointment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-[#75B4DA]">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#75B4DA]">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      placeholder="Jane"
                      className="border-[#75B4DA]/20 focus:border-[#75B4DA]/50 focus:ring-[#75B4DA]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#75B4DA]">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      placeholder="Doe"
                      className="border-[#75B4DA]/20 focus:border-[#75B4DA]/50 focus:ring-[#75B4DA]/20"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#75B4DA]">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="07012345678"
                      className="border-[#75B4DA]/20 focus:border-[#75B4DA]/50 focus:ring-[#75B4DA]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#75B4DA]">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="border-[#75B4DA]/20 focus:border-[#75B4DA]/50 focus:ring-[#75B4DA]/20"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-[#75B4DA]">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      min="1"
                      max="120"
                      required
                      placeholder="28"
                      className="border-[#75B4DA]/20 focus:border-[#75B4DA]/50 focus:ring-[#75B4DA]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-[#75B4DA]">Gender *</Label>
                    <Select onValueChange={setGender} required>
                      <SelectTrigger className="border-[#75B4DA]/20 focus:border-[#75B4DA]/50 focus:ring-[#75B4DA]/20">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Appointment Preferences */}
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-[#75B4DA]">Appointment Preferences</h3>

                {/* Doctor, Date and Time in one row */}
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Doctor Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="doctor" className="text-[#75B4DA]">Select Doctor *</Label>
                    <Select onValueChange={setSelectedDoctorId} required>
                      <SelectTrigger className="border-[#75B4DA]/20 focus:border-[#75B4DA]/50 focus:ring-[#75B4DA]/20">
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id}>
                            {doctor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label htmlFor="appointmentDate" className="text-[#75B4DA]">Appointment Date *</Label>
                    <DatePicker
                      value={appointmentDate}
                      onChange={(newValue) => setAppointmentDate(newValue)}
                      format="DD/MM/YYYY"
                      minDate={dayjs()}
                      slotProps={{
                        textField: {
                          size: "small",
                          fullWidth: true,
                          sx: {
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "6px",
                              "& fieldset": { borderColor: "rgb(191 219 254)" },
                              "&:hover fieldset": { borderColor: "rgb(59 130 246)" },
                              "&.Mui-focused fieldset": { borderColor: "rgb(59 130 246)" },
                            },
                          },
                        },
                      }}
                    />
                  </div>

                  {/* Time Picker */}
                  <div className="space-y-2">
                    <Label htmlFor="appointmentTime" className="text-[#75B4DA]">Appointment Time *</Label>
                    <TimePicker
                      value={appointmentTime}
                      onChange={(newValue) => setAppointmentTime(newValue)}
                      format="HH:mm"
                      ampm={false}
                      slotProps={{
                        textField: {
                          size: "small",
                          fullWidth: true,
                          sx: {
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "6px",
                              "& fieldset": { borderColor: "rgb(191 219 254)" },
                              "&:hover fieldset": { borderColor: "rgb(59 130 246)" },
                              "&.Mui-focused fieldset": { borderColor: "rgb(59 130 246)" },
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#75B4DA] hover:bg-[#75B4DA]/80 text-white">
                Submit Appointment Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </LocalizationProvider>
  );
}

export default AppointmentForm;
