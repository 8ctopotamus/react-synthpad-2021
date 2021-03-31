import { useAppContext } from '../context'
import scales from '../utils/scales'

const categories = Object.entries(scales).reduce((accumulator, curr) => {
  const [key, scale] = curr
  accumulator[scale.theme].push(key)
  return accumulator
}, { light: [], dark: [] })

const ScaleSelector = () => {
  const { dispatch } = useAppContext()

  return (
    <select onChange={e => dispatch({ type: 'CHANGE_SCALE', payload: e.target.value })}>
      {Object.entries(categories).map(cat => {
        const [categoryName, scaleNames] = cat
        return (
          <optgroup label={categoryName} key={categoryName}>
            {scaleNames.map(name => <option value={name} key={name}>{name}</option>)}
          </optgroup>
        )
      })}
    </select>
  )
}

export default ScaleSelector