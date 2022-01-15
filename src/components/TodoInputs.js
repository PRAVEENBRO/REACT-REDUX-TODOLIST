import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'
import { v1 as uuid } from 'uuid'

const TodoInputs = () => {

    const dispatch = useDispatch()
    const [name, setname] = useState()

    return (
        <div className='pt-1'>
            <h1>Todo List</h1>
            <div className='d-flex justify-content-center mx-3'>
                <Form.Control className='inputform'
                    placeholder="Add Todos..." 
                    type="text"
                    onChange={(e) => setname(e.target.value)}
                />

                <Button variant="dark" className='mx-2 addbtn' onClick={() => {
                    dispatch(addTodo(
                        {
                            id: uuid(),
                            name: name
                        }
                    ))
                    setname('');
                }}> <i class="fas fa-plus"></i> </Button>{' '}
            </div>
        </div>
    )
}

export default TodoInputs
