// src/components/ModelViewer.jsx
import '@google/model-viewer';
import modelPath from '../assets/myModel.glb'; // ✅ import it like a module

const ModelViewer = () => (
  <model-viewer
    src={modelPath}
    alt="3D model"
    auto-rotate
    camera-controls
    ar
    style={{ width: '100%', height: '500px' }}
  />
);

export default ModelViewer;
