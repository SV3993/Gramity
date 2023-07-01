import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react'


function App() {
  const [Mode, setmode] = useState('light');
  const [Mode1, setmode1] = useState('light');
  function toggleMode() {
    if (Mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#09090b";
      document.body.style.color = "white";
      showAlert("Dark Mode Is Enabled", "sucess");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Is Enabled", "success");
    }
  }

  function toggleMode1() {
    if (Mode1 === 'light') {
      setmode1('night');
      document.body.style.backgroundColor = "rgb(10, 10, 36)";
      document.body.style.color = "white";
      showAlert("Night Mode Is Enabled", "sucess");
    }
    else {
      setmode1('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Is Enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);
  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  return (
    <>
    <Router>
      <NavBar title="GRAMITY" mode={Mode} toggleMode={toggleMode} toggleMode1={toggleMode1} mode1={Mode1} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/" element={<TextForm heading="Enter The Text To Analyse" mode={Mode} alert={alert} showAlert={showAlert} mode1={Mode1} />}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}
export default App;