export default function Doctors() {
  const doctors = [
    "Ranjit Gautam – Physician",
    "Bishal Pandey – Surgeon",
    "Sanjay chudali – Pediatrician",
    "Sujan Bashyal  – skin and sexual disease",
    "Sandesh Bhandari – cardiologist",
    "Rajni Gautam – General",
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Doctors</h2>
      <ul className="bg-white p-4 rounded shadow">
        {doctors.map((d, i) => (
          <li key={i} className="border-b py-2">
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
