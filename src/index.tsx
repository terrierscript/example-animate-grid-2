import React from "react"
import styled from "styled-components"
import { render } from "react-dom"
import { IconGame, IconDirection } from "./Icon"
import { ProfileIcon } from "./AnimateIcon"
import { MegamanSelector } from "./MegamanGrid"
import { MenuGrid } from "./MenuGrid"

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

const Menu = ({ background }) => {
  return (
    <MenuGrid background={background}>
      {(setCurr) => <div></div>
      // <ProfileIcon key={1} onMouseOver={setCurr({ x: 1 })} />
      }
    </MenuGrid>
  )
}
const App = () => {
  return (
    <>
      <div>
        <ProfileIcon />
      </div>
      <div>
        <Menu background={"#3d17e8"} />
      </div>
      <Container>
        <MegamanSelector
          IconCmp={IconDirection}
          background={"#3d17e8"}
        ></MegamanSelector>
        <MegamanSelector
          IconCmp={IconGame}
          background={"#e81744"}
        ></MegamanSelector>
      </Container>
    </>
  )
}
render(<App />, document.querySelector("#root"))
