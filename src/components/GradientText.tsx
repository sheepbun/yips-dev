// #ff1493 → #ffe135 per-character interpolation
// Ensures the gradient spans from first char to last char regardless of line wrapping.

const PINK: [number, number, number] = [255, 20, 147]
const YELLOW: [number, number, number] = [255, 225, 53]

function gradientColor(t: number): string {
  const r = Math.round(PINK[0] + (YELLOW[0] - PINK[0]) * t)
  const g = Math.round(PINK[1] + (YELLOW[1] - PINK[1]) * t)
  const b = Math.round(PINK[2] + (YELLOW[2] - PINK[2]) * t)
  return `rgb(${r},${g},${b})`
}

export function GradientText({ children, className }: { children: string; className?: string }) {
  const chars = Array.from(children)
  const n = chars.length
  if (n === 0) return null

  return (
    <span className={className}>
      {chars.map((char, i) => (
        <span key={i} style={{ color: gradientColor(n > 1 ? i / (n - 1) : 0) }}>
          {char}
        </span>
      ))}
    </span>
  )
}
