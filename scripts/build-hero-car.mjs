// Original, unbadged grand tourer. Rebuild with: node scripts/build-hero-car.mjs
import * as T from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { mkdir, writeFile } from 'node:fs/promises';

globalThis.FileReader = class {
  readAsArrayBuffer(blob) { blob.arrayBuffer().then(value => { this.result = value; this.onloadend?.(); }); }
};
const car = new T.Group(); car.name = 'AutoTrads Original GT';
const paint = new T.MeshPhysicalMaterial({ color: '#454b54', metalness: 0.88, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.15 });
const glass = new T.MeshPhysicalMaterial({ color: '#101923', metalness: 0.48, roughness: 0.12, clearcoat: 1 });
const rubber = new T.MeshStandardMaterial({ color: '#131313', roughness: 0.88 });
const dark = new T.MeshStandardMaterial({ color: '#121417', metalness: 0.65, roughness: 0.32 });
const alloy = new T.MeshStandardMaterial({ color: '#aab3bf', metalness: 1, roughness: 0.25 });
const brake = new T.MeshStandardMaterial({ color: '#5b6066', metalness: 0.8, roughness: 0.45 });
const orange = new T.MeshStandardMaterial({ color: '#ff7a00', metalness: 0.45, roughness: 0.33 });
const led = new T.MeshStandardMaterial({ color: '#ffffff', emissive: '#dce9ff', emissiveIntensity: 3 });
const red = new T.MeshStandardMaterial({ color: '#990e10', emissive: '#ff1515', emissiveIntensity: 2 });
function mesh(geo, mat, pos = [0, 0, 0], name = '') {
  const m = new T.Mesh(geo, mat); m.position.set(...pos); m.name = name; car.add(m); return m;
}
function box(size, pos, mat, radius = 0.035) { return mesh(new RoundedBoxGeometry(...size, 1, radius), mat, pos); }
function line(points, material, radius = 0.012) {
  return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p => new T.Vector3(...p))), 40, radius, 6, false), material);
}
// Sculpted longitudinal shell: widths and shoulder/crown heights vary along the body.
const stations = [
  [-2.4,.69,.70,.84], [-2.25,.91,.91,1.02], [-1.65,1.0,1.10,1.16],
  [-1.0,.96,1.06,1.12], [0,.93,1.04,1.1], [1.2,1.0,1.10,1.16],
  [1.85,.96,1.01,1.09], [2.25,.87,.77,.9], [2.4,.72,.70,.81],
];
const curves = [1,2,3].map(i => new T.SplineCurve(stations.map(s=>new T.Vector2(s[0],s[i]))));
const vertices=[], indices=[];
const nx=100, nr=40;
for(let i=0;i<=nx;i++) {
  const p=curves.map(c=>c.getPoint(i/nx));
  const x=p[0].x, w=p[0].y, shoulder=p[1].y, crown=p[2].y;
  for(let j=0;j<=nr;j++) {
    const a=j/nr*Math.PI*2;
    const z=w*Math.sign(Math.sin(a))*Math.pow(Math.abs(Math.sin(a)),.55);
    let y=Math.cos(a)>=0 ? shoulder+(crown-shoulder)*Math.pow(Math.cos(a),.7) : shoulder-(shoulder-.38)*Math.pow(-Math.cos(a),.5);
    // True open wheel arches cut the lower shell around each tyre.
    const distance=Math.min(Math.abs(x-1.48),Math.abs(x+1.5));
    if(distance<.56 && Math.abs(z)>w*.72 && Math.cos(a)<0) y=Math.max(y,.51+Math.sqrt(.56*.56-distance*distance));
    vertices.push(x,y,z);
    if(i<nx&&j<nr) {const a=i*(nr+1)+j,b=a+nr+1; indices.push(a,a+1,b,b,a+1,b+1);}
  }
}
const body=new T.BufferGeometry();body.setAttribute('position',new T.Float32BufferAttribute(vertices,3));body.setIndex(indices);body.computeVertexNormals();
mesh(body,paint,[0,0,0],'Sculpted aluminium body');
box([4.25,.14,1.65],[0,.36,0],dark);
// Glazed cabin with curved roof and separate body-colour pillars.
function panel(points, mat) {
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(points.flat(),3));g.setIndex([0,1,2,0,2,3]);g.computeVertexNormals();
  const m=mat.clone();m.side=T.DoubleSide;return mesh(g,m);
}
panel([[.76,1.01,-.82],[.76,1.01,.82],[.08,1.62,.65],[.08,1.62,-.65]],glass);
panel([[-1.76,1.03,.81],[-1.76,1.03,-.81],[-1.02,1.6,-.64],[-1.02,1.6,.64]],glass);
box([1.18,.09,1.33],[-.5,1.62,0],paint,.045);
for(const sign of [-1,1]) {
  const z=v=>v*sign;
  panel([[.68,1.02,z(.84)],[.04,1.58,z(.66)],[-1.04,1.57,z(.65)],[-1.66,1.04,z(.84)]],glass);
  line([[.73,1.02,z(.85)],[.08,1.61,z(.68)],[-.55,1.65,z(.67)],[-1.06,1.6,z(.67)],[-1.73,1.03,z(.85)]],paint,.035);
  line([[-.67,1.03,z(.855)],[-.68,1.59,z(.68)]],dark,.028);
  line([[.69,1.02,z(.86)],[-.5,1.025,z(.87)],[-1.67,1.04,z(.86)]],alloy,.009);
  line([[.67,.99,z(.937)],[.59,.74,z(.948)],[.48,.46,z(.91)],[-.88,.45,z(.91)],[-1.02,.8,z(.966)],[-1.04,.99,z(.961)]],dark,.008);
  box([.21,.036,.03],[-.73,.91,z(.963)],alloy,.014);
  box([.37,.1,.1],[.42,.99,z(1.02)],dark);
  box([.28,.13,.2],[.4,1.08,z(1.13)],paint,.05);
  line([[1.98,.87,z(.45)],[1.4,.99,z(.48)],[.8,1.025,z(.55)]],paint,.018);
  box([2.15,.09,.085],[-.06,.4,z(.95)],paint);
  // Slim white front optics and a sculpted dark housing.
  box([.14,.145,.54],[2.29,.71,z(.53)],dark);
  box([.155,.035,.48],[2.31,.752,z(.53)],led,.012);
  box([.09,.12,.5],[-2.3,.79,z(.53)],dark);
  box([.105,.033,.49],[-2.35,.815,z(.53)],red,.01);
  for(const x of [-1.5,1.48]) {
    const tire=mesh(new T.TorusGeometry(.405,.135,16,64),rubber,[x,.53,z(.95)],'Performance tyre');
    tire.scale.z=1.15;
    const rim=mesh(new T.CylinderGeometry(.34,.34,.12,48),dark,[x,.53,z(1.065)]);rim.rotation.x=Math.PI/2;
    const disc=mesh(new T.CylinderGeometry(.28,.28,.025,48),brake,[x,.53,z(1.085)]);disc.rotation.x=Math.PI/2;
    mesh(new T.TorusGeometry(.326,.018,8,48),alloy,[x,.53,z(1.14)]);
    mesh(new T.TorusGeometry(.46,.004,4,64),dark,[x,.53,z(1.083)]);
    box([.095,.21,.065],[x+.21,.57,z(1.11)],orange);
    for(let k=0;k<10;k++) {
      const angle=k*Math.PI/5;
      const spoke=box([.047,.29,.036],[x+Math.sin(angle)*.18,.53+Math.cos(angle)*.18,z(1.14)],alloy,.01);spoke.rotation.z=-angle+.15;
    }
    const hub=mesh(new T.CylinderGeometry(.079,.079,.04,32),alloy,[x,.53,z(1.16)]);hub.rotation.x=Math.PI/2;
    for(let k=0;k<5;k++){const a=k*Math.PI*2/5;mesh(new T.SphereGeometry(.012,6,6),dark,[x+Math.sin(a)*.052,.53+Math.cos(a)*.052,z(1.185)]);}
  }
}
box([.18,.24,1.23],[2.3,.49,0],dark);
for(let i=-7;i<=7;i++) box([.03,.18,.02],[2.398,.49,i*.076],brake,.005);
box([.16,.065,1.82],[2.25,.33,0],dark);
box([.2,.22,1.6],[-2.28,.45,0],dark);
for(const z of [-.65,.65]) {const exhaust=mesh(new T.CylinderGeometry(.065,.065,.18,24),alloy,[-2.4,.43,z]);exhaust.rotation.z=Math.PI/2;}
// Bake transforms and batch by PBR material: a dozen draw calls, no runtime modelling.
car.updateMatrixWorld(true);
const batches=new Map();
for(const child of car.children) {
  const key=child.material.uuid;
  if(!batches.has(key)) batches.set(key,{material:child.material,geometries:[]});
  const geometry=child.geometry.clone().applyMatrix4(child.matrixWorld);
  batches.get(key).geometries.push(geometry.index ? geometry.toNonIndexed() : geometry);
}
car.clear();
for(const {material,geometries} of batches.values()) {
  // Cabin panels have no UVs; no materials use image textures.
  geometries.forEach(g=>g.deleteAttribute('uv'));
  car.add(new T.Mesh(mergeVertices(mergeGeometries(geometries)),material));
}
const exporter=new GLTFExporter();
const output=await exporter.parseAsync(car,{binary:true});
await mkdir('public/models',{recursive:true});
await writeFile('public/models/car.glb',Buffer.from(output));
console.log(`Original vehicle: ${(output.byteLength/1024).toFixed(0)} KB`);
