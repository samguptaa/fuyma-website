import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''))

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const tick = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * numericValue))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [numericValue, duration])

  const displayValue = value.toString().replace(numericValue.toString(), count.toString())

  return (
    <span ref={ref} className="stat-number">
      {count === 0 ? '0' : displayValue}
      {suffix}
    </span>
  )
}
