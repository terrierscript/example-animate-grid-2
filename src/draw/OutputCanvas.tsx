import React, { useRef, useLayoutEffect, FC } from "react"
import styled from "styled-components"
const CloakCanvas = styled.canvas`
  display: none;
`
export const OutputCanvas: FC<{
  scale: number
  source: HTMLCanvasElement | HTMLImageElement
  timestamp: number
  baseColor: string
  onChange: (url: string) => unknown
}> = ({ scale, baseColor, timestamp, source, onChange }) => {
  const ref = useRef<HTMLCanvasElement>()

  const drawBg = () => {
    if (ref.current === undefined) return
    const ctx = ref.current.getContext("2d")
    if (ctx === null) return
    const canvas = ref.current
    ctx.beginPath()
    ctx.fillStyle = baseColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.stroke()
  }
  useLayoutEffect(() => {
    if (!ref.current) return
    const ctx = ref.current.getContext("2d")
    if (!ctx) return
    if (!source) return
    drawBg()

    ctx.drawImage(source, 0, 0, source.width * scale, source.height * scale)
    const imgUrl = ref.current.toDataURL("image/png")
    onChange(imgUrl)
  }, [scale, source, timestamp])
  return (
    <CloakCanvas
      width={source.width * scale}
      height={source.height * scale}
      ref={ref}
    ></CloakCanvas>
  )
}
