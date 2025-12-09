import React, { useState, useEffect } from "react";
import { Mail, Phone, UserCheck, Clock, Calendar, X } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  created_at: string;
}

interface ApiResponse {
  success: boolean;
  data: {
    data: Doctor[];
  };
}

interface TimeSlot {
  start_time: string;
  end_time: string;
}

interface AvailabilityData {
  date: string;
  weekday: string;
  time_slots: TimeSlot[];
}

const Doctorlist = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [availability, setAvailability] = useState<AvailabilityData | null>(null);
  const [availabilityLoading, setAvailabilityLoading] = useState(false);

  // Fetch availability when a doctor is selected
  const fetchAvailability = async (doctorId: string) => {
    setAvailabilityLoading(true);
    setAvailability(null);
    try {
      // @ts-ignore
      const apiUrl = import.meta.env?.VITE_EMR_API_BASE_URL;
      // Get current date in YYYY-M-D format
      const today = new Date();
      const dateParam = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
      const response = await fetch(`${apiUrl}/doctor-availabilities/${doctorId}?date=${dateParam}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Availability API response:", data);
        
        // Handle the response structure: { success, data: { date, weekday, time_slots } }
        if (data.success && data.data) {
          setAvailability({
            date: data.data.date,
            weekday: data.data.weekday,
            time_slots: data.data.time_slots || []
          });
        }
      }
    } catch (err) {
      console.error("Error fetching availability:", err);
    } finally {
      setAvailabilityLoading(false);
    }
  };

  // Handle doctor selection
  const handleCheckAvailability = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    fetchAvailability(doctor.id);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // @ts-ignore
        const apiUrl = import.meta.env?.VITE_EMR_API_BASE_URL;
        console.log("Fetching doctors from:", `${apiUrl}/doctors-paginate?per_page=10`);
        
        // Try fetching without authentication (public endpoint)
        const response = await fetch(`${apiUrl}/doctors-paginate?per_page=10`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Doctors API response:", data);
          
          // Handle different possible response structures
          if (data.success && data.data?.data && Array.isArray(data.data.data)) {
            setDoctors(data.data.data);
          } else if (data.success && Array.isArray(data.data)) {
            setDoctors(data.data);
          } else if (Array.isArray(data)) {
            setDoctors(data);
          } else {
            console.log("Unexpected API response structure");
            setDoctors([]);
          }
        } else {
          console.log("API response not OK:", response.status);
          setDoctors([]);
        }
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-lg font-medium text-blue-600">
              Loading our medical team...
            </div>
          </div>
        </div>
      </div>
    );
  }

  const activeDoctors = doctors;

  return (
    <div className="py-16 bg-[#DFF3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Our Medical Team
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 "></div>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Meet our experienced and dedicated medical professionals committed to providing you with the best eye care
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Doctor Avatar */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-blue-600">
                    {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {doctor.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span className="truncate">{doctor.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>{doctor.phone}</span>
                  </div>
                </div>

                {/* Check Availability Button */}
                <button
                  onClick={() => handleCheckAvailability(doctor)}
                  className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                >
                  <Clock className="w-4 h-4" />
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Availability Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white relative">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {selectedDoctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
                    <p className="text-blue-100 text-sm">Availability Schedule</p>
                  </div>
                </div>
              </div>

              {/* Modal Body - Availability Schedule */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-gray-700">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">
                    {availability ? `${availability.weekday}, ${availability.date}` : 'Available Times'}
                  </span>
                </div>

                <div className="space-y-3">
                  {availabilityLoading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-3"></div>
                      <p className="text-gray-500">Loading availability...</p>
                    </div>
                  ) : availability && availability.time_slots.length > 0 ? (
                    availability.time_slots.map((slot, index) => (
                      <div
                        key={index}
                        className="bg-blue-50 rounded-lg p-4 border border-blue-100"
                      >
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">{slot.start_time} - {slot.end_time}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-500 py-4">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p>No available time slots for today.</p>
                      <p className="text-sm">Please contact us for scheduling.</p>
                    </div>
                  )}
                </div>

                {/* Contact Button */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setSelectedDoctor(null)}
                    className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctorlist;
