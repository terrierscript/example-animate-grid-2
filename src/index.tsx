import React from "react"
import styled from "styled-components"
import { render } from "react-dom"
import { IconGame, IconDirection } from "./Icon"
import { MegamanSelector } from "./MegamanGrid"
import { Menu } from "./MenuGrid"

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
    </>
  )
}
render(<App />, document.querySelector("#root"))
