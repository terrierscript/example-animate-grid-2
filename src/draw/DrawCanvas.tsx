import React, { useRef, useState, useLayoutEffect, FC } from "react"
import { Canvas } from "../Canvas"
import { Cloak } from "./ScaleCalcurator"
export type Point = [number, number]
export type Rect = [number, number, number, number]
const getRect = (x1, y1, x2, y2): Rect => {
  const x = Math.min(x1, x2)
  const w = Math.abs(x1 - x2)
  const y = Math.min(y1, y2)
  const h = Math.abs(y1 - y2)
  return [x, y, w, h]
}
// type DrawFn = (rect: Rect) => void
// export const Drawer = ({ mode,  setImageSource }) => {

export const DrawCanvas: FC<{
  mode: string
  setImageSource: Function
  size: any
  maskPreset?: string | null
  [rest: string]: unknown
}> = ({ setImageSource, maskPreset, mode, size, ...rest }) => {
  const ref = useRef<HTMLCanvasElement>()
  const presetImgRef = useRef<HTMLImageElement>()
  const ctxRef = useRef<CanvasRenderingContext2D>()
  const [before, setBefore] = useState<Point | null>(null)
  const [draw, setDraw] = useState(false)
  const [width, height] = size
  // const color = mode === "mask" ? "white" : "black"
  useLayoutEffect(() => {
    if (ref.current === undefined) {
      return
    }

    const ctx = ref.current.getContext("2d")
    if (ctx === null) {
      return
    }
    ctxRef.current = ctx
    setImageSource(ref.current)
  }, [size])

  const drawPreset = () => {
    console.log("drawPreset", ctxRef.current, presetImgRef.current)

    if (ctxRef.current && presetImgRef.current) {
      ctxRef.current.drawImage(presetImgRef.current, 0, 0)
    }
  }
  useLayoutEffect(() => {
    drawPreset()
  }, [maskPreset])
  const getCanvasPos = (mx, my): Point | null => {
    if (!ref.current) {
      return null
    }
    const ctx = ctxRef.current
    if (!ctx) {
      return null
    }
    const cx = mx - ref.current.offsetLeft
    const cy = my - ref.current.offsetTop
    return [cx, cy]
  }
  const start = (mx: number, my: number) => {
    if (!ref.current) return
    setDraw(true)
    setBefore(getCanvasPos(mx, my))
    const ctx = ctxRef.current //.getContext("2d")
    if (!ctx) return
    ctx.globalCompositeOperation =
      mode === "mask" ? "source-over" : "destination-out"
    ctx.lineWidth = 5
    ctx.strokeStyle = "white"
    ctx.lineCap = "round"
  }
  const move = (mx: number, my: number) => {
    if (!ctxRef.current) return
    if (!ref.current) return
    if (!before) return
    if (!draw) return
    // const ctx = ref.current.getContext("2d")
    const ctx = ctxRef.current
    if (!ctx) return
    // const [bx, by] = before
    const curr = getCanvasPos(mx, my)
    if (!curr) {
      return
    }
    ctx.beginPath()
    ctx.moveTo(...before)
    ctx.lineTo(...curr)
    ctx.closePath()
    ctx.stroke()
    setBefore(curr)
  }
  const end = () => {
    setDraw(false)
    if (!ctxRef.current) return
    const ctx = ctxRef.current
    ctx.stroke()
    ctx.closePath()
    if (ref.current) {
      const maskImgUrl = ref.current.toDataURL("image/png")
      console.debug(maskImgUrl)
    }

    setImageSource(ref.current)
  }
  return (
    <>
      <Cloak>
        <img ref={presetImgRef} src={maskPreset} onLoad={() => drawPreset()} />
      </Cloak>
      <Canvas
        {...rest}
        width={width}
        height={height}
        ref={ref}
        onMouseDown={(e) => start(e.clientX, e.clientY)}
        onMouseUp={(e) => end()}
        onMouseOut={(e) => end()}
        onMouseMove={(e) => move(e.clientX, e.clientY)}
      ></Canvas>
    </>
  )
}
