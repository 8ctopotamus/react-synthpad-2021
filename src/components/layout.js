import styled from 'styled-components'
import { useAppContext } from '../context'

const Background = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: ${ props => props.theme === 'light' ? '#bbb' : '#1F2041'};
`

const Layout = ({ children }) => {
  const { state } = useAppContext()

  return <Background theme={state.theme}>
    <div>{children}</div>
  </Background>
}

export default Layout