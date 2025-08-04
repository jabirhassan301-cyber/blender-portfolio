export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center flex-col text-center bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Your Name</h1>
      <p className="text-xl md:text-2xl text-gray-400">3D Artist & Blender Animator</p>
      <a href="#projects" className="mt-10 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition">View My Work</a>
    </section>
  );
}