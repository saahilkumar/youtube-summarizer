import React from 'react';
import styles from './sentiment.module.css';
import { useSpring, animated } from 'react-spring';

const Sentiment = (props) => {

    const fadeIn = useSpring ({
        from: {
            opacity: 0,
            marginTop: '500px'
        },
        to: {
            opacity: 1,
            marginTop: '50px'
        },
        delay: 1000
    });

    const smiley = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs-j8qgBCGOd2EiAXqjzr9x_oeTLxyl4Ia5g&usqp=CAU";
    const frowny = "https://images.emojiterra.com/twitter/v13.0/512px/2639.png";
    return ( 
        <animated.div style={fadeIn}>
            <h1 className={styles.h1}>Sentiment</h1>
            <label className={styles.label}><span style={{ color: props.sentiment === 'positive'? 'green' : 'red' }}>{(100*props.value).toFixed(2) + "% " + props.sentiment.toUpperCase()}</span> <img text-align="center" width="100px" src={props.sentiment === "positive" ? smiley : frowny}></img></label>
        </animated.div>
     );
}
 
export default Sentiment;