export default function Topbar({ username }) {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h2 className="text-xl font-semibold">
        Hospital Management System
      </h2>
      <span className="text-gray-600">👤 {username}</span>
    </div>
  );
}
