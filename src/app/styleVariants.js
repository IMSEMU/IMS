import {FaExclamationTriangle} from "react-icons/fa";

export const show = {
    initial: {
        opacity: 0,
        x:20,
        y:60,
    },
    animate: {
        opacity:1,
        y:80,
        x:20,
        transition: {
            duration:0.5,
            type:"spring",
            bounce:0.15
        }
    },
    exit:{
        opacity: 0,
        x:20,
        y:60,
    }
}

export const bounce = {
    initial:{
        y:0
    },
    animate:{
        y:[-30,0,30,0,-30,0,30,0,-30],
        transition: {
            duration: 1.5,
            repeat:"mirror",
        }
    }
}