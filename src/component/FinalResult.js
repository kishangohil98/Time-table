import React, { useContext, useState, useEffect, Fragment } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { DataContext } from '../context/DataContext'

export const FinalResult = () => {
    const history = useHistory();
    const [data, setData] = useContext(DataContext);
    const [secondFormData, setsecondFormData] = useState({});
    const [buttonDisabled, setbuttonDisabled] = useState(true);

    const redirectToFirstPage = () => {
        history.push('/');
    }

    useEffect(() => {
        if(!data.firstFormData || !data.secondFormData){
            console.log("asfasfa")
            redirectToFirstPage();
        }
    }, []);


    return (
        <>
            <p>Final result</p>
            {console.log("Final_data", data)}
        </>
    )
}
