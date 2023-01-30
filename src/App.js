import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import FavoritesPage from './components/FavoritesPage';
import ResultsMainPage from './components/ResultsMainPage';
import DetailsPage from './components/DetailsPage';
import JoinPage from './components/JoinPage';
import Logout from './components/LogoutPage';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<MainPage/>}/>
       <Route path="/favorites" element={ <FavoritesPage/>}/>
       <Route path="/results" element={<ResultsMainPage/>}/>
       <Route path="/detail/:id" element={<DetailsPage/>}/>
       <Route path='/join' element={<JoinPage/>}/>
       <Route path='/logout' element={<Logout/>}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
