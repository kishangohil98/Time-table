import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { DataContext } from '../context/DataContext'
import { useHistory } from "react-router-dom";

export const FirstForm = () => {
    const history = useHistory();
    const [data, setData] = useContext(DataContext);
    const [formData, setFormData] = useState({
        noOfDays: '',
        noOfWorkingHours: '',
        totalSubjects: '',
        noOfSubjectsPerDay: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        // If first form data found then redirecting to `/second` page
        if(data && data.firstFormData){
            history.push('/second'); 
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const numericData = {};
        for(let property in formData){
            numericData[property] = Number(formData[property]);
        }
        setData({...data, firstFormData: numericData});
        history.push('/second')
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>No of days</Form.Label>
                    <Form.Control type="number" min="0" max="10" onChange={handleChange} value={formData.noOfDays} name="noOfDays" placeholder="Enter no of days" required={true}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>No of working hours per</Form.Label>
                    <Form.Control type="number" min="0" max="10" onChange={handleChange} value={formData.noOfWorkingHours} name="noOfWorkingHours" placeholder="Enter No of working hours per" required={true}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Total Subjects</Form.Label>
                    <Form.Control type="number" min="0" max="10" onChange={handleChange} value={formData.totalSubjects} name="totalSubjects" placeholder="Enter Total Subjects" required={true} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>No of subjects per day</Form.Label>
                    <Form.Control type="number" min="0" max="10" onChange={handleChange} value={formData.noOfSubjectsPerDay} name="noOfSubjectsPerDay" placeholder="Enter No of subjects per day" required={true} />
                </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
    )
};
