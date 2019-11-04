import React from "react"
import styled from "styled-components"
import { render } from "react-dom"
import { IconGame, IconDirection } from "./Icon"
import { MegamanSelector } from "./MegamanGrid"
import { Menu } from "./MenuGrid"

export type Rect = {
  top: number
  left: number
  width: number
  height: number
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-auto-rows: max-content; */
`

const App = () => {
  return (
    <>
      <div>
        source code:
        <a href="https://github.com/terrierscript/example-animate-grid-2">
          https://github.com/terrierscript/example-animate-grid-2
        </a>
      </div>
      <div>
        <h3>Menu Example</h3>
        <Menu background={"#3d17e8"} />
        <div>
          <a href="https://www.uplabs.com/posts/smoothbottombar-android-library">
            https://www.uplabs.com/posts/smoothbottombar-android-library
          </a>
        </div>
      </div>
      <Container>
        <div>
          <h3>Simple Cursor Example</h3>
          <MegamanSelector
            IconCmp={IconDirection}
            background={"#3d17e8"}
          ></MegamanSelector>
        </div>
        <div>
          <h3>MEGA MAN like Example</h3>
          <MegamanSelector
            IconCmp={IconGame}
            background={"#e81744"}
          ></MegamanSelector>
        </div>
      </Container>
    </>
  )
}
render(<App />, document.querySelector("#root"))
