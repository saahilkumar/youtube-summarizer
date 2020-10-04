import React, { Component } from 'react';
import styles from './summary.module.css';
import { useSpring, animated } from 'react-spring';

const Summary = (props) => {
    const fadeIn = useSpring ({
        from: {
            opacity: 0,
            marginTop: '500px'
        },
        to: {
            opacity: 1,
            marginTop: '50px'
        },
        delay: props.version === 1 ? 600 : 800
    });

    const summaryLabel = props.version === 1 ? "One" : "Two";
    return ( 
        <animated.div style={fadeIn} className={props.version === 1 ? "" : styles.div_two}>
            <h1 className={styles.h1}>Summary {summaryLabel}</h1>
            <label className={styles.label}>{props.summary}</label>
        </animated.div>
     );
};
 
export default Summary;