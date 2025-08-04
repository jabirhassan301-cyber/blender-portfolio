const projects = [
  {
    title: 'Project Title 1',
    img: 'https://via.placeholder.com/600x400',
    desc: 'Short description of the project.'
  },
  {
    title: 'Project Title 2',
    img: 'https://via.placeholder.com/600x400',
    desc: 'Short description of the project.'
  },
  {
    title: 'Project Title 3',
    img: 'https://via.placeholder.com/600x400',
    desc: 'Short description of the project.'
  },
];

export default function Projects() {
  function openLightbox(src) {
    const event = new CustomEvent('open-lightbox', { detail: src });
    window.dispatchEvent(event);
  }

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-950">
      <h2 className="text-4xl font-semibold mb-12 text-center">Projects</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
            onClick={() => openLightbox(proj.img)}
          >
            <img src={proj.img} alt={proj.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-sm">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}