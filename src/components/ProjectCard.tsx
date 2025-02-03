import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-72 h-72 rounded-lg overflow-hidden cursor-pointer p-2 border border-zinc-400/20"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(project)}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        layout="fill"
        // objectFit=""
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="transition-opacity duration-300 object-contain"
        style={{ opacity: isHovered ? 1 : 0.7 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
      <div className="absolute top-0 left-0 p-4 ">
        <h2 className="text-xl font-light mb-2">{project.title}</h2>
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-primary/80">
        <p className="text-sm">{project.description}</p>
      </div>
      {!isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" />
      )}
    </motion.div>
  );
}
