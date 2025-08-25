import { Code, Network, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Desarrollo",
      icon: <Code className="text-cyan-400" size={24} />,
      skills: [
        "Java",
        "Spring Boot",
        "JavaScript",
        "React",
        "Node.js",
        "MySQL",
        "HTML/CSS",
        "REST APIs",
        "Microservicios",
      ],
    },
    {
      title: "Telecomunicaciones",
      icon: <Network className="text-cyan-400" size={24} />,
      skills: [
        "TCP/IP Stack",
        "BGP/OSPF/EIGRP",
        "SIP/VoIP",
        "MPLS/QoS",
        "VLANs/STP",
        "NAT/PAT",
        "Wireshark",
        "Cisco Packet Tracer",
        "GNS3",
      ],
    },
    {
      title: "Herramientas",
      icon: <Wrench className="text-cyan-400" size={24} />,
      skills: ["Git/GitHub", "Linux/Bash", "VS Code", "Docker", "AWS", "Postman", "Jira", "IntelliJ IDEA", "Eclipse"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Habilidades Técnicas</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combinando experiencia en telecomunicaciones con habilidades modernas de desarrollo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors duration-300">
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-700 px-3 py-2 rounded-lg text-center text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
