import styled from 'styled-components'
import { useAppContext } from '../context'
import scales from '../utils/scales'

const Select = styled.select`
  font-size: 22px;
  padding: 12px;
  border-radius: 8px;
  background: transparent;
  border: 3px solid black;
  ${props => props.theme === 'light' ? `` : `
    color: white;
    border-color: white;
  `}
`

const categories = Object.entries(scales).reduce((accumulator, curr) => {
  const [key, scale] = curr
  accumulator[scale.theme].push(key)
  return accumulator
}, { light: [], dark: [] })

const ScaleSelector = () => {
  const { state, dispatch } = useAppContext()

  return (
    <Select theme={state.theme} onChange={e => dispatch({ type: 'CHANGE_SCALE', payload: e.target.value })}>
      {Object.entries(categories).map(cat => {
        const [categoryName, scaleNames] = cat
        return (
          <optgroup label={categoryName} key={categoryName}>
            {scaleNames.map(name => <option value={name} key={name}>{name}</option>)}
          </optgroup>
        )
      })}
    </Select>
  )
}

export default ScaleSelector