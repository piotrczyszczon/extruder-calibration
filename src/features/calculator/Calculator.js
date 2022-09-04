import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {currentEStepNumberChanged, measuredLengthChanged} from "./calculatorSlice";
import styles from './Calculator.module.css'

export function Calculator() {
    const measuredLength = useSelector((state) => state.calculator.measuredLength)
    const currentEStepNumber = useSelector((state) => state.calculator.currentEStepNumber)
    const newEStepNumber = useSelector((state) => state.calculator.newEStepNumber)
    const dispatch = useDispatch()

    return (
        <div>
            <Row>
                <div className={`col-sm-4`}></div>
                <div className="col-sm-4">
                    <InputGroup className={`${styles.formulaFieldGroup}`}>
                        <FloatingLabel
                            controlId="measuredLength"
                            label="Measured Length [mm]"
                            className={`${styles.formulaInputField}`}>
                            <Form.Control
                                value={`${measuredLength}`}
                                type="text"
                                placeholder="Measured Length [mm]"
                                onChange={(event) => dispatch(measuredLengthChanged(event.target.value))}
                            />
                        </FloatingLabel>
                    </InputGroup>
                    <InputGroup className={`${styles.formulaFieldGroup}`}>
                        <FloatingLabel
                            controlId="currentEStepNumber"
                            label="Current E-Step number"
                            className={`${styles.formulaInputField}`}>
                            <Form.Control
                                value={`${currentEStepNumber}`}
                                type="text"
                                placeholder="Current E-Step number"
                                onChange={(event) => dispatch(currentEStepNumberChanged(event.target.value))}
                            />
                        </FloatingLabel>
                    </InputGroup>
                    <InputGroup className={`${styles.formulaFieldGroup}`}>
                        <FloatingLabel
                            controlId="newEStepNumber"
                            label="New E-Step number"
                            className={`${styles.formulaInputField}`}>
                            <Form.Control
                                value={`${newEStepNumber}`}
                                type="text"
                                placeholder="New E-Step number"
                                disabled={true}
                            />
                        </FloatingLabel>
                    </InputGroup>
                </div>
                <div className={`col-sm-4`}></div>
            </Row>
        </div>
    )
}