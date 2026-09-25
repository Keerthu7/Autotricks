import { MathUtils, PerspectiveCamera, Vector3 } from 'three';

// Five authored camera poses. The asset is centred, Y-up, with its nose at +X.
const poses = [
  [8.8, 3.1, 8.6], [7.5, 2.6, 7.4], [6.6, 2.1, 6.9],
  [5.7, 1.85, 7.8], [5.2, 1.8, 8.2],
];
const target = new Vector3();
export function updateCamera(camera: PerspectiveCamera, progress: number, width: number, height: number, pointer: number[]) {
  const segment = Math.min(progress * 4, 3.99999);
  const index = Math.floor(segment);
  const blend = MathUtils.smoothstep(segment - index, 0, 1);
  const mobile = width < 768;
  const a = poses[index], b = poses[index + 1];
  camera.position.set(
    MathUtils.lerp(a[0], b[0], blend) + pointer[0] * 0.13,
    MathUtils.lerp(a[1], b[1], blend) + pointer[1] * 0.06,
    MathUtils.lerp(a[2], b[2], blend),
  );
  camera.fov = mobile ? 40 : 33;
  camera.aspect = width / height;
  camera.clearViewOffset();
  camera.lookAt(target.set(0, 0.7, 0));
  // Optical shift keeps the vehicle beside the fixed text on desktop, below it on phones.
  if (mobile) {
    camera.position.multiplyScalar(Math.max(0.95, Math.min(1.9, 0.76 * height / width)));
    camera.setViewOffset(width, height, 0, -height * 0.29, width, height);
  } else {
    camera.setViewOffset(width, height, -width * 0.22, 0, width, height);
  }
  camera.updateProjectionMatrix();
}
