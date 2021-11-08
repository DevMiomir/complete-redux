import './App.css';
import Counter from './redux/Counter';
import Example from './redux/FnRedux/Example';
import Combine from './redux/CRExample/Combine';

function App() {
  return (
    <div className="App">
      <Counter />
      <Example />
      <Combine />
    </div>
  );
}

export default App;
