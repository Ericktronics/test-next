import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex gap-4 p-4 bg-gray-200">
      <Link href="/about" className="text-blue-600 hover:underline">
        About
      </Link>
      <Link href="/welcome" className="text-blue-600 hover:underline">
        Welcome
      </Link>
    </nav>
  );
}
