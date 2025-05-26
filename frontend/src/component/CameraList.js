
import React from "react";

export default function CameraList({ cameras }) {
  if (!cameras.length) return <p>Tidak ada kamera.</p>;

  return (
    <div className="flex" style={{ gap: "24px" }}>
      {cameras.map((camera) => (
        <div key={camera.id} className="card" style={{ width: "280px" }}>
          <h3 style={{ marginBottom: "8px", color: "#335C67" }}>{camera.name}</h3>
          <p>{camera.description}</p>
          <button style={{ marginTop: "12px" }}>Detail</button>
        </div>
      ))}
    </div>
  );
}
