import React, { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import { render } from "react-dom"
import { IconGame, IconDirection } from "./Icon"

const range = (len) =>
  Array(len)
    .fill(null)
    .map((_, i) => i + 1)

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 1em;
  width: max-content;
  border-radius: 16px;
  padding: 1em;
  margin: 1em;
  ${({ background }) => css`
    background: ${background};
  `}
`

const Item = styled.div`
  width: 100px;
  height: 100px;
  ${({ x, y }) => css`
    grid-column: ${x};
    grid-row: ${y};
  `}
`

const PositionCalcurator = styled(Item)``

const Cursor = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  transition: 0.4s;
  /* transition-delay: 0.1s; */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  ${({ top, left, width, height }) => css`
    top: ${top};
    left: ${left};
    width: ${width};
    height: ${height};
  `};
`

const Selector = ({ IconCmp, background }) => {
  const [curr, setCurr] = useState({ x: 2, y: 2 })
  const [cursor, setCursor] = useState<null | unknown>(null)
  const moverRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!moverRef.current) return
    const { top, left } = moverRef.current.getBoundingClientRect()
    const width = moverRef.current.clientWidth
    const height = moverRef.current.clientHeight
    const cursor = { top, left, width, height }
    setCursor(cursor)
  }, [curr])
  return (
    <div>
      <Grid background={background}>
        {range(3).map((y) =>
          range(3).map((x) => (
            <Item
              x={x}
              y={y}
              key={`${x}_${y}`}
              onMouseOver={() => setCurr({ x, y })}
            >
              <IconCmp x={x} y={y} />
            </Item>
          ))
        )}
        <PositionCalcurator ref={moverRef} {...curr}></PositionCalcurator>
        {cursor && <Cursor {...cursor} />}
      </Grid>
    </div>
  )
}

const Container = styled.div`
  display: grid;
   grid-template-columns: 1fr 1fr;
  /* grid-auto-rows: max-content; */ */
`
const App = () => {
  return (
    <Container>
      <Selector IconCmp={IconDirection} background={"#3d17e8"}></Selector>
      <Selector IconCmp={IconGame} background={"#e81744"}></Selector>
    </Container>
  )
}
render(<App />, document.querySelector("#root"))
