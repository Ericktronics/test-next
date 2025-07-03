import React from "react";

export default async function ServerTime() {
  // This code runs on the server for each request (if the page is dynamic)
  const now = new Date().toLocaleString();

  return (
    <div className="p-4 border rounded bg-gray-100 text-black">
      <h2 className="text-lg font-bold mb-2">Server Time Component</h2>
      <p>Current server time: {now}</p>
    </div>
  );
}