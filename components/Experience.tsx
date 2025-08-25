import { Briefcase, GraduationCap, Code } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      date: "Feb 2023 - Presente",
      title: "Back Office Specialist - Wesell Chile (Movistar Empresas)",
      icon: <Briefcase className="text-cyan-400" size={20} />,
      achievements: [
        "Optimización de procesos TIC con reducción del 15% en tiempos de respuesta",
        "Gestión de CRM ONE para creación de perfiles de facturación",
        "Análisis de datos y generación de reportes Excel para +200 casos mensuales",
        "Soporte técnico avanzado y resolución de tickets",
      ],
    },
    {
      date: "2025",
      title: "Bootcamp Full Stack - Generation Chile",
      icon: <Code className="text-cyan-400" size={20} />,
      achievements: [
        "Formación intensiva en desarrollo Java Full Stack",
        "Proyectos prácticos con Spring Boot, React y MySQL",
        "Metodologías ágiles y trabajo en equipo",
        "Desarrollo de aplicaciones web completas",
      ],
    },
    {
      date: "2022",
      title: "Ingeniero en Telecomunicaciones - INACAP",
      icon: <GraduationCap className="text-cyan-400" size={20} />,
      achievements: [
        "Titulado con especialización en redes y comunicaciones",
        "Proyecto final: Implementación de red segura para PYME",
        "Conocimientos avanzados en protocolos de routing y switching",
        "Certificaciones en tecnologías Cisco",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experiencia Profesional</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional combinando telecomunicaciones y desarrollo de software
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-800"></div>

                <div className="ml-20 bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-colors duration-300 w-full">
                  <div className="flex items-center space-x-2 mb-2">
                    {exp.icon}
                    <span className="text-cyan-400 font-semibold">{exp.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{exp.title}</h3>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
