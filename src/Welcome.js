import React from 'react'
import { motion } from 'framer-motion'
import './Welcome.css'
function Welcome() {
  return (
    <div>
    <motion.div
    initial={{ x: "-50px", opacity: 10 }}
    animate={{ x: 10, opacity: 20 }}
<<<<<<< Updated upstream
    transition={{type:"waves",delay:1,duration:1}}
=======
    transition={{type:"waves",delay:1,duration:3}}
>>>>>>> Stashed changes
    // exit={{ y: '-1000px', opacity: 0 }}
  >
    <div className='greeting'>
     <center><h1 style={{fontSize:'40px'}}>WELCOME TO </h1></center> 

    </div>
    </motion.div>

<motion.div
<<<<<<< Updated upstream
initial={{ y: "1000px", opacity: 10 }}
animate={{ y: 10, opacity: 20 }}
transition={{type:"waves",delay:3,duration:1}}
=======
initial={{ x: "10px", opacity: 10 }}
animate={{ x: '-20px',y:'-30px', opacity: 20 }}
transition={{type:"waves",delay:3}}
>>>>>>> Stashed changes

// exit={{ y: '-1000px', opacity: 0 }}
>
<div className='greeting'>
  <h1 className='nav'>NAVATHAN</h1>

</div>
</motion.div>
</div>
  )
}

export default Welcome
