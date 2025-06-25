# G2 Living

Sitio inmobiliario de lujo para Medellín y Antioquia, desarrollado con React + Vite.

## Características principales
- Landing premium y 100% responsive
- Panel de administración con CRUD real de propiedades (agregar, editar, eliminar, drag & drop de imágenes, vistas cuadrilla/tabla, persistencia local)
- Blog visual de ejemplo en el panel (sin lógica real)
- Testimonios, Sobre Nosotros, Footer y Navbar premium
- Integración de mapas y galería de imágenes
- Soporte multilenguaje (i18n)

## Instalación local
1. Clona el repositorio:
   ```bash
   git clone https://github.com/jjaracanales/g2-living.git
   cd g2-living
   ```
2. Instala dependencias:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   ```

## Deploy en Vercel
- El proyecto está listo para deploy automático en Vercel.
- Si usas React 19, asegúrate de que el comando de instalación en Vercel sea:
  ```
  npm install --legacy-peer-deps
  ```
- Para rutas internas (SPA), el archivo `vercel.json` debe contener:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/" }
    ]
  }
  ```

## Licencia
MIT

---
Desarrollado por Plutonia.
