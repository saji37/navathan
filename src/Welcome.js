import React from 'react'
import { motion } from 'framer-motion'
import './Welcome.css'
function Welcome() {
  return (
    <div>
    <motion.div
    initial={{ x: "-1000px", opacity: 0 }}
    animate={{ x: 0, opacity: 10 }}
    transition={{type:"spring"}}
    // exit={{ y: '-1000px', opacity: 0 }}
  >
    <div className='greeting'>
      <h1 className='welcome'>WELCOME TO </h1>

    </div>
    </motion.div>

<motion.div
initial={{ x: "1000px", opacity: 0 }}
animate={{ x: 0, opacity: 10 }}
transition={{type:"spring"}}
onDurationChange={2}
// exit={{ y: '-1000px', opacity: 0 }}
>
<div className='greeting'>
  <h1 className=''> NAVATHAN</h1>

</div>
</motion.div>
</div>
  )
}

export default Welcome
