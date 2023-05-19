
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



function App() {
  const [mode,setMode] =useState('light'); //weather dark mode is enabled or not
  const [alert,setAlert] =useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg : message ,
      type : type 
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  // const removeBodyClasses =()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  // }
  const toggleMode =(cls) =>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success");
    }
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled","success");
   }
  }

  return (
<> 
<Router>
<Navbar title = "TextEase"  mode={mode} toggleMode={toggleMode}/>
<Alert alert= {alert}/>
<div className="container my-3">
<Switch>
  {/* /users  --> component 1
  /users/home  --> component 2 */}
      <Route exact path="/about"> 
        <About  mode={mode}/>
      </Route>
      <Route exact path="/">
        <TextForm showAlert={showAlert} heading ="Enters text below to analyze" mode={mode}/>
      </Route>
</Switch> 
</div>
</Router>
</>
  );
}

export default App;
