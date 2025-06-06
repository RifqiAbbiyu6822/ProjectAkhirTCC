
import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Register dengan username: ${username}, email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-column" style={{ maxWidth: "320px" }}>
      <h2 style={{ color: "#335C67" }}>Register</h2>
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <button type="submit">Register</button>
    </form>
  );
}
