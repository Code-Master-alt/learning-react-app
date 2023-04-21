
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import  React ,{useState} from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Main,Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('dark'); //weather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    
setTimeout(() => {
  setAlert(null);
}, 1000);  }
  const toggleMode = ()=>{
    if(mode ==='light')
   {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Light Mode Has Been Enabled","success"); 
    document.title='Textutils - Dark Mode';
   }
   else
   {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has Been Enabled","success");
    document.title='Textutils - Light Mode';
   }
   
  }
  return (
    <>
    {/* <Main> */}
<Navbar title="TextUtils27" mode={mode}  toggleMode={toggleMode}   about="about"/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes> */}
<TextForm showAlert={showAlert} heading="Enter the text to analyse"mode={mode} />
  {/* <About/> */}
{/* </Routes> */}
 

        
</div>
        

{/* </Main> */}
    </>
  );
}

export default App;
