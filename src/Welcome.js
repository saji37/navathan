import React from 'react'
import { motion } from 'framer-motion'
import './Welcome.css'
function Welcome() {
  return (
    <div>
    <motion.div
    initial={{ x: "-50px", y:"5px" ,opacity: 0 }}
    animate={{ x: 10, opacity: 1 }}
    transition={{type:"waves",duration:3}}
    // exit={{ y: '-1000px', opacity: 0 }}
  >
    <div className='greeting'>
     <center><h1 style={{fontSize:'30px'}}>WELCOME TO </h1></center> 

    </div>
    </motion.div>

<motion.div
initial={{ x: "10px",y:"5px", opacity: 0 }}
animate={{ x: '-20px',y:'-30px', opacity: 1 }}
transition={{type:"waves",delay:2,duration:2}}

// exit={{ y: '-1000px', opacity: 0 }}
>
<div className='greeting'>
  <h1 className='nav'>NAVATHAN</h1>

</div>
</motion.div>


<motion.div
initial={{ x:150,y:-40, opacity: 0 }}
animate={{ opacity: 1 }}
transition={{type:"spring",delay:3,duration:1}}

// exit={{ y: '-1000px', opacity: 0 }}
>

  <h1 className='era'>Era of new game</h1>


</motion.div>


<motion.div
initial={{ x:150,y:-40, opacity: 0,scale:0 }}
animate={{ opacity: 1,scale:1 }}
transition={{type:"spring",delay:4,duration:1}}

// exit={{ y: '-1000px', opacity: 0 }}
>

 <h1 className='venue'>Venue:APJ
  Date:23/02/2023</h1>


</motion.div>
</div>
  )
}

export default Welcome
