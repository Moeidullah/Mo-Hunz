import React, {useState} from 'react'
import ButtonComp from './ButtonComp'
import InputField from './InputField'

function Form() {
    const [task, setTask] = useState('')
    // console.log(task)
    
    return (
        <div>
            <form>
            <div  style={{display: "flex", justifyContent: "center" , marginTop: "5rem" }}>


            <InputField task={task} setTask={setTask}/>
            <ButtonComp />
            </div>
            </form>
        </div>
    )
}

export default Form
