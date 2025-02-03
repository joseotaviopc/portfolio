"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import { colors } from "@/lib/data";

type Color = (typeof colors)[number];

export function ColorDetailClient({ currentColor }: { currentColor: Color }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/30">
        <div className="p-4">
          <Link
            href="/"
            className="flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Colors
          </Link>
          <ScrollArea className="">
            <div className="flex flex-col space-y-2 p-8">
              {colors.map((color) => (
                <Link href={`/color/${color.id}`} key={color.id}>
                  <Card
                    className={`h-16 transition-all hover:scale-105  opacity-20 hover:opacity-70 border border-zinc-800 rounded-xl overflow-hidden ${
                      color.id === currentColor.id ? "opacity-100" : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="p-1 px-3 bg-zinc-50 rounded-b-xl">
                      <p className="text-xs text-zinc-900 font-medium">
                        {color.name}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <Card
            className="w-full aspect-video mb-8 transition-all transform card-hover"
            style={{ backgroundColor: currentColor.hex }}
          >
            <div className="p-8 h-full flex flex-col justify-end">
              <h1 className="text-4xl font-bold text-white mb-2">
                {currentColor.name}
              </h1>
              <p className="text-xl text-white/80">{currentColor.hex}</p>
            </div>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">About this Color</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {currentColor.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
