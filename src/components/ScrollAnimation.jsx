import { useScroll, useSpring, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import React from 'react';

const ScrollAnimations = () => {

    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress);

    const background = useTransform(scrollYProgress,
        [0, 0.75, 1],
        ["rgb(1, 255, 245)", "rgb(30, 255, 245)", "rgb(100, 64, 255)"]);

    const color = useTransform(scrollYProgress,
        [0, 0.80, 1],
        ["rgb(32, 32, 32)", "rgb(32, 32, 32)", "rgb(255, 255, 255)"]);

    return (
        <div className='extra'>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    // scaleX,
                    transformOrigin: 'left',
                    // background: 'blue',
                    background,
                    position: 'sticky',
                    top: 0,
                    width: '100%',
                    height: '40px',
                }}
            >
            </motion.div>
            <div>
                <h1>Scroll Based Animation</h1>
                <h3>Some content changes while scrolling through the page.</h3>
            </div>
            <motion.h3 className='sticky'
                style={{
                    color
                }}
            >Keep scrolling down...</motion.h3>
            <div>
            </div>
            <div className="end">
                <h3 className='box'>End of demo</h3>
            </div>
        </div>
    );
}

export default ScrollAnimations;