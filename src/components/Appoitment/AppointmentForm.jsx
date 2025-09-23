import React, { useEffect, useState } from "react";
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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function AppointmentForm({ onSubmit }) {
  const [doctors, setDoctors] = useState([]); // {id,name}
  const [selectedDoctorId, setSelectedDoctorId] = useState("none");
  const [doctorDate, setDoctorDate] = useState(dayjs());
  const [availabilities, setAvailabilities] = useState([]); // normalized from API (legacy)
  const [availableSlots, setAvailableSlots] = useState([]); // strings like "21:00"
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState("");
  const [selectedAvailStart, setSelectedAvailStart] = useState("");
  const [preferredTime, setPreferredTime] = useState(null);
  const [gender, setGender] = useState("");
  const [dateError, setDateError] = useState("");

  // No manual time slots; use doctor's availability time slots

  useEffect(() => {
    async function loadDoctors() {
      try {
        const res = await fetch(`${import.meta.env.VITE_EMR_API_BASE_URL}/get-doctors`);
        if (!res.ok) throw new Error("Failed to load doctors");
        const raw = await res.json();
        const list = Array.isArray(raw?.data?.data) ? raw.data.data : Array.isArray(raw?.data) ? raw.data : [];
        const normalized = list.map((d, idx) => ({
          id: d.id || d.doctor_id || idx.toString(),
          name: d.name || d.doctor?.name || "Unknown Doctor",
        }));
        setDoctors(normalized);
      } catch (e) {
        setDoctors([]);
      }
    }

    async function loadAvailabilities() {
      try {
        const res = await fetch(`${import.meta.env.VITE_EMR_API_BASE_URL}/availabilities`);
        if (!res.ok) throw new Error("Failed to load availabilities");
        const raw = await res.json();
        const list = Array.isArray(raw?.data?.data) ? raw.data.data : Array.isArray(raw?.data) ? raw.data : [];
        const normalized = list.map((a, idx) => ({
          id: a.id || idx.toString(),
          doctorId: a.doctor_id || a.doctor?.id || "",
          doctorName: a.doctor?.name || "Unknown Doctor",
          availableDate: a.available_date || null,
          period: a.period || null, // e.g., Weekdays
          timeSlots: Array.isArray(a.time_slots) ? a.time_slots : [], // [{start_time,end_time}]
        }));
        setAvailabilities(normalized);
      } catch (e) {
        setAvailabilities([]);
      }
    }

    loadDoctors();
    loadAvailabilities();
  }, []);

  useEffect(() => {
    async function fetchSlots() {
      if (!selectedDoctorId || selectedDoctorId === "none" || !doctorDate) {
        setAvailableSlots([]);
        setSlotsError("");
        return;
      }
      try {
        setSlotsLoading(true);
        setSlotsError("");
        setAvailableSlots([]);
        const formattedDate = doctorDate.format('YYYY-MM-DD');
        const res = await fetch(`${import.meta.env.VITE_EMR_API_BASE_URL}/doctor-availabilities/${selectedDoctorId}?date=${encodeURIComponent(formattedDate)}`);
        if (!res.ok) throw new Error("Failed to load doctor's availability");
        const data = await res.json();
        const slots = Array.isArray(data?.data?.time_slots)
          ? data.data.time_slots
          : Array.isArray(data?.time_slots)
          ? data.time_slots
          : [];
        setAvailableSlots(slots.filter(Boolean));
      } catch (err) {
        setSlotsError("Could not load available time slots for this date.");
      } finally {
        setSlotsLoading(false);
      }
    }
    fetchSlots();
  }, [selectedDoctorId, doctorDate]);
  useEffect(() => {
    // Show error if user picked a slot and then chose a date not matching doctor's availability
    if (!selectedDoctorId || selectedDoctorId === "none") {
      setDateError("");
      return;
    }
    if (!doctorDate || !selectedAvailStart) {
      setDateError("");
      return;
    }
    const slotStillAvailable = availableSlots.includes(selectedAvailStart);
    setDateError(slotStillAvailable ? "" : "Selected time is not within the doctor's availability for this date.");
  }, [selectedDoctorId, doctorDate, selectedAvailStart, availableSlots]);

  // 24-hour preferred time list (HH:00)
  const preferredTimeOptions = Array.from({ length: 24 }, (_, h) => `${h.toString().padStart(2, "0")}:00`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = form.firstName?.value?.trim() || "";
    const lastName = form.lastName?.value?.trim() || "";
    const phone = form.phone?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const age = form.age?.value ? parseInt(form.age.value, 10) : undefined;
    const selectedGender = gender || "";

    let appointmentDate = doctorDate ? doctorDate.format('YYYY-MM-DD') : "";
    let startTime = "";
    let doctorId;

    if (selectedDoctorId && selectedDoctorId !== "none") {
      doctorId = selectedDoctorId;
    }

    // Decide start time priority: manual preferredTime first, else doctor's slot
    if (preferredTime) {
      startTime = preferredTime.format('HH:mm');
    } else if (selectedAvailStart) {
      startTime = selectedAvailStart;
    }

    // Validation: require date and at least one of preferredTime or selectedAvailStart
    if (!appointmentDate || !startTime) {
      alert("Please select a preferred date and a time (either manual or from availability).");
      return;
    }
    if (dateError) {
      alert(dateError);
      return;
    }

    const payload = {
      // doctor_id optional
      ...(doctorId ? { doctor_id: doctorId } : {}),
      patient_name: `${firstName} ${lastName}`.trim(),
      appointment_date: appointmentDate,
      start_time: startTime,
      phone_number: phone,
      email,
      age,
      gender: selectedGender ? selectedGender : undefined,
    };

    onSubmit?.(payload);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
                    required
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
                  <Select onValueChange={setGender}>
                    <SelectTrigger className="border-1 border-muted-foreground focus:border-primary focus:ring-0">
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
  <h3 className="font-heading font-semibold">Appointment Preferences</h3>

  {/* Conditional grid */}
  <div
    className={`gap-4 ${
      selectedDoctorId !== "none"
        ? "grid md:grid-cols-2" // 2 columns if doctor selected
        : "grid md:grid-cols-3" // 3 columns otherwise
    }`}
  >
    {/* Doctor */}
    <div className="space-y-2">
      <Label htmlFor="doctor">Doctor</Label>
      <Select
        value={selectedDoctorId}
        onValueChange={(v) => {
          setSelectedDoctorId(v);
          setSelectedAvailStart("");
        }}
      >
        <SelectTrigger className="w-full border-1 border-muted-foreground focus:border-primary focus:ring-0">
          <SelectValue placeholder="Select doctor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">No preference</SelectItem>
          {doctors.map((d) => (
            <SelectItem key={d.id} value={d.id}>
              {d.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    {/* Date */}
    <div className="space-y-2">
      <Label htmlFor="doctorDate">Preferred Date</Label>
      <DatePicker
        value={doctorDate}
        onChange={(newValue) => setDoctorDate(newValue)}
        format="DD/MM/YYYY"
        slotProps={{
          textField: {
            size: "small",
            fullWidth: true,
            sx: {
              "& .MuiOutlinedInput-root": {
                borderRadius: "6px",
                "& fieldset": { borderColor: "rgb(148 163 184)" },
                "&:hover fieldset": { borderColor: "rgb(148 163 184)" },
                "&.Mui-focused fieldset": { borderColor: "rgb(139 92 246)" },
              },
            },
          },
        }}
      />
    </div>

    {/* Only show preferred time if no doctor selected */}
    {selectedDoctorId === "none" && (
      <div className="space-y-2">
        <Label htmlFor="preferredTime">Preferred Time</Label>
        <TimePicker
          value={preferredTime}
          onChange={(newValue) => setPreferredTime(newValue)}
          format="HH:mm"
          ampm={false}
          slotProps={{
            textField: {
              size: "small",
              sx: {
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                  "& fieldset": { borderColor: "rgb(148 163 184)" },
                  "&:hover fieldset": { borderColor: "rgb(148 163 184)" },
                  "&.Mui-focused fieldset": { borderColor: "rgb(139 92 246)" },
                },
              },
            },
          }}
        />
      </div>
    )}
  </div>

  {/* Available slots horizontal if doctor selected */}
  {selectedDoctorId !== "none" && (
    <div className="space-y-2">
      <Label htmlFor="availabilitySlot">Available Slots</Label>
      <div className="flex flex-wrap gap-2">
        {slotsLoading && <span className="text-sm text-muted-foreground">Loading...</span>}
        {!slotsLoading && availableSlots.length === 0 && <span className="text-sm text-muted-foreground">No slots</span>}
        {!slotsLoading &&
          availableSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedAvailStart(slot)}
              className={`px-3 py-2 rounded border text-sm ${
                selectedAvailStart === slot
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-muted-foreground/30"
              }`}
            >
              {slot}
            </button>
          ))}
      </div>
      {slotsError && <p className="text-sm text-red-600">{slotsError}</p>}
    </div>
  )}



              {/* Note: You can choose either an available slot or a preferred time. */}
            </div>

            {/* Medical History
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
            </div> */}

            {/* Additional Notes */}
            {/* <div className="space-y-4">
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
            </div> */}

            <Button type="submit" size="lg" className="w-full">
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
