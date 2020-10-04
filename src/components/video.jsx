import React, { Component } from 'react';
import ReactPlayer from "react-player";
import styles from './video.module.css';
import { useSpring, animated } from 'react-spring';


const VideoInfo = (props) => {
    const fadeIn = useSpring ({
        from: {
            opacity: 0,
            marginTop: '500px'
            // marginLeft: '550px'
        },
        to: {
            opacity: 1,
            marginTop: '-300px'
            // marginLeft: '550px'
        },
        delay: 400
    });


    return (
        <animated.div className={styles.div} style={fadeIn}>
            <ReactPlayer url={props.videoLink} controls={true} className={styles.vid_player}/>
        </animated.div>
    );
}
 
export default VideoInfo;