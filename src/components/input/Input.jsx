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
    <form onSubmit={handelSubmit} style={{backgroundColor:"#f4f4f4", textAlign:"center", borderRadius:"10px"}}>
        <input style={{margin:" 12px 12px 12px 0",padding:" 2px",
    border:" 3px solid #eeeeee",borderRadius:"3px"}} type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button style={{padding:" 2px",
    backgroundColor:"rgb(191 190 190)",borderRadius:"5px"}} type='submit'>Add</button>
    </form>
  )
}

export default Input