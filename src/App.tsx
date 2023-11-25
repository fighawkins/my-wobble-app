import ControlPanel from './components/ControlPanel';
import CanvasContainer from './components/CanvasContainer';
import './App.css'


function App() {
  return (
    <div className="App">
      <ControlPanel />
      <div className="canvas-wrapper">
      <CanvasContainer />
      </div>
     </div>
  );
}

export default App;