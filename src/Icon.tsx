import React from "react"
import {
  FiArrowUpLeft,
  FiArrowRightCircle,
  FiArrowDownCircle,
  FiBox,
  FiArrowDownLeft,
  FiArrowDownRight,
  FiArrowUpRight,
  FiArrowUpCircle,
  FiArrowLeftCircle
} from "react-icons/fi"
import {
  GiCogLock,
  GiDirectionSigns,
  GiHorseHead,
  GiLuchador,
  GiFloatingTentacles,
  GiRobotHelmet,
  GiOgre,
  GiSpikedDragonHead,
  GiOni,
  GiPanda
} from "react-icons/Gi"
import styled, { css } from "styled-components"

const IconWrap = styled.div`
  color: white;
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  height: 100%;
  flex-direction: column;
`

const IconAnimate = styled.div`
  transition: 0.5s;
  transition-timing-function: ease-out;
  /*cubic-bezier(0.18, 0.89, 0.32, 1.5);*/
  ${({ active }) => css`
    transform: ${active ? "scale(1.5)" : "scale(1)"};
  `}
`

const AnimationContainer = styled.div`
  width: auto;
  height: auto;
`
const Label = styled.div`
  transition: 0.5s;
  transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1);

  /* height: 0px; */
  overflow: hidden;
  font-size: 0.3em;
  text-align: center;
  /* line-height: 2em; */
  ${({ active }) => css`
    height: ${active ? "1.5em" : "0px"};
    opacity: ${active ? "1" : "0"};
    padding-top: ${active ? "1em" : "0"};
    transform: ${active ? "scale(1)" : "scale(0)"};
  `}
`

export const IconGame = ({ x, y, active }) => {
  const iconmap = [
    [<GiPanda />, <GiOgre />, <GiHorseHead />],
    [<GiFloatingTentacles />, <GiCogLock />, <GiRobotHelmet />],
    [<GiLuchador />, <GiSpikedDragonHead />, <GiOni />]
  ]
  const labels = [
    ["Panda", "Ogre", "HorseHead"],
    ["Tentacles", null, "Robot"],
    ["Luchador", "Dragon", "Oni"]
  ]
  const z = iconmap[y - 1][x - 1]
  const label = labels[y - 1][x - 1]
  return (
    <IconWrap>
      <IconAnimate active={active}>{z}</IconAnimate>
      {label && <Label active={active}>{label}</Label>}
    </IconWrap>
  )
  // return <>{React.createElement(iconmap[y][x])}</>
}

export const IconDirection = ({ x, y }) => {
  const iconmap = [
    [<FiArrowUpLeft />, <FiArrowUpCircle />, <FiArrowUpRight />],
    [<FiArrowLeftCircle />, <FiBox />, <FiArrowRightCircle />],
    [<FiArrowDownLeft />, <FiArrowDownCircle />, <FiArrowDownRight />]
  ]

  const z = iconmap[y - 1][x - 1]
  return <IconWrap>{z}</IconWrap>
  // return <>{React.createElement(iconmap[y][x])}</>
}
