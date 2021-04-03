import React, { useRef } from 'react'
import { Donut } from 'react-dial-knob'
import { useAppContext } from '../context'

export default function Volume() {
  const { state, dispatch } = useAppContext()

  const isFirstRender = useRef(true)

  return <Donut
    diameter={200}
    min={-12}
    max={12}
    step={1}
    value={state.volume}
    onValueChange={newVolume => {
      !isFirstRender.current
        ? dispatch({ type: 'CHANGE_VOLUME', payload: newVolume })
        : isFirstRender.current = false
    }}
    ariaLabelledBy="volume"
  >
    <label id="volume">volume</label>
  </Donut>
}