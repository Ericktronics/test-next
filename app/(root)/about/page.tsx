import AboutServerComponent from "../../component/aboutserver";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <AboutServerComponent />
    </main>
  );
}
export const dynamic = "force-dynamic";
