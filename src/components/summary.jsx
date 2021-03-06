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
            marginTop: props.inputType === 'Text' && props.version === 1 ? '-300%' : '50%'
        },
        delay: props.version === 1 ? 600 : 800
    });

    const summaryLabel = props.version === 1 ? "One" : "Two";
    return ( 
        <animated.div style={fadeIn}>
            <h1 className={styles.h1}>Summary {summaryLabel}</h1>
            <label className={styles.label}>{props.summary}</label>
        </animated.div>
     );
};
 
export default Summary;