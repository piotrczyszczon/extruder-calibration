import React from 'react'
import styles from './Description.module.css'
import Row from 'react-bootstrap/Row'

export function Description() {

    return (
        <Row>
            <div className={`col-sm-3`}></div>
            <p className={`col-sm-7 text-muted ${styles.descriptionField}`}>
                <h1>Calibration instructions</h1>
                <ul className="list-unstyled">
                    <li>1. Read current E-Step number [Menu -> Control -> Motion -> Steps/mm -> ESteps/mm]</li>
                    <li>2. Extrude 100mm of filament </li>
                    <li>3. Measure the actual length of extruded filament</li>
                    <li>4. Put values into equation</li>
                    <li>5. Update E-Step value with calculation result</li>
                </ul>
            </p>
            <div className={`col-sm-2`}></div>
        </Row>
    )
}