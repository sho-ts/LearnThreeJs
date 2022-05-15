import * as t from "three";
import Earth from "./objects/Earth";
import Light from "./objects/Light";
import App from "./App";

const app = new App();

const group = new t.Group();

for (let i = 0; i < 100; i++) {
  const earth = new Earth();
  earth.position.x = (Math.random() - 0.5) * 2000;
  earth.position.y = (Math.random() - 0.5) * 2000;
  earth.position.z = (Math.random() - 0.5) * 2000;
  earth.rotation.x = Math.random() * 2 * Math.PI;
  earth.rotation.y = Math.random() * 2 * Math.PI;
  earth.rotation.z = Math.random() * 2 * Math.PI;

  group.add(earth);
}

const light = new Light({
  type: "ambient",
  color: 0xffffff,
  position: [0, 0, 90],
}).getObject();

app.init([light, group]);

const tick = () => {
  requestAnimationFrame(tick);

  group.rotation.y += 0.01

  app.render();
};

tick();
