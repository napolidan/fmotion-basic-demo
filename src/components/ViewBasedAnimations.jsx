import React from 'react';
import { motion, useInView } from "framer-motion"
import { useRef } from 'react';
import { useEffect } from 'react';

const ViewBasedAnimations = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        console.log(isInView);
    }, [isInView])

    return (<>
        <div className='hero'>
            <div>
                <h1>View Based Animation</h1>
                <h3>Things can change when they are present on the viewport.</h3>
            </div>
            <div>
                <motion.div
                    className='box'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    BOX
                </motion.div>
                <div
                    className='box special'
                    ref={ref}
                    style={{
                        background: isInView ? 'white' : 'rgb(32, 32, 32)',
                        transition: '10s background',
                    }}
                >
                    BOX
                </div>
            </div>
        </div>

    </>);
}

export default ViewBasedAnimations;