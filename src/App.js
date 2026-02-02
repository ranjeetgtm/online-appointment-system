import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Footer from "./components/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [username, setUsername] = useState("");

  if (!loggedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-blue-100">
        <div className="bg-white p-6 rounded shadow w-80">
          <h2 className="text-xl font-bold mb-4 text-center">Hospital Login</h2>
          <input
            className="border p-2 w-full mb-3"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="border p-2 w-full mb-3"
            placeholder="Password"
          />
          <button
            onClick={() => username && setLoggedIn(true)}
            className="bg-blue-600 text-white w-full py-2"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    if (page === "dashboard") return <Dashboard />;
    if (page === "patients") return <Patients />;
    if (page === "appointments") return <Appointments />;
    if (page === "doctors") return <Doctors />;
  };

  return (
    <div className="flex h-screen">
      <Sidebar setPage={setPage} />
      <div className="flex-1">
        <Topbar username={username} />
        <div className="p-6">{renderPage()}</div>
          <Footer />
      </div>
    </div>
  );
}

export default App;
