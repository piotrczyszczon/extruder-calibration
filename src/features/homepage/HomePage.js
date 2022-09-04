import React from 'react'
import { useSelector } from 'react-redux'
import {Calculator} from "features/calculator/Calculator";
import {Header} from "features/header/Header";
import {Description} from "features/description/Description";


export function HomePage() {
    const title = useSelector((state) => state.homepage.title)

    return (
        <div>
            <Header title={title}/>
            <Calculator />
            <Description />
        </div>
    )
}