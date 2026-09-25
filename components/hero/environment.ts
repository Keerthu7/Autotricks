import { BoxGeometry, Mesh, MeshStandardMaterial, PlaneGeometry, Scene } from 'three';

export function addEnvironment(scene: Scene) {
  const floor = new Mesh(new PlaneGeometry(100, 100), new MeshStandardMaterial({ color: 0x151515, roughness: 0.65, metalness: 0.1 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  // A restrained driveway threshold and garage jamb give the vehicle a doorstep context.
  const stone = new MeshStandardMaterial({ color: 0x242424, roughness: 0.85 });
  for (const x of [-6, 6]) {
    const jamb = new Mesh(new BoxGeometry(0.18, 5, 0.22), stone);
    jamb.position.set(x, 2.5, -5); scene.add(jamb);
  }
  const threshold = new Mesh(new BoxGeometry(12, 0.035, 0.12), stone);
  threshold.position.set(0, 0.01, -4); scene.add(threshold);
}
