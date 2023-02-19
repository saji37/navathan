
import './App.css';
import { motion } from "framer-motion";
import Welcome from './Welcome';
import Spaceguy from './Spaceguy';
 import Count from "./Count";
 import './Welcome.css'
import Guests from './Guests';
function App() {
  return (
   <div>
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
    transition={{type:"waves",duration:2.5,delay:3}}
    >
      <h1 className='event' style={{color:'white'}}>Event starts in  </h1>
    </motion.div>
   <motion.div
    initial={{ x: "-60px", y:"5px" ,opacity: 0,scale:1.4}}
    animate={{ x: 10, opacity: 1 }}
    transition={{type:"waves",duration:2.5,delay:3}}
    >
    <div className='count' style={{color:'white'}}>  <Count /></div>
    </motion.div>
    </div>
   </div>
   <Guests />
   </div>
  );
}

export default App;
