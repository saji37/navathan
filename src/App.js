
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
   animate={{scale:0.5, x:'10px',y:'-60px'}}
   transition={{delay:1}}
   
   > 
      <Spaceguy />
      </motion.div>


   </div>

   </div>
  );
}

export default App;
