import React, { useEffect } from "react"
import Header from "./header"
import Content from "./content"
import { setUserLocalStorage } from "../storageAPI/api"
import Progress from "./progress"

function App() {
    useEffect(() => {
        setUserLocalStorage()
    }, [])
    return (
        <div className="container">
            <Progress skillName={"ivan"} color={"blue"} type={"bar"} percents={75} />
            <Header />
            <Content />
        </div>
    )
}

export default App
