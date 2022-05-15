import * as t from "three";

type LightType = "directional" | "ambient";
type LightOptions = {
  color: number;
  type: LightType;
  position?: [number, number, number];
};

class Light {
  lightObject: t.DirectionalLight | t.AmbientLight;

  constructor({ type, color, position }: LightOptions) {
    this.lightObject = (() => {
      switch (type) {
        case "directional":
        default:
          const light = new t.DirectionalLight(color);
          if (position) light.position.set(...position);

          return light;
        case "ambient":
          return new t.AmbientLight(color);
      }
    })();
  }

  getObject() {
    return this.lightObject;
  }
}

export default Light;
