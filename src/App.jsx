import React from 'react'
import Input from './components/input/Input'
import TodoItems from './components/TodoItems/TodoItems'
import {useSelector} from "react-redux"
import { Box, Container } from '@chakra-ui/react'
const App = () => {
  //hadi dakhlek l stor bah jib bayanat men lidiclarithom fih
  const todolist=useSelector((state)=>state.todos.todoList)
  // console.log(todolist);
  
  return (
    <Container justifyItems="center" w="600px">
  <Box m="auto"  >
    <Box >
{todolist.map((todo)=>(
  <TodoItems key={todo.id} title={todo.title} done={todo.done} id={todo.id}/>
))}
    </Box>   
       <Input/>
  </Box>
    </Container>
  )
}

export default App
