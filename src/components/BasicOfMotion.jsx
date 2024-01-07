import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const BasicOfMotion = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (<div className='hero'>

        <div>
            <h1>Basic Motion</h1>
            <h3>Box comes when clicking the button.</h3>
        </div>

        <div>
            <motion.button className='example-button'
                onClick={() => setIsVisible(!isVisible)}>
                Click me!
            </motion.button>
            <AnimatePresence>
                {isVisible && (<motion.div
                    className='box'
                    initial={{
                        rotate: '-90deg',
                        y: '500px',
                        x: '-500px',
                        background: 'rgba(32, 32, 32, 0.7)',
                    }}
                    animate={{
                        rotate: '0deg',
                        y: 0,
                        x: 0,
                        background: 'rgba(32, 32, 32, 1)',
                    }}
                    exit={{
                        rotate: '400deg',
                        y: '500px',
                        x: '500px',
                        background: 'rgba(32, 32, 32, 0.7)',
                    }}
                    transition={{
                        duration: 1,
                        ease: 'backInOut',
                        times: [0, 0.25, 0.5, 0.85, 1],
                    }}>
                        BOX
                </motion.div>)}
            </AnimatePresence>

        </div>

    </div >);
}

export default BasicOfMotion;