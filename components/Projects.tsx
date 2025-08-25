import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

const projectData = [
  {
    title: "EcoCycle",
    description: "Una aplicación web innovadora diseñada para promover el reciclaje y la gestión de residuos. EcoCycle ofrece a los usuarios herramientas para localizar puntos de reciclaje, seguir su impacto ambiental y aprender sobre prácticas sostenibles.",
    image: "/ecocyclepreview.png",
    link: "https://ecocycle-eight.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  // Puedes agregar más proyectos aquí en el futuro
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Aquí hay una selección de proyectos en los que he trabajado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 text-white flex flex-col">
              <CardHeader>
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-slate-700 text-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <span className="text-sky-400 hover:text-sky-300 transition-colors">
                    Ver Proyecto &rarr;
                  </span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}