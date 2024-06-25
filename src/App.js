import './App.css';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import SignIn from './components/SignIn';
import SignIn2 from './components/SignIn2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/netflix-clone/' element={<Home/>}/>
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='?SignIn2' element={<SignIn2 />} />
      </Routes>
    </div>
  );
}

export default App;
