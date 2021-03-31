import styled from 'styled-components'
import { useAppContext } from '../context'

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`

const Background = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: ${ props => props.theme === 'light' ? '#bbb' : '#1F2041'};
`

const Layout = ({ children, controls }) => {
  const { state } = useAppContext()

  return <Background theme={state.theme}>
    <div>
      <ControlsContainer>{controls}</ControlsContainer>
      {children}
    </div>
  </Background>
}

export default Layout