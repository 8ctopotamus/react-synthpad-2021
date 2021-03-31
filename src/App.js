import { AppProvider } from './context'
import ScaleSelector from './components/scale-selector'
import Layout from './components/layout'
import Synth from './components/synth'
import Volume from './components/volume'

function App() {
  return (
    <AppProvider>
      <Layout controls={(
        <>
          <ScaleSelector />
          <Volume />
        </>
      )}>
        <Synth />
      </Layout>
    </AppProvider>
  );
}

export default App;
