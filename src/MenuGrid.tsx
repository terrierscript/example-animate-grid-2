import React, { useCallback } from "react"
import { MegamanGrid } from "./MegamanGrid"
import { PositionCalcurator, Cursor, Grid, Item } from "./Components"
import { useCursor } from "./useCursor"
import { ProfileIcon, HomeIcon, InboxIcon } from "./AnimateIcon"
import styled from "styled-components"

const MenuGrid = styled(Grid)`
  width: 100%;
  grid-template-columns: repeat(3, calc(100% / 3));
`
const Container = styled.div`
  width: 500px;
`
export const Menu = ({ background }) => {
  const {
    cursorRect,
    setGridPosition,
    calcuratorRef,
    gridPosition
  } = useCursor({ x: 1, y: 1 })
  const isActive = useCallback(
    (x, y) => gridPosition.x === x && gridPosition.y === y,
    [gridPosition]
  )
  return (
    <Container>
      <MenuGrid background={background}>
        {cursorRect && <Cursor {...cursorRect} />}
        <Item x={1} y={1} onMouseOver={(e) => setGridPosition({ x: 1, y: 1 })}>
          <HomeIcon active={isActive(1, 1)} />
        </Item>
        <Item x={2} y={1} onMouseOver={(e) => setGridPosition({ x: 2, y: 1 })}>
          <InboxIcon active={isActive(2, 1)} />
        </Item>
        <Item x={3} y={1} onMouseOver={(e) => setGridPosition({ x: 3, y: 1 })}>
          <ProfileIcon active={isActive(3, 1)} />
        </Item>
        <PositionCalcurator ref={calcuratorRef} {...gridPosition} />
      </MenuGrid>
    </Container>
  )
}
