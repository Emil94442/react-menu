import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Calisthenics from './Routes pages/Calisthenics/Calisthenics';
import GeometryDash from './Routes pages/GeometryDash/GeometryDash';
import Handsome from './Routes pages/Hadsome/Handsome';
import Plans from './Routes pages/Plans/Plans';
import Programming from './Routes pages/Programming/Programming';
import Welcome from './Routes pages/Welcome/Welcome';


function App() {
  return (
    <BrowserRouter>
       <Header/> 
       <Routes>
          <Route path='/handsome' element={<Handsome/>}/>
          <Route path='/programming' element={<Programming/>}/>
          <Route path='/calisthenics' element={<Calisthenics/>}/>
          <Route path='/geometry-dash' element={<GeometryDash/>}/>
          <Route path='/plans' element={<Plans/>}/>
          <Route path='*' element={<Welcome/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
