import React from 'react';
import { motion, MotionConfig } from "framer-motion"

const Gestures = () => {
    return (<div className='hero'>
        <div>
            <h1>
                Gestures
            </h1>
            <h3>
                Variants for each animation.
            </h3>
        </div>
        <div>
            <MotionConfig
                transition={{
                    duration: 0.125,
                    ease: 'easeInOut',
                }}>
                <motion.button
                    whileHover={{ scale: 1.05, }}
                    whileTap={{ scale: 0.95, rotate: '2.5deg', boxShadow: "0px 0px 0px 5px rgba(119,97,255) inset"}}
                    className="example-button">
                    Try me!
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05, }}
                    whileTap={{ scale: 0.95, rotate: '-2.5deg', boxShadow: "0px 0px 15px 2px rgba(0,78,82,0.3)"}}
                    className="example-button">
                    Try me!
                </motion.button>
            </MotionConfig>
        </div>
    </div>);
}

export default Gestures;