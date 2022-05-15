import * as t from "three";

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

const box = new t.Mesh(
  new t.BoxGeometry(500, 500, 500),
  new t.MeshStandardMaterial({
    color: 0x0000ff,
  })
);

const light = new t.DirectionalLight(0xffffff);
light.intensity = 2;
light.position.set(1, 1, 1);

const scene = new t.Scene();
[light, box].forEach((item) => scene.add(item));

const tick = () => {
  requestAnimationFrame(tick);

  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  renderer.render(scene, camera);
};

tick();
