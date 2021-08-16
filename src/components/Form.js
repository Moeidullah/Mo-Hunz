import React, {useState} from 'react'
import { addTodo } from '../actions/actionCreator'
import ButtonComp from './ButtonComp'
import InputField from './InputField'
import ShowItems from './ShowItems'


function Form() {
    const [task, setTask] = useState('')
    // console.log(task)
    
    const initialState = []
    const [list, setList] = useState(initialState)

    function addingList() {
        let li=[...list]
        li.push(task)
        setList(li)
        // console.log("list",li)

        
    }
    
    return (
        <div>
            
            <div  style={{display: "flex", justifyContent: "center" , marginTop: "5rem" }}>


            <InputField task={task} setTask={setTask}/>
            <ButtonComp clickHandler={addingList} />
            
            </div>
            <div>
            <ShowItems list={list}/>
            </div>

        </div>
    )
}

export default Form
