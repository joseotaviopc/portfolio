import { X } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/types/project";
import { Button } from "@/components/ui/button";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-[5%] z-50">
      <div className="bg-gradient-to-r from-stone-500 to-stone-700 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="relative w-full mb-4">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1000}
              height={1000}
              className="rounded-lg object-cover object-top max-h-[50vh]"
            />
          </div>
          <p className="mb-4">{project.fullDescription}</p>
          <Button asChild>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
