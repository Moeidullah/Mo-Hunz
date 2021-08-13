import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'

import InputField from './InputField'

function ButtonComp(){

    
    return (
        <div className="wrap">
            <div className="item">

                 <button  className="btn">Add</button>
                                 
            </div>
        </div>
    );
};

export default ButtonComp
