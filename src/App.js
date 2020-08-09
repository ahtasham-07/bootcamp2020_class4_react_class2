import React,{useState} from 'react';
import './App.css';

function App() {

  let [lit,setlit] = useState(true);
  let [temp,settemp] = useState(25);
  let [tempvisible,settempvisible] = useState(true);
  
  return (
    <div className={`App ${lit ? "light":"dark"}`}>
      <br/>
      <h1 className="name">Ahtasham's Room</h1>
      <br/>
      <button onClick={()=>{setlit(true);settempvisible(true)}}>
      Light ON
      </button>
      {"---*---"}
      <button onClick={()=>{setlit(false);settempvisible(false)}}>
      Light OFF
      </button>
      <br/>
      <br/>
      <div className={tempvisible?"tempv":"temph"}>
      <h3>Set Temperature</h3>{" "}
      <button onClick={()=>settemp(++temp)}>
      +
      </button>{"---*---"}
      <button onClick={()=>settemp(--temp)}>
      -
      </button>
      <br/>
      <br/>
      <br/>
      <u>Current Temperature:</u> {temp}C
      </div>
    </div>
  );
}

export default App;
