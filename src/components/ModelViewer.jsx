import '@google/model-viewer';
import modelPath from '../assets/myModel.glb'; // <-- update this to your exact file name

const ModelViewer = () => {
  return (
    <div className="w-full flex justify-center items-center my-8">
      <model-viewer
        src={modelPath}
        alt="3D model preview"
        auto-rotate
        camera-controls
        ar
        style={{ width: '100%', maxWidth: '800px', height: '500px' }}
      />
    </div>
  );
};

export default ModelViewer;
