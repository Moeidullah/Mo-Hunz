import React from 'react'



const ShowItems=(props)=> {
    const deleteItems = (id)=>{
        const updatedItems = items.filter((elem,index)=>{
            return index !== id;
        })
    }
    
    return (
        <div>
            {
                props.list.map((elem,index)=>{
                    return <div key={index}>
                        {elem}
                        <button onClick={()=>deleteItems(index)}>Del</button>
                    </div>
                })
            }
        </div>
    )
}

export default ShowItems
