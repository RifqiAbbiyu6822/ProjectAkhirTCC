
import React from "react";

export default function UserList({ users }) {
  if (!users.length) return <p>Tidak ada pengguna.</p>;

  return (
    <div className="flex-column">
      {users.map((user) => (
        <div key={user.id} className="card">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  );
}
