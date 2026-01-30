import React, { useState, useEffect } from "react";
import { Mail, Phone, UserCheck, Clock, Calendar, X } from "lucide-react";
import logo from "../../assets/Logo/Logo1-01.svg";

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
    <div className="py-16 bg-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-start">
          {/* Left Side - 2x2 Doctor Grid */}
          <div className="lg:col-span-7 lg:pr-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {activeDoctors.map((doctor) => (
                <div key={doctor.id} className="group">
                  {/* Image with New Badge */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <div className="w-full h-40 bg-[#75B4DA] flex items-center justify-center">
                      <div className="w-32 h-32 bg-[#EBEBEB] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-5xl font-bold text-black/40">
                          {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    </div>
                    {/* New Badge */}
                    <div className="absolute bottom-0 right-0">
                      <div className="bg-[#EBEBEB] text-black text-xs font-bold px-4 py-1.5">
                        New
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-montserrat font-bold text-black mb-2">
                    {doctor.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#213D66]/60 text-sm leading-relaxed mb-3 line-clamp-3 font-open-sans">
                    Experienced medical professional providing comprehensive healthcare services with dedication and expertise.
                  </p>
                  
                  {/* Check Availability Link */}
                  <button
                    onClick={() => handleCheckAvailability(doctor)}
                    className="text-[#75B4DA] text-sm font-semibold uppercase tracking-wide hover:text-[#75B4DA]/80 transition-colors inline-flex items-center gap-1"
                  >
                    Check Availability
                    <span>›</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider Line */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px h-full min-h-[1300px] bg-[#75B4DA]"></div>
          </div>

          {/* Right Side - Title and Description */}
          <div className="lg:col-span-4 lg:pl-8 relative flex flex-col items-center text-center ">
            <div className="mb-6 sticky top-0">
              <img src={logo} alt="Orbit Logo" className="h-26 w-auto mb-6 mx-auto" />
              <h2 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
                <span className="text-black">Our </span>
                <span className="text-[#75B4DA] italic">Medical Team</span>
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-sm font-open-sans">
                At orbit, we provide comprehensive healthcare that covers a wide range of specialties and services to meet the diverse needs of our patients.
              </p>
            </div>
            
            {/* Decorative dot and line - positioned at left edge to connect to divider */}
            <div className="hidden lg:flex items-center absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2">
              <div className="w-10.5 h-0.5 bg-[#75B4DA]"></div>
              <div className="w-4 h-4 bg-[#75B4DA] rounded-full -mr-2"></div>
            </div>
          </div>
        </div>

        {/* Availability Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
              {/* Modal Header */}
              <div className="bg-[#75B4DA] p-6 text-white relative">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#75B4DA]">
                      {selectedDoctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
                    <p className="text-white text-sm">Availability Schedule</p>
                  </div>
                </div>
              </div>

              {/* Modal Body - Availability Schedule */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-gray-700">
                  <Calendar className="w-5 h-5 text-[#75B4DA]" />
                  <span className="font-semibold">
                    {availability ? `${availability.weekday}, ${availability.date}` : 'Available Times'}
                  </span>
                </div>

                <div className="space-y-3">
                  {availabilityLoading ? (
                    <div className="text-center py-8">
                      <div className="w-8 h-8 border-4 border-[#75B4DA] border-t-[#75B4DA] rounded-full animate-spin mx-auto mb-3"></div>
                      <p className="text-gray-500">Loading availability...</p>
                    </div>
                  ) : availability && availability.time_slots.length > 0 ? (
                    availability.time_slots.map((slot, index) => (
                      <div
                        key={index}
                        className="bg-[#75B4DA] rounded-lg p-4 border border-[#75B4DA]"
                      >
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4 text-white" />
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