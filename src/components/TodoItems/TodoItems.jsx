import React from "react";
import {useDispatch} from "react-redux" 
import { setCheck } from "../../features/TodoSlice";
const TodoItems = ({title,done,id}) => {
    const dispatch=useDispatch()
const handelChange=()=>{
    dispatch(setCheck(id))
}
  return (
    <div style={{margin:"10px 0",borderRadius:"4px",width:"216px",backgroundColor:"#eeeeee"}}>
      <input type='checkbox'  id={id} checked={done} onChange={handelChange}  />
      <label htmlFor={id} >{title} </label>
      
    </div>
  );
};

export default TodoItems;
