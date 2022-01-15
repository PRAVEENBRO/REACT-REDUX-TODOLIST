import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions'

const TodoItems = ({ todo, inx }) => {
    const id = inx + 1
    let dispatch = useDispatch();
    const [editable, seteditable] = useState(false)
    const [name, setname] = useState()
    return (


        <div className='App my-3 border'>
            <Row className='d-flex  mx-3'>

                <Col className='col-md-1 col-xs-1'><h5>{id}</h5></Col>

                <Col className='col-md-6 col-xs-6'>
                    {editable ? <Form.Control
                        placeholder={todo.name} style={{ width: "25ch" }}
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    /> : <h5>{todo.name}</h5>}
                </Col>

                <Col className='d-flex justify-content-center mx-3 col-md-4 col-xs-4'>

                    <Button variant="" className='mx-1 Edit-btn' onClick={() => {

                        dispatch(updateTodo({
                            ...todo,
                            name: name
                        }))
                        if (editable) {
                            setname(todo.name);
                        }
                        seteditable(!editable);
                    }}
                    > {editable ? <i class="far fa-bookmark"></i> : <i class="far fa-edit"></i>} </Button>{' '}

                    <Button variant="danger" className='mx-1 Del-btn' onClick={() => dispatch(deleteTodo(todo.id))}>  <i class="far fa-trash-alt"></i> </Button>{' '}
                </Col>
            </Row>
        </div>

    )
}

export default TodoItems
