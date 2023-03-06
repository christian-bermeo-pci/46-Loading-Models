import { useAnimations, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import { useEffect } from 'react';

const Fox = () => {
  const fox = useGLTF('./Fox/glTF/Fox.gltf');
  const animations = useAnimations(fox.animations, fox.scene);

  /**
   * Leva controls
   */
  const { animationType } = useControls({
    animationType: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animationType];
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
    /**
     * CrossFading animations to transition from one to another.
     * Great for fading animation based on events
     */
    // window.setTimeout(() => {
    //   animations.actions.Walk.play();
    //   animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1);
    // }, 2000);
  }, [animationType]);

  return (
    <primitive
      object={fox.scene}
      scale={0.02}
      position={[-2.5, 0, 2.5]}
      rotation-y={0.3}
    />
  );
};

export default Fox;
