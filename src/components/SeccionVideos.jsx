import React from 'react';

const videos = [
  {
    id: 'html',
    titulo: 'Curso HTML5 desde Cero',
    lenguaje: 'HTML',
    descripcion: 'Aprende la estructura básica, etiquetas principales y buenas prácticas de HTML5.',
    embedUrl: 'https://www.youtube.com/embed/rbuYtrNUyog',
    youtubeUrl: 'https://www.youtube.com/watch?v=rbuYtrNUyog'
  },
  {
    id: 'css',
    titulo: 'Curso CSS3 desde Cero',
    lenguaje: 'CSS',
    descripcion: 'Domina la estilización de elementos, colores, tipografía, Flexbox y Grid.',
    embedUrl: 'https://www.youtube.com/embed/OWKXEJN6ENc',
    youtubeUrl: 'https://www.youtube.com/watch?v=OWKXEJN6ENc'
  },
  {
    id: 'js',
    titulo: 'Curso JavaScript desde Cero',
    lenguaje: 'JS',
    descripcion: 'Aprende la lógica de programación, variables, funciones y manipulación del DOM.',
    embedUrl: 'https://www.youtube.com/embed/Z32hi4O1Bvg',
    youtubeUrl: 'https://www.youtube.com/watch?v=Z32hi4O1Bvg'
  }
];

export const SeccionVideos = () => {
  return (
    <section id="videos" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-1">Videos educativos</h2>
        <p className="text-gray-600 mb-8">Clases y tutoriales para comenzar a desarrollar sitios web</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((vid) => (
            <div key={vid.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-100">
              <div className="relative aspect-video">
                <iframe
                  src={vid.embedUrl}
                  title={vid.titulo}
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="self-start text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2">
                  {vid.lenguaje}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{vid.titulo}</h3>
                <p className="text-sm text-gray-600 flex-grow mb-4">{vid.descripcion}</p>
                <a
                  href={vid.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded transition-colors text-sm font-semibold"
                >
                  Ver lección en YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};