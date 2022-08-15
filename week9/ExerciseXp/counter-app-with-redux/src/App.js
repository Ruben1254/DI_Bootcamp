import './App.css';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import { reducer } from './reducers/index';
import Compteur from './components/Counter.js'
const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Compteur />
        </Provider>
      </header>
    </div>
  );
}

export default App;
