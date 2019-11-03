import React, {
  useRef,
  useState,
  MouseEventHandler,
  useLayoutEffect
} from "react"
import { render } from "react-dom"
import { MaskCanvas } from "./draw/MaskCanvas"
import styled from "styled-components"
import { StringSample } from "./ResultOutput"
import { Title } from "./Title"
const Input = styled.input`
  padding: 0.5em;
  font-size: 1.5em;
`
const Body = styled.div`
  box-sizing: border-box;
`

const App = () => {
  const [mask, setMask] = useState(null)
  const [text, setText] = useState("ショッパーズ")
  // const [width, setWidth] = useState(0)
  const fontSize = "2em"
  return (
    <Body>
      <Title />
      <Input value={text} onChange={setText} />

      <MaskCanvas
        fontSize={fontSize}
        text={text}
        onChangeMask={(cnvMask) => setMask(cnvMask)}
      ></MaskCanvas>
      <StringSample mask={mask} fontSize={fontSize}>
        {text}
      </StringSample>
    </Body>
  )
}

render(<App />, document.querySelector("#root"))
