import { AppProvider } from './context'
import ScaleSelector from './components/scale-selector'

function App() {
  return (
    <AppProvider>
      <ScaleSelector />
    </AppProvider>
  );
}

export default App;
