export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-900">
      <h2 className="text-4xl font-semibold mb-6 text-center">About Me</h2>
      <p className="max-w-3xl mx-auto text-center text-gray-300">
        I am a 3D artist specializing in Blender, creating stunning animations, models, and visual experiences. This is a placeholder for your bio.
      </p>
    </section>
  );
}
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          I specialize in 3D modeling and Blender animations. Let’s bring your ideas to life.
        </p>
      </motion.div>
    </section>
  );
}
