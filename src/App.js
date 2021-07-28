import Box from './components/box';
import Color from './components/color';
import Collapse from './components/collapse';
import './App.css';

const content = {
  texts: [
    "Lorisum",
    "Papa"
  ],
  points: [
    "Hello",
    "Yeah"
  ]
}

function App() {
  return (
    <div className="App">
      <Box />
      <Color />
      <Collapse content={content}/>
    </div>
  );
}

export default App;
