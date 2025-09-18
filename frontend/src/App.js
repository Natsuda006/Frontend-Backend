import React, { useEffect, useState } from "react";
import logo from "./logo.svg"; // ใช้โลโก้ default ที่มากับ React
import "./App.css"; // ใช้ CSS ที่มีมาให้

function App() {
  const [message, setMessage] = useState("กำลังโหลด...");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("โหลดข้อความไม่สำเร็จ"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ข้อความจาก backend: {message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
