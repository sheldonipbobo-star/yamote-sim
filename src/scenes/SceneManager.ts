import * as THREE from 'three'

interface SceneConfig {
  width: number
  height: number
  fov: number
  near: number
  far: number
}

export default class SceneManager {
  private container: HTMLDivElement
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private config: SceneConfig
  private animationFrameId: number | null = null

  constructor(container: HTMLDivElement) {
    this.container = container
    this.config = {
      width: window.innerWidth,
      height: window.innerHeight,
      fov: 75,
      near: 0.1,
      far: 10000,
    }

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x1a1a2e)
    this.scene.fog = new THREE.Fog(0x1a1a2e, 2000, 10000)

    this.camera = new THREE.PerspectiveCamera(
      this.config.fov,
      this.config.width / this.config.height,
      this.config.near,
      this.config.far
    )
    this.camera.position.set(0, 10, 30)
    this.camera.lookAt(0, 0, 0)

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.config.width, this.config.height)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.shadowMap.enabled = true

    this.container.appendChild(this.renderer.domElement)

    // Handle window resize
    window.addEventListener('resize', () => this.onWindowResize())
  }

  initialize(): void {
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(100, 100, 50)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    this.scene.add(directionalLight)

    // Add a simple train platform
    const platformGeometry = new THREE.BoxGeometry(300, 2, 50)
    const platformMaterial = new THREE.MeshStandardMaterial({ color: 0x404040 })
    const platform = new THREE.Mesh(platformGeometry, platformMaterial)
    platform.position.y = -10
    platform.receiveShadow = true
    this.scene.add(platform)

    // Add a simple train
    this.createTrain()
  }

  private createTrain(): void {
    // Train body
    const trainGeometry = new THREE.BoxGeometry(25, 15, 10)
    const trainMaterial = new THREE.MeshStandardMaterial({ color: 0x00a8e8 })
    const trainMesh = new THREE.Mesh(trainGeometry, trainMaterial)
    trainMesh.position.y = 0
    trainMesh.castShadow = true
    trainMesh.receiveShadow = true
    this.scene.add(trainMesh)

    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(3, 3, 2, 32)
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 })

    for (let i = -1; i <= 1; i++) {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial)
      wheel.rotation.z = Math.PI / 2
      wheel.position.set(i * 10, -5, 0)
      wheel.castShadow = true
      this.scene.add(wheel)
    }
  }

  animate(): void {
    const animationLoop = () => {
      this.animationFrameId = requestAnimationFrame(animationLoop)
      this.renderer.render(this.scene, this.camera)
    }
    animationLoop()
  }

  private onWindowResize(): void {
    this.config.width = window.innerWidth
    this.config.height = window.innerHeight

    this.camera.aspect = this.config.width / this.config.height
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(this.config.width, this.config.height)
  }

  dispose(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId)
    }
    this.renderer.dispose()
    this.container.removeChild(this.renderer.domElement)
    window.removeEventListener('resize', () => this.onWindowResize())
  }
}
