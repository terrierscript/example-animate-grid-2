import React from "react"
import styled from "styled-components"
import { FiUser, FiHome, FiInbox } from "react-icons/fi"

const Container = styled.div`
  width: 500px;
`
const Grid = styled.div`
  display: grid;

  width: max-content;
  border-radius: 32px;
  padding: 1em;
  margin: 1em;
`

const MenuGrid = styled(Grid)`
  width: 100%;
  padding: 2em;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: #432ebf;
  grid-template-columns: repeat(3, calc(100% / 3));
`

const IconWrap = styled.div`
  color: white;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  line-height: 2em;
  padding: 0.1em 0.8em;
`

export const Menu1 = () => {
  const icons = [FiHome, FiInbox, FiUser]

  return (
    <Container>
      <MenuGrid>
        {icons.map((Icon) => (
          <IconWrap>
            <Icon />
          </IconWrap>
        ))}
      </MenuGrid>
    </Container>
  )
}
