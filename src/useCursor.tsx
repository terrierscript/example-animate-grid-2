import { useState, useRef, useEffect } from "react"
import { Rect } from "./index"
export const useCursor = (initial = { x: 0, y: 0 }) => {
  const [gridPosition, setGridPosition] = useState(initial)
  const [cursorRect, setCursor] = useState<null | Rect>(null)
  const calcuratorRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!calcuratorRef.current) return
    const top = calcuratorRef.current.offsetTop
    const left = calcuratorRef.current.offsetLeft
    const width = calcuratorRef.current.clientWidth
    const height = calcuratorRef.current.clientHeight
    const cursor = { top, left, width, height }
    setCursor(cursor)
  }, [gridPosition])
  return { cursorRect, setGridPosition, calcuratorRef, gridPosition }
}
