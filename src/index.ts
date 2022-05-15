import * as t from "three";
import Earth from "./components/Earth";
import Light from "./components/Light";
import App from "./App";

const app = new App();
app.init();

const earth = new Earth();
const light = new Light({
  type: "directional",
  color: 0xffffff,
  position: [0, 0, 90],
}).getObject();

[light, earth].forEach((item) => app.scene.add(item));

const tick = () => {
  requestAnimationFrame(tick);

  earth.rotation.x += 0.001;

  app.render();
};

tick();
