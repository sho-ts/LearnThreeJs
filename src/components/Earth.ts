import * as t from "three";
import earthTexture from "../assets/earth.jpg";

class Earth extends t.Mesh {
  constructor() {
    super(
      new t.SphereGeometry(100, 100, 100),
      new t.MeshStandardMaterial({
        map: new t.TextureLoader().load(earthTexture),
      })
    );
  }
}

export default Earth;