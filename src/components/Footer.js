export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Local Hospital Management System. All rights reserved.
        </p>
        <p className="text-sm mt-1">
          Developed by <span className="font-semibold">Hospital IT Team</span>
        </p>
      </div>
    </footer>
  );
}
