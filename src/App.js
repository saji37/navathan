
import './App.css';
import { motion } from "framer-motion";
import Welcome from './Welcome';
import Spaceguy from './Spaceguy';
function App() {
  return (
   <div>
    <div className="bg"></div>

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
   
   </div>
  );
}

export default App;
