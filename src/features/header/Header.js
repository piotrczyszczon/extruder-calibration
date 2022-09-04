import React from 'react'
import styles from "./Header.module.css"


export function Header(props) {
    const {title} = props;

    return (
        <header>
            <div className={`p-5 text-center bg-image ${styles.headerBackground}`}>
                <div className={`mask h-100`}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className={`${styles.headerTitle}`}>
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}