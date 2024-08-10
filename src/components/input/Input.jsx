import React, { useState } from 'react'
import {useDispatch} from "react-redux" 

import { saveTodo } from '../../features/TodoSlice'
const Input = () => {
    const [input,setInput]=useState("")
    const dispatch=useDispatch()
    const handelSubmit=(e)=>{
       e.preventDefault()
       if (input) {
        dispatch(saveTodo(
           {id:Date.now(),
            title:input,
            done:false
           }
        ))
        setInput("")
        return;
       }else{
        alert("please add some todos")
        return;
       }
    }

  return (
    <form onSubmit={handelSubmit}>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default Input