import { useEffect, useRef, useState } from 'react'

export default function Counter({ value, suffix = '' }) {
  const [n, setN] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        obs.unobserve(el)
        const step = Math.max(1, Math.ceil(value / 60))
        let cur = 0
        const tick = () => {
          cur += step
          if (cur >= value) setN(value)
          else { setN(cur); requestAnimationFrame(tick) }
        }
        tick()
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return <h2 ref={ref}>{n}{suffix}</h2>
}
