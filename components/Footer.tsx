import { Heart, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-2xl font-bold text-white mb-2">
              Carlos<span className="text-cyan-400">Antonio</span>
            </div>
            <p className="text-gray-400">Ingeniero en Telecomunicaciones & Java Developer</p>
          </div>

          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-1">
              <span>Hecho con</span>
              <Heart className="text-red-500" size={16} />
              <span>usando React & Tailwind CSS</span>
            </p>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.linkedin.com/in/carlos-antonio-pena/" className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Carlosssantonio" className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a
              href="mailto:carlosss.antonio97@gmail.com"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Carlos Antonio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
