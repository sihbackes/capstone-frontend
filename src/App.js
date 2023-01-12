import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FavoritesBoard from './components/FavoritesComponent';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <BrowserRouter>
      {/* navbar */}
     <Routes>
        <Route path="/" element={ <SearchComponent/>} />
        <Route path="/favorites" element={ <FavoritesBoard/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
