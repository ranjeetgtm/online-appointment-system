export default function Sidebar({ setPage }) {
  return (
    <div className="w-64 bg-blue-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-6">🏥 Hospital</h1>

      <nav className="space-y-3">
        <button onClick={() => setPage("dashboard")} className="block">
          Dashboard
        </button>

        <button onClick={() => setPage("patients")} className="block">
          Patients
        </button>

        <button onClick={() => setPage("appointments")} className="block">
          Appointments
        </button>

        <button onClick={() => setPage("doctors")} className="block">
          Doctors
        </button>

      
      </nav>
    </div>
  );
}
