import React, { useState } from 'react';

const contentData = {
  videos: [
    {
      id: 1,
      title: "Curso HTML5 desde Cero",
      description: "Aprende la estructura básica, etiquetas principales y buenas prácticas de HTML5.",
      category: "HTML",
      embedUrl: "https://www.youtube.com/embed/MJkdaVFHrto",
      directUrl: "https://youtu.be/MJkdaVFHrto?si=PxdbBY9nhTv-Yhqy"
    },
    {
      id: 2,
      title: "Curso CSS3 desde Cero",
      description: "Domina la estilización de elementos, colores, tipografía, Flexbox y Grid.",
      category: "CSS",
      embedUrl: "https://www.youtube.com/embed/wZniZEbPAzk",
      directUrl: "https://www.youtube.com/watch?v=wZniZEbPAzk"
    },
    {
      id: 3,
      title: "Curso JavaScript desde Cero",
      description: "Aprende la lógica de programación, variables, funciones y manipulación del DOM.",
      category: "JavaScript",
      embedUrl: "https://www.youtube.com/embed/QoC4RxNIs5M",
      directUrl: "https://www.youtube.com/watch?v=QoC4RxNIs5M"
    }
  ],
  articles: [
    {
      id: 1,
      title: "Guía Completa de Desarrollo Web I",
      description: "Documento oficial con la fundamentación del desarrollo web moderno.",
      type: "PDF / Guía",
      content: `1. Arquitectura Web Cliente-Servidor
El desarrollo web se basa en el modelo cliente-servidor, donde el navegador (cliente) realiza peticiones HTTP/HTTPS a un servidor remoto, el cual procesa la solicitud y devuelve recursos (HTML, CSS, JavaScript, imágenes o datos JSON).

2. Estructura del Lenguaje HTML5
HTML5 es el estándar para estructurar contenido en la Web. Utiliza etiquetas semánticas para organizar los documentos de forma accesible:
- <header>: Encabezado principal del sitio o sección.
- <nav>: Menú y enlaces de navegación.
- <main>: Contenido principal y único de la página.
- <section> y <article>: Módulos de contenido temático e independiente.
- <footer>: Pie de página con derechos, contacto y enlaces.

3. Estilos y Presentación con CSS3
CSS3 define las reglas visuales del documento HTML:
- Modelo de Caja (Box Model): Todo elemento consta de content, padding, border y margin.
- Flexbox & Grid: Sistemas de maquetación unidimensional y bidimensional para organizar layouts flexibles.
- Diseño Responsivo: Uso de Media Queries (@media) para adaptar el contenido a pantallas móviles y computadoras.

4. Lógica e Interactividad con JavaScript (ES6+)
JavaScript añade comportamiento dinámico a la interfaz:
- Variables: Declaración con let y const.
- DOM (Document Object Model): Estructura de árbol que permite a JS modificar elementos del HTML en tiempo real.
- Eventos: Respuesta a acciones del usuario como clics, desplazamientos o entrada de texto.`
    },
    {
      id: 2,
      title: "Resumen y Atajos: HTML5 Semántico",
      description: "Guía rápida de referencia sobre las etiquetas semánticas y sus usos.",
      type: "Resumen",
      content: `Resumen de Etiquetas HTML5 Básicas:

1. Estructura Principal:
   - <!DOCTYPE html>: Declaración del tipo de documento HTML5.
   - <html lang="es">: Elemento raíz del documento.
   - <head>: Metadatos, enlaces a hojas de estilo CSS y título.
   - <body>: Todo el contenido visible para el usuario.

2. Formateo de Texto:
   - <h1> a <h6>: Jerarquía de títulos (de mayor a menor importancia).
   - <p>: Párrafos de texto.
   - <a>: Enlaces e hipervínculos (href="URL").
   - <img>: Inserción de imágenes (src="ruta" y alt="descripción").

3. Listas y Formularios:
   - <ul> y <ol>: Listas desordenadas (viñetas) y ordenadas (números).
   - <form>, <input>, <button>: Captura de datos del usuario.`
    },
    {
      id: 3,
      title: "Resumen y Atajos: CSS Flexbox & Layout",
      description: "Guía visual y teórica sobre alineación de elementos en CSS.",
      type: "Resumen",
      content: `Hoja de Referencia CSS Flexbox:

Para activar el modelo flexible en un contenedor padre:
.contenedor {
  display: flex;
  flex-direction: row; /* u column */
}

Propiedades del Contenedor Padre:
- justify-content: Alinea los elementos a lo largo del eje principal (flex-start, center, space-between, space-around).
- align-items: Alinea los elementos en el eje transversal (center, flex-start, stretch).
- flex-wrap: Controla si los elementos pasan a la siguiente línea (wrap / nowrap).

Propiedades de los Hijos (Items):
- flex-grow: Define cuánto puede crecer un elemento si hay espacio disponible.
- flex-shrink: Define cuánto puede reducirse un elemento si falta espacio.`
    }
  ]
};

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8fafc', color: '#1e293b', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* Header */}
      <header style={{ backgroundColor: '#2563eb', color: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Aprende Desarrollo Web</h1>
          <nav>
            <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.95rem', fontWeight: 500 }}>
              <li><a href="#inicio" style={{ color: '#ffffff', textDecoration: 'none' }}>Inicio</a></li>
              <li><a href="#videos" style={{ color: '#ffffff', textDecoration: 'none' }}>Videos educativos</a></li>
              <li><a href="#lecturas" style={{ color: '#ffffff', textDecoration: 'none' }}>Artículos y lecturas</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section id="inicio" style={{ backgroundColor: '#1d4ed8', color: '#ffffff', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', marginTop: 0 }}>Aprende Desarrollo Web</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#dbeafe' }}>Aprende HTML, CSS y JavaScript mediante videos, lecturas y recursos educativos accesibles.</p>
          <a href="#videos" style={{ backgroundColor: '#ffffff', color: '#1d4ed8', fontWeight: '600', padding: '0.85rem 1.75rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            Comenzar a aprender
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Videos Section */}
        <section id="videos" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', marginTop: 0, color: '#0f172a' }}>Videos educativos</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2.5rem' }}>Clases y tutoriales para comenzar a desarrollar sitios web.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {contentData.videos.map((item) => (
              <article key={item.id} style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, backgroundColor: '#000000' }}>
                  <iframe 
                    src={item.embedUrl} 
                    title={item.title} 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.category}</span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '0.25rem', marginBottom: '0.5rem', color: '#0f172a' }}>{item.title}</h3>
                    <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>{item.description}</p>
                  </div>
                  <a 
                    href={item.directUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#2563eb', color: '#ffffff', textDecoration: 'none', padding: '0.65rem 1rem', borderRadius: '0.375rem', fontWeight: '500', textAlign: 'center', display: 'block' }}
                  >
                    Ver lección en YouTube
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section id="lecturas">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', marginTop: 0, color: '#0f172a' }}>Artículos y lecturas</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2.5rem' }}>Material complementario para reforzar los conocimientos adquiridos.</p>
          
          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contentData.articles.map((art) => (
              <div key={art.id} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', margin: 0, color: '#0f172a' }}>{art.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>{art.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedArticle(art)}
                  style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '0.375rem', fontWeight: '500', cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  {art.type.includes('PDF') ? 'Consultar guía completa' : 'Leer resumen'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal para ver lectura/resumen (con scroll interno optimizado) */}
      {selectedArticle && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.65)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5rem', zIndex: 100 }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', padding: '2rem', maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#2563eb', textTransform: 'uppercase' }}>{selectedArticle.type}</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.25rem', marginBottom: '1rem', color: '#0f172a' }}>{selectedArticle.title}</h3>
            
            <div style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.7', whiteSpace: 'pre-line', marginBottom: '1.5rem', backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
              {selectedArticle.content}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{ backgroundColor: '#475569', color: '#ffffff', border: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.375rem', fontWeight: '500', cursor: 'pointer' }}
              >
                Cerrar lectura
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '1.75rem 1rem', textAlign: 'center', fontSize: '0.875rem', marginTop: '3rem' }}>
        <p style={{ margin: 0 }}>© 2026 Francisco Rojo - Aprende Desarrollo Web</p>
      </footer>
    </div>
  );
}