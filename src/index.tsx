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
        <Menu background={"#3d17e8"} />
      </div>
      <div>
        <MegamanSelector
          IconCmp={IconDirection}
          background={"#3d17e8"}
        ></MegamanSelector>
      </div>
      <div>
        <MegamanSelector
          IconCmp={IconGame}
          background={"#e81744"}
        ></MegamanSelector>
      </div>
    </>
  )
}
render(<App />, document.querySelector("#root"))
