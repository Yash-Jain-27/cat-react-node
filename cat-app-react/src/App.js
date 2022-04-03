import './App.css';
import CatPage from './pages/cat';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <CatPage />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
