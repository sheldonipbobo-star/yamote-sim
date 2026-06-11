import { useEffect, useRef } from 'react'
import './App.css'
import SceneManager from './scenes/SceneManager'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneManagerRef = useRef<SceneManager | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize 3D Scene
    sceneManagerRef.current = new SceneManager(containerRef.current)
    sceneManagerRef.current.initialize()
    sceneManagerRef.current.animate()

    // Cleanup on unmount
    return () => {
      if (sceneManagerRef.current) {
        sceneManagerRef.current.dispose()
      }
    }
  }, [])

  return (
    <div className="app">
      <div ref={containerRef} className="canvas-container" />
      <div className="ui-overlay">
        <h1>山手線3D乘搭模擬器</h1>
        <p>Yamanote Line Simulator</p>
      </div>
    </div>
  )
}

export default App
