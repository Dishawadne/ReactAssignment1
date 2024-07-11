
import './App.css';

import First, { Fourth, Second, Third } from './components/FunctionComponent';
import { Student1 } from './components/StudentCC';
import Student from './components/StudentFC';
import First1, { Fourth1, Second1, Third1 } from './components/ClassComponent';

import { Button } from './components/Button';
import  Display  from './components/Display';

function App() {
  return (
    <div className="App">
    <h1>Hello word</h1>
    <First/>
    <Second name="disha"/>
   <Third name="disha" address="pune" />
   <Fourth dept="Computer Science"/>

<br/>
   <First1/>
   <Second1/>
   <Third1/>
   <Fourth1/>
   <br/>
   {/* using FunctionComponent */}
   <Student name="disha" address="pune" scores="88"/> 
   <br/>
   {/* using FunctionComponent */}
   <Student1 name="priti" address="pune" scores="89"/> 
   <br/>

  <Display name="disha" address="pune"/>

  <br></br>
   <Button/>
    </div>
  );
}

export default App;
