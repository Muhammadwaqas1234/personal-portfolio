/* Minimal, calm backdrop — a single very faint accent glow.
   No WebGL: keeps the page light, fast, and distraction-free. */
export default function Scene3D() {
  return (
    <div className="scene-3d" aria-hidden="true">
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-grid" />
    </div>
  )
}
