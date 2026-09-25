import { DirectionalLight, HemisphereLight, PMREMGenerator, Scene, WebGLRenderer } from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export function addLighting(scene: Scene, renderer: WebGLRenderer, low: boolean) {
  const room = new RoomEnvironment();
  const generator = new PMREMGenerator(renderer);
  const environment = generator.fromScene(room, 0.05);
  scene.environment = environment.texture;
  scene.environmentIntensity = 1.3;
  room.dispose(); generator.dispose();
  scene.add(new HemisphereLight(0xe8efff, 0x24201b, 1.2));
  const key = new DirectionalLight(0xf4f6ff, 3);
  key.position.set(3, 7, 4);
  key.castShadow = !low;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 0.1, far: 20 });
  key.shadow.bias = -0.001;
  key.shadow.normalBias = 0.025;
  key.shadow.radius = 4;
  const rim = new DirectionalLight(0xffa259, 1.1);
  rim.position.set(-4, 3, -4);
  scene.add(key, rim);
  return () => { environment.dispose(); key.shadow.map?.dispose(); };
}
