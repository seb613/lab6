import logo from './logo.svg';
import './App.css';

import { CFooter } from './Components/CFooter';
import CHeader from './Components/CHeader';
import CContents from './Components/CContents';
import COuter from './Components/COuter';


function App()
{
	return (
		<div className="App">
			<CHeader aName="Sebastian" aFamily="Węgrzyn"/>
			{/* <CHeader aName="Tomasz" aFamily="Nowak"/> */}

			<CContents/>
			<COuter/>

			<CFooter weather="słoneczna" temp="25">
				<p>Niebo jest bezchmurne, wiatr słaby.</p>
			</CFooter>
			{/* <CFooter weather="deszczowa" temp="13"/> */}
			{/* <CFooter weather="śnieżna" temp="-6"/> */}
		</div> 
	);
}

export default App;
