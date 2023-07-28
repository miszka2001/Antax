import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Navigation/>} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
