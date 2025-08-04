import { Parallax } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* ✅ Background with parallax effect */}
      <Parallax speed={-20}>
        <img
          src="/stars.png"
          alt="Stars"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />
      </Parallax>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">I’m Jabir, a 3D Artist</h1>
        <p className="text-xl text-gray-300">Building immersive Blender experiences</p>
      </div>
    </section>
  );
}
