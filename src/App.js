import React, { useEffect, useState } from "react";
import "./index.css";

function FlyingDeppe() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;

  return (
    <img
      src="/deppe-broom.png"
      alt="Flying Deppe"
      className="fixed top-24 left-[-400px] w-52 h-auto animate-deppe-fly z-50 pointer-events-none"
      style={{
        maxWidth: "1000px",
      }}
    />
  );
}

export default function App() {
  return (
    <div className="main-container">
      <FlyingDeppe />
    </div>
  );
}
