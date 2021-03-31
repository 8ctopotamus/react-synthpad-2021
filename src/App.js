import { AppProvider } from './context'
import ScaleSelector from './components/scale-selector'
import Layout from './components/layout'

function App() {
  return (
    <AppProvider>
      <Layout>
        <ScaleSelector />
      </Layout>
    </AppProvider>
  );
}

export default App;
