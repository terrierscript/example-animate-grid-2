import React, { FC } from "react"
import styled, { css } from "styled-components"
import { FiUser } from "react-icons/fi"

const IconWrap = styled.div`
  color: white;
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  /* height: 100%; */
`

const AnimateIcon = styled(IconWrap)`
  color: #000;
  transition: 0.5s;

  :hover::after {
    width: auto;
    max-width: max-content;
  }
  ::after {
    transition: 0.5s;
    max-width: 0px;
    overflow: hidden;
    ${({ text }) => css`
      content: "${text}";
    `}
  }
`

export const ProfileIcon: FC<{}> = () => {
  return (
    <AnimateIcon text="Profile">
      <FiUser />
    </AnimateIcon>
  )
}
