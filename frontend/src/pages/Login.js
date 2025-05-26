
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login dengan username: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-column" style={{ maxWidth: "320px" }}>
      <h2 style={{ color: "#335C67" }}>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "12px"
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "12px"
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
}
