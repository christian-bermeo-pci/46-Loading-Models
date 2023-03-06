import { useGLTF, Clone } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  /**
   * Native R3F Loader more customizable

    const model = useLoader(
      GLTFLoader,
      './FlightHelmet/glTF/FlightHelmet.gltf',
      (loader) => {
        const dracoInstance = new DRACOLoader();
        dracoInstance.setDecoderPath('./draco/');

        loader.setDRACOLoader(dracoInstance);
      }
    );
   */

  /**
   * Drei Loader
   */
  const model = useGLTF('./hamburger-draco.glb');

  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={-4} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
  );
};

useGLTF.preload('./hamburger-draco.glb');

export default Model;
