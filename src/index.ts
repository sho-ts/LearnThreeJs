import * as t from "three";
import Earth from "./objects/Earth";
import Light from "./objects/Light";
import App from "./App";

const app = new App();

const earth = new Earth();
const light = new Light({
  type: "ambient",
  color: 0xffffff,
  position: [0, 0, 90],
}).getObject();

app.init([light, earth]);

const tick = () => {
  requestAnimationFrame(tick);

  earth.rotation.x += 0.001;

  app.render();
};

tick();
