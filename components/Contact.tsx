"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-slate-700 rounded-lg">
                <Mail className="text-cyan-400" size={24} />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">carlosss.antonio97@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-700 rounded-lg">
                <Phone className="text-cyan-400" size={24} />
                <div>
                  <p className="text-white font-semibold">Teléfono</p>
                  <p className="text-gray-400">+56 9 XXXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-700 rounded-lg">
                <MapPin className="text-cyan-400" size={24} />
                <div>
                  <p className="text-white font-semibold">Ubicación</p>
                  <p className="text-gray-400">Concepcion, Chile</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Sígueme</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/carlos-antonio-pena/" className="p-3 bg-slate-700 rounded-lg hover:bg-cyan-500 transition-colors duration-300">
                  <Linkedin className="text-white" size={24} />
                </a>
                <a href="https://github.com/Carlosssantonio" className="p-3 bg-slate-700 rounded-lg hover:bg-cyan-500 transition-colors duration-300">
                  <Github className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}