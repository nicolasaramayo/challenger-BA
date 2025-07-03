# 🏙️ Challenger BA - Landing Page

> Challenge técnico desarrollado con **Angular 18** y **Obelisco V2** (Sistema de Diseño del GCBA)

## 📋 Descripción del Proyecto

Landing page responsiva desarrollada como parte de un ejercicio técnico que implementa:
- **Framework**: Angular 18 con componentes standalone
- **Sistema de Diseño**: Obelisco V2 del Gobierno de la Ciudad de Buenos Aires
- **Estilos**: Bootstrap 5 + SCSS
- **Estructura**: Componentes reutilizables en carpeta `shared/`

## ✅ Estado Actual del Desarrollo

### 🎯 **Completado:**
- ✅ **Configuración base**: Proyecto Angular con Obelisco V2
- ✅ **Header completo**: Navegación con dropdowns funcionales
- ✅ **Responsive design**: Adaptable a desktop, tablet y móvil
- ✅ **Componentes Obelisco V2**: Header con banner del GCBA
- ✅ **Accesibilidad**: Navegación por teclado y ARIA labels

### 🔄 **En desarrollo:**
- 🔨 **Hero Section**: Sección de presentación principal
- 🔨 **Componentes shared**: Botones, cards reutilizables
- 🔨 **Footer**: Pie de página con Obelisco V2
- 🔨 **Buscador de calles**: Integración con API USIG

## 🛠️ Tecnologías Utilizadas

- **Angular 18**: Framework principal
- **Obelisco V2**: Sistema de diseño del GCBA
- **Bootstrap 5**: Framework CSS base de Obelisco V2
- **SCSS**: Preprocesador CSS
- **TypeScript**: Lenguaje principal
- **Material Symbols**: Iconografía oficial

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm
- Angular CLI

### Instalación
```bash
# Clonar el repositorio
git clone [URL-DEL-REPO]
cd challenger-BA/challenger-landing

# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Abrir en el navegador
http://localhost:4200
```

### Build de producción
```bash
ng build --configuration=production
```

## 📁 Estructura del Proyecto

```
challenger-landing/
├── src/
│   ├── app/
│   │   ├── shared/
│   │   │   └── components/
│   │   │       └── header/          # Header con navegación
│   │   ├── app.component.*          # Componente principal
│   │   └── app.config.ts           # Configuración de la app
│   ├── assets/                      # Recursos estáticos
│   ├── styles.scss                  # Estilos globales
│   └── index.html                  # HTML principal
├── angular.json                     # Configuración Angular
└── package.json                    # Dependencias
```

## 🎨 Componentes Implementados

### Header (Encabezado)
- **Banner del GCBA**: Imagen y texto institucional
- **Logo responsivo**: Adaptable según dispositivo
- **Navegación principal**: Dropdowns funcionales
- **Buscador**: Campo de búsqueda integrado
- **Botón de ingreso**: Acceso a usuario
- **Menú móvil**: Hamburger menu para dispositivos pequeños

## 🎯 Requisitos del Challenge

### ✅ Maquetación Web
- [x] Proyecto Angular creado
- [x] Componentes en carpeta `shared/`
- [x] Header con navegación funcional
- [x] Responsive design implementado
- [x] Obelisco V2 integrado correctamente
- [ ] Hero section (en desarrollo)
- [ ] Sección de contenido con componentes shared
- [ ] Footer

### 🔄 Ejercicio JavaScript (Próximo)
- [ ] Página de búsqueda de calles
- [ ] Integración con API USIG Buenos Aires
- [ ] Autocompletado de direcciones

### ✅ Git y Documentación
- [x] Repositorio GitHub
- [x] README.md completo
- [x] Estructura de ramas planificada

## 🌿 Estrategia de Ramas

```
main                    # Código estable y funcional
├── feature/hero        # Sección hero/presentación
├── feature/components  # Componentes shared (botones, cards)
├── feature/footer      # Pie de página
└── feature/street-api  # Buscador de calles con API
```

## 👨‍💻 Desarrollador

**Challenge técnico** desarrollado siguiendo las mejores prácticas de:
- Git Flow
- Componentes reutilizables
- Responsive design
- Accesibilidad web
- Documentación profesional

## 📞 API Utilizada

- **USIG Buenos Aires**: `http://servicios.usig.buenosaires.gob.ar/normalizar/`
- **Propósito**: Normalización y sugerencias de direcciones de CABA

---

**Última actualización**: $(date)
**Estado**: En desarrollo activo 🚧
