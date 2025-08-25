# 💼 Portafolio Profesional de Carlos Antonio

> Un portafolio web moderno y responsivo construido con Next.js y Tailwind CSS para mostrar mis habilidades, experiencia y proyectos.

## 🌐 Demo en Vivo

**[🚀 Ver Portafolio](https://portafolio-carlos-blue.vercel.app/)**

*¡Explora mi trabajo y conoce más sobre mi experiencia profesional!*

## 📸 Vista Previa

![Vista Previa del Portafolio](./ecocyclepreview.png)

*Captura de pantalla mostrando el diseño responsivo y la interfaz moderna del portafolio*

## ✨ Características Principales

🎯 **Diseño 100% Responsivo**  
Perfecta visualización y experiencia de usuario en computadoras, tablets y dispositivos móviles.

🌊 **Navegación Fluida**  
Scroll suave y transiciones elegantes entre las diferentes secciones de la página.

🧩 **Componentes Reutilizables**  
Arquitectura de componentes bien estructurada que facilita el mantenimiento y escalabilidad.

📑 **Secciones Completas**  
- **Hero/Inicio**: Presentación impactante con call-to-action
- **Sobre Mí**: Introducción personal y profesional
- **Habilidades**: Stack tecnológico y competencias
- **Experiencia**: Trayectoria profesional
- **Proyectos**: Galería dinámica de trabajos realizados
- **Contacto**: Información de contacto y formulario

🎨 **Galería de Proyectos Dinámica**  
Sistema diseñado para agregar y mostrar nuevos proyectos de manera sencilla y atractiva.

🎭 **UI Moderna**  
Interfaz construida con componentes de shadcn/ui para un diseño consistente y profesional.

## 🛠️ Stack Tecnológico

| Tecnología | Descripción |
|------------|-------------|
| ![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&logo=next.js) | Framework React para aplicaciones web modernas |
| ![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat&logo=typescript&logoColor=white) | Superset de JavaScript con tipado estático |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Framework CSS utility-first |
| ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcnui) | Componentes UI modernos y accesibles |
| ![Lucide React](https://img.shields.io/badge/Lucide_React-F56565?style=flat&logo=lucide) | Biblioteca de iconos para React |
| ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white) | Gestor de paquetes rápido y eficiente |

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-portafolio.git
   cd tu-portafolio
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

```bash
pnpm dev          # Inicia el servidor de desarrollo
pnpm build        # Construye la aplicación para producción
pnpm start        # Inicia el servidor de producción
pnpm lint         # Ejecuta el linter
```

## 📁 Estructura del Proyecto

```
portafolio/
├── app/                    # App Router de Next.js
│   ├── components/        # Componentes reutilizables
│   ├── lib/              # Utilidades y configuraciones
│   ├── globals.css       # Estilos globales
│   └── page.tsx          # Página principal
├── public/               # Archivos estáticos
│   └── images/          # Imágenes y recursos
├── components/           # Componentes UI (shadcn/ui)
├── tailwind.config.ts    # Configuración de Tailwind
├── next.config.js       # Configuración de Next.js
└── package.json         # Dependencias y scripts
```

## 🎨 Personalización

### Colores y Tema
Los colores principales se pueden modificar en `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "tu-color-principal",
      secondary: "tu-color-secundario",
    }
  }
}
```

### Contenido Personal
Actualiza la información personal en los componentes correspondientes:
- `Hero.tsx` - Información de presentación
- `About.tsx` - Descripción personal
- `Skills.tsx` - Habilidades técnicas
- `Projects.tsx` - Proyectos realizados

## 🚀 Despliegue

Este portafolio está optimizado para ser desplegado en:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **GitHub Pages**
- **Railway**

### Despliegue en Vercel

✅ **Este portafolio ya está desplegado en:** https://portafolio-carlos-blue.vercel.app/

Para desplegar tu propia versión:
1. Haz fork del repositorio
2. Conecta tu repositorio a Vercel
3. Vercel detectará automáticamente Next.js
4. ¡El sitio se desplegará automáticamente!

## 📱 Responsividad

El portafolio está completamente optimizado para:
- 📱 **Móviles**: 320px - 768px
- 📱 **Tablets**: 768px - 1024px
- 💻 **Desktop**: 1024px+
- 🖥️ **Large Desktop**: 1440px+

## 🔧 Próximas Mejoras

- [ ] Sistema de blog integrado
- [ ] Modo oscuro/claro
- [ ] Animaciones avanzadas con Framer Motion
- [ ] Formulario de contacto funcional
- [ ] Sistema de comentarios en proyectos
- [ ] Integración con CMS headless

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📬 Contacto

**Carlos Antonio**

- 💼 LinkedIn: [tu-linkedin](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [tu-github](https://github.com/tu-usuario)
- 📧 Email: tu-email@dominio.com
- 🌐 Portafolio: [portafolio-carlos-blue.vercel.app](https://portafolio-carlos-blue.vercel.app/)

---

⭐ **¡Si este portafolio te resultó útil, no olvides darle una estrella!**

*Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS*
