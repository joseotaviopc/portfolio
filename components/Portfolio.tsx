"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import type { Project } from "@/types/project";
import { appProjects, webProjects } from "./projects";
import {
  LucidePhone,
  Moon,
  MousePointerClick,
  Smartphone,
  Sun,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="p-8 ">
      <div className="flex justify-center items-center mb-8">
        {/* <h1 className="text-3xl font-bold">José Otavio</h1> */}
        <Button
          className="absolute right-4 top-4"
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark"
            ? <Sun className="h-[1.2rem] w-[1.2rem]" />
            : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-thin font-serif text-primary flex gap-2 items-center">
          <Smartphone className="w-6 h-6 hover:text-primary transition-colors" />Apps
        </h2>
        <div className="flex overflow-x-auto space-x-4 p-6">
          {appProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-thin font-serif text-primary flex gap-2 items-center">
          <MousePointerClick className="w-6 h-6 hover:text-primary transition-colors" />Web
        </h2>
        <div className="flex overflow-x-auto space-x-4 p-6">
          {webProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
