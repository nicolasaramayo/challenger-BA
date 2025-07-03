# Challenger Técnico BA - Landing Page

> Challenge técnico desarrollado con **Angular** y **Obelisco V2** (Sistema de Diseño del GCBA)

##  Descripción del Proyecto

Landing page responsiva desarrollada como parte de un ejercicio técnico que implementa:
- **Framework**: Angular 18 con componentes standalone
- **Sistema de Diseño**: Obelisco V2 del Gobierno de la Ciudad de Buenos Aires
- **Estilos**: Bootstrap 5 + SCSS
- **Estructura**: Componentes reutilizables en carpeta `shared/`


## Tecnologías Utilizadas

- **Angular 18**: Framework principal
- **Obelisco V2**: Sistema de diseño del GCBA
- **Bootstrap 5**: Framework CSS base de Obelisco V2
- **SCSS**: Preprocesador CSS
- **TypeScript**: Lenguaje principal
- **Material Symbols**: Iconografía oficial

## Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm
- Angular CLI

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/nicolasaramayo/challenger-BA.git
cd challenger-BA/challenger-landing

# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Abrir en el navegador
http://localhost:4200
```


## Estructura del Proyecto

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



## 👨‍💻 Desarrollado por
NICOLAS FABIAN ARAMAYO


## API Utilizada

- **USIG Buenos Aires**: `http://servicios.usig.buenosaires.gob.ar/normalizar/`


---

**Última actualización**: $(date)
**Estado**: En desarrollo activo 🚧
