import logo from './logo.svg';
import './App.css';
import Gray from './Gray';
import Orange from './Orange';
import Orange1 from './Orange1';

function App() {
  return (
    <div>
      <div class='container container_1'>
        <Gray />
        <Orange v1='AC' v2='+' v3='%' v4='÷' />
        <Orange v1='7' v2='8' v3='9' v4='x' />
        <Orange v1='4' v2='5' v3='5' v4='-' />
        <Orange v1='1' v2='2' v3='3' v4='+' />
        <Orange1 v1='0' v2='.' v3='=' />
      </div>
    </div>
  );
}

export default App;
