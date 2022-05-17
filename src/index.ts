import * as t from "three";
import Earth from "./objects/Earth";
import Light from "./objects/Light";
import App from "./App";

const labelElement = document.querySelector<HTMLDivElement>(".label")!;

const app = new App();

const earth = new Earth();
const light = new Light({
  type: "ambient",
  color: 0xffffff,
  position: [0, 0, 90],
}).getObject();

app.init([light, earth]);

let direction = "left";

const tick = () => {
  requestAnimationFrame(tick);

  earth.rotation.y += 0.01;

  const worldPosition = earth.getWorldPosition(new t.Vector3());
  const project = worldPosition.project(app.camera);

  const screenX = (window.innerWidth / 2) * (+project.x + 1.0);
  const screenY = (window.innerHeight / 2) * (-project.y + 1.0);

  if (direction === "right") {
    earth.position.x += 0.5;
    earth.position.y -= 0.5;
    earth.position.z -= 0.5;
  }
  if (direction === "left") {
    earth.position.x -= 0.5;
    earth.position.y += 0.5;
    earth.position.z += 0.5;
  }

  if (earth.position.x === 300) direction = "left";
  if (earth.position.x === -300) direction = "right";

  labelElement.innerHTML = `x: ${worldPosition.x}<br />y: ${worldPosition.y}<br />z: ${worldPosition.z}`;
  labelElement.style.left = `${screenX}px`;
  labelElement.style.top = `${screenY}px`;

  app.render();
};

tick();
