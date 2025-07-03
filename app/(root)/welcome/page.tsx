export default function WelcomeMessage() {
  return (
    <div className="p-4 border rounded bg-yellow-100 text-black">
      <h2 className="text-lg font-bold mb-2">Welcome Component</h2>
      <p>Welcome to the Next.js App! This is another server component.</p>
    </div>
  );
}
export const dynamic = "force-dynamic";