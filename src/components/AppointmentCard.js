export default function AppointmentCard({ appointment }) {
  let color = "bg-yellow-500";

  if (appointment.status === "Confirmed") color = "bg-green-500";
  if (appointment.status === "Cancelled") color = "bg-red-500";

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{appointment.patient}</h3>
      <p>Doctor: {appointment.doctor}</p>
      <p>Date: {appointment.date}</p>

      <span
        className={`inline-block mt-2 px-3 py-1 text-white rounded ${color}`}
      >
        {appointment.status}
      </span>
    </div>
  );
}
