import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import { useSpring, animated } from 'react-spring';
import styles from './radio-buttons.module.css';

const RadioButtonGroup = (props) => {

    const fade = useSpring ({
        opacity: props.clickedSearch? 0 : 1
    });

    function handleChange(newVal) {
        props.onRadioButtonChange(newVal);
    }

    return (   
        <animated.div style={fade} className={styles.div}>      
            <RadioGroup onChange={handleChange} value='' horizontal>
                <RadioButton rootColor='#999999' pointColor='red' iconSize={20} iconInnerSize={10} value="Youtube">
                    Youtube
                </RadioButton>
                <RadioButton rootColor='#999999' pointColor='red' iconSize={20} iconInnerSize={10} value="Text">
                    Text
                </RadioButton>
            </RadioGroup> 
        </animated.div>
    );
}
 
export default RadioButtonGroup;