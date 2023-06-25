import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Allrestaurant from './Components/HomePage/Allrestaurant';
import ViewRestaurant from './Components/ViewRestaurant';
function App() {
  return (
    <>
<header>
  <Header/>
</header>
<Routes>


    <Route path="/" element={<Allrestaurant/>}/>

    <Route path="/view/:id" element={<ViewRestaurant/>}/>

  
</Routes>

<footer>
  <Footer/>
</footer>
    </>
  );
}

export default App;
