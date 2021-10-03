import React, { useContext, useState, useEffect, Fragment } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { DataContext } from '../context/DataContext'

export const SecondForm = () => {
    const history = useHistory();
    const [data, setData] = useContext(DataContext);
    const [secondFormData, setsecondFormData] = useState({});
    const [buttonDisabled, setbuttonDisabled] = useState(true);
    const redirectToFirstPage = () => {
        history.push('/');
    }
    useEffect(() => {
        if(!data.firstFormData){
            redirectToFirstPage();
        }
        // Push subjects count object in array
        const secondFormDataObject = {};
        for (let index = 1; index <= data.firstFormData.totalSubjects; index++) {
            secondFormDataObject[`subject${index}`] = {
                subjectName: '',
                noOfHours: ''
            }
        }
        setsecondFormData({ ...secondFormData, ...secondFormDataObject })
        console.log("Rendering component");
    }, []);

    useEffect(() => {
        // Check total no of hours
        let noOfHours = 0;
        const totalWorkingHours = data.firstFormData.noOfWorkingHours * data.firstFormData.noOfDays;
        for(const property in secondFormData){
            noOfHours += secondFormData[property].noOfHours ? Number(secondFormData[property].noOfHours) : noOfHours;
        }
        console.log("sasdasdas", data, noOfHours, totalWorkingHours)
        if(noOfHours === totalWorkingHours){
            setbuttonDisabled(false);
        } else {
            setbuttonDisabled(true);
        }
      }, [secondFormData, data]);

    const handleChangeSubject = (e) => {
        const secondFormDataUpdated = secondFormData;
        const name = e.target.name.split('_name')[0];
        secondFormDataUpdated[name].subjectName = e.target.value;
        setsecondFormData({ ...secondFormDataUpdated });
    }
    const handleChangeHours = (e) => {
        const secondFormDataUpdated = secondFormData;
        const name = e.target.name.split('_hours')[0];
        secondFormDataUpdated[name].noOfHours = e.target.value;
        setsecondFormData({ ...secondFormDataUpdated });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const numericData = {};
        for(const property in secondFormData){
            numericData[property] = {
                subjectName: secondFormData[property].subjectName,
                noOfHours: Number(secondFormData[property].noOfHours)
            };
        }
        setData({...data, secondFormData: numericData});
        history.push('/final');
    }
    
    return (
        <div>
            Second Form
            {
                secondFormData && Object.keys(secondFormData).length > 0 
                ? <Container>
                    <Form onSubmit={handleSubmit}>
                        {Object.keys(secondFormData).map((secondFormRow) => (
                            <Fragment key={secondFormRow}>
                                <Row>
                                    <p>Enter {secondFormRow} details</p>
                                    <Col>
                                        <Form.Control size="sm" placeholder="Enter subject name" name={secondFormRow+"_name"} onChange={handleChangeSubject} value={secondFormData[secondFormRow].subjectName} required={true}/>
                                    </Col>
                                    <Col>
                                        <Form.Control size="sm" type="number" min="0" max="10" name={secondFormRow+"_hours"} onChange={handleChangeHours} value={secondFormData[secondFormRow].noOfHours} placeholder="Enter total no of working hour" required={true}/>
                                    </Col>
                                </Row>
                                <br/>
                            </Fragment>
                        ))}
                        <Button variant="primary" type="submit" disabled={buttonDisabled}>
                            Submit
                        </Button>
                    </Form>
                  </Container> 
                : <p>No Data</p>
            }
        </div>
    )
};