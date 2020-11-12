import React from 'react'
import { styled } from '@filbert-js/core'

const StyledDot = styled('div')`
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-top-width: 0;
  transform: translate(50%, 50%);
  border-right-width: ${(p)=>p.size / 2}px;
  border-bottom-width: ${(p)=>p.size / 2}px;
  border-left-width: ${(p)=>p.size / 2}px;
  margin-left: ${(p)=>p.x }px;
  margin-top: ${(p)=>p.y }px;
`

export default function Dot({ color, ...props }) {
  return <StyledDot {...props} style={{ borderBottomColor: color }} />
}
