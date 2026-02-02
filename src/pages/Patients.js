import { useState, useEffect } from "react";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [report, setReport] = useState("");

  useEffect(() => {
    setPatients(JSON.parse(localStorage.getItem("patients")) || []);
  }, []);

  const addPatient = () => {
    if (!name) return;
    const updated = [...patients, { name, report }];
    setPatients(updated);
    localStorage.setItem("patients", JSON.stringify(updated));
    setName("");
    setReport("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Patients & Reports</h2>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <input
          className="border p-2"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2"
          placeholder="Report (e.g. Fever, BP)"
          value={report}
          onChange={(e) => setReport(e.target.value)}
        />
      </div>

      <button
        onClick={addPatient}
        className="bg-blue-600 text-white px-4 py-2 mb-4"
      >
        Add Patient
      </button>

      <div className="bg-white p-4 rounded shadow">
        {patients.map((p, i) => (
          <div key={i} className="border-b py-2">
            <p className="font-semibold">{p.name}</p>
            <p className="text-gray-600 text-sm">Report: {p.report}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
