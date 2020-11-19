import './App.css';
import  RestaurantList from './components/Posts';
import { Provider} from 'react-redux';
 
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello</h1>
        <RestaurantList/>
      </div>
    </Provider>
  );
}

export default App;
