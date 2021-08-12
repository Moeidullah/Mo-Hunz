import React from 'react'

function InputField() {
    return (
        <div className="main-body">
            <div className="wrapper">
                <div className="input-data">
                    <input type="text" required/>
                    <div className="underline">

                    </div>
                    <label>Add Your Task</label>
                </div>
            </div>
        </div>
    )
}

export default InputField
