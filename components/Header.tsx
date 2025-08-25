"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre Mí" },
    { id: "skills", label: "Habilidades" },
    { id: "experience", label: "Experiencia" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white">
            Carlos<span className="text-cyan-400">Antonio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === item.id ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {item.id === 'projects' ? (
                  <div className="flex items-center gap-2">
                    <Image src="/ecocyclepreview.png" alt="EcoCycle Preview" width={20} height={20} className="rounded-full" />
                    <span>{item.label}</span>
                  </div>
                ) : (
                  item.label
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-cyan-500/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === item.id ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {item.id === 'projects' ? (
                  <div className="flex items-center gap-2">
                    <Image src="/ecocyclepreview.png" alt="EcoCycle Preview" width={20} height={20} className="rounded-full" />
                    <span>{item.label}</span>
                  </div>
                ) : (
                  item.label
                )}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}