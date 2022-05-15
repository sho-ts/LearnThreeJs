import * as t from "three";

const width = 960;
const height = 540;

const renderer = new t.WebGL1Renderer({
  canvas: document.getElementById("root")!,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

const scene = new t.Scene();

const camera = new t.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

const geometry = new t.BoxGeometry(500, 500, 500);

const material = new t.MeshStandardMaterial({
  color: 0x0000ff,
});

const box = new t.Mesh(geometry, material);

scene.add(box);

const light = new t.DirectionalLight(0xffffff);
light.intensity = 2;

scene.add(light);

light.position.set(1, 1, 1);

renderer.render(scene, camera);

const tick = () => {
  requestAnimationFrame(tick);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  renderer.render(scene, camera);
};

tick();
