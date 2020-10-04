import React, { useState } from 'react';
import styles from './search.module.css';
import { useSpring, animated } from 'react-spring';

const SearchVid = (props) => {
    const fade = useSpring ({
        opacity: props.clickedSearch? 0 : 1
    });

    const moveUp = useSpring ({
        position: 'absolute',
        left: '545px',
        top: props.clickedSearch? '20px' : '300px',
        delay: 200
    });

    function handleChange(event) {
        props.onChangedInput(event.target.value);
    }

    return ( 
        <div className={styles.div}>
            <animated.h1 style={fade} className={styles.h1}>Youtube Summarizer</animated.h1>
            <animated.form className={styles.form} style={moveUp} autoComplete="off">
                <div>
                    <input type="url" onChange={handleChange} className={styles.input} id="searchBar" placeholder="Enter youtube link..."/>
                    <button type="button" onClick={ () => props.onClickedSearch() } className={styles.button}>Search</button>
                </div>
            </animated.form>

            {/* <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" autocomplete="off"/> Youtube Video
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option2" autocomplete="off" checked/> Text Input
                </label>
            </div> */}
        </div>
        );
};
 
export default SearchVid;