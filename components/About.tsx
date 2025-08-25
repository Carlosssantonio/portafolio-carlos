import { GraduationCap, Briefcase, Code, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img src="/carlos-profile.jpg" alt="Carlos Antonio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-20"></div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Sobre Mí</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Ingeniero en Telecomunicaciones apasionado por el desarrollo de software, especialmente en el backend con
              Java. Combinando mi experiencia en redes con nuevas habilidades de programación para crear soluciones
              innovadoras.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Mi experiencia en telecomunicaciones me ha dado una perspectiva única sobre la infraestructura
              tecnológica, que ahora aplico en el desarrollo de aplicaciones robustas y escalables.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg">
                <GraduationCap className="text-cyan-400" size={24} />
                <div>
                  <p className="text-white font-semibold">Educación</p>
                  <p className="text-gray-400 text-sm">Ing. Telecomunicaciones (INACAP, 2022)</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg">
                <Briefcase className="text-cyan-400" size={24} />
                <div>
                  <p className="text-white font-semibold">Experiencia</p>
                  <p className="text-gray-400 text-sm">Back Office Specialist - Movistar</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg">
                <Code className="text-cyan-400" size={24} />
                <div>
                  <p className="text-white font-semibold">Formación Actual</p>
                  <p className="text-gray-400 text-sm">Bootcamp Java Full Stack</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg">
                <MapPin className="text-cyan-400" size={24} />
                <div>
                  <p className="text-white font-semibold">Ubicación</p>
                  <p className="text-gray-400 text-sm">Concepcion, Chile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
