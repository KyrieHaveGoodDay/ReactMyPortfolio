import { Routes,Route } from 'react-router-dom';
import './style.scss';
import Page from './Page';
import Index from './Index';
import Web from './web';
import Portfolio from './portfolio';
import About from './About';


function App() {
  

 


  return (
    <>
    
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Page" element={<Page />}>
          <Route index element={<Portfolio/>}></Route>
          <Route path='web' element={<Web/>}></Route>
          <Route path='About' element={<About/>}></Route>
        </Route>
        
      </Routes>
      

    </>
  )
}

export default App
