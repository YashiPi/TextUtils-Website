// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

import Navbar from './components/navbar';
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/alert";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// let name = "<b>Yashi3</b>"/

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
      // document.body.style.color = 'white'

      setInterval(()=>{
        document.title = 'TextUtils is Amazing';
      }, 500);
      setInterval(()=>{
        document.title = 'Install TextUtils Now';
      },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    // <> </> - this is a JSX fragment
    // <>  
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText = "About Us"/>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* my-3 means margin in y of 3 */}
        <Routes>
          {/* /users --> Component1
          /users/home --> Component2 */}
          <Route exact path="/Textform" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}/>
          <Route exact path="/About" element={<About/>}/>
        </Routes>
        {/* <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} /> */}
      </div>
      </BrowserRouter>
    // </>
  );
}

export default App;
