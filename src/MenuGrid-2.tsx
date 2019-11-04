import React, { useCallback } from "react"
import styled, { css } from "styled-components"
import { FiUser, FiHome, FiInbox } from "react-icons/fi"

import { useState, useRef, useEffect } from "react"

export type Rect = {
  top: number
  left: number
  width: number
  height: number
}

export const useCursor = (initial = 1) => {
  const [gridPosition, setGridPosition] = useState<number>(initial)
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

const Container = styled.div`
  width: 500px;
`
const Grid = styled.div`
  display: grid;

  width: max-content;
  border-radius: 32px;
  padding: 1em;
  margin: 1em;
`

const MenuGrid = styled(Grid)`
  width: 100%;
  padding: 2em;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: #432ebf;
  grid-template-columns: repeat(3, calc(100% / 3));
`

const Item = styled.div`
  ${({ x }) => css`
    grid-column: ${x};
  `}
  grid-row: 1;
`

const PositionCalcurator = styled(Item)`
  border: 1px solid red;
`

const IconWrap = styled.div`
  color: white;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  line-height: 2em;
  padding: 0.1em 0.8em;
`

export const Menu2 = () => {
  const [gridPosition, setGridPosition] = useState<number>(1)
  const calcuratorRef = useRef<HTMLElement>(null)

  const icons = [FiHome, FiInbox, FiUser]

  return (
    <Container>
      <MenuGrid>
        {icons.map((Icon, i) => (
          <Item x={i + 1} onMouseOver={(e) => setGridPosition(i + 1)}>
            <IconWrap>
              <Icon />
            </IconWrap>
          </Item>
        ))}
        <PositionCalcurator ref={calcuratorRef} x={gridPosition} />
      </MenuGrid>
    </Container>
  )
}
