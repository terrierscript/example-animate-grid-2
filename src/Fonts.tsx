import styled, { css } from "styled-components"

export const LargeFont = styled.div`
  display: inline-block;
  font-size: 3em;
`
export const SampleFont = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 3em;
  user-select: none;
  color: rgba(255, 0, 0, 1);
`
export const ResultFont = styled.span`
  display: inline-block;
  background-size: 100% 100%;
  ${({ mask, fontSize, color }) => {
    const ready = mask && mask.length > 10
    return css`
      color: ${ready ? "transparent" : color};
      background-clip: ${ready ? "text" : "none"};
      -webkit-background-clip: ${ready ? "text" : "none"};
      background-image: url(${mask});
      font-size: ${fontSize};
    `
  }}
`
