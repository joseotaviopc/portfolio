"use client";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const handleShare = () => {
    let message = `Olá, acabei de visualizar seu portifólio...\n\n`;

    const url = `https://api.whatsapp.com/send?phone=5521969962000&text=${
      encodeURIComponent(message)
    }`;
    window.open(url, "_blank");
  };

  return (
    <footer className="py-3 bg-secondary/40">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link
          href="https://github.com/joseotaviopc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5 text-primary/80 hover:text-primary/100 transition-colors" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://linkedin.com/in/jose-otavio-pires-de-carvalho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5 text-primary/80 hover:text-primary/100 transition-colors" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link href="mailto:carvalho.jose@gmail.com">
          <Mail className="w-5 h-5 text-primary/80 hover:text-primary/100 transition-colors" />
          <span className="sr-only">Email</span>
        </Link>
        <Link href="#" onClick={handleShare}>
          <MessageCircle className="w-5 h-5 text-primary/80 hover:text-primary/100 transition-colors" />
          <span className="sr-only">Phone</span>
        </Link>
      </div>
    </footer>
  );
}
