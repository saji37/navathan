
import './App.css';
import { motion } from "framer-motion";
import Welcome from './Welcome';
import Spaceguy from './Spaceguy';
 import Count from "./Count";
 import './Welcome.css'
import Guests from './Guests';
import { useState } from 'react';
import './loading.scss'
function App() {
  const [isloading,setIsLoading]=useState(true)
  setTimeout(()=>{
    setIsLoading(false)
  },4000)
  return (
  
   <div>{
    isloading?
    <div className="cont">
  <div className="spinner"></div>
  <span className="number"></span>
</div>
    :

    <>
    <div className="bg"></div>
   <div>

<div className="star-field">

<div className="layer"></div>
<div className="layer"></div>
<div className="layer"></div>
   
   </div>
   <div style={{display:'flex'}}>
        
   <Welcome /> 
   <motion.div
   initial={{scale:0.2, x:'-20px',y:'-80px',opacity:0.4}}
   transition={{delay:1}}
   
   > 
      <Spaceguy />
      </motion.div>

</div>
<div className="App">
<motion.div
    initial={{ x: "-60px", y:"5px" ,opacity: 0,scale:1}}
    animate={{ x: 10, opacity: 1 }}
    transition={{duration:2.5,delay:3}}
    >
      <h1 className='event' style={{color:'white'}}>Event starts in  </h1>
    </motion.div>
   <motion.div
    initial={{ x: "-60px", y:"5px" ,opacity: 0,scale:1.4}}
    animate={{ x: 10, opacity: 1 }}
    transition={{duration:1,delay:4}}
    >
    <div className='count' style={{color:'white'}}>  <Count /></div>
    </motion.div>
    </div>
   </div>
   <motion.div
    initial={{y:30,x:10,opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{duration:2.5,delay:4.5}}
    >
      <h1 className='event' style={{color:'white'}}>Honarable Guests  </h1>
    </motion.div>
    <motion.div
    initial={{y:-20,opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{duration:2.5,delay:4.5}}
    >
     <Guests />
    </motion.div>
      
   
   
   </>}
   </div>
  );
}

export default App;
