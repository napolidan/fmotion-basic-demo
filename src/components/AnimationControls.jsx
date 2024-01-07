import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const AnimationControls = () => {

    const controls = useAnimationControls();

    const handleClick = () => {
        // Do some thing...
        controls.start("flip");
    };

    return (<div className='hero'>
        <div>
            <h1>Animation Controls</h1>
            <motion.h3
                variants={{
                    initial: {
                        rotate: '0deg',
                    },
                    flip: {
                        rotate: '180deg',
                    },
                }}
                initial="initial"
                animate={controls}
                transition={{
                    duration: 1,
                    ease: 'backInOut',
                }}
            >This button affects multiple elements...
            </motion.h3>
            <motion.h3
                variants={{
                    initial: {
                        rotate: '180deg',
                    },
                    flip: {
                        rotate: '0deg',
                    },
                }}
                initial="initial"
                animate={controls}
                transition={{
                    duration: 1,
                    ease: 'backInOut',
                }}
            >...just once.
            </motion.h3>
        </div>
        <div>
            <button
                onClick={handleClick}
                className='example-button'
            >Flip it!</button>
            <motion.div
                variants={{
                    initial: {
                        rotate: '0deg',
                    },
                    flip: {
                        rotate: '450deg',
                    },
                }}
                initial="initial"
                animate={controls}
                transition={{
                    duration: 2,
                    ease: 'backInOut',
                }}
                className='box'
            >
                BOX
            </motion.div>
        </div>

    </div>);
}

export default AnimationControls;