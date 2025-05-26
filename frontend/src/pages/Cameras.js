
import React, { useState } from "react";
import CameraList from "../component/CameraList";
import CameraForm from "../component/CameraForm";

export default function Cameras() {
  const [cameras, setCameras] = useState([
    { id: 1, name: "Canon EOS R5", description: "Kamera mirrorless full frame" },
    { id: 2, name: "Nikon D850", description: "DSLR dengan resolusi tinggi" },
  ]);

  const addCamera = (camera) => {
    setCameras([...cameras, { id: cameras.length + 1, ...camera }]);
  };

  return (
    <section className="flex-column">
      <h2 style={{ color: "#335C67" }}>Daftar Kamera</h2>
      <CameraForm onAdd={addCamera} />
      <CameraList cameras={cameras} />
    </section>
  );
}
