import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import TodoItems from './TodoItems'

const TodoList = () => {

    let todos = useSelector(state => state)
    console.log(todos)
    return (
        < >
            <Container className='my-5'>
                {
                    todos.map((todo, inx) => {
                        return <TodoItems key={inx} todo={todo} inx={inx} />

                    })
                }


            </Container>
        </>
    )
}

export default TodoList
