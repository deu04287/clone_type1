import logo from './logo.svg';
import {useState} from 'react';
// import './App.css';

function Header(){
  return (
    <input style={{fontSize: "100px"}}></input>

  )
}
function App() {
  const [mode ,setMode] = useState('WELCOME');
  let content = null;
  if (mode === 'WELCOME'){
    content = <Header></Header>
  }
  else{
    content = <textarea></textarea>
  }

  return (
    <div className="App">
      {/* <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header> */}
      {/* {content} */}
    </div>
  );
}

export default App;



{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}