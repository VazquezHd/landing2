"use client"

import {motion} from 'framer-motion'

interface MotionTransitionProps{
    children: React.ReactNode
}

const MotionTransition = (props) => {
    const{children} = props
    return ( 
        <motion.div>
            {children}
        </motion.div>
     );
}
 
export default MotionTransition;