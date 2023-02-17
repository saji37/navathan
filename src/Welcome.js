import React from 'react'
import { motion } from 'framer-motion'
import './Welcome.css'
function Welcome() {
  return (
    <div>
    <motion.div
    initial={{ x: "-1000px", opacity: 10 }}
    animate={{ x: 10, opacity: 20 }}
    transition={{type:"waves",delay:1,duration:1}}
    // exit={{ y: '-1000px', opacity: 0 }}
  >
    <div className='greeting'>
     <center><h1 className='welcome'>WELCOME TO </h1></center> 

    </div>
    </motion.div>

<motion.div
initial={{ y: "1000px", opacity: 10 }}
animate={{ y: 10, opacity: 20 }}
transition={{type:"waves",delay:3,duration:1}}

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
