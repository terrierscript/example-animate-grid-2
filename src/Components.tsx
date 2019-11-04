import styled, { css } from "styled-components"
export const Grid = styled.div`
  display: grid;
  width: max-content;
  border-radius: 16px;
  padding: 1em;
  margin: 1em;
  ${({ background }) => css`
    background: ${background};
  `}
`
export const Item = styled.div`
  ${({ x, y }) => css`
    grid-column: ${x};
    grid-row: ${y};
  `}
`
export const PositionCalcurator = styled(Item)`
  /* border: 1px solid black; */
  /* transition: 0.5s; */
`
export const Cursor = styled.div`
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
