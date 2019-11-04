import React from "react"
import styled from "styled-components"
import { render } from "react-dom"
import { Menu } from "./MenuGrid"
import { Menu1 } from "./MenuGrid-1"
import { Menu2 } from "./MenuGrid-2"
import { Menu3 } from "./MenuGrid-3"
import { Menu4 } from "./MenuGrid-4"

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
        <Menu1 />
        <Menu2 />
        <Menu3 />
        <Menu4 />
        <Menu />
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
