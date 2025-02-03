import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import { colors } from "@/lib/data";
import { ColorDetailClient } from "./client";

export function generateStaticParams() {
  return colors.map((color) => ({
    id: color.id.toString(),
  }));
}

export default function ColorDetail({ params }: { params: { id: string } }) {
  const currentColor = colors.find((c) => c.id === Number(params.id));

  if (!currentColor) return null;

  return <ColorDetailClient currentColor={currentColor} />;
}
