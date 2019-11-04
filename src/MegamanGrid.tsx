import React from "react"
import styled from "styled-components"
import { useCursor } from "./useCursor"
import { Grid, Item, PositionCalcurator, Cursor } from "./Components"
import { range } from "./range"

export const MegamanGrid = styled(Grid)`
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 1em;
`
export const MegamanSelector = ({ IconCmp, background }) => {
  const {
    cursorRect,
    setGridPosition,
    calcuratorRef,
    gridPosition
  } = useCursor({ x: 2, y: 2 })
  return (
    <div>
      <MegamanGrid background={background}>
        {range(3).map((y) =>
          range(3).map((x) => (
            <Item
              x={x}
              y={y}
              key={`${x}_${y}`}
              onMouseOver={() => setGridPosition({ x, y })}
            >
              <IconCmp x={x} y={y} />
            </Item>
          ))
        )}
        <PositionCalcurator ref={calcuratorRef} {...gridPosition} />
        {cursorRect && <Cursor {...cursorRect} />}
      </MegamanGrid>
    </div>
  )
}
