import React from "react"
import { useState } from "react"
import "./DramaInfo.css"

const DramaInfo = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [information, setInformation] = useState("")  

    const onChangeTitle = (event) =>{
    setTitle(event.target.value);
    }
    const onChangeYear = (event) =>{
    setYear(event.target.value);
    }
    const onChangeIntro = (event) =>{
    setInformation(event.target.value);
    }

    return(
        <div className="Show">
        <h2> {title} </h2>
        <p> {year} </p>
        <p> {information} </p>
      </div>
    )
}

export {DramaInfo};