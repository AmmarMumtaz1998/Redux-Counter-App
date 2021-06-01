import './App.css';
import Counter from "./Components/Counter";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {store} from './redux/store';
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
        <Provider store = {store}>
           <Counter />
        </Provider>
    </div>
  );
}

export default App;
