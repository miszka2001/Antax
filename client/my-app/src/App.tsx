import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Navigation/>}>
          <Route index element={<Home />} /> 
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          </Route> 
        </Routes>
      </header>
    </div>
  );
}

export default App;
