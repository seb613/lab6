import './App.css';
import {CFooter} from './Components/CFooter'
import CHeader from './Components/CHeader';
import CContents from './Components/CContents'

function App() {
  return (
    <div className="App">
      <CHeader aName="Jan" aFamily="Kowalski"/>
    {/*  <CHeader aName="Tomasz" aFamily="Nowak"/>*/} 
      <CContents/>
      <CFooter weather="słoneczna" temp="25">
      <p>Niebo jest bezchmurne, wiatr słaby.</p>
      </CFooter>
     {/* <CFooter weather="deszczowa" temp="13"/>
      <CFooter weather="śnieżna" temp="-6"/>*/}
    
    </div>
  );
}

export default App;
