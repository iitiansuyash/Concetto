import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Home from './pages/Home';

const StyledApp = styled.div`
background-color: #000;
`

function App() {
  return (
    <StyledApp className="App">
      <Home />
    </StyledApp>
  );
}

export default App;
