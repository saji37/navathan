
import './App.css';
import pic from './pic.jpg'
import { motion } from "framer-motion";
function App() {
  return (
    <div className="container">
    <div className="row">
     
      <div className="col-12 mt-5 d-flex justify-content-center">
        <div className="box">
          <div className="box-body">
          <motion.div
                animate={{ x: [50, 150, 50], opacity: 1, scale: 2,x:20, y:300 ,zIndex:10}}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 ,zIndex:-1}}
                // whileHover={{ scale: 3 , y: 200}}
            >
            <img className="img" src={pic} width='150px'/>

            </motion.div>
            <div className="box-lid">
              
              <div className="box-bowtie"></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
