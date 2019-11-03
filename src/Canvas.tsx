import styled, { css } from "styled-components"
export const Canvas = styled.canvas`
  opacity: 0.9;
  position: absolute;
  border: 1px solid red;
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `};
`
