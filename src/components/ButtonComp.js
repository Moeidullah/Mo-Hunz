import React from 'react'


import InputField from './InputField'

const ButtonComp= (props) => {
    
    return (
        <div className="wrap">
            <div className="item">

                 <button  className="btn" onClick={props.clickHandler}>Add</button>
                    
            </div>
        </div>
    );
};

export default ButtonComp
