// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//  import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
setAlert(null);
    },1500 );
  
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled ", "success");
      document.title = "TextUtils - Dark Mode";
//       setInterval(()=>
//       {
// document.title= "Textutils is amazing";
//       },2000);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled ", "success");
      document.title ="TextUtils -Light Mode";
//       setInterval(()=>
//       {
// document.title= "Textutils is amazing";
//       },2000);
    }
  }
return (
  <>
    {/* <Navbar title="TextUtlis" aboutText="AboutUs" /> */}
  {/* <Router> */}
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
      {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
   

  </>
);
}

export default App;
