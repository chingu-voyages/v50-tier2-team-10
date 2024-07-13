import './App.css';
import AppHeader from './components/appHeader/appHeader';
import Menu from './components/menu/menu';
import Cart from './components/cart/cart';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Menu/>
      <Cart/>
    </div>
  );
}

export default App;
