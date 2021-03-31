import { AppProvider } from './context'
import ScaleSelector from './components/scale-selector'
import Layout from './components/layout'
import Synth from './components/synth'

function App() {
  return (
    <AppProvider>
      <Layout>
        <ScaleSelector />
        <Synth />
      </Layout>
    </AppProvider>
  );
}

export default App;
