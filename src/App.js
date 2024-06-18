import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './components/Layout';
import { theme } from './utils/constant';

function App() {
  return (
    <ThemeProvider theme={theme} >
    <div className="App">
      <Layout/>
    </div>
    </ThemeProvider>
  );
}

export default App;
