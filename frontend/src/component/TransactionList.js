
import React from "react";

export default function TransactionList({ transactions }) {
  if (!transactions.length) return <p>Tidak ada transaksi.</p>;

  return (
    <div className="flex-column">
      {transactions.map((tx) => (
        <div key={tx.id} className="card">
          <p><strong>ID Transaksi:</strong> {tx.id}</p>
          <p><strong>Kamera:</strong> {tx.cameraName}</p>
          <p><strong>Jumlah:</strong> {tx.amount}</p>
          <p><strong>Tanggal:</strong> {new Date(tx.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
