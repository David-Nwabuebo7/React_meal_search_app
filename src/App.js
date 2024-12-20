import {useState,useEffect,useContext} from 'react'
import Search from './components/Search';
import './App.css';
import Rites from './components/rites'
 import Meals from './components/Meals'
 import Modal from './components/Modal'
 import Rite2 from './components/RitesModal';
 import { useGlobalContext} from "./context"
function App() {
 const {ShowModal,favourite,ShowModal2} = useGlobalContext()
 


//
   
 
  return (
    <div className="App">
      <Search />
      { favourite.length < 1 ? '':<Rites/>}
      <Meals />
     {/* this is a way to write an if only statement in a one liner  */}
     {ShowModal2 && <Rite2/>}
      {ShowModal && <Modal/>}
      
  </div>
  );
}
export default App;

