import React, { FC } from "react"
import styled, { css } from "styled-components"
import { FiUser, FiHome, FiInbox } from "react-icons/fi"

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

const AnimateIconInner = styled(IconWrap)`
  transition: 0.5s;
  ${({ active }) => css`
    opacity: ${active ? 1 : "0.4"};
  `}
  ::after {
    font-size: 0.6em;
    transition: 0.5s;

    overflow: hidden;
    ${({ text, active }) => css`
      content: "${text}";
      padding: 0 ${active ? "0.5em" : "0"};
      width: ${active ? "100%" : "0px"};
      opacity: ${active ? 1 : 0};
      /* transform: ${active ? "scale(1)" : "scale(0)"} */
    `}
  }
`

const AnimationContainer = styled.div`
  width: auto;
`

const AnimateIcon = ({ active, children, text }) => {
  return (
    <AnimateIconInner active={active} text={text}>
      <AnimationContainer>{children}</AnimationContainer>
    </AnimateIconInner>
  )
}
export const HomeIcon = ({ active }) => (
  <AnimateIcon active={active} text="Home">
    <FiHome />
  </AnimateIcon>
)

export const InboxIcon = ({ active }) => (
  <AnimateIcon active={active} text="Inbox">
    <FiInbox />
  </AnimateIcon>
)

export const ProfileIcon = ({ active }) => (
  <AnimateIcon active={active} text="Profile">
    <FiUser />
  </AnimateIcon>
)
