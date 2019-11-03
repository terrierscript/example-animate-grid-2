import React, { useRef, useLayoutEffect } from "react"
import styled from "styled-components"
import { SampleFont, ResultFont } from "../Fonts"
export const Cloak = styled.div`
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: 999999px;
  left: 999999px;
  /* display: none; */
`
export const ScaleCaclurator = ({ text, fontSize, onChangeScale }) => {
  const baseRef = useRef<HTMLDivElement>()
  const samplingRef = useRef<HTMLDivElement>()
  useLayoutEffect(() => {
    if (!baseRef.current || !samplingRef.current) {
      return
    }
    const baseWidth = baseRef.current.clientWidth
    const sampleWidth = samplingRef.current.clientWidth
    onChangeScale(baseWidth / sampleWidth)
  }, [text])
  return (
    <>
      <ResultFont ref={baseRef} fontSize={fontSize}>
        {text}
      </ResultFont>
      <SampleFont ref={samplingRef}>{text}</SampleFont>
    </>
  )
}
