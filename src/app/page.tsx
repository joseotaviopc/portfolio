import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    // <main className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-900 text-foreground flex flex-col flex-grow">
    // <main className="min-h-screen bg-gradient-to-r from-yellow-900/40 via-stone-700 to-purple-900/30 text-foreground flex flex-col flex-grow">
    <main className="relative min-h-screen text-foreground flex flex-col flex-grow overflow-hidden bg-background">
      <Hero />
      <div className="flex-grow mb-16">
        <Portfolio />
      </div>
      <div className="fixed bottom-0 left-0 w-full opacity-90 border-t-2 border-t-slate-700">
        <Footer />
      </div>
    </main>
  );
}
