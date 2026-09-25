import { Box3, Group, Mesh, Vector3 } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const CAR_MODEL_URL = '/models/car.glb';
export async function loadCar(signal: AbortSignal): Promise<Group> {
  const response = await fetch(CAR_MODEL_URL, { signal });
  if (!response.ok) throw new Error('Vehicle unavailable');
  const gltf = await new GLTFLoader().parseAsync(await response.arrayBuffer(), '/models/');
  const car = gltf.scene;
  const bounds = new Box3().setFromObject(car);
  const size = bounds.getSize(new Vector3());
  car.scale.setScalar(4.8 / Math.max(size.x, size.z));
  const center = bounds.getCenter(new Vector3()).multiplyScalar(car.scale.x);
  car.position.set(-center.x, -bounds.min.y * car.scale.y + 0.015, -center.z);
  car.traverse(object => {
    if (object instanceof Mesh) { object.castShadow = true; object.receiveShadow = true; }
  });
  return car;
}
