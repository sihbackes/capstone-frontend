import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesBoard from './components/FavoritesComponent';
import NavbarComponent from './components/NavBarComponent';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <BrowserRouter>
     <NavbarComponent/>
     <Routes>
        <Route path="/" element={ <SearchComponent/>} />
        <Route path="/favorites" element={ <FavoritesBoard/>} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
