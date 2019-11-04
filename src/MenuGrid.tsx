import React from "react"
import { MegamanGrid } from "./MegamanGrid"
import { PositionCalcurator, Cursor } from "./Components"
import { useCursor } from "./useCursor"
export const MenuGrid = ({ children, background }) => {
  const {
    cursorRect,
    setGridPosition,
    calcuratorRef,
    gridPosition
  } = useCursor({ x: 2, y: 2 })
  return (
    <div>
      <MegamanGrid background={background}>
        {children(setGridPosition)}
        <PositionCalcurator ref={calcuratorRef} {...gridPosition} />
        {cursorRect && <Cursor {...cursorRect} />}
      </MegamanGrid>
    </div>
  )
}
