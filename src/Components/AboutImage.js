import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const AboutDiv = styled.div`
    width: 50%;
`

export default function AboutImage(props) {
    return (
        <AboutDiv>
            <h4>{props.picture.title}</h4>
            <h6>Date: {props.picture.date}</h6>
            <p><strong>Description: </strong>{props.picture.explanation}</p>
            <Form>
                <FormGroup>
                    <Label>Choose Another Date: </Label>
                    <Input
                        type='date'
                        name='time'
                        id='exampleTime'
                        placeholder='time placeholder'
                    />                    
                </FormGroup>
            </Form>
        </AboutDiv>
    )
}