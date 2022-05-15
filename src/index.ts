import * as t from "three";
import earth from "./assets/earth.jpg";

const renderer = new t.WebGL1Renderer({
  canvas: document.getElementById("root")!,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new t.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  10000
);
camera.position.set(0, 0, +1000);

const scene = new t.Scene();

const render = () => renderer.render(scene, camera);

const box = new t.Mesh(
  new t.BoxGeometry(100, 100, 100),
  new t.MeshStandardMaterial({
    color: 0x3366ff,
  })
);

box.position.x = 200;

const sphere = new t.Mesh(
  new t.SphereGeometry(100, 100, 100),
  new t.MeshStandardMaterial({
    map: new t.TextureLoader().load(earth),
  })
);

const light = new t.DirectionalLight(0xffffff);
light.position.set(1, 1, 90);

[light, sphere, box].forEach((item) => scene.add(item));

const tick = () => {
  requestAnimationFrame(tick);

  sphere.rotation.x += 0.001;
  sphere.rotation.y += 0.001;

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  render();
};

tick();
