import { useState, useEffect } from "react";
import AppointmentCard from "../components/AppointmentCard";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
  });

  useEffect(() => {
    setAppointments(JSON.parse(localStorage.getItem("appointments")) || []);
  }, []);

  const save = (data) => {
    setAppointments(data);
    localStorage.setItem("appointments", JSON.stringify(data));
  };

  const book = () => {
    if (!form.patient || !form.doctor) return;
    save([...appointments, { ...form, status: "Pending" }]);
    setForm({ patient: "", doctor: "", date: "" });
  };

  const updateStatus = (index, status) => {
    const updated = [...appointments];
    updated[index].status = status;
    save(updated);
  };

  const filtered = appointments.filter((a) =>
    a.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Appointments</h2>

      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search by patient name"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-3 gap-2 mb-4">
        <input
          className="border p-2"
          placeholder="Patient"
          value={form.patient}
          onChange={(e) => setForm({ ...form, patient: e.target.value })}
        />
        <input
          className="border p-2"
          placeholder="Doctor"
          value={form.doctor}
          onChange={(e) => setForm({ ...form, doctor: e.target.value })}
        />
        <input
          type="date"
          className="border p-2"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
      </div>

      <button onClick={book} className="bg-green-600 text-white px-4 py-2 mb-6">
        Book Appointment
      </button>

      {filtered.map((a, i) => (
        <div key={i}>
          <AppointmentCard appointment={a} />
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => updateStatus(i, "Confirmed")}
              className="bg-green-500 text-white px-3 py-1"
            >
              Confirm
            </button>
            <button
              onClick={() => updateStatus(i, "Cancelled")}
              className="bg-red-500 text-white px-3 py-1"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
