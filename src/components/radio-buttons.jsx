import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import { useSpring, animated } from 'react-spring';

const RadioButtonGroup = (props) => {

    const fade = useSpring ({
        opacity: props.clickedSearch? 0 : 1
    });

    function handleChange(newVal) {
        props.onRadioButtonChange(newVal);
    }

    return (   
        <animated.div style={fade}>      
            <RadioGroup onChange={handleChange} horizontal>
                <RadioButton pointColor='red' iconSize={20} iconInnerSize={10} value="Youtube">
                    Youtube
                </RadioButton>
                <RadioButton pointColor='red' iconSize={20} iconInnerSize={10} value="Text">
                    Text
                </RadioButton>
            </RadioGroup> 
        </animated.div>
    );
}
 
export default RadioButtonGroup;