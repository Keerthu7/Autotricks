import { ACESFilmicToneMapping, Color, Fog, Material, Mesh, PCFSoftShadowMap, PerspectiveCamera, Scene, SRGBColorSpace, WebGLRenderer } from 'three';
import { updateCamera } from './animation';
import { addEnvironment } from './environment';
import { addLighting } from './lighting';
import { loadCar } from './model';

export async function createHeroScene(host: HTMLElement, section: HTMLElement, signal: AbortSignal, onFailure: () => void) {
  const low = innerWidth < 768 || navigator.hardwareConcurrency <= 4;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('webgl2', { alpha: false, antialias: !low, powerPreference: 'low-power' });
  if (!context) throw new Error('WebGL unavailable');
  const renderer = new WebGLRenderer({ canvas, context, alpha: false, antialias: !low, powerPreference: 'low-power' });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setPixelRatio(Math.min(devicePixelRatio, low ? 1 : 1.5));
  renderer.shadowMap.enabled = !low;
  renderer.shadowMap.type = PCFSoftShadowMap;
  const scene = new Scene();
  scene.background = new Color('#111111');
  scene.fog = new Fog('#111111', 16, 38);
  const camera = new PerspectiveCamera(33, 1, 0.1, 80);
  let disposeLights = () => {};
  let frame = 0, progress = 0, desired = 0, lastTime = 0, visible = true, dead = false;
  let width = 1, height = 1;
  const pointer = [0, 0], pointerTarget = [0, 0];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const resources = () => {
    scene.traverse(object => {
      if (object instanceof Mesh) {
        object.geometry.dispose();
        const materials: Material[] = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach(material => {
          Object.values(material).forEach(value => { if (value?.isTexture) value.dispose(); });
          material.dispose();
        });
      }
    });
    disposeLights(); renderer.dispose(); renderer.domElement.remove();
  };
  const render = (time: number) => {
    frame = 0;
    if (dead || !visible || document.hidden) return;
    const delta = Math.min((time - lastTime) / 1000 || 1 / 60, 0.05);
    lastTime = time;
    const blend = 1 - Math.exp(-delta * 8);
    progress += (desired - progress) * blend;
    pointer.forEach((value, i) => { pointer[i] = value + (pointerTarget[i] - value) * blend; });
    updateCamera(camera, reduced.matches ? 0.7 : progress, width, height, reduced.matches ? [0, 0] : pointer);
    renderer.render(scene, camera);
    if (Math.abs(desired - progress) > 0.0001 || pointer.some((v, i) => Math.abs(v - pointerTarget[i]) > 0.001)) wake();
  };
  const wake = () => { if (!frame && !dead && visible && !document.hidden) frame = requestAnimationFrame(render); };
  const scroll = () => {
    const rect = section.getBoundingClientRect();
    desired = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - innerHeight)));
    wake();
  };
  const resize = () => {
    width = host.clientWidth; height = host.clientHeight;
    renderer.setSize(width, height); scroll();
  };
  const move = (event: PointerEvent) => {
    if (low || reduced.matches || event.pointerType !== 'mouse') return;
    pointerTarget[0] = event.clientX / innerWidth - 0.5;
    pointerTarget[1] = event.clientY / innerHeight - 0.5; wake();
  };
  const leave = () => { pointerTarget.fill(0); wake(); };
  const lost = (event: Event) => { event.preventDefault(); dispose(); onFailure(); };
  const resizeObserver = new ResizeObserver(resize);
  const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) scroll(); });
  const dispose = () => {
    if (dead) return;
    dead = true; cancelAnimationFrame(frame);
    resizeObserver.disconnect(); intersection.disconnect();
    window.removeEventListener('scroll', scroll);
    window.removeEventListener('pointermove', move);
    document.removeEventListener('pointerleave', leave);
    document.removeEventListener('visibilitychange', wake);
    reduced.removeEventListener('change', wake);
    renderer.domElement.removeEventListener('webglcontextlost', lost);
    signal.removeEventListener('abort', dispose);
    resources();
  };
  try {
    const car = await loadCar(signal);
    scene.add(car);
    if (signal.aborted) { dispose(); return dispose; }
    disposeLights = addLighting(scene, renderer, low);
    addEnvironment(scene);
    scroll(); progress = desired;
    resize();
    updateCamera(camera, reduced.matches ? 0.7 : progress, width, height, pointer);
    renderer.render(scene, camera);
    renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
    host.appendChild(renderer.domElement);
    host.dataset.ready = 'true';
    renderer.domElement.addEventListener('webglcontextlost', lost);
    resizeObserver.observe(host); intersection.observe(section);
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', wake);
    reduced.addEventListener('change', wake);
    signal.addEventListener('abort', dispose, { once: true });
    return dispose;
  } catch (error) { dispose(); throw error; }
}
