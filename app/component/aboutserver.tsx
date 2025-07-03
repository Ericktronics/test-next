export default async function AboutServerComponent() {
  // Simulate server-side logic
  const message = "This message is rendered on the server for the About page.";

  return (
    <div className="p-4 border rounded bg-blue-100 text-black">
      <h2 className="text-lg font-bold mb-2">About Server Component</h2>
      <p>{message}</p>
    </div>
  );
}