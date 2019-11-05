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

const Cursor = styled.div`
  position: absolute;
  transition: 0.4s;
  transition-timing-function: ease-in-out;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  ${({ top, left, width, height }) => css`
    top: ${top}px;
    left: ${left}px;
    width: ${width}px;
    height: ${height}px;
  `};
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

const AnimateIconInner = styled(IconWrap)`
  transition: 0.5s;
  ${({ active }) => css`
    opacity: ${active ? 1 : "0.4"};
  `}
  ::after {
    font-size: 0.6em;
    transition: 0.5s;

    overflow: hidden;
    content: attr(data-text);
    ${({ active }) => css`
      padding: 0 ${active ? "0.5em" : "0"};
      width: ${active ? "100%" : "0px"};
      opacity: ${active ? 1 : 0};
    `}
  }
`

const AnimationContainer = styled.div`
  width: auto;
`

const AnimateIcon = ({ x, onMouseOver, active, children, text }) => {
  return (
    <Item x={x} onMouseOver={onMouseOver}>
      <AnimateIconInner active={active} data-text={text}>
        <AnimationContainer>{children}</AnimationContainer>
      </AnimateIconInner>
    </Item>
  )
}

export const Menu = () => {
  const {
    cursorRect,
    setGridPosition,
    calcuratorRef,
    gridPosition
  } = useCursor(1)
  const isActive = useCallback((x) => gridPosition === x, [gridPosition])
  const icons = [["Home", FiHome], ["Inbox", FiInbox], ["Profile", FiUser]]
  return (
    <Container>
      <MenuGrid>
        {cursorRect && <Cursor {...cursorRect} />}
        {icons.map(([text, Icon], i) => (
          <AnimateIcon
            x={i + 1}
            onMouseOver={(e) => setGridPosition(i + 1)}
            text={text}
            active={isActive(i + 1)}
          >
            <Icon />
          </AnimateIcon>
        ))}
        <Item ref={calcuratorRef} x={gridPosition} /> {/* PositionCalcurator */}
      </MenuGrid>
    </Container>
  )
}
