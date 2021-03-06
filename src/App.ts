import * as t from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class App {
  canvas: HTMLCanvasElement;
  renderer: t.WebGL1Renderer;
  camera: t.PerspectiveCamera;
  controls: OrbitControls;
  scene: t.Scene;

  constructor() {
    this.canvas = document.querySelector<HTMLCanvasElement>("#root")!;
    this.renderer = new t.WebGL1Renderer({
      canvas: this.canvas,
    });
    this.camera = new t.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.scene = new t.Scene();
    this.scene.fog = new t.Fog(0x000000, 50, 8000)
  }

  public init(objects?: t.Object3D<t.Event>[]) {
    this.initRenderer();
    this.initCamera();
    this.initControls();

    objects && objects.forEach((obj) => this.scene.add(obj));
  }

  private initRenderer() {
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private initCamera() {
    this.camera.position.set(0, 0, +1000);
  }

  private initControls() {
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.2;
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export default App;
