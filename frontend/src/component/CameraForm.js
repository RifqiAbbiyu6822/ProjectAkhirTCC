
import React, { useState } from "react";

export default function CameraForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      onAdd({ name, description });
      setName("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-column" style={{ maxWidth: "400px" }}>
      <input
        type="text"
        placeholder="Nama Kamera"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "12px"
        }}
      />
      <textarea
        placeholder="Deskripsi Kamera"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows={4}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "12px",
          resize: "vertical"
        }}
      />
      <button type="submit">Tambah Kamera</button>
    </form>
  );
}
