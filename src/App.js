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
    />
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center text-white relative overflow-hidden">
      <FlyingDeppe />
      <h1 className="text-4xl font-bold text-center z-10">
        Hollywood Pepe Presale
      </h1>
    </div>
  );
}
