import { Bookmark, FileText, PenTool, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container mx-auto p-10 min-h-[60vh] flex items-center text-primary">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl font-serif ">
            José
            <br />
            Otavio
          </h1>

          <p className="text-2xl  leading-relaxed max-w-xl">
            One of my deepest joys comes from equipping creative people with the
            visual tools they need to further their work.
          </p>

          <div className="flex items-center gap-4">
            <Image
              src="https://github.com/joseotaviopc.png"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="">
              <div className="font-medium">MOBILE DEVELOPER</div>
              <div className="text-sm">FULLSTACK DEVELOPER</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-sm uppercase tracking-wider  mb-8">
            WHERE YOU CAN START
          </h2>
          <nav className="space-y-6">
            <Link
              href="#about"
              className="flex items-center gap-4 transition-colors group"
            >
              <div className="bg-secondary/90 p-2 rounded">
                <User className="w-5 h-5" />
              </div>
              <span className="text-lg group-hover:underline">
                Learn fun facts about me
              </span>
            </Link>

            <Link
              href="#work"
              className="flex items-center gap-4 transition-colors group"
            >
              <div className="bg-secondary/90 p-2 rounded">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-lg group-hover:underline">
                Browse my work history
              </span>
            </Link>

            <Link
              href="#case-study"
              className="flex items-center gap-4 transition-colors group"
            >
              <div className="bg-secondary/90 p-2 rounded">
                <Bookmark className="w-5 h-5" />
              </div>
              <span className="text-lg group-hover:underline">
                Read a featured case study
              </span>
            </Link>

            <Link
              href="#blog"
              className="flex items-center gap-4 transition-colors group"
            >
              <div className="bg-secondary/90 p-2 rounded">
                <PenTool className="w-5 h-5" />
              </div>
              <span className="text-lg group-hover:underline">
                Read a recent blog
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
