import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import useKeyPress from '../hooks/useKeyPress'

const Button = styled.button`
  width: 100%;
  background: ${({color}) => color};
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 20px;
  position: relative;
  transition: all .1s ease;
  box-shadow: 0px 9px 0px ${({color}) => darken(.1, color)}, 0px 9px 25px rgba(0, 0, 0, .7);
  border-radius: 8px;
  &:active {
    box-shadow: 0px 3px 0px ${({color}) => darken(.1, color)}, 0px 1px 2px rgba(0, 0, 0, .9);
    position: relative;
    top: 6px;
  }
  ${({ isPressed }) => isPressed && `
    box-shadow: 0px 3px 0px ${({color}) => darken(.1, color)}, 0px 1px 2px rgba(0, 0, 0, .9);
    position: relative;
    top: 6px;
  `}
`

const Pad = ({ color, note, letter, playSound }) => {
  const isPressed = useKeyPress(letter)
  
  return (
    <Button onClick={() => playSound(letter)} isPressed={isPressed} color={color}>
      {note} ({letter})
    </Button>
  )
}

export default Pad