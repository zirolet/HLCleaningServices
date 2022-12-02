import './App.css';
import Top from './Top'
import Clean from './Clean'
import Info from './Info'
import Contact from './Contact.js'
import Area from './Area'
import TopM from './TopM'
import CleanM from './CleanM'
import InfoM from './InfoM'
import AreaM from './AreaM'
import ContactM from './ContactM'
import {useState, useEffect} from 'react'

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 800;
  
  if (!isMobile){
    return (
      <div className="App">
        <header className="App-header">
            <Top/>
            <Clean/>
            <Info/>
            <Area/>
            <Contact/>
        </header>
      </div>
    );
  }
  else{
    return(
      <div className="App">
        <TopM/>
        <CleanM/>
        <InfoM/>
        <AreaM/>
        <ContactM/>
      </div>
    )
  }
}

export default App;
