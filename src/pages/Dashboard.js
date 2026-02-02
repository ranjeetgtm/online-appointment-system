import { useEffect, useState } from "react";
import StatCard from "../components/Statcard";
import AppointmentCard from "../components/AppointmentCard";

export default function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
  });

  const doctors = [
  "Ranjit Gautam – Physician",
    "Bishal Pandey – Surgeon",
    "Sanjay chudali – Pediatrician",
    "Sujan Bashyal  – skin and sexual disease",
    "Sandesh Bhandari – cardiologist",
    "Rajni Gautam – General",
  ];

  useEffect(() => {
    setPatients(JSON.parse(localStorage.getItem("patients")) || []);
    setAppointments(
      JSON.parse(localStorage.getItem("appointments")) || []
    );
  }, []);

  const bookAppointment = () => {
    if (!form.patient || !form.doctor || !form.date) return;

    const newAppointment = {
      ...form,
      status: "Pending",
    };

    const updated = [...appointments, newAppointment];
    setAppointments(updated);
    localStorage.setItem(
      "appointments",
      JSON.stringify(updated)
    );

    setForm({ patient: "", doctor: "", date: "" });
  };

  const today = new Date().toISOString().split("T")[0];

  const appointmentsToday = appointments.filter(
    (a) =>
      a.date === today && a.status !== "Cancelled"
  );

  const upcomingVisits = appointments.filter(
    (a) => a.status !== "Cancelled"
  );

  return (
    <div className="space-y-6">
      {/* 🔝 TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Patients"
          value={patients.length}
        />
        <StatCard
          title="Appointments Today"
          value={appointmentsToday.length}
        />
        <StatCard
          title="Doctors Available"
          value={doctors.length}
        />
      </div>

      {/* 🔝 UPCOMING VISITS */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-3">
          Upcoming Visits
        </h2>

        {upcomingVisits.length === 0 && (
          <p className="text-gray-500">
            No upcoming visits
          </p>
        )}

        {upcomingVisits.map((a, i) => (
          <AppointmentCard
            key={i}
            appointment={a}
          />
        ))}
      </div>

      {/* 🔽 MAIN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT – PATIENT LIST */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-3">
            Patients
          </h2>

          {patients.length === 0 && (
            <p className="text-gray-500">
              No patients added
            </p>
          )}

          {patients.map((p, i) => (
            <div key={i} className="border-b py-2">
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-500">
                Report: {p.report}
              </p>
            </div>
          ))}
        </div>

        {/* MIDDLE – DOCTORS AVAILABLE */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-3">
            Doctors Available
          </h2>

          {doctors.map((d, i) => (
            <div
              key={i}
              className="border-b py-2 flex justify-between"
            >
              <span>{d}</span>
              <span className="text-green-600 text-sm">
                Available
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT – BOOK APPOINTMENT */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-3">
            Book Appointment
          </h2>

          <div className="space-y-3">
            <input
              className="border p-2 w-full rounded"
              placeholder="Patient Name"
              value={form.patient}
              onChange={(e) =>
                setForm({
                  ...form,
                  patient: e.target.value,
                })
              }
            />

            <input
              className="border p-2 w-full rounded"
              placeholder="Doctor Name"
              value={form.doctor}
              onChange={(e) =>
                setForm({
                  ...form,
                  doctor: e.target.value,
                })
              }
            />

            <input
              type="date"
              className="border p-2 w-full rounded"
              value={form.date}
              onChange={(e) =>
                setForm({
                  ...form,
                  date: e.target.value,
                })
              }
            />

            <button
              onClick={bookAppointment}
              className="bg-blue-700 hover:bg-blue-800 text-white w-full py-2 rounded"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
