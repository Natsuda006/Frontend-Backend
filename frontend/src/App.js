import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("กำลังโหลด...");
  const [currentTime, setCurrentTime] = useState("กำลังโหลดเวลา...");
  const [darkMode, setDarkMode] = useState(false);

  const fetchTime = () => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => setCurrentTime(data.currentTime))
      .catch(() => setCurrentTime("โหลดเวลาไม่สำเร็จ"));
  };

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("โหลดข้อความไม่สำเร็จ"));

    fetchTime();
  }, []);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ข้อความจาก backend: {message}</p>
        <p>เวลาปัจจุบันจาก backend: {currentTime}</p>

        <button onClick={fetchTime}>Refresh เวลา</button>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
    </div>
  );
}

export default App;
