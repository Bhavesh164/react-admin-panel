import { Button, Modal, Form } from "react-bootstrap"
import { useRef } from "react"
import { useBudgets } from "../Contexts/BudgetContexts"
const AddBudgetModel = ({show,handleClose}) => {
    const nameRef=useRef()
    const maxRef=useRef()
    const { addBudget }= useBudgets()
    function handleSubmit(e) {
        e.preventDefault()
        addBudget(
            {
                name: nameRef.current.value,
                max: parseFloat(maxRef.current.value),

            }
        )
        handleClose()
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.header closeButton>
                    <Modal.title>New Budget</Modal.title>
                </Modal.header>
                <Modal.Body>
                    <Form.Group ControlID="name" className="mb-3">
                        <Form.label>Name</Form.label>
                        <Form.Control ref={nameRef} type="text" required/>
                    </Form.Group>
                    <Form.Group ControlID="max" className="mb-3">
                        <Form.label>Max Spending</Form.label>
                        <Form.Control ref={maxRef} type="number" required min={0} step={.01}/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Add</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}

export default AddBudgetModel
