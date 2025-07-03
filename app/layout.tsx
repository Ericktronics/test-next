import "./globals.css";
import ServerTime from "./component/ssrExample";
import Navbar from "./component/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ServerTime />
        {children}
      </body>
    </html>
  );
}
