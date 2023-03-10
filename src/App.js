import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import FavoritesPage from './components/FavoritesPage';
import ResultsMainPage from './components/ResultsMainPage';
import DetailsPage from './components/DetailsPage';
import JoinPage from './components/JoinPage';
import { AuthContextProvider } from './contexts/AuthContext';
import Profile from './components/Profile';



function App() {

  return (
  <BrowserRouter>
   <AuthContextProvider>
     <Routes>
       <Route path="/" element={<MainPage/>}/>
        <Route path="/favorites" element={ <FavoritesPage/>}/>
        <Route path="/results/:type/:query" element={<ResultsMainPage/>}/>
        <Route path="/detail/:id" element={<DetailsPage/>}/>
        <Route path='/join' element={<JoinPage/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
     </Routes>
   </AuthContextProvider>   
  </BrowserRouter>
  );
}

export default App;
