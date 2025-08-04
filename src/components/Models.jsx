export default function Models() {
  return (
    <section id="models" className="py-20 px-6 md:px-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-semibold mb-12">3D Model Viewer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        <model-viewer src="https://modelviewer.dev/shared-assets/models/Astronaut.glb" alt="3D Model" auto-rotate camera-controls background-color="#1f2937" style={{ width: '100%', height: '400px' }}></model-viewer>
        <model-viewer src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb" alt="3D Model" auto-rotate camera-controls background-color="#1f2937" style={{ width: '100%', height: '400px' }}></model-viewer>
      </div>
    </section>
  );
}