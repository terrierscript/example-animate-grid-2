import React from "react"
import { ResultFont } from "./Fonts"
import styled from "styled-components"

const SampleCard = styled.div`
  border-radius: 4px;
  padding: 0.5em;

  /* background: #f6f6f6; */
`

const SampleCss = ({ mask, fontSize }) => {
  const cssStr = `
  .masked-text {
    fontSize: ${fontSize};
    background-clip: text;
    -webkit-background-clip: text;
    background-image: url(${mask});
  }
  `
  return (
    <pre>
      <code>{cssStr}</code>
    </pre>
  )
}

const MaskStr = styled.div`
  user-select: all;
`
export const StringSample = ({ mask, fontSize, children }) => {
  return (
    <div>
      <SampleCard>
        <h3>結果</h3>
        <ResultFont mask={mask} fontSize={fontSize}>
          {children}
        </ResultFont>
        <h3>文章サンプル</h3>
        あの<ResultFont mask={mask}>{children}</ResultFont>の すきとおった風、
        <br />
        夏でも底に冷たさをもつ青いそら、 うつくしい森で飾られたモーリオ市、
        <br />
        郊外のぎらぎらひかる草の波。
        <br />
        <h3>CSS </h3>
        <SampleCss mask={mask} fontSize={fontSize} />
        <h3>Mask Image</h3>
        <MaskStr>{mask}</MaskStr>
      </SampleCard>
    </div>
  )
}
