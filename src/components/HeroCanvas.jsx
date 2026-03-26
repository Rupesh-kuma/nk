import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Renderer ──────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    mount.appendChild(renderer.domElement)

    // ── Scene / Camera ────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(65, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.set(0, 0, 22)

    // ── Mouse ─────────────────────────────────────────
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ══════════════════════════════════════════════════
    // 1. INFINITE GRID FLOOR (sci-fi)
    // ══════════════════════════════════════════════════
    const gridHelper = new THREE.GridHelper(200, 80, 0x00c8ff, 0x0a0a40)
    gridHelper.position.y = -8
    gridHelper.material.opacity = 0.18
    gridHelper.material.transparent = true
    scene.add(gridHelper)

    // ══════════════════════════════════════════════════
    // 2. NEURAL NETWORK — nodes + connections
    // ══════════════════════════════════════════════════
    const NODE_COUNT = 80
    const nodes = []
    const nodePositions = []

    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 7 + Math.random() * 6
      nodePositions.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.6,
          r * Math.cos(phi)
        )
      )
    }

    // Node spheres
    const nodeGeo = new THREE.SphereGeometry(0.08, 8, 8)
    nodePositions.forEach((pos, i) => {
      const intensity = Math.random()
      const col = intensity > 0.6
        ? new THREE.Color(0x00c8ff)
        : intensity > 0.3
        ? new THREE.Color(0x8b5cf6)
        : new THREE.Color(0x06ffd4)

      const mat = new THREE.MeshBasicMaterial({ color: col })
      const node = new THREE.Mesh(nodeGeo, mat)
      node.position.copy(pos)
      scene.add(node)
      nodes.push({ mesh: node, basePos: pos.clone(), phase: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.5 })
    })

    // Connections
    const connectionMat = new THREE.LineBasicMaterial({
      color: 0x00c8ff,
      transparent: true,
      opacity: 0.08,
    })

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 4.5) {
          const geo = new THREE.BufferGeometry().setFromPoints([nodePositions[i], nodePositions[j]])
          scene.add(new THREE.Line(geo, connectionMat))
        }
      }
    }

    // ══════════════════════════════════════════════════
    // 3. CENTRAL AI CORE — layered rings + icosahedron
    // ══════════════════════════════════════════════════
    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    // Inner pulsing sphere
    const coreGeo = new THREE.IcosahedronGeometry(1.8, 2)
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00c8ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    coreGroup.add(coreMesh)

    // Outer shell
    const shellGeo = new THREE.IcosahedronGeometry(2.4, 1)
    const shellMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    const shellMesh = new THREE.Mesh(shellGeo, shellMat)
    coreGroup.add(shellMesh)

    // Orbiting rings
    const ringConfigs = [
      { r: 3.2, tube: 0.02, col: 0x00c8ff, rotX: 0, rotY: 0, rotZ: Math.PI * 0.1, speed: 0.008 },
      { r: 3.8, tube: 0.015, col: 0x8b5cf6, rotX: Math.PI * 0.3, rotY: 0, rotZ: Math.PI * 0.2, speed: -0.006 },
      { r: 4.4, tube: 0.01, col: 0x06ffd4, rotX: Math.PI * 0.6, rotY: Math.PI * 0.2, rotZ: 0, speed: 0.004 },
    ]

    const rings = ringConfigs.map(({ r, tube, col, rotX, rotZ, speed }) => {
      const geo = new THREE.TorusGeometry(r, tube, 16, 120)
      const mat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.6 })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.rotation.x = rotX
      mesh.rotation.z = rotZ
      coreGroup.add(mesh)
      return { mesh, speed }
    })

    // Orbiting satellites
    const satGeo = new THREE.OctahedronGeometry(0.18)
    const satellites = [0x00c8ff, 0x8b5cf6, 0x06ffd4, 0xf472b6].map((col, i) => {
      const mat = new THREE.MeshBasicMaterial({ color: col })
      const sat = new THREE.Mesh(satGeo, mat)
      coreGroup.add(sat)
      return { mesh: sat, angle: (i / 4) * Math.PI * 2, orbit: 3.2 + i * 0.3, speed: 0.015 + i * 0.005 }
    })

    // ══════════════════════════════════════════════════
    // 4. DATA STREAMS — vertical particle lines
    // ══════════════════════════════════════════════════
    const streamCount = 60
    const streamParticles = []

    for (let s = 0; s < streamCount; s++) {
      const x = (Math.random() - 0.5) * 40
      const z = -5 + (Math.random() - 0.5) * 10
      const count = Math.floor(6 + Math.random() * 12)
      const geo = new THREE.BufferGeometry()
      const positions = new Float32Array(count * 3)
      for (let p = 0; p < count; p++) {
        positions[p * 3 + 0] = x
        positions[p * 3 + 1] = -20 + p * (40 / count)
        positions[p * 3 + 2] = z
      }
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

      const col = Math.random() > 0.5 ? 0x00c8ff : 0x8b5cf6
      const mat = new THREE.PointsMaterial({
        color: col, size: 0.06,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
      })
      const pts = new THREE.Points(geo, mat)
      scene.add(pts)
      streamParticles.push({ pts, speed: 0.03 + Math.random() * 0.08 })
    }

    // ══════════════════════════════════════════════════
    // 5. AMBIENT PARTICLE FIELD
    // ══════════════════════════════════════════════════
    const PART_COUNT = 2500
    const partGeo = new THREE.BufferGeometry()
    const partPositions = new Float32Array(PART_COUNT * 3)
    const partColors = new Float32Array(PART_COUNT * 3)
    const palette = [
      new THREE.Color(0x00c8ff),
      new THREE.Color(0x8b5cf6),
      new THREE.Color(0x06ffd4),
      new THREE.Color(0xf472b6),
    ]

    for (let i = 0; i < PART_COUNT; i++) {
      partPositions[i * 3 + 0] = (Math.random() - 0.5) * 60
      partPositions[i * 3 + 1] = (Math.random() - 0.5) * 40
      partPositions[i * 3 + 2] = (Math.random() - 0.5) * 30
      const c = palette[Math.floor(Math.random() * palette.length)]
      partColors[i * 3 + 0] = c.r
      partColors[i * 3 + 1] = c.g
      partColors[i * 3 + 2] = c.b
    }
    partGeo.setAttribute('position', new THREE.BufferAttribute(partPositions, 3))
    partGeo.setAttribute('color', new THREE.BufferAttribute(partColors, 3))

    const partMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })
    const partSystem = new THREE.Points(partGeo, partMat)
    scene.add(partSystem)

    // ══════════════════════════════════════════════════
    // 6. HEXAGONAL PANELS — background depth layers
    // ══════════════════════════════════════════════════
    for (let h = 0; h < 6; h++) {
      const geo = new THREE.CircleGeometry(0.8, 6)
      const mat = new THREE.MeshBasicMaterial({
        color: h % 2 === 0 ? 0x00c8ff : 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.05 + Math.random() * 0.08,
      })
      const hex = new THREE.Mesh(geo, mat)
      hex.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        -8 + Math.random() * -5
      )
      hex.rotation.z = Math.random() * Math.PI
      scene.add(hex)
    }

    // ══════════════════════════════════════════════════
    // ANIMATION LOOP
    // ══════════════════════════════════════════════════
    let rafId
    const clock = new THREE.Clock()
    let camTargetX = 0, camTargetY = 0

    function animate() {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Core rotation
      coreMesh.rotation.x = t * 0.25
      coreMesh.rotation.y = t * 0.35
      shellMesh.rotation.x = -t * 0.18
      shellMesh.rotation.y = t * 0.28

      // Ring orbits
      rings.forEach(({ mesh, speed }) => { mesh.rotation.y += speed })

      // Satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed
        sat.mesh.position.x = Math.cos(sat.angle) * sat.orbit
        sat.mesh.position.y = Math.sin(sat.angle * 0.7) * 0.8
        sat.mesh.position.z = Math.sin(sat.angle) * sat.orbit
        sat.mesh.rotation.x += 0.04
        sat.mesh.rotation.y += 0.03
      })

      // Core group bob
      coreGroup.position.y = Math.sin(t * 0.5) * 0.4
      coreGroup.rotation.y = t * 0.05

      // Neural nodes pulse
      nodes.forEach((n) => {
        const s = 1 + 0.15 * Math.sin(t * n.speed + n.phase)
        n.mesh.scale.setScalar(s)
      })

      // Data streams scroll
      streamParticles.forEach(({ pts, speed }) => {
        pts.position.y += speed
        if (pts.position.y > 20) pts.position.y = -20
      })

      // Particle system slow rotate
      partSystem.rotation.y = t * 0.015
      partSystem.rotation.x = t * 0.007

      // Camera mouse parallax
      camTargetX += (mouse.x * 1.5 - camTargetX) * 0.04
      camTargetY += (mouse.y * 0.8 - camTargetY) * 0.04
      camera.position.x = camTargetX
      camera.position.y = camTargetY
      camera.lookAt(0, 0, 0)

      // Grid slow scroll
      gridHelper.position.z = (t * 2) % 5

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ────────────────────────────────────────
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      rafId && cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  )
}
