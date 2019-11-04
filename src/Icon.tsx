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
  font-size: 3em;
  height: 100%;
  flex-direction: column;
`

const AnimationContainer = styled.div`
  width: auto;
  height: auto;
`
const Label = styled.div`
  transition: 0.5s;
  /* height: 0px; */
  overflow: hidden;
  font-size: 0.3em;
  text-align: center;
  ${({ active }) => css`
    height: ${active ? "1.5em" : "0px"};
    opacity: ${active ? "1" : "0"};
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
    ["Tentacles", "select", "RobotHelmet"],
    ["Luchador", "Dragon", "Oni"]
  ]
  const z = iconmap[y - 1][x - 1]
  const label = labels[y - 1][x - 1]
  return (
    <IconWrap>
      <div>{z}</div>
      <Label active={active}>{label}</Label>
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
